import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Реклама, которая работает на вас
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Изготовление и монтаж наружной и интерьерной рекламы в Благовещенске и Амурской области
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-secondary hover:bg-primary hover:text-white transition-colors text-lg px-8 py-6" asChild>
              <a href="/calculator">
                Рассчитать стоимость
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6" asChild>
              <a href="#portfolio">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;