import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/services/ServiceCards";
import ServiceContactForm from "@/components/services/ServiceContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import InstallationHero from "@/components/installation/InstallationHero";
import SpecialOffer from "@/components/installation/SpecialOffer";
import InstallationTypes from "@/components/installation/InstallationTypes";
import InstallationProcess from "@/components/installation/InstallationProcess";

const Installation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Монтаж и установка вывесок в Благовещенске | Профессиональный монтаж | Графика</title>
        <meta name="description" content="Профессиональный монтаж и установка вывесок в Благовещенске и Свободном. Фасадные работы, высотный монтаж, подключение подсветки. Безопасно и качественно." />
        <meta name="keywords" content="монтаж вывесок Благовещенск, установка вывесок, высотные работы, фасадный монтаж Благовещенск" />
        <link rel="canonical" href="https://ragrafika.ru/installation" />
        <meta property="og:title" content="Монтаж вывесок в Благовещенске" />
        <meta property="og:description" content="Профессиональный монтаж рекламных конструкций. Фасадные и высотные работы." />
        <meta property="og:url" content="https://ragrafika.ru/installation" />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <InstallationHero />
            <SpecialOffer onOpenDialog={() => setIsDialogOpen(true)} />
            <InstallationTypes />
            <InstallationProcess />
            <ServiceCards />
            
            <div className="mt-8" id="contact-form">
              <ServiceContactForm serviceName="Монтаж и установка" />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Получить расчет стоимости</h3>
            <p className="text-gray-600 mb-6">
              Заполните форму, и наш специалист рассчитает стоимость монтажа для вашего объекта
            </p>
            <ServiceContactForm serviceName="Монтаж и установка" compact />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Installation;