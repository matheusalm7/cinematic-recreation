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
    <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 lg:pb-32">
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 md:p-14 lg:p-16 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Subtle inner gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />

        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.3em] text-primary-glow uppercase">
            Captação de Vídeo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            Vídeo com direção, estrutura<br className="hidden md:inline" /> e execução comercial.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Produção pensada para marcas que precisam de conteúdo forte para campanhas, produto, redes sociais e posicionamento.
          </p>
        </div>

        {/* Mini cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">
          {miniCards.map((c, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-5 md:p-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                  <c.icon className="h-4 w-4 text-primary-glow" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {c.title}
                </h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative flex items-center justify-center gap-3 mt-10">
          <Button
            size="lg"
            className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-7 h-12 shadow-glow"
          >
            <Play className="h-3.5 w-3.5 mr-1 fill-current" />
            Solicitar orçamento
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
