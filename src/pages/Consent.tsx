import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const Consent = () => {
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
          Согласие на обработку персональных данных
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Субъект персональных данных</h2>
            <p>
              Настоящим я, субъект персональных данных, даю свое согласие ООО «Консалт» 
              (далее — Оператор) на обработку моих персональных данных на следующих условиях:
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Оператор персональных данных</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
              <p><strong>Наименование:</strong> ООО «Консалт»</p>
              <p><strong>ИНН:</strong> 2801227832</p>
              <p><strong>КПП:</strong> 280101001</p>
              <p><strong>ОГРН:</strong> 1172801001174</p>
              <p><strong>Адрес:</strong> 675000, Амурская обл., г. Благовещенск, ул. Забурхановская, д. 98</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Перечень персональных данных</h2>
            <p>Согласие распространяется на следующие персональные данные:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Данные о посещениях сайта</li>
              <li>Иные данные, предоставленные при заполнении форм на сайте</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Идентификация пользователя</li>
              <li>Предоставление информации об услугах</li>
              <li>Связь с пользователем (обратная связь, консультации)</li>
              <li>Выполнение обязательств по договорам</li>
              <li>Улучшение качества услуг</li>
              <li>Проведение статистических и маркетинговых исследований</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Способы обработки</h2>
            <p>
              Оператор осуществляет обработку персональных данных как с использованием 
              средств автоматизации, так и без их использования. Обработка включает:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Сбор</li>
              <li>Запись</li>
              <li>Систематизацию</li>
              <li>Накопление</li>
              <li>Хранение</li>
              <li>Уточнение (обновление, изменение)</li>
              <li>Извлечение</li>
              <li>Использование</li>
              <li>Передачу (распространение, предоставление, доступ)</li>
              <li>Обезличивание</li>
              <li>Блокирование</li>
              <li>Удаление</li>
              <li>Уничтожение</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Срок действия согласия</h2>
            <p>
              Настоящее согласие действует с момента его предоставления и до момента его отзыва 
              субъектом персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Право на отзыв согласия</h2>
            <p>
              Субъект персональных данных имеет право отозвать настоящее согласие путем направления 
              письменного заявления Оператору по адресу, указанному выше, или в электронной форме.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Передача данных третьим лицам</h2>
            <p>
              Оператор вправе передавать персональные данные третьим лицам в следующих случаях:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Субъект выразил согласие на такие действия</li>
              <li>Передача предусмотрена законодательством РФ</li>
              <li>Передача необходима для выполнения договорных обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Безопасность данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты 
              персональных данных от неправомерного или случайного доступа, уничтожения, 
              изменения, блокирования, копирования, распространения, а также от иных 
              неправомерных действий третьих лиц.
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

export default Consent;