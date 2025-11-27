import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";

const Signage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Вывески и световые короба" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Вывески и световые короба
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Изготавливаем фасадные вывески, объемные буквы и световые короба любой сложности — от лаконичных до премиальных решений. Подбираем конструкцию под архитектуру фасада и требования законодательства, обеспечиваем равномерную подсветку и долговечность.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Box" size={20} className="text-primary" />
                    Конструкции
                  </h3>
                  <p className="text-gray-700">
                    Короба формата «крышка-дно», slim lightbox, панель-кронштейны, инкрустация по композиту.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Layers" size={20} className="text-primary" />
                    Материалы
                  </h3>
                  <p className="text-gray-700">
                    Алюминиевый профиль, алюминиевые композитные панели (АКП), акрил (PMMA), поликарбонат, ПВХ.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} className="text-primary" />
                    Подсветка
                  </h3>
                  <p className="text-gray-700">
                    Светодиодные модули класса A, контражур (backlight), фронтальная/контурная подсветка, гибкий неон.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    Производство
                  </h3>
                  <p className="text-gray-700">
                    ЧПУ-фрезерование и лазерная резка, гибка, покраска по RAL, УФ-печать, аккуратная сборка.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Электрика и защита
                  </h3>
                  <p className="text-gray-700">
                    Блоки питания с запасом, герметизация IP65–67, дренаж, сервисные лючки.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Palette" size={20} className="text-primary" />
                    Цвет и контроль качества
                  </h3>
                  <p className="text-gray-700">
                    Цветопрофилирование под Pantone/RAL, тестовая подсветка, фото-визуализации на фасаде до запуска в производство.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            <ServiceCards excludeService="signage" />
            
            <div className="mt-8">
              <ServiceContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signage;