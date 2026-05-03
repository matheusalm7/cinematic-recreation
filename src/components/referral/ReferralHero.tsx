import { ArrowRight } from "lucide-react";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["hero"];
  onPrimary: () => void;
}

export const ReferralHero = ({ content, onPrimary }: Props) => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(159,232,112,0.22), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div className="container max-w-5xl text-center">
        <span className="ag-badge">{content.badge}</span>

        <h1 className="mt-7 font-[Sora] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.04] tracking-tight">
          {content.titleLine1}
          <br className="hidden sm:block" />{" "}
          <span
            className="ag-accent"
            style={{ textShadow: "0 0 40px rgba(200,255,155,0.35)" }}
          >
            {content.titleAccent}
          </span>
        </h1>

        <p
          className="mt-6 text-base md:text-lg max-w-xl mx-auto"
          style={{ color: "var(--ag-text-soft)" }}
        >
          {content.subtitle}
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={onPrimary}
            className="ag-btn-primary h-12 px-7 inline-flex items-center gap-2"
          >
            {content.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
