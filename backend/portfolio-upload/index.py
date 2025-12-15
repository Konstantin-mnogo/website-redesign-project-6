import json
import os
import base64
import uuid
import boto3
import psycopg2
import requests
import time
from typing import Dict, Any, Optional

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Загрузка и стилизация фото портфолио через Kandinsky (Яндекс)
    Принимает base64 изображение, категорию, применяет ИИ-фильтр
    Сохраняет оригинал и стилизованное фото в S3, метаданные в БД
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    # GET - получить все фото или по категории
    if method == 'GET':
        category = event.get('queryStringParameters', {}).get('category')
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        
        if category:
            cur.execute(
                "SELECT id, category, original_url, styled_url, title, description, is_processed, created_at FROM portfolio_photos WHERE category = %s ORDER BY created_at DESC",
                (category,)
            )
        else:
            cur.execute(
                "SELECT id, category, original_url, styled_url, title, description, is_processed, created_at FROM portfolio_photos ORDER BY created_at DESC"
            )
        
        rows = cur.fetchall()
        photos = []
        for row in rows:
            photos.append({
                'id': row[0],
                'category': row[1],
                'original_url': row[2],
                'styled_url': row[3],
                'title': row[4],
                'description': row[5],
                'is_processed': row[6],
                'created_at': row[7].isoformat() if row[7] else None
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'photos': photos}),
            'isBase64Encoded': False
        }
    
    # POST - загрузить и стилизовать новое фото
    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        image_base64 = body.get('image')
        category = body.get('category', 'general')
        title = body.get('title', '')
        description = body.get('description', '')
        style_prompt = body.get('style_prompt', 'professional portfolio style, clean, modern, consistent lighting and color grading')
        
        if not image_base64:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Image required'}),
                'isBase64Encoded': False
            }
        
        # Загрузить оригинал в S3
        s3 = boto3.client(
            's3',
            endpoint_url='https://bucket.poehali.dev',
            aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
        )
        
        file_id = str(uuid.uuid4())
        original_key = f'portfolio/original/{category}/{file_id}.jpg'
        
        image_data = base64.b64decode(image_base64)
        s3.put_object(
            Bucket='files',
            Key=original_key,
            Body=image_data,
            ContentType='image/jpeg'
        )
        
        original_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{original_key}"
        
        # Сохранить в БД (пока без стилизации)
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO portfolio_photos (category, original_url, title, description, is_processed) VALUES (%s, %s, %s, %s, %s) RETURNING id",
            (category, original_url, title, description, False)
        )
        photo_id = cur.fetchone()[0]
        conn.commit()
        
        # Стилизация через Kandinsky (Яндекс)
        try:
            api_key = os.environ.get('YANDEX_API_KEY')
            folder_id = os.environ.get('YANDEX_FOLDER_ID')
            
            if not api_key or not folder_id:
                raise Exception('YANDEX_API_KEY or YANDEX_FOLDER_ID not configured')
            
            # Генерация через Kandinsky
            headers = {
                'Authorization': f'Api-Key {api_key}',
                'Content-Type': 'application/json'
            }
            
            # Запрос на генерацию (img2img)
            generation_data = {
                'modelUri': f'art://{folder_id}/yandex-art/latest',
                'generationOptions': {
                    'seed': str(uuid.uuid4().int)[:10],
                    'aspectRatio': {
                        'widthRatio': '16',
                        'heightRatio': '9'
                    }
                },
                'messages': [
                    {
                        'weight': '1',
                        'text': style_prompt or 'professional portfolio style, clean, modern aesthetic, consistent lighting'
                    }
                ]
            }
            
            # Если есть исходное изображение - используем его
            generation_data['messages'].append({
                'weight': '0.7',
                'text': original_url
            })
            
            gen_response = requests.post(
                'https://llm.api.cloud.yandex.net/foundationModels/v1/imageGenerationAsync',
                headers=headers,
                json=generation_data,
                timeout=30
            )
            
            if gen_response.status_code != 200:
                raise Exception(f'Kandinsky API error: {gen_response.text}')
            
            operation_id = gen_response.json().get('id')
            
            # Ожидание результата (макс 60 сек)
            for _ in range(30):
                time.sleep(2)
                check_response = requests.get(
                    f'https://llm.api.cloud.yandex.net/operations/{operation_id}',
                    headers=headers,
                    timeout=10
                )
                
                result = check_response.json()
                if result.get('done'):
                    image_base64_result = result.get('response', {}).get('image')
                    if image_base64_result:
                        # Декодировать и сохранить
                        styled_data = base64.b64decode(image_base64_result)
                        styled_key = f'portfolio/styled/{category}/{file_id}.jpg'
                        
                        s3.put_object(
                            Bucket='files',
                            Key=styled_key,
                            Body=styled_data,
                            ContentType='image/jpeg'
                        )
                        
                        styled_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{styled_key}"
                        
                        # Обновить БД
                        cur.execute(
                            "UPDATE portfolio_photos SET styled_url = %s, is_processed = %s WHERE id = %s",
                            (styled_url, True, photo_id)
                        )
                        conn.commit()
                        break
            else:
                styled_url = None
                print('Kandinsky timeout: generation took too long')
            
        except Exception as e:
            styled_url = None
            print(f"Style processing error: {e}")
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'id': photo_id,
                'original_url': original_url,
                'styled_url': styled_url,
                'is_processed': styled_url is not None
            }),
            'isBase64Encoded': False
        }
    
    # DELETE - удалить фото
    if method == 'DELETE':
        photo_id = event.get('queryStringParameters', {}).get('id')
        if not photo_id:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Photo ID required'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        cur.execute("DELETE FROM portfolio_photos WHERE id = %s", (photo_id,))
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }