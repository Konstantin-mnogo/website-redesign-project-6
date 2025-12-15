import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PORTFOLIO_API = 'https://functions.poehali.dev/08086c25-661f-495d-bda3-b1f9b9037d91';

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

interface PortfolioGalleryProps {
  category?: string;
  columns?: 2 | 3 | 4;
  showTitle?: boolean;
  limit?: number;
}

export function PortfolioGallery({ 
  category, 
  columns = 3, 
  showTitle = true,
  limit 
}: PortfolioGalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      try {
        const url = category 
          ? `${PORTFOLIO_API}?category=${category}`
          : PORTFOLIO_API;
        const res = await fetch(url);
        const data = await res.json();
        const allPhotos = data.photos || [];
        setPhotos(limit ? allPhotos.slice(0, limit) : allPhotos);
      } catch (error) {
        console.error('Failed to load portfolio photos:', error);
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [category, limit]);

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {[...Array(columns * 2)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-0">
              <Skeleton className="aspect-video w-full" />
              {showTitle && (
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Портфолио скоро появится. Следите за обновлениями!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {photos.map((photo) => (
          <Card 
            key={photo.id} 
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedPhoto(photo)}
          >
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={photo.styled_url || photo.original_url}
                  alt={photo.title || 'Портфолио'}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {showTitle && (photo.title || photo.description) && (
                <div className="p-4">
                  {photo.title && (
                    <h3 className="font-semibold mb-1">{photo.title}</h3>
                  )}
                  {photo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedPhoto?.title || 'Портфолио'}</DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedPhoto.styled_url || selectedPhoto.original_url}
                  alt={selectedPhoto.title}
                  className="object-contain w-full h-full"
                />
              </div>
              {selectedPhoto.description && (
                <p className="text-muted-foreground">{selectedPhoto.description}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
