import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
              alt="Графика" 
              className="h-12 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Изготовление и монтаж рекламных конструкций в Благовещенске
            </p>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/74162227678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-all"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://t.me/ragrafika" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center transition-all"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://max.app/?phone=74162227678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF4D00] hover:bg-[#E64400] text-white rounded-full flex items-center justify-center transition-all"
              >
                <Icon name="MessageSquare" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <div className="flex flex-col gap-2">
              <Link to="/signage" className="text-gray-600 hover:text-primary transition-colors">
                Вывески и световые короба
              </Link>
              <Link to="/interior" className="text-gray-600 hover:text-primary transition-colors">
                Интерьерная реклама
              </Link>
              <Link to="/transport" className="text-gray-600 hover:text-primary transition-colors">
                Брендирование транспорта
              </Link>
              <Link to="/banners" className="text-gray-600 hover:text-primary transition-colors">
                Баннеры и штендеры
              </Link>
              <Link to="/design" className="text-gray-600 hover:text-primary transition-colors">
                Разработка дизайна
              </Link>
              <Link to="/installation" className="text-gray-600 hover:text-primary transition-colors">
                Монтаж и установка
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="flex flex-col gap-3 text-gray-600">
              <a href="tel:+74162227678" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                8 (4162) 22-76-78
              </a>
              <a href="mailto:ragrafika.ifo@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={18} />
                ragrafika.ifo@mail.ru
              </a>
              <p className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                г. Благовещенск, Амурская область
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Графика. Все права защищены.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/consent" className="hover:text-primary transition-colors">
              Согласие на обработку данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;