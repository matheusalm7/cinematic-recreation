import logoSrc from "@/assets/logo-agnus.png";
import type { ReferralContent } from "@/content/referralContent";

interface Props {
  content: ReferralContent["footer"];
}

export const ReferralFooter = ({ content }: Props) => (
  <footer
    className="mt-12 border-t pt-12 pb-8"
    style={{
      borderColor: "var(--ag-border)",
      background: "linear-gradient(180deg, transparent, #031F1B 60%)",
    }}
  >
    <div className="container max-w-6xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="Agnus" className="h-8 w-auto" />
        </div>
        <p
          className="max-w-md text-sm md:text-base"
          style={{ color: "var(--ag-text-soft)" }}
        >
          {content.tagline}
        </p>
      </div>
      <div className="ag-divider mt-10" />
      <div
        className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ color: "var(--ag-text-mute)" }}
      >
        <p>{content.copyright}</p>
        <p className="flex items-center gap-1.5">
          {content.madeWith}
          <span aria-hidden className="ag-accent">●</span>
          {content.madeWithSuffix}
        </p>
      </div>
    </div>
  </footer>
);
