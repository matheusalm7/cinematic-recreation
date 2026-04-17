import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import hero from "@/assets/hero-photographer.jpg";

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

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-12 pb-24 lg:py-28">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Estúdio fotográfico premium
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Sua <span className="italic text-primary-glow">marca</span><br />
            em imagens<br />
            que <span className="underline decoration-primary decoration-4 underline-offset-4">vendem</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            Posicionamento visual de alta performance para marcas que querem ser desejadas, lembradas e escolhidas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-7 h-12 shadow-glow">
              Quero meu orçamento <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 border-white/20 bg-white/5 text-white hover:bg-white/10">
              Ver portfólio
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
            <div><strong className="text-white text-2xl font-display">+120</strong><br/>marcas atendidas</div>
            <div className="h-10 w-px bg-white/15" />
            <div><strong className="text-white text-2xl font-display">10 anos</strong><br/>de estúdio</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-blue-grad rounded-[2rem] opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img src={hero} alt="Fotógrafo profissional segurando câmera" width={1024} height={1280} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card-grad text-white rounded-2xl px-5 py-4 border border-white/10 shadow-card-premium hidden sm:block">
            <p className="text-xs text-white/60 uppercase tracking-widest">Aprovado por</p>
            <p className="font-display text-lg">+200 projetos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
