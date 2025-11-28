import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";

const Design = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Разработка дизайна" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Разработка дизайна и согласование вывесок
            </h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Создание макетов, фирменный стиль
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Ведем проект от идеи до разрешительных документов. Разрабатываем фирменный стиль, макеты вывесок и подготовим комплект для согласования в администрации.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Palette" size={20} className="text-primary" />
                    Дизайн
                  </h3>
                  <p className="text-gray-700">
                    Покажем, как будет выглядеть вывеска на вашем здании ещё до изготовления. Создадим несколько вариантов на выбор, чтобы вы выбрали идеальный.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Документация
                  </h3>
                  <p className="text-gray-700">
                    Подготовим все необходимые чертежи и схемы для производства. Рассчитаем размеры, подберём материалы, продумаем крепление и подсветку.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                    Паспорт и согласование
                  </h3>
                  <p className="text-gray-700">
                    Соберём все документы и согласуем вывеску с администрацией города. Вы получите все разрешения без лишних забот и походов по инстанциям.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Printer" size={20} className="text-primary" />
                    Препресс
                  </h3>
                  <p className="text-gray-700">
                    Подготовим дизайн так, чтобы печать и производство прошли без ошибок. Цвета будут такими, как вы задумали.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-primary" />
                    Фирменный стиль
                  </h3>
                  <p className="text-gray-700">
                    Создадим логотип и фирменный стиль, который запомнят клиенты. Подберём цвета и шрифты. Покажем, как использовать стиль на вывесках, транспорте и других материалах.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    Сроки
                  </h3>
                  <p className="text-gray-700">
                    Скажем сразу, сколько времени потребуется на разработку и согласование. Все зависит от сложности проекта и требований вашего города.
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
                <a href="https://wa.me/79656713170" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>

            <ServiceCards excludeService="design" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Разработка дизайна" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Design;