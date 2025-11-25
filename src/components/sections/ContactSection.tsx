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
      <section id="contacts" className="py-20 bg-secondary text-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 text-white">
              Свяжитесь с нами для бесплатной консультации и расчёта стоимости
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-white">Телефон</h3>
                  <a href="tel:+74162227678" className="text-white hover:text-primary transition-colors">
                    +7 (4162) 22-76-78
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-white">Email</h3>
                  <a href="mailto:ragrafika.info@mail.ru" className="text-white hover:text-primary transition-colors">
                    ragrafika.info@mail.ru
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-white">Адрес</h3>
                  <p className="text-white text-sm leading-relaxed">г. Благовещенск,<br/>ул. Забурхановская, 98,<br/>офис 4</p>
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
    </>
  );
};

export default ContactSection;