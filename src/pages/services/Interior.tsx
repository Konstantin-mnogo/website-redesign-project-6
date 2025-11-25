import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Breadcrumbs from "@/components/ui/breadcrumbs";

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
                    Пленки для интерьера (матовые/прозрачные/пескоструй), печать и плоттерная резка, ламинаты.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-primary" />
                    Жесткие носители
                  </h3>
                  <p className="text-gray-700">
                    ПВХ, композит, акрил, пенокартон; УФ‑печать по плоскому материалу, торцевая полировка акрила.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={20} className="text-primary" />
                    Световые решения
                  </h3>
                  <p className="text-gray-700">
                    Акрилайт (edge‑lit), тонкие световые панели, неон‑декор.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    Навигация
                  </h3>
                  <p className="text-gray-700">
                    Модульные алюминиевые системы, сменные кассеты, подвесы, настенные и напольные указатели.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ClipboardList" size={20} className="text-primary" />
                    Информационные стенды и постеры
                  </h3>
                  <p className="text-gray-700">
                    Шнап‑фреймы, магнитные/меловые доски, кабельно‑трековые подвесы.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Accessibility" size={20} className="text-primary" />
                    Дополнительные опции
                  </h3>
                  <p className="text-gray-700">
                    Тактильные таблички, пиктограммы, шрифт Брайля, антибликовые покрытия.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-primary" />
                    Монтаж
                  </h3>
                  <p className="text-gray-700">
                    Чистые технологии, скрытый крепеж, выверка по лазеру, забота о сохранности отделки.
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

export default Interior;