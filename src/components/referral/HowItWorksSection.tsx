import type { ReferralContent } from "@/content/referralContent";
import { Check } from "lucide-react";

interface Props {
  content: ReferralContent["how"];
  id?: string;
}

export const HowItWorksSection = ({ content, id }: Props) => {
  return (
    <section
      id={id}
      className="py-20 md:py-28 text-white"
      style={{ background: "var(--gradient-navy)" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-[Sora] text-3xl md:text-5xl font-bold tracking-tight">
            {content.title}
          </h2>
          <p className="text-white/70 mt-4 text-lg">{content.subtitle}</p>
        </div>

        <div className="grid gap-6">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 hover:border-primary-glow/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="font-[Sora] text-5xl md:text-6xl font-bold text-primary-glow leading-none shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-[Sora] text-xl md:text-2xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white/75 leading-relaxed">{step.text}</p>
                  {"list" in step && step.list && (
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {step.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-white/80 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary-glow mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {"attention" in step && step.attention && (
                    <p className="mt-4 text-sm border-l-2 border-primary-glow pl-4 text-white/70 italic">
                      {step.attention}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
