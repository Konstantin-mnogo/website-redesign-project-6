import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CalculatorSection from "@/components/sections/CalculatorSection";
import Footer from "@/components/Footer";

const Calculator = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center flex-shrink-0">
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-6 xl:gap-8 flex-1 justify-center">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Главная</a>
            <a href="/#services" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Услуги</a>
            <a href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Портфолио</a>
            <a href="/#advantages" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Преимущества</a>
            <a href="/calculator" className="text-sm font-medium text-primary whitespace-nowrap">Калькуляторы</a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Отзывы</a>
            <a href="/#contacts" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Контакты</a>
          </nav>
          <div className="flex items-center gap-3 flex-shrink-0 relative z-[60]">
            <Button size="lg" className="hidden md:flex" asChild>
              <a href="tel:+74162227678">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 (4162) 22-76-78
              </a>
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
                    href="/" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                  <a 
                    href="/#services" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="/#portfolio" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="/#advantages" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="/calculator" 
                    className="text-lg font-medium text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькуляторы
                  </a>
                  <a 
                    href="/#testimonials" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="/#contacts" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button size="lg" className="mt-4" asChild>
                    <a href="tel:+74162227678">
                      <Icon name="Phone" size={18} className="mr-2" />
                      +7 (4162) 22-76-78
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="pt-20">
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">Калькуляторы</span>
            </nav>
          </div>
        </div>
        <CalculatorSection />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;