import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RULES_PDF_URL, type ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["how"];
  id?: string;
  onPrimary: () => void;
}

export const HowItWorksSection = ({ content, id, onPrimary }: Props) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-16">
          {/* Left column: title + CTAs (sticky on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-[Sora] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {content.title}
            </h2>
            <p className="mt-5 text-white/70 text-base md:text-lg max-w-md">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                onClick={onPrimary}
                className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] gap-2"
              >
                {content.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={RULES_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white underline underline-offset-4 text-sm md:text-base"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right column: steps */}
          <div className="grid gap-5">
            {content.steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[hsl(var(--referral-border))] bg-[hsl(var(--referral-card))]/60 backdrop-blur-sm p-6 md:p-8"
              >
                <div className="inline-flex items-center justify-center min-w-[48px] h-[48px] px-3 rounded-lg border border-[hsl(var(--mint))]/30 bg-[hsl(var(--mint))]/5 text-[hsl(var(--mint))] font-[Sora] font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="mt-5 font-[Sora] text-2xl md:text-[28px] font-semibold text-white leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed text-base">
                  {step.text}
                </p>
                {"list" in step && step.list && (
                  <ul className="mt-4 space-y-2">
                    {step.list.map((item) => (
                      <li
                        key={item}
                        className="text-white/75 text-base flex gap-2"
                      >
                        <span className="text-[hsl(var(--mint))]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"attention" in step && step.attention && (
                  <div className="mt-5">
                    <p className="text-[hsl(var(--mint))] font-semibold text-sm">
                      {step.attentionLabel}
                    </p>
                    <p className="mt-2 text-white/70 text-base leading-relaxed">
                      {step.attention}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
