import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { path: "/signage", label: "Вывески и световые короба" },
    { path: "/interior", label: "Интерьерная реклама" },
    { path: "/transport", label: "Брендирование транспорта" },
    { path: "/banners", label: "Баннеры и штендеры" },
    { path: "/design", label: "Разработка дизайна" },
    { path: "/installation", label: "Монтаж и установка" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-4 flex-1 justify-end">
          <a 
            href="https://wa.me/79656713170" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="Написать в WhatsApp"
          >
            <Icon name="MessageCircle" size={20} />
          </a>
          <a 
            href="https://t.me/ragrafika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="Написать в Telegram"
          >
            <Icon name="Send" size={20} />
          </a>
          <a 
            href="https://max.ru/u/f9LHodD0cOKASB-ZXfa0KQeVeidCfM-E7__-QVbgfFavZQs-CtbluHz4ajU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#FF4D00] hover:bg-[#E64400] text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
            title="Написать в МАХ"
          >
            <Icon name="MessageSquare" size={20} />
          </a>
          <a 
            href="tel:+74162227678"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
          >
            <Icon name="Phone" size={18} />
            8 (4162) 22-76-78
          </a>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button size="lg" variant="ghost">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <nav className="flex flex-col gap-6 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </Link>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-500 mb-3">Услуги</p>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-base hover:text-primary transition-colors mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/calculator" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Калькуляторы
                </Link>
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
                  href="/#testimonials" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="/#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;