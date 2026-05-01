import { Button } from "@/components/ui/button";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["hero"];
  onPrimary: () => void;
  onSecondary: () => void;
}

export const ReferralHero = ({ content, onPrimary, onSecondary }: Props) => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container py-20 md:py-32 max-w-5xl text-center animate-in fade-in duration-700">
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary-glow/40 bg-primary/10 text-primary-glow text-xs md:text-sm font-semibold tracking-[0.2em]">
          {content.badge}
        </span>
        <h1 className="mt-6 font-[Sora] text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          {content.title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            onClick={onPrimary}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] h-12 px-8 text-base"
          >
            {content.ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onSecondary}
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 px-8 text-base"
          >
            {content.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
};
