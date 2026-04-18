import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#090909] text-[#F5F2EE] min-h-screen flex flex-col">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Bottom warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-[#C77749] opacity-[0.18] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D9804F] opacity-20 blur-[120px] pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />

      {/* Top nav */}
      <header className="relative z-20">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
            <Camera className="h-5 w-5 text-[#D9804F]" />
            <span>STUDIO<span className="text-[#D9804F]">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#B8B0A8]">
            <a href="#servicos" className="hover:text-[#F5F2EE] transition">Serviços</a>
            <a href="#processo" className="hover:text-[#F5F2EE] transition">Processo</a>
            <a href="#faq" className="hover:text-[#F5F2EE] transition">FAQ</a>
          </nav>
          <Button className="bg-[#11100F] hover:bg-[#1a1918] border border-[#C77749]/30 text-[#F5F2EE] rounded-full px-5">
            Falar agora
          </Button>
        </div>
      </header>

      {/* Hero content centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16 md:py-20">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* REC Frame */}
          <div className="relative px-6 py-16 md:px-16 md:py-24">
            {/* Frame border */}
            <div className="absolute inset-0 border border-[#C77749]/40 pointer-events-none" />

            {/* Corner markers */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#D9804F]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D9804F]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#D9804F]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#D9804F]" />

            {/* Mid markers */}
            <div className="absolute top-1/2 -left-[3px] w-1.5 h-6 -translate-y-1/2 bg-[#C77749]/60" />
            <div className="absolute top-1/2 -right-[3px] w-1.5 h-6 -translate-y-1/2 bg-[#C77749]/60" />

            {/* REC indicator top-left */}
            <div className="absolute -top-8 left-0 flex items-center gap-2 text-[10px] tracking-[0.3em] text-[#C77749] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#D9804F] animate-pulse" />
              REC · 4K · 24fps
            </div>

            {/* Timecode top-right */}
            <div className="absolute -top-8 right-0 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase font-mono">
              00:00:12:04
            </div>

            {/* Bottom-left marker */}
            <div className="absolute -bottom-8 left-0 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase font-mono">
              ISO 800 · f/2.8
            </div>

            {/* Bottom-right marker */}
            <div className="absolute -bottom-8 right-0 text-[10px] tracking-[0.3em] text-[#C77749] uppercase">
              SCENE · 01
            </div>

            {/* Content inside frame */}
            <div className="text-center fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C77749]/30 bg-[#11100F]/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#B8B0A8] backdrop-blur mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9804F]" />
                Estúdio fotográfico premium
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#F5F2EE]">
                Sua{" "}
                <span className="italic font-serif font-normal text-[#D9804F]">marca</span>
                <br />
                em imagens que
                <br />
                <span className="italic font-serif font-normal text-[#C77749]">vendem</span>.
              </h1>

              <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-[#B8B0A8] leading-relaxed">
                Posicionamento visual de alta performance para marcas que querem ser desejadas, lembradas e escolhidas.
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  size="lg"
                  className="bg-[#11100F] hover:bg-[#1a1918] border border-[#C77749]/40 text-[#F5F2EE] rounded-full px-7 h-12 group"
                >
                  Quero meu orçamento
                  <ArrowRight className="ml-2 h-4 w-4 text-[#D9804F] transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Floating pills */}
          <div className="hidden md:block absolute -left-4 top-1/3 -translate-x-full">
            <div className="rounded-full border border-[#C77749]/30 bg-[#11100F]/80 backdrop-blur px-4 py-2 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase whitespace-nowrap">
              Direção · Criativa
            </div>
          </div>
          <div className="hidden md:block absolute -right-4 top-12 translate-x-full">
            <div className="rounded-full border border-[#C77749]/30 bg-[#11100F]/80 backdrop-blur px-4 py-2 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase whitespace-nowrap">
              Editorial · 2026
            </div>
          </div>
          <div className="hidden md:block absolute -right-4 bottom-16 translate-x-full">
            <div className="rounded-full border border-[#C77749]/30 bg-[#11100F]/80 backdrop-blur px-4 py-2 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase whitespace-nowrap">
              +120 Marcas
            </div>
          </div>
          <div className="hidden lg:block absolute -left-4 bottom-24 -translate-x-full">
            <div className="rounded-full border border-[#C77749]/30 bg-[#11100F]/80 backdrop-blur px-4 py-2 text-[10px] tracking-[0.25em] text-[#B8B0A8] uppercase whitespace-nowrap">
              10 Anos · Estúdio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
