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

  const downloadMockup = () => {
    if (!canvasRef.current) return;

    const canvas = document.createElement('canvas');
    const w = parseFloat(width) || 800;
    const h = parseFloat(height) || 600;
    const scale = 3;
    
    canvas.width = w * scale;
    canvas.height = h * scale;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = textColor;
    ctx.font = `${parseInt(fontSize) * scale}px ${fontFamily}`;
    ctx.textBaseline = verticalAlign === 'top' ? 'top' : verticalAlign === 'bottom' ? 'bottom' : 'middle';
    
    let textX = 0;
    if (textAlign === 'center') {
      ctx.textAlign = 'center';
      textX = canvas.width / 2;
    } else if (textAlign === 'right') {
      ctx.textAlign = 'right';
      textX = canvas.width - 60 * scale;
    } else {
      ctx.textAlign = 'left';
      textX = 60 * scale;
    }

    let textY = 0;
    if (verticalAlign === 'top') {
      textY = 60 * scale;
    } else if (verticalAlign === 'bottom') {
      textY = canvas.height - 60 * scale;
    } else {
      textY = canvas.height / 2;
    }

    ctx.fillText(text, textX, textY);

    if (withGrommets) {
      const margin = 20 * scale;
      const grommetsSpacing = 300;
      const grommetsRadius = 5 * scale;
      
      ctx.fillStyle = '#666';
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 2 * scale;
      
      const topBottomCount = Math.ceil(canvas.width / grommetsSpacing);
      for (let i = 0; i < topBottomCount; i++) {
        const x = margin + (i * grommetsSpacing);
        if (x <= canvas.width - margin) {
          ctx.beginPath();
          ctx.arc(x, margin, grommetsRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(x, canvas.height - margin, grommetsRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
      
      const leftRightCount = Math.ceil(canvas.height / grommetsSpacing);
      for (let i = 1; i < leftRightCount - 1; i++) {
        const y = margin + (i * grommetsSpacing);
        if (y <= canvas.height - margin) {
          ctx.beginPath();
          ctx.arc(margin, y, grommetsRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(canvas.width - margin, y, grommetsRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `banner-mockup-${w}x${h}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
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
                      className="border-2 border-gray-300 rounded-lg overflow-hidden relative"
                      style={{
                        backgroundColor: bgColor,
                        aspectRatio: width && height ? `${width} / ${height}` : '16 / 9',
                        minHeight: '300px',
                        padding: '20px',
                        ...getAlignStyle()
                      }}
                    >
                      {withGrommets && (
                        <svg 
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          style={{ padding: '20px' }}
                        >
                          {(() => {
                            const svgWidth = canvasRef.current?.clientWidth || 800;
                            const svgHeight = canvasRef.current?.clientHeight || 600;
                            const margin = 20;
                            const spacing = 100;
                            const grommets = [];
                            
                            for (let x = margin; x <= svgWidth - margin - 40; x += spacing) {
                              grommets.push(<circle key={`top-${x}`} cx={x} cy={margin} r="5" fill="#666" stroke="#999" strokeWidth="2" />);
                              grommets.push(<circle key={`bottom-${x}`} cx={x} cy={svgHeight - margin - 40} r="5" fill="#666" stroke="#999" strokeWidth="2" />);
                            }
                            
                            for (let y = margin + spacing; y <= svgHeight - margin - spacing - 40; y += spacing) {
                              grommets.push(<circle key={`left-${y}`} cx={margin} cy={y} r="5" fill="#666" stroke="#999" strokeWidth="2" />);
                              grommets.push(<circle key={`right-${y}`} cx={svgWidth - margin - 40} cy={y} r="5" fill="#666" stroke="#999" strokeWidth="2" />);
                            }
                            
                            return grommets;
                          })()}
                        </svg>
                      )}
                      <p 
                        style={{
                          color: textColor,
                          fontSize: `${fontSize}px`,
                          fontFamily: fontFamily,
                          textAlign: textAlign as any,
                          margin: 0,
                          width: textAlign === 'justify' ? '100%' : 'auto',
                          lineHeight: 1.4,
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        {text}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full mt-4"
                      onClick={downloadMockup}
                    >
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать макет (PNG)
                    </Button>
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