import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload, CheckCircle2, XCircle, Trash2 } from 'lucide-react';
import Icon from '@/components/ui/icon';

const PORTFOLIO_API = 'https://functions.poehali.dev/08086c25-661f-495d-bda3-b1f9b9037d91';

const CATEGORIES = [
  { value: 'web-design', label: 'Веб-дизайн' },
  { value: 'branding', label: 'Брендинг' },
  { value: 'advertising', label: 'Наружная реклама' },
  { value: 'interior', label: 'Интерьерная печать' },
  { value: 'transport', label: 'Реклама на транспорте' },
  { value: 'signage', label: 'Вывески' },
];

interface Photo {
  id: number;
  category: string;
  original_url: string;
  styled_url: string | null;
  title: string;
  description: string;
  is_processed: boolean;
  created_at: string;
}

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stylePrompt, setStylePrompt] = useState('professional portfolio style, clean, modern, consistent lighting and color grading');
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const { toast } = useToast();

  const loadPhotos = async (filterCategory?: string) => {
    setLoadingPhotos(true);
    try {
      const url = filterCategory 
        ? `${PORTFOLIO_API}?category=${filterCategory}`
        : PORTFOLIO_API;
      const res = await fetch(url);
      const data = await res.json();
      setPhotos(data.photos || []);
    } catch (error) {
      toast({
        title: 'Ошибка загрузки',
        description: 'Не удалось загрузить фотографии',
        variant: 'destructive',
      });
    } finally {
      setLoadingPhotos(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !category) {
      toast({
        title: 'Заполните все поля',
        description: 'Выберите файл и категорию',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {
        const base64 = reader.result?.toString().split(',')[1];
        
        const response = await fetch(PORTFOLIO_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64,
            category,
            title,
            description,
            style_prompt: stylePrompt,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          toast({
            title: 'Фото загружено!',
            description: result.is_processed 
              ? 'ИИ-стилизация применена успешно' 
              : 'Фото сохранено, стилизация в процессе',
          });
          setSelectedFile(null);
          setTitle('');
          setDescription('');
          loadPhotos();
        } else {
          throw new Error(result.error || 'Upload failed');
        }
      };
    } catch (error) {
      toast({
        title: 'Ошибка загрузки',
        description: error instanceof Error ? error.message : 'Неизвестная ошибка',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${PORTFOLIO_API}?id=${id}`, { method: 'DELETE' });
      toast({ title: 'Фото удалено' });
      loadPhotos();
    } catch (error) {
      toast({
        title: 'Ошибка удаления',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Админ-панель портфолио</h1>
            <p className="text-muted-foreground">Загрузка и управление фотографиями с ИИ-стилизацией</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Загрузить новое фото</CardTitle>
              <CardDescription>
                Фото будет автоматически обработано через ИИ для единого стиля
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Фотография</Label>
                <Input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading}
                />
                {selectedFile && (
                  <p className="text-sm text-muted-foreground">
                    Выбрано: {selectedFile.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Категория</Label>
                <Select value={category} onValueChange={setCategory} disabled={uploading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Название (опционально)</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Название проекта"
                  disabled={uploading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание (опционально)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Краткое описание проекта"
                  disabled={uploading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">ИИ-стиль (опционально)</Label>
                <Textarea
                  id="style"
                  value={stylePrompt}
                  onChange={(e) => setStylePrompt(e.target.value)}
                  placeholder="Описание стиля для ИИ"
                  disabled={uploading}
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">
                  Оставьте по умолчанию для профессионального стиля портфолио
                </p>
              </div>

              <Button onClick={handleUpload} disabled={uploading || !selectedFile || !category} className="w-full">
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Обработка...
                  </>
                ) : (
                  <>
                    <Icon name="Upload" className="mr-2 h-4 w-4" />
                    Загрузить и стилизовать
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Загруженные фотографии</CardTitle>
              <div className="flex gap-2 mt-4">
                <Button onClick={() => loadPhotos()} variant="outline" size="sm">
                  Все
                </Button>
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat.value}
                    onClick={() => loadPhotos(cat.value)}
                    variant="outline"
                    size="sm"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              {loadingPhotos ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : photos.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Фотографии не найдены. Загрузите первое фото!
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {photos.map((photo) => (
                    <Card key={photo.id}>
                      <CardContent className="p-4 space-y-3">
                        <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                          <img
                            src={photo.styled_url || photo.original_url}
                            alt={photo.title}
                            className="object-cover w-full h-full"
                          />
                          {photo.is_processed && (
                            <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                              <Icon name="CheckCircle2" className="h-4 w-4" />
                            </div>
                          )}
                          {!photo.is_processed && (
                            <div className="absolute top-2 right-2 bg-yellow-500 text-white p-1 rounded-full">
                              <Loader2 className="h-4 w-4 animate-spin" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{photo.title || 'Без названия'}</p>
                          <p className="text-xs text-muted-foreground">
                            {CATEGORIES.find((c) => c.value === photo.category)?.label || photo.category}
                          </p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="w-full"
                          onClick={() => handleDelete(photo.id)}
                        >
                          <Icon name="Trash2" className="mr-2 h-4 w-4" />
                          Удалить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
