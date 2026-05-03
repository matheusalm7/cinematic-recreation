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
      className="ag-navbar h-16 px-4 sm:px-6 flex items-center relative"
    >
      {/* Mobile: centered logo absolutely. Desktop: logo on the left. */}
      <a
        href="#top"
        className="absolute left-1/2 -translate-x-1/2 sm:static sm:left-auto sm:translate-x-0 flex items-center"
      >
        <img
          src={logoSrc}
          alt="Agnus"
          className="h-7 w-auto"
          onError={(e) => {
            console.log("[AgnusReferralForm] logo fallback");
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <span className="sr-only">Agnus</span>
      </a>
      <div className="ml-auto flex items-center">
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
