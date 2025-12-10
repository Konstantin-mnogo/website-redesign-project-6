import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Transport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Брендирование транспорта в Благовещенске | Оклейка авто пленкой | Графика</title>
        <meta name="description" content="Брендирование транспорта в Благовещенске и Свободном. Частичная оклейка коммерческих авто виниловой пленкой. Профессиональный монтаж. Долговечные материалы." />
        <meta name="keywords" content="брендирование транспорта Благовещенск, оклейка авто пленкой, реклама на транспорте, оклейка машин Благовещенск" />
        <link rel="canonical" href="https://ragrafika.ru/transport" />
        <meta property="og:title" content="Брендирование транспорта в Благовещенске | Оклейка авто" />
        <meta property="og:description" content="Частичная оклейка коммерческих авто виниловой пленкой. Профессиональный монтаж." />
        <meta property="og:url" content="https://ragrafika.ru/transport" />
      </Helmet>
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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-4">
                    При оклейке корпоративного автопарка (5+ авто) — <span className="font-semibold text-primary">скидка 10%</span>. Ваш автопарк станет узнаваемым на дорогах города.
                  </p>
                  <Button size="default" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
                    Заказать оклейку автомобиля
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды брендирования транспорта</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/okleika.jpg" 
                        alt="Частичная оклейка"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="PanelLeft" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Частичная оклейка</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Брендирование отдельных элементов: бортов, дверей, капота или задних крыльев. Размещаем логотип, контакты и короткий слоган. Оптимальное соотношение цены и эффективности. Популярный выбор для легкового транспорта.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Бюджетное решение</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Быстрое изготовление</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Лаконичный и читаемый дизайн</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/gruzovoi.jpg" 
                        alt="Оклейка грузовых авто"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Truck" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Оклейка грузовых авто</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Брендирование фургонов, газелей и малотоннажных грузовиков. Большая площадь бортов позволяет разместить подробную информацию: список услуг, контакты, преимущества. Идеально для служб доставки и перевозок.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Большая площадь для графики</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Реклама видна издалека</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подходит для доставки</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/perf-plenka.jpg" 
                        alt="Перфорированная плёнка на стёкла"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Eye" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Перфорированная плёнка на стёкла</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Специальная плёнка с микроотверстиями для задних и боковых стёкол. Снаружи видна яркая реклама, изнутри салона — хороший обзор. Расширяет рекламную площадь без ущерба для безопасности. Разрешена ПДД для задних стёкол.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Обзор изнутри сохраняется</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Дополнительная рекламная площадь</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Соответствует ПДД</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Технологии и особенности</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-primary" />
                    Материалы
                  </h3>
                  <p className="text-gray-700">
                    Используем прочные плёнки, которые хорошо держатся на поверхности. Не боятся моек, дождя и солнца.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                    Подготовка
                  </h3>
                  <p className="text-gray-700">
                    Тщательно моем и очищаем поверхность перед оклейкой. Делаем шаблоны точно под вашу модель машины. Проверяем цвета перед печатью, чтобы всё совпадало с вашим фирменным стилем.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Printer" size={20} className="text-primary" />
                    Печать
                  </h3>
                  <p className="text-gray-700">
                    Печатаем яркую графику, которая не выгорает на солнце.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Клеим аккуратно, без пузырей и складок. Прогреваем плёнку, чтобы она повторяла все изгибы кузова. Результат выглядит как заводская покраска.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    Эксплуатация
                  </h3>
                  <p className="text-gray-700">
                    Оклейка служит 1–5 лет. Можно спокойно мыть на автомойке.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Юридические ограничения
                  </h3>
                  <p className="text-gray-700">
                    Подскажем, куда можно клеить рекламу, чтобы не нарушить ПДД. Разместим дизайн так, чтобы не закрывать стёкла и номера. Можно добавить светоотражающие элементы.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Готовы сделать автопарк узнаваемым?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Расскажем о вариантах оклейки и подберём решение под ваш бюджет
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:+74162227678">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                    <a href="https://wa.me/79656713170" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden flex-col sm:flex-row gap-4 mb-8">
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

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Частые вопросы</h2>
              
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько стоит оклейка авто?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Частичная оклейка легкового авто — от 5 000 ₽. Полная оклейка грузового автомобиля — от 35 000 ₽. Перфорированная плёнка на стёкла — от 5 000 ₽. Точная цена зависит от модели авто, площади оклейки и сложности дизайна.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как долго держится плёнка на авто?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Качественная виниловая плёнка служит 3-5 лет. Не боится моек, дождя, снега и солнца. Можно мыть на автомойке (избегайте мойки высокого давления на краях плёнки). При правильной эксплуатации плёнка сохраняет яркость все это время.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли снять плёнку без повреждения краски?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, качественная плёнка снимается без повреждений. Нагреваем плёнку феном и аккуратно снимаем. Краска остаётся неповреждённой. Может остаться немного клея — убирается специальным очистителем. Важно: заводская краска должна быть в хорошем состоянии.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Нужно ли регистрировать рекламу на авто?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    По ПДД запрещено закрывать стёкла и номера. Реклама на бортах и дверях — разрешена. Если меняете цвет авто более чем на 50% — нужно внести изменения в ПТС. Простая рекламная оклейка без изменения цвета кузова — регистрации не требует.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько времени занимает оклейка?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Частичная оклейка легкового авто — 1-2 дня. Полная оклейка фургона — 1-5 дней. Включает подготовку (мойка, обезжиривание), наклейку и прогрев. После оклейки рекомендуем не мыть авто 2-3 дня для полной полимеризации клея.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="transport" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Брендирование транспорта" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Заказать оклейку автомобиля</DialogTitle>
          </DialogHeader>
          <ServiceContactForm serviceName="Брендирование транспорта" compact />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transport;