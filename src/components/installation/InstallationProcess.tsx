import Icon from "@/components/ui/icon";

const InstallationProcess = () => {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Как проходит монтаж</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold">Выезд и оценка</h3>
            </div>
            <p className="text-gray-700">
              Наш специалист приезжает на объект, осматривает место монтажа, оценивает сложность работ и составляет смету. Учитываем высоту, тип стены и необходимость спецтехники.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold">Подготовка</h3>
            </div>
            <p className="text-gray-700">
              Подготавливаем инструменты, крепёж и оборудование для монтажа. При необходимости заказываем автовышку или кран. Согласовываем дату и время выполнения работ.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold">Установка</h3>
            </div>
            <p className="text-gray-700">
              Проводим монтажные работы по утверждённой схеме. Устанавливаем вывеску на прочные крепления, проводим электрику (если есть подсветка), настраиваем освещение. Проверяем работу вывески.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold">Сдача объекта</h3>
            </div>
            <p className="text-gray-700">
              Убираем рабочую зону, демонстрируем работу вывески, даём рекомендации по эксплуатации. Подписываем акт выполненных работ. Предоставляем гарантию.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Гарантии и обслуживание</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">3 года гарантии</h3>
              </div>
              <p className="text-gray-700">
                Гарантируем качество монтажа и надёжность креплений. При проблемах приедем и устраним бесплатно.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Wrench" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">Обслуживание</h3>
              </div>
              <p className="text-gray-700">
                Предлагаем договор на сервисное обслуживание. Регулярно проверяем состояние вывески, при необходимости меняем светотехнику и ремонтируем.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">Быстрый выезд</h3>
              </div>
              <p className="text-gray-700">
                Если вывеска сломалась, мы выезжаем в течение суток. Восстанавливаем работоспособность как можно быстрее.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallationProcess;