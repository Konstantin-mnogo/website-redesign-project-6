import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Installation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-4">
                    При заказе полного цикла (производство + монтаж) — <span className="font-semibold text-primary">бесплатно установим фотореле "день/ночь"</span>. Установим качественно и безопасно.
                  </p>
                  <Button size="default" className="shadow-lg w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
                    Получить расчет
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды монтажных работ</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/montage.jpg" 
                        alt="Фасадный монтаж световой вывески автомойки FoamTime на кирпичной стене"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Building" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Фасадный монтаж вывесок</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Установка вывесок, объёмных букв и световых коробов на фасадах зданий. Используем прочные крепления с усилением. Подбираем крепёж под материал стены (кирпич, бетон, сэндвич-панели). Вывеска надёжно держится даже при сильном ветре.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Прочные крепления</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подбор под тип стены</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Ветроустойчивость</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/visota.jpg" 
                        alt="Высотные работы по монтажу вывески на многоэтажном здании"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="TrendingUp" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Высотные работы</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Монтаж на высоких зданиях с использованием специальных автовышек и кранов. Используем страховочное оборудование. Огораживаем рабочую зону внизу. Работаем безопасно и быстро.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Монтаж с вышек 15-50 м</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Страховочное оборудование</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Спецтехника</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/electromontage.jpg" 
                        alt="Электромонтаж и установка вывески у входа в здание"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Zap" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Электромонтаж и подсветка</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Подключение подсветки вывесок и световых коробов к электросети. Прокладываем кабель скрыто или в кабель-каналах. Устанавливаем защиту от влаги и короткого замыкания. Можем установить таймер или фотореле для автоматического включения/выключения. Работы по электрике выполняют опытные электрики.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Опытные электрики</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Защита от влаги</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Автоматическое управление</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/test-service.jpg" 
                        alt="Техническое обслуживание и ремонт световых вывесок с автовышки"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Shield" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Тестирование и сервисное обслуживание</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        После установки проверяем работу подсветки, надёжность креплений и качество монтажа. Делаем фотоотчёт. Даём гарантию на монтажные работы. Предлагаем сервисное обслуживание: регулярную проверку, мойку, замену светодиодов. Вывеска всегда будет выглядеть отлично.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Проверка после установки</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Гарантия на монтаж</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Сервисное обслуживание</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Этапы монтажных работ</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="ClipboardCheck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 1</span>
                        <h3 className="font-bold text-lg">Выезд и осмотр</h3>
                      </div>
                      <p className="text-gray-700">
                        Выезжаем на объект, оцениваем тип фасада, измеряем место установки. Определяем точки крепления и подбираем необходимый крепёж.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="FileText" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 2</span>
                        <h3 className="font-bold text-lg">Подготовка документов</h3>
                      </div>
                      <p className="text-gray-700">
                        Согласовываем план монтажа с вами. Подготавливаем технические схемы крепления и график работ. Обсуждаем все детали установки.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="Wrench" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 3</span>
                        <h3 className="font-bold text-lg">Установка креплений</h3>
                      </div>
                      <p className="text-gray-700">
                        Бурим отверстия, устанавливаем прочные анкеры и кронштейны. Проверяем надёжность каждого крепления перед установкой вывески.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="Package" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 4</span>
                        <h3 className="font-bold text-lg">Монтаж вывески</h3>
                      </div>
                      <p className="text-gray-700">
                        Аккуратно поднимаем вывеску на высоту и закрепляем на кронштейнах. Выравниваем по уровню и окончательно фиксируем.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 5</span>
                        <h3 className="font-bold text-lg">Подключение электрики</h3>
                      </div>
                      <p className="text-gray-700">
                        Прокладываем кабель скрытно, устанавливаем защиту от влаги. Подключаем блок питания и фотореле для автоматического включения.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Icon name="CheckCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">Этап 6</span>
                        <h3 className="font-bold text-lg">Проверка и сдача</h3>
                      </div>
                      <p className="text-gray-700">
                        Тестируем подсветку, проверяем надёжность креплений. Делаем фотоотчёт и передаём гарантийные документы.
                      </p>
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
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                    Подготовка
                  </h3>
                  <p className="text-gray-700">
                    Приезжаем на объект, оцениваем фасад, подбираем надёжный крепёж. Составляем план работ для быстрого и безопасного монтажа.
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
                    Подключаем электричество аккуратно и надёжно. Подсветка работает даже в дождь. При желании устанавливаем таймер — вывеска включается и выключается автоматически.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Высотные работы
                  </h3>
                  <p className="text-gray-700">
                    Устанавливаем вывеску на высоте безопасно. Используем спецтехнику и страховку. Ограждаем рабочую зону для защиты людей.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileCheck" size={20} className="text-primary" />
                    Контроль и отчетность
                  </h3>
                  <p className="text-gray-700">
                    После установки предоставляем фотоотчёт и все документы. Консультируем по уходу за вывеской для долгого срока службы.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Сервис
                  </h3>
                  <p className="text-gray-700">
                    Даём гарантию на монтаж. Предоставляем регулярное обслуживание: проверка вывески, мойка, контроль креплений. Вывеска всегда выглядит отлично.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужен качественный монтаж?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Устанавливаем вывески безопасно и аккуратно на любой высоте
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
                    Сколько стоит монтаж вывески?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Цена зависит от высоты, сложности конструкции и наличия электрики. Простой монтаж на высоте до 3 м — от 3 000 ₽. Высотные работы (3–10 м) — от 8 000 ₽. С использованием автовышки или крана — от 15 000 ₽. Электромонтаж с подключением — от 5 000 ₽.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как быстро можете установить вывеску?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Простая вывеска без подсветки — за 1 день. С подсветкой и подключением электричества — 1–2 дня. Сложные конструкции на большой высоте — 2–3 дня. Зависит от погодных условий и сложности фасада.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Работаете ли в выходные и праздники?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, можем установить вывеску в выходные или праздничные дни. Это удобно, если не хотите останавливать работу офиса или магазина. Необходимо забронировать заранее.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Какую гарантию даёте на монтаж?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Гарантия на монтажные работы — 1 год. На электромонтаж — 2 года. Гарантия покрывает: надёжность креплений, качество электрических соединений, работу подсветки. В течение гарантийного срока бесплатно устраняем любые дефекты монтажа.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько кВт потребляют вывески?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    В вывесках со светодиодной подсветкой устанавливаются энергоэффективные компоненты. Потребление таких вывесок крайне невысокое. Небольшая вывеска из объёмных букв размером 300х40 см потребляет 60-100 Вт.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="installation" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Монтаж и установка" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <ServiceContactForm 
            serviceName="Монтаж и установка" 
            onSuccess={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Installation;