import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const industries = [
  {
    icon: "Music",
    title: "Клубы",
    description: "Световые вывески и неоновый декор для ночных клубов"
  },
  {
    icon: "Coffee",
    title: "Кафе и рестораны",
    description: "Вывески, меню-борды и интерьерное оформление"
  },
  {
    icon: "Wrench",
    title: "Автосервисы",
    description: "Вывески и навигация для СТО и автомоек"
  },
  {
    icon: "Car",
    title: "Автосалоны",
    description: "Брендирование фасадов и интерьеров"
  },
  {
    icon: "Dumbbell",
    title: "Фитнес-центры",
    description: "Световые вывески и навигация в спортклубах"
  },
  {
    icon: "Utensils",
    title: "Рестораны",
    description: "Вывески, световые короба и меню-панели"
  },
  {
    icon: "Compass",
    title: "Турагентства",
    description: "Яркие вывески и информационные стенды"
  },
  {
    icon: "GraduationCap",
    title: "Учебные заведения",
    description: "Навигация, стенды и табличи для школ и вузов"
  },
  {
    icon: "MapPin",
    title: "Медучреждения",
    description: "Вывески, навигация и информационные стенды"
  },
  {
    icon: "Cigarette",
    title: "Кальянные",
    description: "Неоновые вывески и атмосферное оформление"
  },
  {
    icon: "Hotel",
    title: "Отели",
    description: "Вывески, навигация и информационные стенды"
  },
  {
    icon: "ShoppingBag",
    title: "Торговые центры",
    description: "Навигация, вывески арендаторов и брендирование"
  },
  {
    icon: "Building2",
    title: "Банки",
    description: "Представительские вывески и интерьерное оформление"
  },
  {
    icon: "Flame",
    title: "Парикмахерские",
    description: "Световые вывески и интерьерные таблички"
  },
  {
    icon: "Sparkles",
    title: "Салоны красоты",
    description: "Вывески, неоновый декор и навигация"
  },
  {
    icon: "Tag",
    title: "Магазины",
    description: "Вывески, витринная реклама и ценники"
  },
  {
    icon: "Heart",
    title: "Аптеки",
    description: "Светодиодные кресты и информационные стенды"
  },
  {
    icon: "Landmark",
    title: "Госучреждения",
    description: "Представительские таблички и навигация"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Подберём вывеску для вашей сферы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работаем с любыми направлениями бизнеса — от небольших магазинов до крупных торговых центров
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={industry.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-sm">{industry.title}</h3>
                <p className="text-xs text-muted-foreground leading-tight">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Не нашли свою сферу? Мы работаем со всеми направлениями бизнеса
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Получить консультацию
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
