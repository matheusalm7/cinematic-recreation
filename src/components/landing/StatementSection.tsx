import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const StatementSection = () => {
  return (
    <section className="relative bg-background pt-40 md:pt-56 pb-24 md:pb-32 overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              É <span className="text-primary">processo</span>.<br />
              É <span className="text-primary">propósito</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Cada imagem é construída com intenção. Da pré-produção à entrega, tudo gira em torno de um objetivo: posicionar.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">desde 2014</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute top-0 right-0 w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card-premium border border-border rotate-2">
              <img src={portfolio1} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card-premium border border-border -rotate-3">
              <img src={portfolio3} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-[45%] aspect-square rounded-2xl overflow-hidden shadow-glow border-2 border-primary/30">
              <img src={portfolio4} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
