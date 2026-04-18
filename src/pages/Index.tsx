import { Hero } from "@/components/landing/Hero";
import { VideoCaptureSection } from "@/components/landing/VideoCaptureSection";
import { StatementSection } from "@/components/landing/StatementSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
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
      <VideoCaptureSection />
      <StatementSection />
      <ServicesSection />
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
