import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import BannerCalculator from "@/components/BannerCalculator";
import Icon from "@/components/ui/icon";

const CalculatorSection = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>("banner");

  const [standWidth, setStandWidth] = useState<string>("");
  const [standHeight, setStandHeight] = useState<string>("");
  const [standThickness, setStandThickness] = useState<string>("3");
  const [standPockets, setStandPockets] = useState<string>("1");
  const [standPrinting, setStandPrinting] = useState<boolean>(true);
  const [standMounting, setStandMounting] = useState<boolean>(false);

  const [calcWidth, setCalcWidth] = useState<string>("");
  const [calcHeight, setCalcHeight] = useState<string>("");
  const [calcType, setCalcType] = useState<string>("световой-короб");
  const [calcMaterial, setCalcMaterial] = useState<string>("акрил");
  const [calcLighting, setCalcLighting] = useState<boolean>(true);
  const [calcInstallation, setCalcInstallation] = useState<boolean>(true);

  const pricePerSqm = 15000;
  const materialCoefficients: Record<string, number> = {
    "акрил": 1.0,
    "композит": 1.2,
    "пвх": 0.8,
    "металл": 1.5
  };
  const typeCoefficients: Record<string, number> = {
    "световой-короб": 1.0,
    "объемные-буквы": 1.3,
    "плоская-вывеска": 0.7,
    "неоновая": 1.8
  };

  const calculateStandPrice = () => {
    const width = parseFloat(standWidth);
    const height = parseFloat(standHeight);
    const thickness = parseFloat(standThickness);
    const pockets = parseInt(standPockets);
    
    if (!width || !height || width <= 0 || height <= 0) return 0;
    
    const area = width * height;
    const basePricePerSqm = 3500;
    
    const thicknessCoefficients: Record<number, number> = {
      3: 1.0,
      5: 1.3,
      10: 1.6
    };
    
    let price = area * basePricePerSqm;
    price *= thicknessCoefficients[thickness] || 1.0;
    
    if (standPrinting) price += area * 800;
    if (standMounting) price += 1000;
    
    price += pockets * 500;
    
    return Math.round(price);
  };

  const calculatePrice = () => {
    const width = parseFloat(calcWidth);
    const height = parseFloat(calcHeight);
    
    if (!width || !height || width <= 0 || height <= 0) return 0;
    
    const area = width * height;
    let price = area * pricePerSqm;
    
    price *= materialCoefficients[calcMaterial] || 1.0;
    price *= typeCoefficients[calcType] || 1.0;
    
    if (calcLighting) price += area * 2000;
    if (calcInstallation) price += area * 1500;
    
    return Math.round(price);
  };

  return (
    <>
      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькуляторы</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Выберите тип калькулятора для расчёта стоимости
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button 
                  size="lg"
                  variant={selectedCalculator === "banner" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("banner")}
                  className="min-w-[200px]"
                >
                  <Icon name="Image" size={20} className="mr-2" />
                  Баннеры
                </Button>
                <Button 
                  size="lg"
                  variant={selectedCalculator === "stand" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("stand")}
                  className="min-w-[200px]"
                >
                  <Icon name="PanelTop" size={20} className="mr-2" />
                  Инфостенды
                </Button>
                <Button 
                  size="lg"
                  variant={selectedCalculator === "signage" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("signage")}
                  className="min-w-[200px]"
                >
                  <Icon name="Lightbulb" size={20} className="mr-2" />
                  Вывески
                </Button>
              </div>
            </div>
            
            {selectedCalculator === "stand" && (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Информационные стенды</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ширина (метры)</label>
                      <Input 
                        type="number" 
                        placeholder="1.2" 
                        value={standWidth}
                        onChange={(e) => setStandWidth(e.target.value)}
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Высота (метры)</label>
                      <Input 
                        type="number" 
                        placeholder="0.8" 
                        value={standHeight}
                        onChange={(e) => setStandHeight(e.target.value)}
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Толщина ПВХ (мм)</label>
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
                      <label className="block text-sm font-medium mb-2">Количество карманов А4</label>
                      <Select value={standPockets} onValueChange={setStandPockets}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 карман</SelectItem>
                          <SelectItem value="2">2 кармана</SelectItem>
                          <SelectItem value="3">3 кармана</SelectItem>
                          <SelectItem value="4">4 кармана</SelectItem>
                          <SelectItem value="6">6 карманов</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="printing" 
                          checked={standPrinting}
                          onCheckedChange={(checked) => setStandPrinting(checked as boolean)}
                        />
                        <label htmlFor="printing" className="text-sm font-medium cursor-pointer">
                          Печать изображения
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mounting" 
                          checked={standMounting}
                          onCheckedChange={(checked) => setStandMounting(checked as boolean)}
                        />
                        <label htmlFor="mounting" className="text-sm font-medium cursor-pointer">
                          Настенное крепление
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                    <div className="text-center w-full">
                      <p className="text-sm text-muted-foreground mb-2">Примерная стоимость</p>
                      <p className="text-6xl font-bold text-primary mb-8">
                        {calculateStandPrice().toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Площадь: {standWidth && standHeight ? (parseFloat(standWidth) * parseFloat(standHeight)).toFixed(2) : '0'} м²
                      </p>
                      <p className="text-xs text-muted-foreground mb-6">
                        * Точная стоимость рассчитывается индивидуально
                      </p>
                      <Button 
                        size="lg" 
                        className="w-full"
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          const nameInput = document.querySelector('input[placeholder="Ваше имя"]') as HTMLInputElement;
                          const messageInput = document.querySelector('textarea[placeholder="Расскажите о вашем проекте"]') as HTMLTextAreaElement;
                          
                          if (messageInput) {
                            const calcDetails = `Информационный стенд:\n- Размер: ${standWidth}×${standHeight} м (${standWidth && standHeight ? (parseFloat(standWidth) * parseFloat(standHeight)).toFixed(2) : '0'} м²)\n- Толщина: ${standThickness} мм\n- Карманы: ${standPockets} шт\n${standPrinting ? '- С печатью\n' : ''}${standMounting ? '- С креплением\n' : ''}Примерная стоимость: ${calculateStandPrice().toLocaleString('ru-RU')} ₽`;
                            messageInput.value = calcDetails;
                          }
                          
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                              if (nameInput) nameInput.focus();
                            }, 800);
                          }
                        }}
                      >
                        Отправить заявку с расчётом
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            )}
            
            {selectedCalculator === "signage" && (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Наружные вывески</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ширина (метры)</label>
                      <Input 
                        type="number" 
                        placeholder="2.5" 
                        value={calcWidth}
                        onChange={(e) => setCalcWidth(e.target.value)}
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Высота (метры)</label>
                      <Input 
                        type="number" 
                        placeholder="1.5" 
                        value={calcHeight}
                        onChange={(e) => setCalcHeight(e.target.value)}
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тип вывески</label>
                      <Select value={calcType} onValueChange={setCalcType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="световой-короб">Световой короб</SelectItem>
                          <SelectItem value="объемные-буквы">Объёмные буквы</SelectItem>
                          <SelectItem value="плоская-вывеска">Плоская вывеска</SelectItem>
                          <SelectItem value="неоновая">Неоновая вывеска</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Материал</label>
                      <Select value={calcMaterial} onValueChange={setCalcMaterial}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="акрил">Акрил</SelectItem>
                          <SelectItem value="композит">Композит</SelectItem>
                          <SelectItem value="пвх">ПВХ</SelectItem>
                          <SelectItem value="металл">Металл</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="lighting" 
                          checked={calcLighting}
                          onCheckedChange={(checked) => setCalcLighting(checked as boolean)}
                        />
                        <label htmlFor="lighting" className="text-sm font-medium cursor-pointer">
                          Светодиодная подсветка
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="installation" 
                          checked={calcInstallation}
                          onCheckedChange={(checked) => setCalcInstallation(checked as boolean)}
                        />
                        <label htmlFor="installation" className="text-sm font-medium cursor-pointer">
                          Монтаж и установка
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                    <div className="text-center w-full">
                      <p className="text-sm text-muted-foreground mb-2">Примерная стоимость</p>
                      <p className="text-6xl font-bold text-primary mb-8">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Площадь: {calcWidth && calcHeight ? (parseFloat(calcWidth) * parseFloat(calcHeight)).toFixed(2) : '0'} м²
                      </p>
                      <p className="text-xs text-muted-foreground mb-6">
                        * Точная стоимость рассчитывается индивидуально
                      </p>
                      <Button 
                        size="lg" 
                        className="w-full"
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          const nameInput = document.querySelector('input[placeholder="Ваше имя"]') as HTMLInputElement;
                          const messageInput = document.querySelector('textarea[placeholder="Расскажите о вашем проекте"]') as HTMLTextAreaElement;
                          
                          if (messageInput) {
                            const typeNames: Record<string, string> = {
                              'световой-короб': 'Световой короб',
                              'объемные-буквы': 'Объёмные буквы',
                              'плоская-вывеска': 'Плоская вывеска',
                              'неоновая': 'Неоновая вывеска'
                            };
                            const materialNames: Record<string, string> = {
                              'акрил': 'Акрил',
                              'композит': 'Композит',
                              'пвх': 'ПВХ',
                              'металл': 'Металл'
                            };
                            const calcDetails = `Вывеска:\n- Размер: ${calcWidth}×${calcHeight} м (${calcWidth && calcHeight ? (parseFloat(calcWidth) * parseFloat(calcHeight)).toFixed(2) : '0'} м²)\n- Тип: ${typeNames[calcType]}\n- Материал: ${materialNames[calcMaterial]}\n${calcLighting ? '- С подсветкой\n' : ''}${calcInstallation ? '- С монтажом\n' : ''}Примерная стоимость: ${calculatePrice().toLocaleString('ru-RU')} ₽`;
                            messageInput.value = calcDetails;
                          }
                          
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                              if (nameInput) nameInput.focus();
                            }, 800);
                          }
                        }}
                      >
                        Отправить заявку с расчётом
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            )}
          </div>
        </div>
      </section>

      {selectedCalculator === "banner" && <BannerCalculator />}
    </>
  );
};

export default CalculatorSection;