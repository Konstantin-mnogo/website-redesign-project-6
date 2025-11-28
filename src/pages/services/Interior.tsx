import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";

const Interior = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Интерьерная реклама" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Интерьерная реклама
            </h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Оформление офисов, навигация, информационные стенды
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Оформляем офисные и торговые пространства: бренд‑зоны, ресепшн, переговорные, wayfinding. Делаем решение «под ключ» — от замера и дизайна до аккуратного монтажа без остановки работы офиса.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wallpaper" size={20} className="text-primary" />
                    Стены, стекло, мебель
                  </h3>
                  <p className="text-gray-700">
                    Оформляем стены и стеклянные перегородки вашим логотипом и фирменным стилем. Можно сделать прозрачными, матовыми или с изображением.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-primary" />
                    Жесткие носители
                  </h3>
                  <p className="text-gray-700">
                    Печатаем напрямую на материале и на пленке.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} className="text-primary" />
                    Световые решения
                  </h3>
                  <p className="text-gray-700">
                    Создаём светящиеся таблички и декоративные элементы. Можно сделать тонкие световые панели или гибкие неоновые надписи. Выглядит современно и привлекает внимание.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    Навигация
                  </h3>
                  <p className="text-gray-700">
                    Создадим удобную навигацию в офисе, бизнес-центре или торговом центре. Указатели на стенах, подвесные и напольные стойки. Можно легко менять информацию в рамках.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardList" size={20} className="text-primary" />
                    Информационные стенды и постеры
                  </h3>
                  <p className="text-gray-700">
                    Изготовим стенды с быстрой заменой информации. Подвесные системы для плакатов и рекламы.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Accessibility" size={20} className="text-primary" />
                    Дополнительные опции
                  </h3>
                  <p className="text-gray-700">
                    Сделаем таблички для людей с нарушением зрения — со шрифтом Брайля и объёмными знаками. Можно добавить антибликовое покрытие, чтобы таблички было легко читать.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Устанавливаем аккуратно, не повреждая ремонт. Выравниваем по лазерному уровню — всё будет ровно. Крепления можно сделать незаметными. Монтаж без пыли и грязи.
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

            <ServiceCards excludeService="interior" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Интерьерная реклама" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Interior;