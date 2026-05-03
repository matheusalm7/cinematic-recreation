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
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-[Sora] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {content.title}
            </h2>
            <p
              className="mt-5 text-base md:text-lg max-w-md"
              style={{ color: "var(--ag-text-soft)" }}
            >
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Button
                size="lg"
                onClick={onPrimary}
                className="ag-btn-primary h-12 px-6 gap-2 border-0"
              >
                {content.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={RULES_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-sm md:text-base"
                style={{ color: "var(--ag-text-soft)" }}
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            {content.steps.map((step) => (
              <article key={step.number} className="ag-card p-6 md:p-8">
                <div
                  className="inline-flex items-center justify-center min-w-[48px] h-[48px] px-3 rounded-xl font-[Sora] font-bold text-lg ag-accent"
                  style={{
                    background: "rgba(159,232,112,0.08)",
                    border: "1px solid rgba(200,255,155,0.25)",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="mt-5 font-[Sora] text-2xl md:text-[28px] font-semibold leading-tight">
                  {step.title}
                </h3>
                <p
                  className="mt-3 leading-relaxed text-base"
                  style={{ color: "var(--ag-text-soft)" }}
                >
                  {step.text}
                </p>
                {"list" in step && step.list && (
                  <ul className="mt-4 space-y-2">
                    {step.list.map((item) => (
                      <li
                        key={item}
                        className="text-base flex gap-2"
                        style={{ color: "var(--ag-text-soft)" }}
                      >
                        <span className="ag-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"attention" in step && step.attention && (
                  <div className="mt-5">
                    <p className="ag-accent font-semibold text-sm">
                      {step.attentionLabel}
                    </p>
                    <p
                      className="mt-2 text-base leading-relaxed"
                      style={{ color: "var(--ag-text-soft)" }}
                    >
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
