import { Sparkles } from "lucide-react";
import { DecorativeGear } from "./DecorativeGear";

const steps = [
  {
    n: "01",
    title: "Contato e briefing",
    desc: "Você entra em contato. Conversamos sobre sua ideia, seus objetivos e o que precisa ser entregue. Aqui, eu escuto e começo a traduzir sua visão em estratégia visual.",
  },
  {
    n: "02",
    title: "Conceito e\ndireção criativa",
    desc: "Desenvolvemos o conceito juntos. Criação de moodboard, definição de paleta, estilo, referências e planejamento criativo. Tudo pensado para refletir a identidade da sua marca.",
  },
  {
    n: "03",
    title: "Produção e preparação",
    desc: "Organizo toda a estrutura: iluminação, equipamentos, casting, styling. Você não precisa se preocupar com detalhes técnicos, eu cuido de tudo.",
  },
  {
    n: "04",
    title: "Sessão de fotos",
    desc: "Com tudo pronto, executamos. A fotografia acontece com direção clara, fluidez e foco no resultado. Você vê a sua marca ganhando forma em tempo real.",
  },
  {
    n: "05",
    title: "Edição e pós-produção",
    desc: "Tratamento preciso, cor fiel, recorte limpo e padronização. Aqui, cada imagem é finalizada com o nível de qualidade que sua marca exige.",
  },
  {
    n: "06",
    title: "Entrega com design\npronto para uso",
    desc: "Você recebe tudo ajustado e pronto para publicar: formatos otimizados (feed, reels, stories, catálogo, campanha), composição visual alinhada e texto integrado, se necessário.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="relative bg-navy-grad text-white py-24 md:py-32 overflow-hidden">
      {/* ambient bg glows */}
      <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-primary-glow/10 blur-[160px]" />

      <DecorativeGear variant="lens" side="left" position="middle" />

      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary-glow" /> PROCESSES
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            How the process works
          </h2>
        </div>

        <div className="mt-16 max-w-5xl mx-auto space-y-5">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card-grad p-8 md:p-10 hover:border-primary/40 transition-all"
            >
              {/* huge soft blue glow centered-left */}
              <div className="pointer-events-none absolute inset-y-0 left-1/4 w-[55%] bg-[radial-gradient(ellipse_at_center,_hsl(226_100%_57%_/_0.55),_transparent_65%)] blur-2xl" />

              <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                <div>
                  <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                    <Sparkles className="h-3 w-3 text-primary-glow" /> STEP | {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold whitespace-pre-line leading-[1.1]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed md:pt-12">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary/30 backdrop-blur border border-primary/40 px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-primary/40 transition"
          >
            Entre em contato agora
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">↗</span>
          </a>
        </div>
      </div>

      {/* Authority strip */}
      <div className="mt-20 bg-blue-grad py-4 overflow-hidden">
        <div className="flex gap-12 marquee w-max font-display text-sm md:text-base text-white uppercase tracking-widest">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              Mais que fotos. Estratégia visual que comunica, vende e posiciona ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
