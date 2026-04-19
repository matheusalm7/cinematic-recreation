import { ArrowUp, Instagram } from "lucide-react";
import agnusLogo from "@/assets/agnus-logo.png";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-deep text-white/70 pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex items-start gap-6">
            <img
              src={agnusLogo}
              alt="Agnus"
              className="h-14 md:h-16 w-auto object-contain"
            />
            <p className="text-sm md:text-base leading-relaxed max-w-xs text-white/80">
              Captação audiovisual premium
              <br />
              transformando marcas
              <br />
              em referência.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white/90 hover:text-primary-glow transition-colors self-start group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm md:text-base">Back to top</span>
          </button>
        </div>

        <div className="mt-10 border-t border-white/10" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs md:text-sm text-white/50">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Agnus Creative Studio — Produtora Audiovisual</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <a
            href="#"
            className="text-white/60 hover:text-primary-glow transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
