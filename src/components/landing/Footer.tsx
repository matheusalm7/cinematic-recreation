import { Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/60 py-10 border-t border-white/5">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 font-display text-white">
          <Camera className="h-4 w-4 text-primary-glow" />
          <span>STUDIO<span className="text-primary-glow">.</span></span>
        </div>
        <p>© {new Date().getFullYear()} Studio. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos</a>
        </div>
      </div>
    </footer>
  );
};
