import Breadcrumbs from "@/components/ui/breadcrumbs";

const InstallationHero = () => {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Главная", path: "/" },
        { label: "Монтаж и установка" }
      ]} />
      
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Монтаж и установка
      </h1>
      
      <p className="text-lg text-gray-700 mb-4">
        Профессиональный монтаж рекламных конструкций
      </p>

      <p className="text-lg text-gray-700 mb-8">
        Обеспечиваем безопасный и аккуратный монтаж на фасадах и внутри помещений, подключение электричества и последующее обслуживание.
      </p>
    </>
  );
};

export default InstallationHero;