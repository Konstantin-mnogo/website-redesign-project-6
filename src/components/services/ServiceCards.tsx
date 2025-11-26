import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServiceCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Store" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Вывески и световые короба</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/signage">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Clipboard" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Информационные стенды</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/#calculator#stand">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Palette" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Дизайн и брендирование</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/design">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Wrench" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Монтаж и установка</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/installation">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="Truck" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Брендирование транспорта</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/transport">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Icon name="PaintBucket" size={32} className="text-primary mb-3" />
          <h3 className="font-semibold text-lg mb-4">Интерьерная печать</h3>
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href="/services/interior">Подробнее →</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCards;