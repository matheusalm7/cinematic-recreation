import logoSrc from "@/assets/logo-agnus.png";

interface Props {
  ctaLabel: string;
  onCta: () => void;
}

export const ReferralNavbar = ({ ctaLabel, onCta }: Props) => (
  <header
    role="banner"
    className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1120px]"
  >
    <nav
      aria-label="Agnus referral navigation"
      className="ag-navbar h-16 px-4 sm:px-6 flex items-center justify-between"
    >
      <a href="#top" className="flex items-center gap-2">
        <img
          src={logoSrc}
          alt="Agnus"
          className="h-7 w-auto"
          onError={(e) => {
            console.log("[AgnusReferralPages] logo fallback");
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="sr-only">Agnus</span>
      </a>
      <button
        onClick={onCta}
        className="ag-btn-primary h-10 px-5 text-sm hidden sm:inline-flex items-center"
      >
        {ctaLabel}
      </button>
    </nav>
  </header>
);
