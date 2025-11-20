import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/c848bf2f-05f1-42c0-b695-5d345ad19872', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <a href="mailto:ragrafika.info@mail.ru" className="text-white hover:text-primary transition-colors">
                    ragrafika.info@mail.ru
                  </a>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                  <Textarea 
                    placeholder="Напишите ваш вопрос" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
                  />
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-white p-4 rounded-lg flex items-center gap-3">
                      <Icon name="CheckCircle2" size={20} />
                      <span>Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</span>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg flex items-center gap-3">
                      <Icon name="AlertCircle" size={20} />
                      <span>Ошибка отправки. Пожалуйста, попробуйте позже или позвоните нам.</span>
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/7cf77388-efea-4dbb-b3ab-3fe7c87d39b8.png" 
                alt="Графика" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Профессиональное изготовление рекламной продукции в Благовещенске
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-primary transition-colors text-sm">Главная</a>
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors text-sm">Услуги</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-primary transition-colors text-sm">Портфолио</a>
                <a href="#advantages" className="block text-gray-400 hover:text-primary transition-colors text-sm">Преимущества</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-primary transition-colors text-sm">Отзывы</a>
                <a href="#contacts" className="block text-gray-400 hover:text-primary transition-colors text-sm">Контакты</a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Калькуляторы</h4>
              <nav className="space-y-2">
                <a href="/calculator" className="block text-gray-400 hover:text-primary transition-colors text-sm">Все калькуляторы</a>
                <a href="/calculator#banner" className="block text-gray-400 hover:text-primary transition-colors text-sm">Баннеры</a>
                <a href="/calculator#stand" className="block text-gray-400 hover:text-primary transition-colors text-sm">Информационные стенды</a>
                <a href="/calculator#signage" className="block text-gray-400 hover:text-primary transition-colors text-sm">Вывески</a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <a href="tel:+74162227678" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>+7 (4162) 22-76-78</span>
                </a>
                <a href="mailto:ragrafika.info@mail.ru" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>ragrafika.info@mail.ru</span>
                </a>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>675000, Россия, Амурская область, г. Благовещенск, ул. Забурхановская, 98, оф. 4</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Рекламное агентство Графика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;