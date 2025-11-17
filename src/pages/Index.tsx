import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькуляторы</a>
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
                    href="#calculator" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькуляторы
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

      <HeroSection />
      <ContentSections />
      <CalculatorSection />
      <ContactSection />
    </div>
  );
};

export default Index;