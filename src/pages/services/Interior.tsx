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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                  <Icon name="Gift" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-3">
                    При заказе комплексного оформления офиса — <span className="font-semibold text-primary">замер и дизайн-проект бесплатно</span>. Работаем без остановки бизнес-процессов, устанавливаем вечером или в выходные.
                  </p>
                  <p className="text-sm text-gray-600">
                    Акция действует до конца месяца
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды информационных стендов</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/a3a803e5-66e7-46f8-b511-695b0518fa3c.jpg" 
                        alt="Напольные стенды"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Clipboard" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Напольные стенды с карманами</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Классические стойки для выставок, офисов и торговых залов. Оснащены карманами для листовок форматов А5, А4, А3 и А2. Устойчивые, мобильные, легко переставляются. Идеальны для зон ожидания, ресепшн и презентаций.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Несколько карманов для разных материалов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Легко перемещать и переставлять</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Устойчивая конструкция</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/f323dd20-cfd0-4147-8f48-582fee4a6e86.jpg" 
                        alt="Настольные стенды"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Smartphone" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Настольные стенды</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Компактные информационные держатели для визиток, прайс-листов и буклетов. Размещаются на стойках регистрации, столах менеджеров, кассах. Занимают минимум места, всегда на виду у клиента.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Компактный размер</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Идеально для прайсов и визиток</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Удобно для зоны ресепшн</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/7e735892-a1bf-463e-a75f-2ff14a320b4d.jpg" 
                        alt="Настенные стенды"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="SquareStack" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Настенные информационные панели</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Крепятся на стену, экономят место. Отлично подходят для коридоров, холлов и переговорных. Могут быть с рамками для быстрой смены информации или с карманами для документов. Профессиональный вид для офисов.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Экономия пространства</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Быстрая замена информации</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подходит для узких помещений</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/8677186a-58e5-4417-949b-b88b7841a504.jpg" 
                        alt="Уличные стенды"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="CloudSun" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Уличные стенды</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Защищённые от дождя, снега и ветра. Изготовлены из влагостойких материалов с UV-защитой от выгорания. Используются для рекламы, меню кафе, анонсов мероприятий. Могут иметь освещение для работы в тёмное время суток.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Защита от влаги и УФ-лучей</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Возможна подсветка</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Всепогодное использование</span>
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
                    Да, мы изготавливаем стенды по индивидуальным размерам. Можно выбрать любой формат, расположение и количество карманов. Покажем макет до изготовления. Срок изготовления нестандартных стендов — 5–7 рабочих дней.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как ухаживать за стендом?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Протирайте поверхность влажной тканью раз в 1–2 недели. Не используйте абразивные средства. Карманы можно мыть мыльным раствором. Раз в месяц проверяйте крепления карманов и устойчивость конструкции. При правильном уходе стенд служит 5+ лет.
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
    </div>
  );
};

export default Interior;