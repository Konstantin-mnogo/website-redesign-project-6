import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
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