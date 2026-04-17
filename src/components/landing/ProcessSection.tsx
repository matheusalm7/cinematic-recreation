import { Button } from "@/components/ui/button";
import { DecorativeGear } from "./DecorativeGear";

const steps = [
  { n: "01", title: "Briefing estratégico", desc: "Entendemos sua marca, público e objetivos." },
  { n: "02", title: "Direção criativa", desc: "Construímos conceito, mood e referências." },
  { n: "03", title: "Pré-produção", desc: "Locação, equipe, styling e cronograma definidos." },
  { n: "04", title: "Sessão de fotos", desc: "Captura no estúdio com toda atenção aos detalhes." },
  { n: "05", title: "Seleção e tratamento", desc: "Curadoria fina e pós-produção premium." },
  { n: "06", title: "Entrega final", desc: "Material organizado e pronto para usar." },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="relative bg-navy-grad text-white py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 h-[400px] w-[400px] bg-primary/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-primary-glow/15 blur-[140px] rounded-full" />
      <DecorativeGear variant="camera" side="left" position="bottom" />

      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Como funciona</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">O processo, do início ao fim.</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative rounded-2xl p-7 border transition-all hover:-translate-y-1 ${
                i === 1 || i === 4
                  ? "bg-blue-grad border-primary/50 shadow-glow"
                  : "bg-card-grad border-white/10 hover:border-primary/40"
              }`}
            >
              <p className={`font-display text-4xl ${i === 1 || i === 4 ? "text-white/40" : "text-primary-glow/50"}`}>{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90 rounded-full h-12 px-8 font-semibold">
            Iniciar meu projeto
          </Button>
        </div>
      </div>

      {/* Authority strip */}
      <div className="mt-20 bg-blue-grad py-4 overflow-hidden">
        <div className="flex gap-12 marquee w-max font-display text-sm md:text-base text-white uppercase tracking-widest">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              Mais que fotos. Estratégia visual ✦ Confiança que vende ✦ Posicionamento premium ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
