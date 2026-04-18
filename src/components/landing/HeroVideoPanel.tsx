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
      {/* Soft blue glow behind the showcase */}
      <div className="absolute inset-x-10 top-0 h-[60%] bg-primary/20 blur-[120px] -z-10 rounded-full" />

      <div className="relative rounded-3xl border border-border bg-card/95 backdrop-blur-md p-8 md:p-14 lg:p-16 shadow-[0_40px_120px_-30px_hsl(218_75%_10%/0.45)] overflow-hidden">
        {/* Subtle inner gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary-glow/[0.05]" />

        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Captação de Vídeo
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight">
            Vídeo com direção, estrutura<br className="hidden md:inline" /> e execução comercial.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Produção pensada para marcas que precisam de conteúdo forte para campanhas, produto, redes sociais e posicionamento.
          </p>
        </div>

        {/* Mini cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">
          {miniCards.map((c, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-background/60 hover:bg-background transition-colors p-5 md:p-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <c.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {c.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
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
