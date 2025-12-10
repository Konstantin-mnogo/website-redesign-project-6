import { Helmet } from "react-helmet-async";
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
        <title>Рекламное агентство в Благовещенске | Изготовление вывесок, объемных букв | Графика</title>
        <meta name="description" content="Изготовление и монтаж наружной рекламы в Благовещенске: световые вывески, объемные буквы, световая реклама. Работаем по всей Амурской области. Гарантия 3 года. 11+ лет опыта. 2000+ проектов." />
        <meta name="keywords" content="заказать вывеску, заказать вывеску Благовещенск, объемные буквы, световой короб, световая вывеска, световые буквы, световая реклама, стенды, вывеска в магазин, вывеска Благовещенск, наружная реклама, рекламное агентство Благовещенск, Свободный" />
        <link rel="canonical" href="https://ragrafika.ru/" />
        <meta property="og:title" content="Рекламное агентство Графика — Наружная реклама в Благовещенске" />
        <meta property="og:description" content="Изготовление вывесок, объемных букв и световой рекламы. 11+ лет на рынке. Гарантия 3 года." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragrafika.ru/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Графика",
            "description": "Рекламное агентство полного цикла в Благовещенске. Изготовление вывесок, объемных букв, световой рекламы.",
            "url": "https://ragrafika.ru",
            "logo": "https://ragrafika.ru/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Благовещенск",
              "addressRegion": "Амурская область",
              "addressCountry": "RU"
            },
            "areaServed": {
              "@type": "State",
              "name": "Амурская область"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-924-670-20-30",
              "contactType": "customer service",
              "areaServed": "RU",
              "availableLanguage": ["Russian"]
            },
            "sameAs": [
              "https://vk.com/ragrafika",
              "https://t.me/ragrafika"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "2000"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Графика",
            "image": "https://ragrafika.ru/logo.png",
            "description": "Производство наружной рекламы в Благовещенске",
            "@id": "https://ragrafika.ru",
            "url": "https://ragrafika.ru",
            "telephone": "+7-924-670-20-30",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Благовещенск",
              "addressRegion": "Амурская область",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.2803,
              "longitude": 127.5272
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
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