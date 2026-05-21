import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#042d1f] text-[#f1ead4] pt-16 pb-10 border-t border-[#f1ead4]/10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Massive wordmark */}
        <div
          className="text-[18vw] leading-[0.85] tracking-tighter text-[#f1ead4] italic"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Agnus<span className="not-italic text-[#f1ead4]/30">®</span>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-10 border-t border-[#f1ead4]/10 pt-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40 mb-3">Studio</p>
            <p className="text-sm text-[#f1ead4]/75 leading-relaxed">
              São Paulo · Brazil<br />EST. 2024
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40 mb-3">Contact</p>
            <a href="mailto:hello@agnus.com" className="block text-sm text-[#f1ead4]/75 hover:text-[#f1ead4]">hello@agnus.com</a>
            <a href="https://wa.me/" className="block text-sm text-[#f1ead4]/75 hover:text-[#f1ead4] mt-1">WhatsApp</a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40 mb-3">Social</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#f1ead4]/75 hover:text-[#f1ead4]">Instagram</a>
            <a href="#" className="block text-sm text-[#f1ead4]/75 hover:text-[#f1ead4] mt-1">LinkedIn</a>
          </div>
          <div className="flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/60 hover:text-[#f1ead4]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#f1ead4]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40">
          <p>© {new Date().getFullYear()} Agnus Creative Studio · All rights reserved</p>
          <p>Designed for exit</p>
        </div>
      </div>
    </footer>
  );
};
