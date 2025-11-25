import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const Transport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Брендирование транспорта" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Брендирование транспорта
            </h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Частичная оклейка коммерческих авто виниловой пленкой
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Наносим фирменную графику на коммерческий транспорт: логотипы, контактные данные, декоративные элементы и изображения на бортах и корме. Используем пленки, рассчитанные на эксплуатацию в погодных условиях и на мойках.
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
                    Литые пленки (для сложной геометрии), полимерные каландрированные (для плоских зон), перфопленка OneWay Vision на стекла, защитные ламинаты.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                    Подготовка
                  </h3>
                  <p className="text-gray-700">
                    Де-защита и обезжиривание ЛКП, точные шаблоны под марку/модель, цветопроба.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Printer" size={20} className="text-primary" />
                    Печать
                  </h3>
                  <p className="text-gray-700">
                    Экосольвент/латекс с высокой стойкостью, ламинация против УФ и абразива.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Сухой/влажный метод, прогрев и формовка, аккуратная подрезка по канту, соблюдение температурного режима.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    Эксплуатация
                  </h3>
                  <p className="text-gray-700">
                    Срок службы 3–5 лет (в зависимости от пленки), безопасное снятие без следов, рекомендации по уходу.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Юридические ограничения
                  </h3>
                  <p className="text-gray-700">
                    Учитываем в дизайне (область остекления, цвета, светоотражающие элементы — по запросу).
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

export default Transport;