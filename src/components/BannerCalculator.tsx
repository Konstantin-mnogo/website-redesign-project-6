import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const BannerCalculator = () => {
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bannerType, setBannerType] = useState<string>("standard");
  const [withGrommets, setWithGrommets] = useState<boolean>(true);
  
  const [text, setText] = useState<string>("Введите текст");
  const [fontSize, setFontSize] = useState<string>("48");
  const [fontFamily, setFontFamily] = useState<string>("Arial");
  const [textAlign, setTextAlign] = useState<string>("center");
  const [verticalAlign, setVerticalAlign] = useState<string>("center");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [textColor, setTextColor] = useState<string>("#000000");
  
  const canvasRef = useRef<HTMLDivElement>(null);

  const calculateArea = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return 0;
    return (w * h) / 10000;
  };

  const calculateGrommets = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return 0;
    const perimeter = 2 * (w + h);
    return Math.ceil(perimeter / 30);
  };

  const calculatePrice = () => {
    const area = calculateArea();
    if (area < 2) return 0;
    
    const pricePerSqm = bannerType === "standard" ? 350 : 550;
    let total = area * pricePerSqm;
    
    if (withGrommets) {
      total += calculateGrommets() * 35;
    }
    
    return Math.round(total);
  };

  const getAlignStyle = () => {
    const align: any = {
      display: 'flex',
      justifyContent: textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : textAlign === 'justify' ? 'stretch' : 'center',
      alignItems: verticalAlign === 'top' ? 'flex-start' : verticalAlign === 'bottom' ? 'flex-end' : 'center',
    };
    return align;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор печати на баннере</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте стоимость и создайте макет баннера
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Параметры баннера</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ширина (см)</label>
                    <Input 
                      type="number" 
                      placeholder="0" 
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      min="0"
                      step="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Высота (см)</label>
                    <Input 
                      type="number" 
                      placeholder="0" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="0"
                      step="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип баннера</label>
                    <Select value={bannerType} onValueChange={setBannerType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт (350 ₽/м²)</SelectItem>
                        <SelectItem value="thick">Толстый (550 ₽/м²)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="grommets" 
                      checked={withGrommets}
                      onCheckedChange={(checked) => setWithGrommets(checked as boolean)}
                    />
                    <label htmlFor="grommets" className="text-sm font-medium cursor-pointer">
                      Люверсы по периметру (35 ₽/шт, шаг 30 см)
                    </label>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Площадь:</span>
                      <span className="font-bold">{calculateArea().toFixed(2)} м²</span>
                    </div>
                    {withGrommets && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Люверсы:</span>
                        <span className="font-bold">{calculateGrommets()} шт</span>
                      </div>
                    )}
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-xl font-bold">Итого:</span>
                      <span className="text-3xl font-bold text-primary">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    {calculateArea() < 2 && calculateArea() > 0 && (
                      <p className="text-sm text-amber-600">
                        * Минимальный размер к печати принимается от 2 м²
                      </p>
                    )}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full"
                    disabled={calculateArea() < 2}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      const nameInput = document.querySelector('input[placeholder="Ваше имя"]') as HTMLInputElement;
                      const messageInput = document.querySelector('textarea[placeholder="Расскажите о вашем проекте"]') as HTMLTextAreaElement;
                      
                      if (messageInput) {
                        const details = `Печать на баннере:\n- Размер: ${width}×${height} см (${calculateArea().toFixed(2)} м²)\n- Тип: ${bannerType === 'standard' ? 'Стандарт' : 'Толстый'}\n${withGrommets ? `- Люверсы: ${calculateGrommets()} шт\n` : ''}Текст макета: "${text}"\nЦвет фона: ${bgColor}\nЦвет текста: ${textColor}\n\nИтого: ${calculatePrice().toLocaleString('ru-RU')} ₽`;
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
                    Отправить заявку с макетом
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Редактор макета</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Текст</label>
                    <Input 
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Введите текст"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Шрифт</label>
                      <Select value={fontFamily} onValueChange={setFontFamily}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Arial">Arial</SelectItem>
                          <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                          <SelectItem value="Courier New">Courier New</SelectItem>
                          <SelectItem value="Georgia">Georgia</SelectItem>
                          <SelectItem value="Verdana">Verdana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Размер шрифта</label>
                      <Input 
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                        min="12"
                        max="200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Выравнивание текста</label>
                    <div className="flex gap-2">
                      <Button 
                        variant={textAlign === 'left' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTextAlign('left')}
                      >
                        <Icon name="AlignLeft" size={18} />
                      </Button>
                      <Button 
                        variant={textAlign === 'center' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTextAlign('center')}
                      >
                        <Icon name="AlignCenter" size={18} />
                      </Button>
                      <Button 
                        variant={textAlign === 'right' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTextAlign('right')}
                      >
                        <Icon name="AlignRight" size={18} />
                      </Button>
                      <Button 
                        variant={textAlign === 'justify' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTextAlign('justify')}
                      >
                        <Icon name="AlignJustify" size={18} />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Вертикальное выравнивание</label>
                    <div className="flex gap-2">
                      <Button 
                        variant={verticalAlign === 'top' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setVerticalAlign('top')}
                      >
                        <Icon name="ArrowUp" size={18} />
                      </Button>
                      <Button 
                        variant={verticalAlign === 'center' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setVerticalAlign('center')}
                      >
                        <Icon name="Minus" size={18} />
                      </Button>
                      <Button 
                        variant={verticalAlign === 'bottom' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setVerticalAlign('bottom')}
                      >
                        <Icon name="ArrowDown" size={18} />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Цвет фона</label>
                      <div className="flex gap-2">
                        <Input 
                          type="color"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="w-16 h-10 p-1 cursor-pointer"
                        />
                        <Input 
                          type="text"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          placeholder="#ffffff"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Цвет текста</label>
                      <div className="flex gap-2">
                        <Input 
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-16 h-10 p-1 cursor-pointer"
                        />
                        <Input 
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          placeholder="#000000"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-4">Предпросмотр макета</label>
                    <div 
                      ref={canvasRef}
                      className="border-2 border-gray-300 rounded-lg overflow-hidden"
                      style={{
                        backgroundColor: bgColor,
                        aspectRatio: width && height ? `${width} / ${height}` : '16 / 9',
                        minHeight: '300px',
                        padding: '20px',
                        ...getAlignStyle()
                      }}
                    >
                      <p 
                        style={{
                          color: textColor,
                          fontSize: `${fontSize}px`,
                          fontFamily: fontFamily,
                          textAlign: textAlign as any,
                          margin: 0,
                          width: textAlign === 'justify' ? '100%' : 'auto',
                          lineHeight: 1.4
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCalculator;
