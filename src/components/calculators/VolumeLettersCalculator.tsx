import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import OrderDialog from "./OrderDialog";

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
  
  const displayText = (signText || 'ПРОДУКТЫ').toUpperCase().slice(0, 25);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Примеры наших работ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img 
              src="https://cdn.poehali.dev/files/pavilon-nto.jpg" 
              alt="Вывеска для павильона ПРОДУКТЫ днем - объемные буквы в Благовещенске"
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-bold mb-1">Павильон "ПРОДУКТЫ"</p>
                <p className="text-sm opacity-90">Вывеска с объёмными буквами, дневной вид</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img 
              src="https://cdn.poehali.dev/files/pavilon-nto-noch.jpg" 
              alt="Световая вывеска для павильона ПРОДУКТЫ ночью - LED подсветка в Благовещенске"
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="text-white">
                <p className="text-lg font-bold mb-1">Павильон "ПРОДУКТЫ"</p>
                <p className="text-sm opacity-90">Световая вывеска с LED-подсветкой, ночной вид</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
                maxLength={25}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Максимум 25 символов. Текст будет автоматически преобразован в заглавные буквы
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
                      Двусторонняя световая конструкция диаметром 50 см
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
                      Буквы с внутренней LED-подсветкой в темное время суток
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
                      Профессиональная установка вывески на павильон
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 md:p-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-base md:text-lg font-medium">Предварительная стоимость:</span>
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                * точную стоимость сообщит менеджер после уточнения деталей
              </p>
            </div>

            <OrderDialog
              calculatorType="Вывеска для павильона"
              price={calculatePrice()}
              details={{
                "Текст": displayText,
                "Размер букв": "23 см",
                "Панель-кронштейн": needsBracket ? "да" : "нет",
                "Вывеска световая": needsLighting ? "да" : "нет",
                "Монтаж": needsInstallation ? "да" : "нет"
              }}
            >
              <Button 
                size="lg" 
                className="w-full"
                disabled={!signText.trim()}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </OrderDialog>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-xl md:text-2xl font-bold">Предпросмотр вывески</h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={viewMode === 'day' ? 'default' : 'outline'}
                onClick={() => setViewMode('day')}
                className="gap-1 flex-1 sm:flex-none"
              >
                <Icon name="Sun" size={16} />
                <span className="text-xs sm:text-sm">День</span>
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'night' ? 'default' : 'outline'}
                onClick={() => setViewMode('night')}
                className="gap-1 flex-1 sm:flex-none"
              >
                <Icon name="Moon" size={16} />
                <span className="text-xs sm:text-sm">Ночь</span>
              </Button>
            </div>
          </div>
          
          <div 
            className="rounded-xl min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center relative overflow-hidden transition-all duration-500 p-4 sm:p-6 md:p-8"
            style={{ 
              backgroundColor: viewMode === 'day' ? '#4d5a60' : '#1a1f2e'
            }}
          >
            {viewMode === 'day' && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]" />
            )}

            <div className="relative w-full flex items-center justify-center overflow-hidden px-2">
              <span 
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Geometria', sans-serif",
                  fontWeight: 700,
                  fontSize: displayText.length > 12 
                    ? `clamp(0.875rem, ${Math.max(1.2, 8 / Math.max(displayText.length / 10, 1))}vw, 2rem)`
                    : `clamp(1.25rem, ${Math.max(2, 12 / Math.max(displayText.length / 7, 1))}vw, 3rem)`,
                  textTransform: 'uppercase',
                  textShadow: viewMode === 'night' && needsLighting 
                    ? '0 0 20px rgba(255,255,255,0.9), 0 0 35px rgba(255,255,255,0.7), 0 0 50px rgba(255,255,255,0.5)'
                    : '2px 2px 4px rgba(0,0,0,0.4)',
                  filter: viewMode === 'night' && needsLighting 
                    ? 'brightness(1.4)' 
                    : viewMode === 'night' 
                      ? 'brightness(0.2)' 
                      : 'none',
                  letterSpacing: '0.03em',
                  maxWidth: '100%',
                  transform: displayText.length > 12 ? 'scale(0.95)' : 'scale(1)'
                }}
              >
                {displayText}
              </span>
            </div>

            {needsLighting && viewMode === 'night' && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Ruler" size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">Высота букв: 23 см</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Box" size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">Глубина: 50-70 мм</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Layers" size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">Материал: акрил/ПВХ/алюминий</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Zap" size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">{needsLighting ? 'LED-подсветка' : 'Без подсветки'}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-900">
                <p className="font-medium mb-1">Технические особенности:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Шрифт: Geometria Bold</li>
                  <li>• Высота букв: 230 мм</li>
                  <li>• Крепление: напрямую к фасаду или на металлокаркасе</li>
                  <li>• Срок изготовления: до 10 рабочих дней</li>
                  <li>• Гарантия: 12-36 месяцев</li>
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