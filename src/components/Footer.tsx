import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              Профессиональное изготовление рекламной продукции в Благовещенске и Амурской области
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-primary transition-colors text-sm">Главная</a>
              <a href="#services" className="block text-gray-600 hover:text-primary transition-colors text-sm">Услуги</a>
              <a href="#portfolio" className="block text-gray-600 hover:text-primary transition-colors text-sm">Портфолио</a>
              <a href="#advantages" className="block text-gray-600 hover:text-primary transition-colors text-sm">Преимущества</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-primary transition-colors text-sm">Отзывы</a>
              <a href="#contacts" className="block text-gray-600 hover:text-primary transition-colors text-sm">Контакты</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Калькуляторы</h4>
            <nav className="space-y-2">
              <a href="/calculator" className="block text-gray-600 hover:text-primary transition-colors text-sm">Все калькуляторы</a>
              <a href="/calculator#signage" className="block text-gray-600 hover:text-primary transition-colors text-sm">Вывески</a>
              <a href="/calculator#stand" className="block text-gray-600 hover:text-primary transition-colors text-sm">Информационные стенды</a>
              <a href="/calculator#volume" className="block text-gray-600 hover:text-primary transition-colors text-sm">Объёмные буквы</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <a href="tel:+74162227678" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} className="mt-0.5 flex-shrink-0" />
                <span>+7 (4162) 22-76-78</span>
              </a>
              <a href="tel:+79656713170" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} className="mt-0.5 flex-shrink-0" />
                <span>+7 (965) 671-31-70</span>
              </a>
              <a href="mailto:ragrafika.info@mail.ru" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={16} className="mt-0.5 flex-shrink-0" />
                <span>ragrafika.info@mail.ru</span>
              </a>
              <a href="https://wa.me/79656713170" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={16} className="mt-0.5 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/+79656713170" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="Send" size={16} className="mt-0.5 flex-shrink-0" />
                <span>Telegram</span>
              </a>
              <a href="https://max.app/?phone=79656713170" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <Icon name="MessageSquare" size={16} className="mt-0.5 flex-shrink-0" />
                <span>МАХ</span>
              </a>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                <span>675000, Россия, Амурская область,<br/>г. Благовещенск,<br/>ул. Забурхановская, 98, оф. 4</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 space-y-6">
          <div className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto text-center">
            <p>
              Вся представленная на сайте информация, касающаяся стоимости товаров и услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации о стоимости и условиях, пожалуйста, обращайтесь к менеджерам.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
            <p>&copy; 2025 Рекламное агентство Графика. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="/consent" className="hover:text-primary transition-colors">Согласие на обработку данных</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;