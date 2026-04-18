import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import { HeroVideoPanel } from "./HeroVideoPanel";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      {/* Top nav */}
      <header className="relative z-20">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
            <Camera className="h-5 w-5 text-primary-glow" />
            <span>STUDIO<span className="text-primary-glow">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#portfolio" className="hover:text-white transition">Portfólio</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#processo" className="hover:text-white transition">Processo</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <Button variant="default" className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-5">
            Falar agora
          </Button>
        </div>
      </header>

      {/* Glows */}
      <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-glow/20 blur-[120px]" />

      <div className="container relative z-10 flex justify-center pt-12 pb-32 lg:pt-20 lg:pb-40">
        <div className="fade-up relative w-full max-w-3xl text-center px-8 sm:px-12 py-12 sm:py-16">
          {/* REC-style frame */}
          <div className="pointer-events-none absolute inset-0 border border-white/15 rounded-sm" aria-hidden="true">
            {/* Corner markers */}
            <span className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-primary-glow/70" />
            <span className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-primary-glow/70" />
            <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary-glow/70" />
            <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary-glow/70" />
            {/* REC indicator */}
            <span className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              REC
            </span>
            {/* Center crosshair */}
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/40">● 00:00:12</span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Estúdio fotográfico premium
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Sua <span className="italic text-primary-glow">marca</span><br />
            em imagens<br />
            que <span className="underline decoration-primary decoration-4 underline-offset-4">vendem</span>.
          </h1>
          <p className="mt-6 mx-auto max-w-lg text-lg text-white/70">
            Posicionamento visual de alta performance para marcas que querem ser desejadas, lembradas e escolhidas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-7 h-12 shadow-glow">
              Quero meu orçamento <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 border-white/20 bg-white/5 text-white hover:bg-white/10">
              Ver portfólio
            </Button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/60">
            <div><strong className="text-white text-2xl font-display">+120</strong><br/>marcas atendidas</div>
            <div className="h-10 w-px bg-white/15" />
            <div><strong className="text-white text-2xl font-display">10 anos</strong><br/>de estúdio</div>
          </div>
      </div>
      <div className="relative z-20 -mb-24 md:-mb-32">
        <HeroVideoPanel />
      </div>
    </section>
  );
};
