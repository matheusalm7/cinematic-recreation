import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { HeroVideoPanel } from "./HeroVideoPanel";

const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      {/* Glows */}
      <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-glow/20 blur-[120px]" />
      {/* Section gradient: blue at top → soft white at bottom, blending into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-background/40 to-background z-0" />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <div className="container relative z-10 flex justify-center pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div className="fade-up relative w-full max-w-5xl text-center px-4 sm:px-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
            <div className="flex -space-x-2">
              {SOCIAL_AVATARS.map((src, i) => (
                <Avatar key={i} className="h-7 w-7 ring-2 ring-background">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-white/80">
              Confiado por <strong className="text-white">+120 marcas</strong>.
            </span>
          </div>
          <h1 className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.95] tracking-tight text-white">
            Sua <span className="italic text-primary-glow">marca</span><br />
            em imagens<br />
            que <span className="underline decoration-primary decoration-[6px] underline-offset-[10px]">vendem</span>.
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-lg md:text-xl text-white/75">
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
        </div>
      </div>
      <HeroVideoPanel />
    </section>
  );
};
