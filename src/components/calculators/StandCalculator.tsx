import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import OrderDialog from "./OrderDialog";

interface StandCalculatorProps {
  standWidth: string;
  setStandWidth: (value: string) => void;
  standHeight: string;
  setStandHeight: (value: string) => void;
  standThickness: string;
  setStandThickness: (value: string) => void;
  standPrinting: string;
  setStandPrinting: (value: string) => void;
  standHeaderText: string;
  setStandHeaderText: (value: string) => void;
  standFontFamily: string;
  setStandFontFamily: (value: string) => void;
  standBgColor: string;
  setStandBgColor: (value: string) => void;
  pocketsA5: string;
  setPocketsA5: (value: string) => void;
  pocketsA4: string;
  setPocketsA4: (value: string) => void;
  pocketsA3: string;
  setPocketsA3: (value: string) => void;
  pocketsA2: string;
  setPocketsA2: (value: string) => void;
  calculateStandPrice: () => number;
}

const StandCalculator = ({
  standWidth,
  setStandWidth,
  standHeight,
  setStandHeight,
  standThickness,
  setStandThickness,
  standPrinting,
  setStandPrinting,
  standHeaderText,
  setStandHeaderText,
  standFontFamily,
  setStandFontFamily,
  standBgColor,
  setStandBgColor,
  pocketsA5,
  setPocketsA5,
  pocketsA4,
  setPocketsA4,
  pocketsA3,
  setPocketsA3,
  pocketsA2,
  setPocketsA2,
  calculateStandPrice
}: StandCalculatorProps) => {
  const pocketSizes: Record<string, { width: number; height: number }> = {
    a5: { width: 14.8, height: 21 },
    a4: { width: 21, height: 29.7 },
    a3: { width: 29.7, height: 42 },
    a2: { width: 42, height: 59.4 }
  };

  const fontFamilyMap: Record<string, string> = {
    'sans-serif': 'Arial, sans-serif',
    'serif': 'Georgia, serif',
    'monospace': 'Courier New, monospace'
  };

  const bgColorMap: Record<string, string> = {
    white: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
    blue: 'linear-gradient(to bottom right, #dbeafe, #93c5fd)',
    green: 'linear-gradient(to bottom right, #d1fae5, #6ee7b7)',
    yellow: 'linear-gradient(to bottom right, #fef3c7, #fcd34d)',
    red: 'linear-gradient(to bottom right, #fee2e2, #fca5a5)',
    gray: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)',
    beige: 'linear-gradient(to bottom right, #fef3c7, #fde68a)'
  };

  const printingNames: Record<string, string> = {
    interior: 'Печать интерьерная без ламинации',
    exterior: 'Печать интерьерная с ламинацией',
    laminated: 'УФ печать на виниловой пленке'
  };

  const renderPreview = () => {
    const width = parseFloat(standWidth) || 0;
    const height = parseFloat(standHeight) || 0;

    if (!width || !height) {
      return (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Введите размеры для предпросмотра
        </div>
      );
    }

    const maxWidth = 400;
    const maxHeight = 500;
    const aspectRatio = width / height;
    
    let previewWidth = maxWidth;
    let previewHeight = maxWidth / aspectRatio;
    
    if (previewHeight > maxHeight) {
      previewHeight = maxHeight;
      previewWidth = maxHeight * aspectRatio;
    }

    const scale = previewWidth / width;
    const allPockets: Array<{ size: string; width: number; height: number }> = [];
    
    const pocketCounts = {
      a5: parseInt(pocketsA5) || 0,
      a4: parseInt(pocketsA4) || 0,
      a3: parseInt(pocketsA3) || 0,
      a2: parseInt(pocketsA2) || 0
    };

    Object.entries(pocketCounts).forEach(([size, count]) => {
      for (let i = 0; i < count; i++) {
        allPockets.push({
          size,
          width: pocketSizes[size].width,
          height: pocketSizes[size].height
        });
      }
    });

    const baseFontSize = Math.min(previewWidth / 10, previewHeight / 8);

    return (
      <div 
        className="border-4 border-primary/20 shadow-lg relative overflow-hidden"
        style={{ 
          width: `${previewWidth}px`, 
          height: `${previewHeight}px`,
          margin: '0 auto',
          background: bgColorMap[standBgColor]
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center text-secondary font-bold px-4"
        >
          <div
            style={{ 
              fontSize: `${baseFontSize}px`,
              fontFamily: fontFamilyMap[standFontFamily],
              padding: `${previewHeight * 0.05}px`,
              textAlign: 'center'
            }}
          >
            {standHeaderText || 'ИНФОРМАЦИЯ'}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap justify-center items-end gap-2">
          {allPockets.map((pocket, index) => {
            const pocketWidth = pocket.width * scale;
            const pocketHeight = pocket.height * scale;
            
            return (
              <div
                key={index}
                className="border-2 border-primary/40 bg-white/60 flex items-center justify-center text-xs font-medium text-muted-foreground"
                style={{
                  width: `${pocketWidth}px`,
                  height: `${pocketHeight}px`,
                  minWidth: '30px',
                  minHeight: '40px'
                }}
              >
                {pocket.size.toUpperCase()}
              </div>
            );
          })}
        </div>

        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-medium text-muted-foreground">
          {width}×{height} см
        </div>
      </div>
    );
  };

  const pocketCounts = {
    a5: parseInt(pocketsA5) || 0,
    a4: parseInt(pocketsA4) || 0,
    a3: parseInt(pocketsA3) || 0,
    a2: parseInt(pocketsA2) || 0
  };

  const pocketsText = Object.entries(pocketCounts)
    .filter(([_, count]) => count > 0)
    .map(([size, count]) => `${size.toUpperCase()}: ${count} шт`)
    .join(', ');

  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary">Параметры стенда</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 lg:p-8">
          <div className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="block mb-2">Ширина стенда (см)</Label>
                <Input 
                  type="number" 
                  placeholder="100" 
                  value={standWidth}
                  onChange={(e) => setStandWidth(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="10"
                  max="500"
                />
              </div>
              <div>
                <Label className="block mb-2">Высота стенда (см)</Label>
                <Input 
                  type="number" 
                  placeholder="100" 
                  value={standHeight}
                  onChange={(e) => setStandHeight(e.target.value)}
                  onClick={(e) => e.currentTarget.select()}
                  min="10"
                  max="500"
                />
              </div>
            </div>

            <div>
              <Label className="block mb-2">Толщина ПВХ</Label>
              <Select value={standThickness} onValueChange={setStandThickness}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 мм</SelectItem>
                  <SelectItem value="5">5 мм</SelectItem>
                  <SelectItem value="10">10 мм</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block mb-2">Изображение</Label>
              <Select value={standPrinting} onValueChange={setStandPrinting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior">Печать интерьерная без ламинации</SelectItem>
                  <SelectItem value="exterior">Печать интерьерная с ламинацией</SelectItem>
                  <SelectItem value="laminated">УФ печать на виниловой пленке</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block mb-2">Текст заголовка</Label>
              <Input 
                type="text" 
                placeholder="ИНФОРМАЦИЯ" 
                value={standHeaderText}
                onChange={(e) => setStandHeaderText(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="block mb-2">Шрифт</Label>
                <Select value={standFontFamily} onValueChange={setStandFontFamily}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sans-serif">Без засечек</SelectItem>
                    <SelectItem value="serif">С засечками</SelectItem>
                    <SelectItem value="monospace">Моноширинный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block mb-2">Цвет фона</Label>
                <Select value={standBgColor} onValueChange={setStandBgColor}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">Белый</SelectItem>
                    <SelectItem value="blue">Синий</SelectItem>
                    <SelectItem value="green">Зеленый</SelectItem>
                    <SelectItem value="yellow">Желтый</SelectItem>
                    <SelectItem value="red">Красный</SelectItem>
                    <SelectItem value="gray">Серый</SelectItem>
                    <SelectItem value="beige">Бежевый</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="block mb-2">Карманы для материалов</Label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="block mb-1 text-sm">A5</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA5}
                    onChange={(e) => setPocketsA5(e.target.value)}
                    onClick={(e) => e.currentTarget.select()}
                    min="0"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A4</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA4}
                    onChange={(e) => setPocketsA4(e.target.value)}
                    onClick={(e) => e.currentTarget.select()}
                    min="0"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A3</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA3}
                    onChange={(e) => setPocketsA3(e.target.value)}
                    onClick={(e) => e.currentTarget.select()}
                    min="0"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A2</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA2}
                    onChange={(e) => setPocketsA2(e.target.value)}
                    onClick={(e) => e.currentTarget.select()}
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-secondary">Визуализация</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 lg:p-8">
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px] mb-6">
            {renderPreview()}
          </div>

          <div className="bg-muted/30 rounded-lg p-4 md:p-6 lg:p-8">
            <div className="text-center mb-4 md:mb-6">
              <div className="text-lg md:text-2xl font-bold text-secondary mb-2">Итого:</div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                {calculateStandPrice().toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4 md:mb-6">
              Цена включает изготовление, но не включает доставку и монтаж
            </p>
            <OrderDialog
              calculatorType="Информационные стенды"
              price={calculateStandPrice()}
              details={{
                "Размер": `${standWidth}×${standHeight} см`,
                "Толщина ПВХ": `${standThickness} мм`,
                "Печать": printingNames[standPrinting] || standPrinting,
                "Заголовок": standHeaderText,
                ...(pocketsText && { "Карманы": pocketsText })
              }}
            >
              <Button className="w-full" size="lg">
                Заказать расчёт
              </Button>
            </OrderDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StandCalculator;
