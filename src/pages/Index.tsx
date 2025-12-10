import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Рекламное агентство в Благовещенске и Свободном | Изготовление вывесок, объемных букв | Графика</title>
        <meta name="description" content="Изготовление и монтаж наружной рекламы в Благовещенске и Свободном: световые вывески, объемные буквы, световая реклама. Гарантия 3 года. 11+ лет опыта. 2000+ проектов." />
        <meta name="keywords" content="вывеска Благовещенск, заказать вывеску Благовещенск, вывеска Свободный, объемные буквы, световая вывеска, световые буквы, наружная реклама, рекламное агентство Благовещенск" />
        <link rel="canonical" href="https://ragrafika.ru/" />
        <meta property="og:title" content="Рекламное агентство Графика — Наружная реклама в Благовещенске" />
        <meta property="og:description" content="Изготовление вывесок, объемных букв и световой рекламы. 11+ лет на рынке. Гарантия 3 года." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragrafika.ru/" />
      </Helmet>
      <Header />
      <HeroSection />
      <ContentSections />
      <IndustriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;