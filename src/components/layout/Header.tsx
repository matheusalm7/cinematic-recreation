import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Soluções", href: "#servicos" },
  { label: "Processo", href: "#nosso-processo" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#042d1f]/85 backdrop-blur-xl border-b border-[#f1ead4]/10" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        aria-label="Menu principal"
        className="relative flex items-center justify-between px-6 md:px-12 py-5"
      >
        {/* Logo wordmark */}
        <a
          href="#"
          aria-label="Agnus"
          className="font-normal text-2xl md:text-[28px] text-[#f1ead4] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Agnus<sup className="text-[10px] align-super ml-0.5 opacity-60">®</sup>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[10px] uppercase tracking-[0.25em] text-[#f1ead4]/60 hover:text-[#f1ead4] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick("#contato")}
          className="hidden md:inline-flex items-center px-6 py-3 bg-[#f1ead4] text-[#042d1f] text-[10px] uppercase tracking-[0.25em] font-semibold hover:bg-white transition-colors"
        >
          Contato
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-[#f1ead4]"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#f1ead4]/10 bg-[#042d1f]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-xs uppercase tracking-[0.25em] text-[#f1ead4]/70 hover:text-[#f1ead4]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contato")}
            className="mt-2 px-6 py-3 bg-[#f1ead4] text-[#042d1f] text-xs uppercase tracking-[0.25em] font-semibold text-center"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
};
