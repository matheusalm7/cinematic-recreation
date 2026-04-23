import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";
import agnusLogo from "@/assets/logo-agnus.png";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy-deep text-white/70 pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <img
            src={agnusLogo}
            alt="Agnus"
            className="h-7 md:h-8 w-auto object-contain brightness-[2]"
          />


          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white/90 hover:text-primary-glow transition-colors self-start md:self-center group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm md:text-base">Back to top</span>
          </button>
        </div>

        <div className="mt-10 border-t border-white/10" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs md:text-sm text-white/50">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Agnus Creative Studio</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary-glow transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@agnus.com"
              className="text-white/60 hover:text-primary-glow transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary-glow transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
