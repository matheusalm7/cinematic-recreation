import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { StatementSection } from "@/components/landing/StatementSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { DifferentialsSection } from "@/components/landing/DifferentialsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FounderSection } from "@/components/landing/FounderSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <LogoStrip />
      <StatementSection />
      <PortfolioSection />
      <ServicesSection />
      <GallerySection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ProcessSection />
      <FounderSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
