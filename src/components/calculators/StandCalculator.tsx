import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
  return (
    <Card className="shadow-xl">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6">Информационные стенды</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="block mb-2">Ширина стенда (см)</Label>
              <Input 
                type="number" 
                placeholder="100" 
                value={standWidth}
                onChange={(e) => setStandWidth(e.target.value)}
                min="1"
                step="1"
              />
            </div>
            <div>
              <Label className="block mb-2">Высота стенда (см)</Label>
              <Input 
                type="number" 
                placeholder="100" 
                value={standHeight}
                onChange={(e) => setStandHeight(e.target.value)}
                min="1"
                step="1"
              />
            </div>
            <div>
              <Label className="block mb-2">Толщина ПВХ (мм)</Label>
              <Select value={standThickness} onValueChange={setStandThickness}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 мм - базовый</SelectItem>
                  <SelectItem value="5">5 мм - усиленный</SelectItem>
                  <SelectItem value="10">10 мм - премиум</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Тип печати</Label>
              <Select value={standPrinting} onValueChange={setStandPrinting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior">Интерьерная печать</SelectItem>
                  <SelectItem value="exterior">Экстерьерная печать</SelectItem>
                  <SelectItem value="laminated">С ламинацией</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Заголовок стенда</Label>
              <Input 
                type="text" 
                placeholder="ИНФОРМАЦИЯ" 
                value={standHeaderText}
                onChange={(e) => setStandHeaderText(e.target.value)}
              />
            </div>
            <div>
              <Label className="block mb-2">Шрифт заголовка</Label>
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
                  <SelectItem value="gray">Серый</SelectItem>
                  <SelectItem value="beige">Бежевый</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Карманы для материалов</Label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="block mb-1 text-sm">A5 (148×210 мм)</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA5}
                    onChange={(e) => setPocketsA5(e.target.value)}
                    min="0"
                    step="1"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A4 (210×297 мм)</Label>
                  <Input 
                    type="number" 
                    placeholder="4" 
                    value={pocketsA4}
                    onChange={(e) => setPocketsA4(e.target.value)}
                    min="0"
                    step="1"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A3 (297×420 мм)</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA3}
                    onChange={(e) => setPocketsA3(e.target.value)}
                    min="0"
                    step="1"
                  />
                </div>
                <div>
                  <Label className="block mb-1 text-sm">A2 (420×594 мм)</Label>
                  <Input 
                    type="number" 
                    placeholder="0" 
                    value={pocketsA2}
                    onChange={(e) => setPocketsA2(e.target.value)}
                    min="0"
                    step="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold mb-4">Расчёт стоимости:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Площадь:</span>
                  <span>{(parseFloat(standWidth || "0") * parseFloat(standHeight || "0") / 10000).toFixed(2)} м²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Толщина ПВХ:</span>
                  <span>{standThickness} мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Тип печати:</span>
                  <span>{standPrinting === "interior" ? "Интерьерная" : standPrinting === "exterior" ? "Экстерьерная" : "С ламинацией"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Карманов:</span>
                  <span>
                    A5({pocketsA5}) A4({pocketsA4}) A3({pocketsA3}) A2({pocketsA2})
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center text-3xl font-bold mb-4">
                <span className="text-secondary">Итого:</span>
                <span className="text-primary">{calculateStandPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Цена включает изготовление, но не включает доставку и монтаж
              </p>
              <Button className="w-full">
                Заказать расчёт
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StandCalculator;
