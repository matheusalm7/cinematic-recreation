import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import sonyFx3 from "@/assets/sony-fx3.png";

const items = [
  "Pré-produção estratégica para cada projeto",
  "Direção criativa alinhada ao posicionamento",
  "Equipe completa: fotógrafo, beauty, styling",
  "Estúdio próprio equipado com tecnologia premium",
  "Pós-produção entregue em tempo recorde",
  "Acompanhamento exclusivo do início ao fim",
];

export const DifferentialsSection = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <img
        src={sonyFx3}
        alt="Sony FX3 cinema camera"
        loading="lazy"
        width={1024}
        height={1024}
        className="hidden lg:block pointer-events-none select-none absolute -right-24 xl:-right-16 top-1/2 -translate-y-1/2 w-[420px] xl:w-[520px] opacity-90 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] z-0"
      />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Diferenciais</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
              Aqui você não contrata <span className="text-muted-foreground line-through">um fotógrafo</span>.<br />
              Você contrata <span className="text-primary">uma orquestra.</span>
            </h2>

            <ul className="mt-8 space-y-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-grad shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-8 bg-blue-grad hover:opacity-90 rounded-full h-12 px-7 shadow-glow">
              Quero contratar
            </Button>
          </div>

          <div className="relative">
            <div className="bg-card-grad text-white rounded-3xl p-8 border border-white/10 shadow-card-premium">
              <p className="font-display text-3xl">Por trás de cada projeto, existe dedicação, técnica e paixão pelo que fazemos.</p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div><p className="font-display text-3xl text-primary-glow">+10</p><p className="text-xs text-white/60 uppercase tracking-wider mt-1">anos</p></div>
                <div><p className="font-display text-3xl text-primary-glow">+200</p><p className="text-xs text-white/60 uppercase tracking-wider mt-1">projetos</p></div>
                <div><p className="font-display text-3xl text-primary-glow">+120</p><p className="text-xs text-white/60 uppercase tracking-wider mt-1">marcas</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
