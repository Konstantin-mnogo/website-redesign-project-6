import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      <section id="testimonials" className="py-20 bg-muted/30">
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