import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Banners = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                  <Icon name="Gift" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-4">
                    При заказе баннера с монтажем от 60 кв.м — <span className="font-semibold text-red-600">скидка на печать баннера 15%</span>. При заказе мобильного стенда "паук" или "роллап" - <span className="font-semibold text-red-600">каждый 10й стенд в подарок</span>.
                  </p>
                  <Button size="lg" className="shadow-lg" onClick={() => setIsDialogOpen(true)}>
                    Заказать расчет
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды баннеров и штендеров</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/360e1741-fa70-4e57-83fa-eaf9a7691738.jpg" 
                        alt="Фасадные баннеры"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Building" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Фасадные баннеры</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Большие рекламные баннеры для размещения на зданиях и заборах. Выдерживают сильный ветер, дождь и снег. Изготавливаются из прочного винила с усиленными краями и люверсами для крепления. Максимальная видимость рекламы.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Большая площадь покрытия</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Устойчивость к погоде</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Видно издалека</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/245166fc-24c2-4e2a-9e52-c332221e1190.jpg" 
                        alt="Roll-up стенды"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="ScrollText" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Roll-up стенды (Роллапы)</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Мобильные выдвижные стенды для выставок и презентаций. Баннер скручивается в компактный корпус с ручкой для переноски. Устанавливается быстро и без инструментов. Незаменимы для выставочных стендов и корпоративных мероприятий.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Легко перевозить</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Быстрая установка</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Можно менять полотно</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/7d993b20-7e69-4c6e-b6fb-40f9517a77f0.jpg" 
                        alt="X-баннеры"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Move" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">X-баннеры (Пауки)</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Лёгкие мобильные конструкции с натянутым баннером. Крестообразная рама из стеклопластика или алюминия. Ещё легче и бюджетнее roll-up. Отлично подходит для торговых точек, промо-акций и небольших мероприятий.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Минимальный вес</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Бюджетное решение</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Простая сборка</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/aff6b420-2090-4f9b-a9e7-456653590886.jpg" 
                        alt="Сетчатые баннеры"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Wind" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Сетчатые баннеры (Mesh)</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Баннеры с микроотверстиями, которые пропускают ветер. Устойчивы к сильным порывам ветра, не порвутся. Идеальны для строительных лесов, заборов и высотных фасадов. Сохраняют яркость цветов даже при длительном использовании.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Ветропроницаемость</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Высокая прочность</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Для строительных лесов</span>
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
                    Используем прочные материалы, которые не рвутся от ветра. Есть плотные, непрозрачные и сетчатые (пропускают ветер). Подбираем под задачу — для фасада, строительного забора или выставки.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Printer" size={20} className="text-primary" />
                    Печать
                  </h3>
                  <p className="text-gray-700">
                    Печатаем яркие изображения, которые видно издалека. Цвета не выгорают на солнце и не смываются дождём. Подбираем качество печати под задачу.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Scissors" size={20} className="text-primary" />
                    Послепечатная обработка
                  </h3>
                  <p className="text-gray-700">
                    Обрабатываем края, устанавливаем металлические кольца для крепления. Можно сделать карманы для трубы. Усиливаем углы, чтобы баннер служил дольше.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Smartphone" size={20} className="text-primary" />
                    Мобильные системы
                  </h3>
                  <p className="text-gray-700">
                    Предлагаем мобильные стойки для выставок и мероприятий. Роллапы и складные стенды — легко перевозить и устанавливать. Уличные штендеры для кафе и магазинов — можно легко менять рекламу.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Box" size={20} className="text-primary" />
                    Конструктив
                  </h3>
                  <p className="text-gray-700">
                    Используем прочные металлические каркасы с покрытием. Для уличных штендеров по запросу добавляем утяжелители, чтобы не упали от ветра.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Установим баннеры на фасад или забор. Можем быстро поменять изображение, когда нужно обновить рекламу.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужен баннер или штендер?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Поможем выбрать подходящий формат и изготовим в кратчайшие сроки
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
                    Сколько стоит баннер?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Цена зависит от размера и материала. Стандартный баннер 510 г/м² — от 450 ₽/м². Сетчатый баннер — от 550 ₽/м². Roll-up стенд (80×200 см) — от 4 500 ₽. X-баннер (60×160 см) — от 2 800 ₽. В цену входит печать, проварка швов и установка люверсов.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как быстро можно изготовить баннер?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Стандартный срок — 2–3 рабочих дня. Срочное изготовление — за 24 часа с доплатой 30%. Мобильные стенды (roll-up, X-баннер) — 1–2 дня. Для выставок и мероприятий можем сделать в суперсрочном режиме.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли использовать баннер повторно?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, баннеры можно использовать многократно. После мероприятия сворачивайте и храните в сухом месте. Рекомендуем хранить в трубе или чехле. Перед повторным использованием проверьте люверсы и состояние полотна. При бережном обращении баннер служит 2–3 года.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Чем отличаются roll-up и X-баннер?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Roll-up — более солидный и устойчивый, баннер скручивается в корпус. Подходит для презентаций и выставок. X-баннер (паук) — легче и дешевле, баннер натягивается на крестообразную рамку. Подходит для промо-акций и торговых точек. Оба варианта легко перевозить.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как ухаживать за баннером?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Протирайте влажной тканью при загрязнении. Не используйте агрессивные химикаты. При хранении избегайте перегибов и заломов. Уличные баннеры можно мыть из шланга. Проверяйте люверсы перед каждым использованием — при необходимости можно заменить.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="banners" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Баннеры и штендеры" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Заказать расчет</DialogTitle>
          </DialogHeader>
          <ServiceContactForm 
            serviceName="Баннеры и штендеры" 
            onSuccess={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Banners;