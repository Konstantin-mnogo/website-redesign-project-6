import json
from typing import Dict, Any
from urllib.parse import urlencode, quote

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Редирект с www.ragrafika.ru на ragrafika.ru через JavaScript
    Args: event - запрос от Cloud Functions
          context - контекст выполнения
    Returns: HTML со скриптом редиректа
    '''
    
    # Получаем метод
    method = event.get('httpMethod', 'GET')
    
    # OPTIONS для CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    # Получаем путь
    request_context = event.get('requestContext', {})
    path = request_context.get('http', {}).get('path', '/')
    
    if not path or path == '':
        path = '/'
    
    # Параметры запроса
    query_params = event.get('queryStringParameters', {})
    query_string = ''
    if query_params:
        query_string = '?' + urlencode(query_params)
    
    # Целевой URL
    redirect_url = f"https://ragrafika.ru{path}{query_string}"
    
    # HTML с мгновенным редиректом
    html_content = f'''<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Перенаправление...</title>
    <link rel="canonical" href="{redirect_url}"/>
    <script>window.location.replace("{redirect_url}");</script>
    <noscript>
        <meta http-equiv="refresh" content="0;url={redirect_url}">
    </noscript>
</head>
<body>
    <p>Перенаправление на <a href="{redirect_url}">ragrafika.ru</a>...</p>
</body>
</html>'''
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=31536000',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': html_content
    }