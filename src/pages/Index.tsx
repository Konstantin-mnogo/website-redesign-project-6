import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [calcWidth, setCalcWidth] = useState<string>("");
  const [calcHeight, setCalcHeight] = useState<string>("");
  const [calcType, setCalcType] = useState<string>("световой-короб");
  const [calcMaterial, setCalcMaterial] = useState<string>("акрил");
  const [calcLighting, setCalcLighting] = useState<boolean>(true);
  const [calcInstallation, setCalcInstallation] = useState<boolean>(true);
  
  const [standWidth, setStandWidth] = useState<string>("");
  const [standHeight, setStandHeight] = useState<string>("");
  const [standThickness, setStandThickness] = useState<string>("3");
  const [standPockets, setStandPockets] = useState<string>("1");
  const [standPrinting, setStandPrinting] = useState<boolean>(true);
  const [standMounting, setStandMounting] = useState<boolean>(false);
  

  
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
  

  const services = [
    {
      icon: "Store",
      title: "Вывески и световые короба",
      description: "Объёмные буквы, светодиодные вывески, брендирование фасадов"
    },
    {
      icon: "Home",
      title: "Интерьерная реклама",
      description: "Оформление офисов, навигация, информационные стенды"
    },
    {
      icon: "Truck",
      title: "Брендирование транспорта",
      description: "Полная или частичная оклейка авто виниловой плёнкой"
    },
    {
      icon: "Flag",
      title: "Баннеры и штендеры",
      description: "Широкоформатная печать, мобильные рекламные конструкции"
    },
    {
      icon: "PenTool",
      title: "Разработка дизайна",
      description: "Создание макетов, фирменный стиль, 3D-визуализация"
    },
    {
      icon: "Wrench",
      title: "Монтаж и установка",
      description: "Профессиональный монтаж конструкций любой сложности"
    }
  ];

  const advantages = [
    { number: "15+", text: "лет на рынке" },
    { number: "2000+", text: "реализованных проектов" },
    { number: "До 3 лет", text: "гарантия на продукцию" },
    { number: "100%", text: "качество работ" }
  ];

  const portfolio = [
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/1.jpg",
      title: "Вывески и световые короба"
    },
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/IMG_8845.jpg",
      title: "Наружная реклама"
    },
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/P1080261.jpg",
      title: "Брендирование транспорта"
    },
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/P1080291.jpg",
      title: "Объёмные буквы"
    },
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/DSC_0017.jpg",
      title: "Интерьерная реклама"
    },
    {
      image: "http://www.ragrafika.ru/wp-content/uploads/2018/12/IMG_9049.jpg",
      title: "Баннеры и вывески"
    }
  ];

  const testimonials = [
    {
      name: "Клиент компании",
      company: "Источник: 2ГИС",
      text: "Отличная компания, работал с сотрудниками по удалёнке, приятное общение, всегда обратная связь. Заказ выполнили в кратчайшие сроки, на протяжении всего времени изготовления рекламной вывески приходили фото отчёты с комментариями, отличное качество, с данным агентством буду сотрудничать далее, всем очень доволен.",
      rating: 5
    },
    {
      name: "Постоянный клиент",
      company: "Источник: 2ГИС",
      text: "Сотрудничаем с данной фирмой очень давно. Качество материалов на высоте. Цены очень конкурентоспособны. Очень радует обратная связь и взаимодействие с заказчиком.",
      rating: 5
    },
    {
      name: "Гостиница",
      company: "Источник: 2ГИС",
      text: "Хочу выразить благодарность компании графика! Обратились в компанию для изготовления баннера, режимника, визиток для гостиницы и не прогадали, всё сделали на высшем уровне. Предложили макеты на выбор, понравились все. Очень яркие красивые! Отдельная благодарность дизайнеру Софии, подошла к работе со всей душой. РЕКОМЕНДУЮ!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button size="lg" className="hidden sm:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="lg" variant="ghost" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="#advantages" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button size="lg" className="mt-4">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Реклама, которая работает на вас
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Изготовление и монтаж наружной и интерьерной рекламы в Благовещенске
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр рекламных услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{adv.number}</div>
                <div className="text-lg text-white/90">{adv.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Профессионализм</h3>
                <p className="text-white/80">Опытные специалисты с портфолио более 2000 проектов</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Точные сроки</h3>
                <p className="text-white/80">Выполняем заказы в оговоренные сроки без задержек</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Гарантия</h3>
                <p className="text-white/80">Предоставляем официальную гарантию на все работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости вывески</h2>
              <p className="text-lg text-muted-foreground">
                Рассчитайте примерную стоимость вашей вывески онлайн
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
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
                      <p className="text-xs text-muted-foreground">
                        * Точная стоимость рассчитывается индивидуально
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости вывески</h2>
              <p className="text-lg text-muted-foreground">
                Рассчитайте примерную стоимость вашей вывески онлайн
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
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
                      <p className="text-xs text-muted-foreground">
                        * Точная стоимость рассчитывается индивидуально
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами для бесплатной консультации и расчёта стоимости
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-white/80">+7 (XXX) XXX-XX-XX</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-white/80">info@grafika.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p className="text-white/80">г. Благовещенск</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Textarea 
                    placeholder="Расскажите о вашем проекте" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
                  />
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
                alt="Графика" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Профессиональное изготовление рекламной продукции в Благовещенске
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors">Услуги</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-primary transition-colors">Портфолио</a>
                <a href="#advantages" className="block text-gray-400 hover:text-primary transition-colors">Преимущества</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-primary transition-colors">Отзывы</a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@grafika.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Благовещенск
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Графика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
                          <span className="font-medium">15 000 ₽/м²</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Коэффициент материала:</span>
                          <span className="font-medium">×{materialCoefficients[calcMaterial]}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Коэффициент типа:</span>
                          <span className="font-medium">×{typeCoefficients[calcType]}</span>
                        </p>
                        {calcLighting && (
                          <p className="flex justify-between">
                            <span>Подсветка:</span>
                            <span className="font-medium">+2 000 ₽/м²</span>
                          </p>
                        )}
                        {calcInstallation && (
                          <p className="flex justify-between">
                            <span>Монтаж:</span>
                            <span className="font-medium">+1 500 ₽/м²</span>
                          </p>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        * Точная стоимость рассчитывается индивидуально
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={5} />
                  </div>
                  <Button size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (4162) 123-456</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ragrafika.ru</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Благовещенск, ул. Забурхановская 98</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <a 
                href="https://2gis.ru/blagoveshchensk/firm/70000001018537192" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Icon name="MapPin" size={20} className="text-primary" />
                <span className="font-medium">Отзывы на 2ГИС</span>
              </a>
              <a 
                href="https://yandex.ru/maps/org/grafika/1264341606/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Icon name="Star" size={20} className="text-primary" />
                <span className="font-medium">Отзывы на Яндекс</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
                alt="Графика" 
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">© 2024 Рекламное агентство «Графика»</p>
              <p className="text-white/60 text-sm mt-1">Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;