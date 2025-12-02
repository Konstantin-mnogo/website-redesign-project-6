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

const Signage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                  <Icon name="Gift" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-3">
                    При заказе вывески с подсветкой — <span className="font-semibold text-primary">дизайн-проект и визуализация бесплатно</span>. Вы увидите, как будет выглядеть вывеска на вашем здании до начала производства.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => setIsModalOpen(true)}>
                    Заказать световую вывеску
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Виды вывесок</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/3c5475cf-da15-4396-8615-b22a7a2a6993.jpg" 
                        alt="Объемные буквы на металлокаркасе"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Box" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Объемные буквы на металлокаркасе</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Классическое решение для фасадов. Буквы крепятся на металлическом каркасе, который может быть окрашен в нужный цвет. Хорошо подходят для практически любых надписей. Данный тип вывесок широко используется во всех регионах.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Высокая прочность и долговечность</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подходит для больших размеров</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Устойчивость к ветровым нагрузкам</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/c65bf7c2-c0d4-49e9-8588-1e6c8f21ece7.jpg" 
                        alt="Объемные буквы на подложке"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Square" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Объемные буквы на подложке</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Буквы монтируются на кассеты из композита. Смотрится современно и солидно, монтируется одним или несколькими блоками. Популярный выбор для офисных центров и торговых площадей.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Монтаж производится на фасад или металлокаркас</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Современный внешний вид</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подложка может быть в заводской краске или оклеен пленкой</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/d8859d49-8f73-407b-ba29-8614f45db616.jpg" 
                        alt="Объемные буквы на контурной подложке"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Объемные буквы на контурной подложке</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Подложка вырезается по контуру надписи или логотипа. Создаёт эффект "парящих" букв с элегантным акцентом. Отличное решение для брендов, которым нельзя использовать подложку, а важно сохранить фирменный стиль.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Элегантный и стильный дизайн</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Подчеркивает уникальность бренда</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Контурная подсветка по периметру</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/projects/820f24d3-2a0c-446f-996e-d0f46f8895f8/files/166cbb72-8897-4196-b59a-d81935575765.jpg" 
                        alt="Объемные буквы с подсветкой контражур"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Lightbulb" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Объемные буквы с подсветкой контражур</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Свечение идёт из-за букв, создавая эффектный световой ореол на стене. Смотрится роскошно в темное время суток и привлекает внимание. Топовое решение для ресторанов, отелей и премиум-брендов.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Эффектный световой ореол</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Оригинальный вид вывески</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Премиальный внешний вид</span>
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
                    <Icon name="Box" size={20} className="text-primary" />
                    Конструкции
                  </h3>
                  <p className="text-gray-700">
                    Создаём вывески любых форм и размеров — от тонких и элегантных до объёмных и заметных. Подбираем конструкцию под стиль вашего здания и бюджет.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Layers" size={20} className="text-primary" />
                    Материалы
                  </h3>
                  <p className="text-gray-700">
                    Широкий выбор цветов. Качественная заводская покраска или уф печать.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} className="text-primary" />
                    Подсветка
                  </h3>
                  <p className="text-gray-700">
                    Яркое и равномерное свечение без тёмных пятен. Ваша вывеска будет отлично видна и днём, и ночью. Подсветка потребляет мало энергии и служит долго.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    Производство
                  </h3>
                  <p className="text-gray-700">
                    Точная компьютерная резка для идеальных форм букв и логотипов. Широкий выбор цветов. Качественная заводская покраска или уф печать.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                    Электрика и защита
                  </h3>
                  <p className="text-gray-700">
                    Надёжная защита от влаги и перепадов напряжения. Внутрь не попадёт дождь или снег. При необходимости легко обслуживать — предусмотрены специальные люки.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Palette" size={20} className="text-primary" />
                    Цвет и контроль качества
                  </h3>
                  <p className="text-gray-700">
                    Покажем, как будет выглядеть вывеска на вашем здании ещё до изготовления. Точное совпадение цветов с вашим фирменным стилем. Проверяем подсветку перед установкой.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужна консультация?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Поможем выбрать оптимальный тип вывески под ваш бюджет и задачи
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
                    Сколько стоит вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Стоимость зависит от размера, типа конструкции, материалов и наличия подсветки. Простые объёмные буквы без подсветки — от 15 000 ₽. С подсветкой контражур — от 35 000 ₽. Для точного расчёта позвоните или оставьте заявку — подготовим коммерческое предложение.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Как долго изготавливается вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Стандартный срок — 7–14 рабочих дней с момента утверждения макета. Сложные конструкции с нестандартными элементами — до 21 дня. Если нужно срочно — отправьте заявку, постараемся помочь.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Нужно ли согласовывать вывеску?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, в большинстве случаев требуется согласование с администрацией города. Мы поможем собрать все необходимые документы и получить разрешение. Срок согласования — обычно 2–4 недели, зависит от региона.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Какую гарантию вы даёте?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    На изготовление и монтаж — 1 год. На светодиодные модули и блоки питания — 2 года. В течение гарантийного срока бесплатно устраняем любые неисправности, возникшие не по вине клиента.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли установить вывеску зимой?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, мы работаем круглый год. Монтаж возможен при температуре до -15°C. Используем специальные морозостойкие материалы и клеи. При очень низких температурах можем перенести монтаж на весну без доплаты.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько служит вывеска?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    При правильной эксплуатации — 5–10 лет. Светодиодная подсветка служит 50 000+ часов (около 10 лет при работе 12 часов в сутки). Рекомендуем раз в год проводить профилактику — мойку и проверку креплений.
                  </div>
                </details>
              </div>
            </div>

            <ServiceCards excludeService="signage" />
            
            <div className="mt-8" id="contact-form">
              <ServiceContactForm serviceName="Вывески и световые короба" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Заказать световую вывеску
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <ServiceContactForm 
              serviceName="Вывески и световые короба" 
              onSuccess={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signage;