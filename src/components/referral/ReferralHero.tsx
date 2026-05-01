import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  RULES_PDF_URL,
  TURBO_LOGO_URL,
  type ReferralContent,
} from "@/content/referralContent";

interface Props {
  content: ReferralContent["hero"];
  onPrimary: () => void;
}

export const ReferralHero = ({ content, onPrimary }: Props) => {
  return (
    <header className="relative overflow-hidden">
      <div className="container max-w-5xl pt-10 md:pt-14 pb-16 md:pb-24 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={TURBO_LOGO_URL}
            alt="Turbo Partners"
            className="h-7 md:h-8 w-auto"
          />
        </div>

        {/* Decorative star-eyes emoji */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div
            aria-hidden
            className="text-6xl md:text-7xl select-none animate-in fade-in zoom-in-95 duration-700"
          >
            🤩
          </div>
        </div>

        {/* Badge */}
        <p className="mt-3 text-[hsl(var(--mint))] text-xs md:text-sm font-semibold tracking-[0.25em]">
          {content.badge}
        </p>

        {/* Title */}
        <h1 className="mt-6 font-[Sora] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-white">
          {content.titleLine1}
          <br className="hidden sm:block" />{" "}
          <span className="text-[hsl(var(--mint))]">{content.titleAccent}</span>
        </h1>

        {/* Decorative money emojis */}
        <div className="relative mt-8 flex items-center justify-center">
          <span
            aria-hidden
            className="absolute -translate-x-[200px] sm:-translate-x-[260px] md:-translate-x-[320px] text-3xl md:text-5xl select-none"
          >
            💸
          </span>
          <p className="text-base md:text-lg text-white/70 max-w-xl">
            {content.subtitle}
          </p>
          <span
            aria-hidden
            className="absolute translate-x-[200px] sm:translate-x-[260px] md:translate-x-[320px] text-3xl md:text-5xl select-none"
          >
            💰
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            size="lg"
            onClick={onPrimary}
            className="h-12 px-7 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] gap-2"
          >
            {content.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <a
            href={RULES_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white underline underline-offset-4 text-sm md:text-base px-4 h-12 inline-flex items-center"
          >
            {content.ctaSecondary}
          </a>
        </div>
      </div>
    </header>
  );
};
