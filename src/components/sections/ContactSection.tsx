import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 text-white">
              Свяжитесь с нами для бесплатной консультации и расчёта стоимости
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2 text-white">Телефон</h3>
                  <a href="tel:+74162227678" className="text-white hover:text-primary transition-colors">
                    +7 (4162) 22-76-78
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2 text-white">Email</h3>
                  <p className="text-white">info@grafika.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2 text-white">Адрес</h3>
                  <p className="text-white">г. Благовещенск</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Оставьте заявку</h3>
                <form className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Textarea 
                    placeholder="Расскажите о вашем проекте" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
                  />
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
                alt="Графика" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Профессиональное изготовление рекламной продукции в Благовещенске
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors">Услуги</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-primary transition-colors">Портфолио</a>
                <a href="#advantages" className="block text-gray-400 hover:text-primary transition-colors">Преимущества</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-primary transition-colors">Отзывы</a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@grafika.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Благовещенск
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Графика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;