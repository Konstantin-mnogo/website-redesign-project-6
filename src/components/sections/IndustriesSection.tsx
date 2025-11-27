import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: "Cross",
    title: "Аптеки",
    description: "Светодиодные кресты и информационные стенды"
  },
  {
    icon: "Droplets",
    title: "Автомойки",
    description: "Вывески и навигация для автомоек"
  },
  {
    icon: "Wrench",
    title: "Автосервисы",
    description: "Вывески и навигация для СТО"
  },
  {
    icon: "Building2",
    title: "Банки",
    description: "Представительские вывески и интерьерное оформление"
  },
  {
    icon: "Landmark",
    title: "Госучреждения",
    description: "Представительские таблички и навигация"
  },
  {
    icon: "Coffee",
    title: "Кафе и рестораны",
    description: "Вывески, меню-борды и интерьерное оформление"
  },
  {
    icon: "Tag",
    title: "Магазины",
    description: "Вывески, витринная реклама и ценники"
  },
  {
    icon: "MapPin",
    title: "Медучреждения",
    description: "Вывески, навигация и информационные стенды"
  },
  {
    icon: "Hotel",
    title: "Отели",
    description: "Вывески, навигация и информационные стенды"
  },
  {
    icon: "Scissors",
    title: "Парикмахерские",
    description: "Световые вывески и интерьерные таблички"
  },
  {
    icon: "Sparkles",
    title: "Салоны красоты",
    description: "Вывески, неоновый декор и навигация"
  },
  {
    icon: "ShoppingBag",
    title: "Торговые центры",
    description: "Навигация, вывески арендаторов и брендирование"
  },
  {
    icon: "Palmtree",
    title: "Турагентства",
    description: "Яркие вывески и информационные стенды"
  },
  {
    icon: "GraduationCap",
    title: "Учебные заведения",
    description: "Навигация, стенды и таблички для школ и вузов"
  },
  {
    icon: "Dumbbell",
    title: "Фитнес-центры",
    description: "Световые вывески и навигация в спортклубах"
  }
];

const IndustriesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !consentChecked) {
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
        setFormData({ name: '', phone: '', email: '' });
        setConsentChecked(false);
        setTimeout(() => {
          setSubmitStatus('idle');
          setIsDialogOpen(false);
        }, 3000);
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
      <section className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Подберём вывеску для вашей сферы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем с любыми направлениями бизнеса — от небольших магазинов до крупных торговых центров
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="border-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={industry.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{industry.title}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Не нашли свою сферу? Мы работаем со всеми направлениями бизнеса
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Заказать расчёт</DialogTitle>
            <p className="text-muted-foreground">
              Оставьте контакты, и мы свяжемся с вами для уточнения деталей
            </p>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Имя <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Телефон <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder="+7 (900) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="mail@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2"
              />
            </div>
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="consent-dialog"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                required
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="consent-dialog" className="text-sm text-muted-foreground leading-relaxed">
                Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в{' '}
                <a href="/consent" className="text-primary hover:underline">
                  Согласии на обработку персональных данных
                </a>{' '}
                <span className="text-red-500">*</span>
              </label>
            </div>
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg flex items-center gap-2 text-sm">
                <Icon name="CheckCircle2" size={18} />
                <span>Заявка успешно отправлена!</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg flex items-center gap-2 text-sm">
                <Icon name="AlertCircle" size={18} />
                <span>Ошибка отправки. Попробуйте позже.</span>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IndustriesSection;
