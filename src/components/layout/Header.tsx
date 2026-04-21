import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "@/assets/logo-agnus.png";

const NAV_LINKS = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Soluções", href: "#servicos" },
  { label: "Sócios", href: "#socios" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    console.log("[Header]", "Header rendered");
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleContact = () => {
    console.log("[Header]", "Contato button clicked");
    const section = document.getElementById("contato");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // fallback: scroll to footer
    const footer = document.querySelector("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300"
      role="banner"
    >
      <nav
        aria-label="Menu principal"
        className={`
          relative flex items-center justify-between
          rounded-2xl border border-white/[0.08]
          px-6 py-4 md:px-8 md:py-5
          backdrop-blur-xl
          transition-all duration-300
          ${scrolled
            ? "bg-[hsl(218_75%_10%/0.85)] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
            : "bg-[hsl(218_75%_10%/0.65)] shadow-[0_4px_20px_-6px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        {/* Logo */}
        <a href="#" className="flex-shrink-0" aria-label="Agnus - Página inicial">
          {logoError ? (
            <span
              className="font-display font-bold text-xl text-white/90"
              role="img"
              aria-label="Agnus logo"
            >
              Agnus
            </span>
          ) : (
            <img
              src={logoSrc}
              alt="Agnus - Logo"
              className="h-9 md:h-12 w-auto object-contain"
              onError={() => {
                console.log("[Header]", "Logo fallback activated");
                setLogoError(true);
              }}
            />
          )}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="
                relative text-[15px] font-medium text-white/70
                hover:text-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0
                after:bg-primary-glow after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={handleContact}
          className="
            hidden md:inline-flex items-center
            rounded-full px-6 py-2.5 text-[15px] font-semibold
            bg-gradient-to-r from-primary to-primary-glow
            text-white shadow-[0_0_20px_-4px_hsl(226_100%_57%/0.4)]
            hover:opacity-90 hover:shadow-[0_0_28px_-4px_hsl(226_100%_57%/0.55)]
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
          "
        >
          Contato
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-white/[0.08] bg-[hsl(218_75%_10%/0.92)] backdrop-blur-xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.6)] px-5 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm font-medium text-white/75 hover:text-white transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); handleContact(); }}
            className="
              mt-1 rounded-full px-5 py-2.5 text-sm font-semibold text-center
              bg-gradient-to-r from-primary to-primary-glow
              text-white shadow-[0_0_20px_-4px_hsl(226_100%_57%/0.4)]
              hover:opacity-90 transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
            "
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
};
