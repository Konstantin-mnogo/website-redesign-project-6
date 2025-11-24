import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const calculators = [
  {
    icon: "Store",
    title: "Калькулятор вывесок",
    description: "Рассчитайте стоимость световых коробов и объёмных букв",
    link: "/calculator#signage"
  },
  {
    icon: "Clipboard",
    title: "Калькулятор информационных стендов",
    description: "Узнайте цену на инфостенды с карманами для буклетов",
    link: "/calculator#stand"
  },
  {
    icon: "Type",
    title: "Калькулятор объёмных букв",
    description: "Рассчитайте стоимость объёмных букв для павильонов НТО",
    link: "/calculator#volume"
  }
];

const CalculatorsBlockSection = () => {
  return (
    <section id="calculators" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн калькуляторы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте стоимость рекламной продукции прямо сейчас
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {calculators.map((calculator, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 border-2 hover:border-primary flex flex-col h-full"
            >
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 ease-out">
                  <Icon name={calculator.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">{calculator.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{calculator.description}</p>
                <Button asChild className="w-full group-hover:shadow-lg transition-all duration-500">
                  <a href={calculator.link}>
                    Рассчитать
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalculatorsBlockSection;