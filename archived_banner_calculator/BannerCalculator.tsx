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

  const getAlignStyle = () => {
    const align: any = {
      display: 'flex',
      justifyContent: textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : textAlign === 'justify' ? 'stretch' : 'center',
      alignItems: verticalAlign === 'top' ? 'flex-start' : verticalAlign === 'bottom' ? 'flex-end' : 'center',
    };
    return align;
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Калькулятор печати на баннере</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Рассчитайте стоимость и создайте макет баннера
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Параметры баннера</h3>
                <div className="space-y-4 md:space-y-6">
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
                    <label className="block text-sm font-medium mb-3">Люверсы по периметру</label>
                    <div className="bg-muted/30 rounded-xl p-4">
                      <div className="flex items-start gap-4">
                        <img 
                          src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/58bc4c75-c28a-4749-8852-f6a438d451f8.jpg"
                          alt="Пример люверса 10 мм"
                          className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Checkbox 
                              id="grommets" 
                              checked={withGrommets}
                              onCheckedChange={(checked) => setWithGrommets(checked as boolean)}
                            />
                            <label htmlFor="grommets" className="text-sm font-medium cursor-pointer">
                              Установить люверсы 10 мм
                            </label>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Металлические кольца по периметру для удобного крепления баннера
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Площадь:</span>
                      <span className="font-bold">{calculateArea().toFixed(2)} м²</span>
                    </div>
                    <p className="text-sm text-muted-foreground border-t pt-3">
                      * Минимальный размер к печати принимается от 2 м²
                    </p>
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
                        const details = `Печать на баннере:\n- Размер: ${width}×${height} см (${calculateArea().toFixed(2)} м²)\n${withGrommets ? '- Люверсы 10 мм: Да\n' : ''}Текст макета: "${text}"\nЦвет фона: ${bgColor}\nЦвет текста: ${textColor}`;
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
                      onFocus={(e) => {
                        if (e.target.value === "Введите текст") {
                          setText("");
                        }
                      }}
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
                          <SelectItem value="Montserrat">Montserrat</SelectItem>
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
                        max="120"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Горизонтальное выравнивание</label>
                      <Select value={textAlign} onValueChange={setTextAlign}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="left">По левому краю</SelectItem>
                          <SelectItem value="center">По центру</SelectItem>
                          <SelectItem value="right">По правому краю</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Вертикальное выравнивание</label>
                      <Select value={verticalAlign} onValueChange={setVerticalAlign}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="top">Сверху</SelectItem>
                          <SelectItem value="center">По центру</SelectItem>
                          <SelectItem value="bottom">Снизу</SelectItem>
                        </SelectContent>
                      </Select>
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
                          className="flex-1"
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
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-dashed rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <div 
                      ref={canvasRef}
                      className="w-full h-full p-8"
                      style={{
                        backgroundColor: bgColor,
                        color: textColor,
                        fontFamily: fontFamily,
                        fontSize: `${fontSize}px`,
                        lineHeight: '1.2',
                        wordBreak: 'break-word',
                        ...getAlignStyle()
                      }}
                    >
                      <div style={{ 
                        textAlign: textAlign as any,
                        maxWidth: '100%'
                      }}>
                        {text}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Превью макета. Итоговый размер баннера будет соответствовать указанным параметрам
                  </p>
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
