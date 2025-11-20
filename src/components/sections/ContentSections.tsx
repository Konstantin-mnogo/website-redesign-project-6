import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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
  { number: "11+", text: "лет на рынке" },
  { number: "до 3-х лет", text: "гарантия на продукцию" },
  { number: "2000+", text: "реализованных проектов" }
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

const ContentSections = () => {
  return (
    <>
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
          <div className="grid md:grid-cols-3 gap-12">
            {advantages.map((adv, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 animate-scale-in">
                  {adv.number}
                </div>
                <div className="text-lg text-white/90">{adv.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="CheckCircle2" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Согласуем вывеску</h3>
                <p className="text-white/80">Поможем с согласованием и оформлением документов</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">К вывеске подарим режим работы</h3>
                <p className="text-white/80">Бесплатная табличка с режимом работы к каждой вывеске</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Workflow" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Разработаем → изготовим → смонтируем</h3>
                <p className="text-white/80">Полный цикл работ от идеи до установки</p>
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
    </>
  );
};

export default ContentSections;