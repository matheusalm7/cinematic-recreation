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
      className="ag-navbar h-16 px-4 sm:px-6 grid grid-cols-3 items-center"
    >
      <div className="hidden sm:block" aria-hidden />
      <a href="#top" className="flex items-center justify-center col-start-1 sm:col-start-2 col-span-2 sm:col-span-1">
        <img
          src={logoSrc}
          alt="Agnus"
          className="h-7 w-auto"
          onError={(e) => {
            console.log("[AgnusReferralRefinement] logo fallback");
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="sr-only">Agnus</span>
      </a>
      <div className="flex justify-end">
        <button
          onClick={onCta}
          className="ag-btn-primary h-10 px-5 text-sm hidden sm:inline-flex items-center"
        >
          {ctaLabel}
        </button>
      </div>
    </nav>
  </header>
);
