import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const Banners = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Баннеры и штендеры" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Баннеры и штендеры
            </h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Широкоформатная печать, мобильные рекламные конструкции
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Изготавливаем баннеры для фасадов, интерьеров и мероприятий, а также мобильные конструкции для быстрой смены рекламных сообщений.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-primary" />
                    Материалы
                  </h3>
                  <p className="text-gray-700">
                    Баннерная ткань 440/510 г/м², blockout, сетка mesh, тканевые полотна.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Printer" size={20} className="text-primary" />
                    Печать
                  </h3>
                  <p className="text-gray-700">
                    Экосольвент/латекс/УФ, разрешение под задачу (наружная/интерьерная), цветопрофилирование.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Scissors" size={20} className="text-primary" />
                    Послепечатная обработка
                  </h3>
                  <p className="text-gray-700">
                    Сварка/проклейка краев, люверсы, карманы под трубу, усиление углов.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Smartphone" size={20} className="text-primary" />
                    Мобильные системы
                  </h3>
                  <p className="text-gray-700">
                    Roll‑up, X/L‑banner, pop‑up, press‑wall, флаги, уличные штендеры (А‑стойки, snap‑frame, двухсторонние).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Box" size={20} className="text-primary" />
                    Конструктив
                  </h3>
                  <p className="text-gray-700">
                    Алюминий/сталь с порошковой окраской, утяжелители для улицы, чехлы для перевозки.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Установка на фасады и на ваши конструкции, оперативная смена полотен.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex-1">
                <a href="tel:+74162227678">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <a href="https://wa.me/74162227678" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Banners;