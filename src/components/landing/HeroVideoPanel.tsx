import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Video, Sparkles, Play } from "lucide-react";

const miniCards = [
  {
    icon: Compass,
    title: "Direção",
    text: "Conceito, enquadramento e intenção visual.",
  },
  {
    icon: Video,
    title: "Captação",
    text: "Imagem, luz, movimento e padrão profissional.",
  },
  {
    icon: Sparkles,
    title: "Recursos",
    text: "Drone, detalhes, lifestyle e pós-produção.",
  },
];

export const HeroVideoPanel = () => {
  return (
    <div className="relative z-10 mx-auto -mt-16 md:-mt-24 max-w-4xl px-4">
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Subtle gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />

        {/* Frame corners */}
        <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-primary-glow/40" />
        <span className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-primary-glow/40" />
        <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-primary-glow/40" />
        <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-primary-glow/40" />

        {/* Top meta row: REC / 4K / timecode */}
        <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            REC
          </span>
          <span className="hidden sm:inline">● 00:00:24</span>
          <span>4K</span>
        </div>

        {/* Header */}
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-primary-glow uppercase">
            Captação de Vídeo
          </span>
          <h2 className="mt-2 font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight">
            Vídeo com direção, estrutura e execução comercial.
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
            Produção pensada para marcas que precisam de conteúdo forte para campanhas, produto, redes sociais e posicionamento.
          </p>
        </div>

        {/* Mini cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {miniCards.map((c, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <c.icon className="h-3.5 w-3.5 text-primary-glow" />
                <h3 className="font-display text-sm font-semibold text-white">
                  {c.title}
                </h3>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative flex items-center justify-center gap-3 mt-6">
          <Button
            size="sm"
            className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-5 h-10 shadow-glow"
          >
            <Play className="h-3 w-3 mr-1 fill-current" />
            Solicitar orçamento
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};
