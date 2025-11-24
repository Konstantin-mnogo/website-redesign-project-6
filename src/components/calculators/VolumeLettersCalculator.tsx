import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface VolumeLettersCalculatorProps {
  signText: string;
  setSignText: (value: string) => void;
  needsBracket: boolean;
  setNeedsBracket: (value: boolean) => void;
  needsInstallation: boolean;
  setNeedsInstallation: (value: boolean) => void;
  needsLighting: boolean;
  setNeedsLighting: (value: boolean) => void;
  calculatePrice: () => number;
}

const VolumeLettersCalculator = ({
  signText,
  setSignText,
  needsBracket,
  setNeedsBracket,
  needsInstallation,
  setNeedsInstallation,
  needsLighting,
  setNeedsLighting,
  calculatePrice,
}: VolumeLettersCalculatorProps) => {
  const [viewMode, setViewMode] = useState<'day' | 'night'>('day');
  
  const displayText = (signText || 'ПРОДУКТЫ').toUpperCase();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <Card className="shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Текст вывески</label>
              <Input 
                value={signText}
                onChange={(e) => setSignText(e.target.value)}
                placeholder="Введите текст для вывески"
                className="text-lg uppercase"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Текст будет автоматически преобразован в заглавные буквы
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="bracket" 
                    checked={needsBracket}
                    onCheckedChange={(checked) => setNeedsBracket(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="bracket" className="text-sm font-medium cursor-pointer block mb-1">
                      Требуется панель-кронштейн
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Металлическая несущая конструкция для крепления объёмных букв к фасаду павильона
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="lighting" 
                    checked={needsLighting}
                    onCheckedChange={(checked) => setNeedsLighting(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="lighting" className="text-sm font-medium cursor-pointer block mb-1">
                      Вывеска световая
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Буквы с внутренней LED-подсветкой для круглосуточной видимости
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="installation" 
                    checked={needsInstallation}
                    onCheckedChange={(checked) => setNeedsInstallation(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="installation" className="text-sm font-medium cursor-pointer block mb-1">
                      Требуется монтаж
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Профессиональная установка вывески на павильон НТО
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Предварительная стоимость:</span>
                <span className="text-2xl font-bold text-primary">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <div className="border-t pt-3 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Объёмные буквы (23 см):</span>
                  <span>от 2000 ₽/буква</span>
                </div>
                {needsBracket && (
                  <div className="flex justify-between">
                    <span>Панель-кронштейн:</span>
                    <span>15 000 ₽</span>
                  </div>
                )}
                {needsLighting && (
                  <div className="flex justify-between">
                    <span>Световая подсветка:</span>
                    <span>20 000 ₽</span>
                  </div>
                )}
                {needsInstallation && (
                  <div className="flex justify-between">
                    <span>Монтаж:</span>
                    <span>10 000 ₽</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground border-t pt-3">
                * Итоговая стоимость зависит от типа подсветки и сложности монтажа
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full"
              disabled={!signText.trim()}
              onClick={() => {
                const contactSection = document.getElementById('contacts');
                const nameInput = document.querySelector('input[placeholder="Ваше имя"]') as HTMLInputElement;
                const messageInput = document.querySelector('textarea[placeholder="Ваше сообщение"]') as HTMLTextAreaElement;
                
                if (messageInput) {
                  const details = `Объёмные буквы на павильон НТО:\n- Текст: "${displayText}"\n- Размер букв: 23 см\n${needsBracket ? '- Панель-кронштейн: Да\n' : ''}${needsLighting ? '- Вывеска световая: Да\n' : ''}${needsInstallation ? '- Монтаж: Да\n' : ''}\nПредварительная стоимость: ${calculatePrice().toLocaleString('ru-RU')} ₽`;
                  messageInput.value = details;
                }
                
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    if (nameInput) nameInput.focus();
                  }, 800);
                }
              }}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Предпросмотр вывески</h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={viewMode === 'day' ? 'default' : 'outline'}
                onClick={() => setViewMode('day')}
                className="gap-2"
              >
                <Icon name="Sun" size={16} />
                День
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'night' ? 'default' : 'outline'}
                onClick={() => setViewMode('night')}
                className="gap-2"
              >
                <Icon name="Moon" size={16} />
                Ночь
              </Button>
            </div>
          </div>
          
          <div 
            className="rounded-xl min-h-[300px] flex items-center justify-center relative overflow-hidden transition-all duration-500 p-8"
            style={{ 
              backgroundColor: viewMode === 'day' ? '#4d5a60' : '#1a1f2e'
            }}
          >
            {viewMode === 'day' && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]" />
            )}

            <div className="relative w-full flex items-center justify-center">
              <span 
                className="text-white tracking-wider whitespace-nowrap"
                style={{
                  fontFamily: "'Geometria', sans-serif",
                  fontWeight: 700,
                  fontSize: `min(${Math.max(2, 20 / Math.max(displayText.length / 10, 1))}vw, 4rem)`,
                  textTransform: 'uppercase',
                  textShadow: viewMode === 'night' && needsLighting 
                    ? '0 0 30px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.7), 0 0 70px rgba(255,255,255,0.5)'
                    : '3px 3px 6px rgba(0,0,0,0.4)',
                  filter: viewMode === 'night' && needsLighting 
                    ? 'brightness(1.4)' 
                    : viewMode === 'night' 
                      ? 'brightness(0.2)' 
                      : 'none',
                  letterSpacing: '0.15em'
                }}
              >
                {displayText}
              </span>
            </div>

            {needsLighting && viewMode === 'night' && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Ruler" size={16} />
                <span>Высота букв: 23 см</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Box" size={16} />
                <span>Глубина: 50-80 мм</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Layers" size={16} />
                <span>Материал: акрил/ПВХ</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Zap" size={16} />
                <span>{needsLighting ? 'LED-подсветка' : 'Без подсветки'}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Технические особенности:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>• Шрифт: Geometria Bold</li>
                  <li>• Высота букв: 230 мм</li>
                  <li>• Крепление: на панель-кронштейн или напрямую к фасаду</li>
                  <li>• Срок изготовления: 5-7 рабочих дней</li>
                  <li>• Гарантия: 12 месяцев</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  );
};

export default VolumeLettersCalculator;