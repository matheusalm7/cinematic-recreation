import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/landing/Hero";
import { PerformanceManagementSection } from "@/components/landing/PerformanceManagementSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FounderSection } from "@/components/landing/FounderSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

const DuplicatePage = () => {
  console.log("[DuplicatePage]", "render");
  return (
    <main className="duplicate-theme min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <PerformanceManagementSection />
      <TrustGapSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <FounderSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default DuplicatePage;
