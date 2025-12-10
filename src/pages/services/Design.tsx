import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Design = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Разработка дизайна и согласование вывесок в Благовещенске | Рекламное агентство Графика</title>
        <meta name="description" content="Профессиональная разработка дизайна вывесок, создание макетов и согласование в администрации. Полный цикл: от концепции до разрешительных документов. Согласование в подарок при комплексном заказе." />
        <meta name="keywords" content="разработка дизайна вывесок, согласование вывесок Благовещенск, макеты вывесок, фирменный стиль, 3D визуализация вывески, согласование рекламы" />
        <meta property="og:title" content="Разработка дизайна и согласование вывесок | Рекламное агентство Графика" />
        <meta property="og:description" content="Создаём концепции, визуализации и согласовываем вывески в Благовещенске. Полный цикл от идеи до документов." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ragrafika.ru/design" />
      </Helmet>
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
              Ведём проект от идеи до разрешительных документов. Разрабатываем фирменный стиль, макеты вывесок и подготавливаем комплект для согласования в администрации.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Icon name="Gift" size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Специальное предложение</h3>
                  <p className="text-gray-700 mb-4">
                    При заказе полного цикла (дизайн + производство + монтаж) — <span className="font-semibold text-red-600">согласование вывески в г. Благовещенск делаем в подарок.</span> Вы получите готовую вывеску со всеми разрешениями.
                  </p>
                  <Button size="default" className="shadow-lg w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
                    Получить расчет
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Этапы разработки дизайна</h2>
              
              <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/concept.jpg" 
                        alt="Концепция и эскизы дизайна вывески"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Lightbulb" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Концепция и эскизы</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Изучаем ваш бизнес, целевую аудиторию и конкурентов. Разрабатываем несколько концепций дизайна — от лаконичных до ярких. Показываем первые эскизы и обсуждаем с вами, какое направление лучше подходит.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Анализ бизнеса и аудитории</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>2-3 варианта концепции</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Первые эскизы и обсуждение</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/vizualizacia-2.jpg" 
                        alt="Пример 3D визуализации дизайна фасада и вывески магазина Дельта с зеленым брендингом днем и ночью, демонстрация концепции оформления фасада"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                        width="1080"
                        height="1080"
                        title="3D визуализация дизайна вывески и фасада здания днём и ночью"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Box" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Визуализация</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Создаём визуализацию — вы увидите, как будет выглядеть вывеска на вашем здании ещё до изготовления. Показываем, как работает подсветка днём и ночью. Можно внести правки до начала производства.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Фотопривязка к вашему фасаду</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Визуализация днём и ночью</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Возможность правок</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src="https://cdn.poehali.dev/files/soglasovanie.jpg?v=3" 
                        alt="Пример согласования дизайна вывески центра бытовых услуг Каролина: 3D визуализация фасада, технические чертежи и макеты для администрации"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                        width="1080"
                        height="1080"
                        title="Согласование дизайна вывески с визуализацией и чертежами"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Согласование вывесок</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Подготавливаем все необходимые эскизы для согласования. Собираем пакет документов для согласования с администрацией и получаем все разрешения. Вы получаете уведомление о согласовании вывески и разрешение на размещение.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Согласование в г. Благовещенск за 2 недели</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>Согласование в г. Свободный</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-600 flex-shrink-0" />
                          <span>В рамках действующего законодательства</span>
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

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 mb-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужен дизайн вывески?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Покажем, как будет выглядеть вывеска на вашем здании и поможем с согласованием
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
                    Сколько стоит разработка дизайна вывески?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Дизайн-макет с 1–2 вариантами — от 2 000 ₽. 3D-визуализация на вашем фасаде — от 3 000 ₽. Разработка полного фирменного стиля с брендбуком — от 25 000 ₽. При заказе полного цикла (дизайн + производство) — дизайн в подарок.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Сколько занимает согласование вывески?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Срок зависит от региона и сложности объекта. В среднем — 2–4 недели. Согласование в городах Благовещенск и Свободный срок согласования - до 4 недель. Мы поможем собрать все документы и подадим заявку. Можем сопровождать процесс от начала до конца.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Можно ли вносить правки в дизайн?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Да, правки возможны на любом этапе до утверждения макета. В стоимость включены 2–3 круга правок. Можно менять цвета, шрифты, расположение элементов. После утверждения и начала производства — изменения оплачиваются отдельно.
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-md group">
                  <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center">
                    Нужно ли предоставлять логотип?
                    <Icon name="ChevronDown" size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    Желательно предоставить логотип в векторном формате (CDR, AI, EPS, SVG). Если есть только растр (JPG, PNG) — можем перевести в вектор. Если логотипа нет — можем разработать с нуля. Также полезны фото фасада для визуализации.
                  </div>
                </details>


              </div>
            </div>

            <ServiceCards excludeService="design" />
            
            <div className="mt-8">
              <ServiceContactForm serviceName="Разработка дизайна" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Заказать вывеску и согласование</DialogTitle>
          </DialogHeader>
          <ServiceContactForm 
            serviceName="Дизайн и согласование вывески" 
            onSuccess={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Design;