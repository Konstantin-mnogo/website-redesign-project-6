import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCountUp } from "@/hooks/useCountUp";
import CalculatorsBlockSection from "./CalculatorsBlockSection";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "Store",
    title: "Вывески и световые короба",
    description: "Объёмные буквы, светодиодные вывески, брендирование фасадов",
    path: "/signage"
  },
  {
    icon: "Home",
    title: "Интерьерная реклама",
    description: "Оформление офисов, навигация, информационные стенды",
    path: "/interior"
  },
  {
    icon: "Truck",
    title: "Брендирование транспорта",
    description: "Частичная оклейка коммерческих авто виниловой плёнкой",
    path: "/transport"
  },
  {
    icon: "Flag",
    title: "Баннеры и штендеры",
    description: "Широкоформатная печать, мобильные рекламные конструкции",
    path: "/banners"
  },
  {
    icon: "PenTool",
    title: "Разработка дизайна",
    description: "Разработка дизайна и согласование вывесок в администрации. Создание макетов, фирменный стиль",
    path: "/design"
  },
  {
    icon: "Wrench",
    title: "Монтаж и установка",
    description: "Профессиональный монтаж рекламных конструкций",
    path: "/installation"
  }
];

const advantages = [
  { number: 11, suffix: "+", text: "лет на рынке" },
  { number: 3, suffix: " года", text: "гарантия на продукцию" },
  { number: 2000, suffix: "+", text: "реализованных проектов" }
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
    name: "Новый клиент",
    company: "Источник: 2ГИС",
    text: "Ребята вернули мне веру в качественный сервис в Благовещенске. Обратился за оформлением филиала. Без лишних вопросов, все четко, быстро, качественно. И главное - более чем приемлемая стоимость. Дважды рекомендую! Впредь только сюда. Спасибо вам!",
    rating: 5
  }
];

const AdvantageCounter = ({ number, suffix, text }: { number: number; suffix: string; text: string }) => {
  const { count, ref } = useCountUp({ end: number, duration: 2000 });
  
  return (
    <div ref={ref} className="text-center animate-fade-in">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-3 animate-scale-in">
        {count}{suffix}
      </div>
      <div className="text-lg text-white/90">{text}</div>
    </div>
  );
};

const ContentSections = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-muted/30 scroll-mt-24">
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
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary h-full flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Link to={service.path}>
                    <button className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      Подробнее
                      <Icon name="ArrowRight" size={20} />
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CalculatorsBlockSection />

      <section id="portfolio" className="py-20 scroll-mt-24 bg-muted/30">
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

      <section id="advantages" className="py-20 bg-secondary text-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {advantages.map((adv, index) => (
              <AdvantageCounter 
                key={index}
                number={adv.number}
                suffix={adv.suffix}
                text={adv.text}
              />
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

      <section id="testimonials" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonial === index;
              const shortText = testimonial.text.slice(0, 100) + (testimonial.text.length > 100 ? '...' : '');
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedTestimonial(isExpanded ? null : index)}
                >
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{isExpanded ? testimonial.text : shortText}"
                    </p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-3xl mx-auto">
            <a 
              href="https://yandex.ru/maps/org/grafika/174016296824/reviews/?ll=127.518262%2C50.277776&z=16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group flex-1"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.9 16.5h-2.6V7.8c0-1.5-.9-2.3-2.1-2.3-.9 0-1.5.5-1.8 1.2v9.8H6.8V5.2h2.6v1.1c.6-.8 1.5-1.3 2.7-1.3 2.1 0 3.8 1.5 3.8 4.2v7.3z"/>
              </svg>
              <span className="font-medium group-hover:text-primary transition-colors">Отзывы на Яндекс.Картах</span>
            </a>
            <a 
              href="https://2gis.ru/blagoveshchensk/firm/70000001007430376/tab/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group flex-1"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <span className="font-medium group-hover:text-primary transition-colors">Отзывы на 2ГИС</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;