import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

interface ServiceContactFormProps {
  serviceName: string;
  onSuccess?: () => void;
}

const ServiceContactForm = ({ serviceName, onSuccess }: ServiceContactFormProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '+7 ', message: '' });
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      message: `Интересует услуга: ${serviceName}.\n\n`
    }));
  }, [serviceName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !consent) {
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
        setFormData({ name: '', phone: '+7 ', message: `Интересует услуга: ${serviceName}.\n\n` });
        setConsent(true);
        if (onSuccess) {
          setTimeout(() => {
            setSubmitStatus('idle');
            onSuccess();
          }, 2000);
        } else {
          setTimeout(() => setSubmitStatus('idle'), 5000);
        }
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
    <Card className="bg-secondary text-white border-secondary">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
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
            onChange={(e) => {
              const value = e.target.value;
              if (value.startsWith('+7 ') || value === '+7' || value === '+' || value === '') {
                setFormData({ ...formData, phone: value || '+7 ' });
              } else if (!value.startsWith('+7')) {
                setFormData({ ...formData, phone: '+7 ' + value });
              } else {
                setFormData({ ...formData, phone: value });
              }
            }}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            required
          />
          <Textarea 
            placeholder="Напишите ваш вопрос" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
          />
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent-service"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
              />
              <label htmlFor="consent-service" className="text-sm text-white/90 leading-relaxed">
                Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в <a href="/consent" className="text-primary hover:underline" target="_blank">Согласии на обработку персональных данных</a> *
              </label>
            </div>
          </div>
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
            disabled={isSubmitting || !consent}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ServiceContactForm;