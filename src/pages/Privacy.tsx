import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>На главную</span>
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Политика конфиденциальности
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта, принадлежащего ООО «Консалт».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Оператор персональных данных</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
              <p><strong>Наименование:</strong> ООО «Консалт»</p>
              <p><strong>ИНН:</strong> 2801227832</p>
              <p><strong>КПП:</strong> 280101001</p>
              <p><strong>ОГРН:</strong> 1172801001174</p>
              <p><strong>Адрес:</strong> 675000, Амурская обл., г. Благовещенск, ул. Забурхановская, д. 98</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Какие данные мы собираем</h2>
            <p>При использовании сайта мы можем собирать следующую информацию:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Технические данные (IP-адрес, тип браузера, версия ОС)</li>
              <li>Cookies и данные о посещениях</li>
              <li>Контактные данные (при заполнении форм обратной связи)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Цели обработки данных</h2>
            <p>Мы используем собранные данные для:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Обеспечения работы сайта и его функционала</li>
              <li>Улучшения качества услуг</li>
              <li>Анализа статистики посещений</li>
              <li>Связи с пользователями (при наличии запроса)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Защита данных</h2>
            <p>
              Мы применяем технические и организационные меры для защиты персональных данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Права пользователей</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Получать информацию о хранящихся данных</li>
              <li>Требовать исправления неточных данных</li>
              <li>Требовать удаления данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h2>
            <p>
              Мы используем cookies для улучшения работы сайта. Вы можете отключить cookies 
              в настройках браузера, но это может ограничить функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Изменения политики</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Актуальная версия всегда доступна на данной странице.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;