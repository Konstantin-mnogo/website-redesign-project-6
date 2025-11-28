import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";

const Installation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: "Главная", path: "/" },
              { label: "Монтаж и установка" }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Монтаж и установка
            </h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Профессиональный монтаж рекламных конструкций
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Обеспечиваем безопасный и аккуратный монтаж на фасадах и внутри помещений, подключение электричества и последующее обслуживание.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                    Подготовка
                  </h3>
                  <p className="text-gray-700">
                    Приедем на место, оценим фасад, подберём надёжный крепёж. Составим план работ, чтобы монтаж прошёл быстро и безопасно.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Крепления
                  </h3>
                  <p className="text-gray-700">
                    Используем прочные крепления, которые выдерживают ветер и снег. Вывеска будет надёжно держаться на стене годами. При необходимости сделаем крепления незаметными.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Zap" size={20} className="text-primary" />
                    Электрика
                  </h3>
                  <p className="text-gray-700">
                    Подключим электричество аккуратно и надёжно. Подсветка будет работать даже в дождь. При желании установим таймер — вывеска будет включаться и выключаться автоматически.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Высотные работы
                  </h3>
                  <p className="text-gray-700">
                    Установим вывеску на высоте безопасно. Используем спецтехнику и страховку. Огородим рабочую зону, чтобы никто не пострадал.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileCheck" size={20} className="text-primary" />
                    Контроль и отчетность
                  </h3>
                  <p className="text-gray-700">
                    После установки предоставим фотоотчёт и все документы. Расскажем, как ухаживать за вывеской, чтобы она служила долго.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Сервис
                  </h3>
                  <p className="text-gray-700">
                    Дадим гарантию на монтаж. Можем регулярно проверять вывеску, мыть, менять перегоревшие лампочки, проверять крепления. Вывеска всегда будет выглядеть отлично.
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

            <ServiceCards excludeService="installation" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Монтаж и установка" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Installation;