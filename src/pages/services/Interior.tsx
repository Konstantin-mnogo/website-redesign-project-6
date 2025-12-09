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

const Interior = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              Оформляем офисные и торговые пространства: бренд-зоны, ресепшн, переговорные, навигацию. Делаем решение «под ключ» — от замера и дизайна до аккуратного монтажа без остановки работы офиса.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                  <Icon name="Gift" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-4">
                    При заказе комплексного оформления — <span className="font-semibold text-primary">скидка 10-15%</span>. Работаем без остановки бизнес-процессов, устанавливаем в согласованные сроки.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => setIsModalOpen(true)}>
                    Заказать расчет оформления
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды интерьерной рекламы</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/viveska-interer.jpg" 
                        alt="Интерьерная вывеска"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="PanelTop" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Интерьерные вывески</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Объёмные буквы и логотипы на стену для брендирования офиса, магазина или ресепшн. Изготавливаются из пластика, металла или дерева. Создают солидный имидж компании и помогают посетителям сразу понять, куда они попали. Крепятся на скрытый крепёж — выглядит аккуратно и стильно.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Объёмный эффект усиливает восприятие</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Различные материалы под любой стиль</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Идеально для зоны ресепшн</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/stendi.jpg" 
                        alt="Информационный стенд"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="SquareStack" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Информационные стенды</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Напольные и настенные конструкции для размещения информационных материалов в офисах, торговых центрах и на выставках. Оснащаются карманами для буклетов, прайс-листов и флаеров. Мобильные версии легко переставлять, настенные экономят место. Помогают посетителям быстро найти нужную информацию и создают профессиональный облик компании.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Напольные и настенные варианты</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Карманы для разных форматов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Легко обновлять материалы</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/svet-torg.jpg" 
                        alt="Световое торговое оборудование"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Lightbulb" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Световое торговое оборудование</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Подсвеченные витрины, лайтбоксы и LED-стеллажи для презентации товаров. Свет привлекает внимание и подчёркивает достоинства продукции. Используется в магазинах косметики, аптеках, ювелирных салонах. Работает от электросети, энергоэффективное LED-освещение.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Привлекает внимание покупателей</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Презентует товар выгодно</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Энергоэффективное LED</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/fotozona.jpg" 
                        alt="Фотозоны"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Camera" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Фотозоны</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Брендированные зоны для фото на мероприятиях, в магазинах и шоурумах. Баннеры с фирменным дизайном, объёмные логотипы, декоративные конструкции. Помогают посетителям делиться впечатлениями в соцсетях — бесплатная реклама вашего бренда. Устанавливаются быстро, подходят для событий и постоянного размещения.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Вирусный эффект в соцсетях</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Брендирование по вашему дизайну</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подходит для мероприятий и магазинов</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/neon.jpg" 
                        alt="Неоновые вывески"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Неоновые вывески</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Яркие светящиеся надписи и логотипы для баров, кафе, салонов красоты и современных офисов. Создаются из гибких LED-неоновых лент, которые безопаснее классического неона и потребляют меньше энергии. Излучают мягкое равномерное свечение, создают атмосферу и привлекают внимание. Можно изготовить любую форму, надпись или символ. Монтируются на стену, подвешиваются к потолку или устанавливаются на подставку.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Яркое равномерное свечение</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Любые формы и цвета</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Энергоэффективный LED-неон</span>
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

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужна консультация?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Поможем подобрать оптимальное решение для вашего офиса или торговой точки
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

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Частые вопросы</h2>
              
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько стоят информационные стенды?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Напольные стенды с карманами — от 3 500 ₽. Настольные мини-стенды — от 800 ₽. Настенные панели — от 2 500 ₽. Уличные стенды с защитой — от 8 000 ₽. Цена зависит от размера, материала и количества карманов.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли заказать стенд по своим размерам?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, мы изготавливаем стенды по индивидуальным размерам. Можно выбрать любой формат, расположение и количество карманов. Покажем макет до изготовления. Средний срок изготовления нестандартных стендов — 5–10 рабочих дней.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как ухаживать за стендом?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Протирайте поверхность влажной тканью по мере необходимости. Не используйте абразивные средства. Карманы можно мыть мыльным раствором. Периодически проверяйте крепления карманов и устойчивость конструкции. При правильном уходе стенд служит 5+ лет.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Есть ли готовые решения для офиса?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, у нас есть готовые комплекты для офисов разного размера. В комплект входят: стенд для зоны ожидания, настольные держатели для ресепшн, настенные панели для коридоров. При заказе комплекта — скидка 10%.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли заменить информацию в стенде?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, это основное преимущество стендов. В карманах можно менять листовки хоть каждый день. Для настенных панелей с рамками — просто открываете рамку и меняете лист. Никаких специальных навыков не нужно.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="interior" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Интерьерная реклама" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Заказать расчет оформления
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <ServiceContactForm 
              serviceName="Интерьерная реклама" 
              onSuccess={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Interior;