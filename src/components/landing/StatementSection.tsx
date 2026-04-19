const beliefs = [
  {
    number: "01",
    title: "Direção",
    description: "Sem estratégia, estética não vende. Definimos o caminho antes do clique.",
  },
  {
    number: "02",
    title: "Intenção",
    description: "Cada imagem carrega um papel. Nada é decorativo, tudo posiciona.",
  },
  {
    number: "03",
    title: "Execução",
    description: "Consistência transforma percepção em decisão de compra.",
  },
];

export const StatementSection = () => {
  return (
    <section className="relative w-full bg-foreground text-background py-28 md:py-40 overflow-hidden">
      {/* Subtle technical grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      {/* Floating accent element */}
      <div
        className="pointer-events-none absolute -top-20 right-[8%] h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/50">
          <span className="h-px w-10 bg-background/40" />
          <span>Belief / 02</span>
        </div>

        {/* Headline — left aligned, oversized */}
        <h2 className="mt-8 max-w-5xl font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-tight">
          Você não precisa de
          <br />
          mais conteúdo.
          <span className="text-primary"> Precisa de direção.</span>
        </h2>

        {/* Visual break */}
        <div className="mt-16 md:mt-20 flex items-center gap-6">
          <div className="h-px w-24 bg-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-background/60">
            o que muda quando há método
          </span>
        </div>

        {/* Staggered 3-block composition (12-col grid) */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-y-16 md:gap-y-24">
          {/* Block 1 — left */}
          <article className="col-span-12 md:col-span-5 md:col-start-1 group">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm text-primary tracking-widest">
                {beliefs[0].number}
              </span>
              <div className="h-px flex-1 bg-background/15 transition-all duration-500 group-hover:bg-primary/60" />
            </div>
            <h3 className="mt-5 font-display text-4xl md:text-5xl font-bold text-background">
              {beliefs[0].title}
            </h3>
            <p className="mt-4 text-base md:text-lg text-background/65 leading-relaxed max-w-sm">
              {beliefs[0].description}
            </p>
          </article>

          {/* Block 2 — pushed right */}
          <article className="col-span-12 md:col-span-5 md:col-start-7 md:mt-12 group">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm text-primary tracking-widest">
                {beliefs[1].number}
              </span>
              <div className="h-px flex-1 bg-background/15 transition-all duration-500 group-hover:bg-primary/60" />
            </div>
            <h3 className="mt-5 font-display text-4xl md:text-5xl font-bold text-background">
              {beliefs[1].title}
            </h3>
            <p className="mt-4 text-base md:text-lg text-background/65 leading-relaxed max-w-sm">
              {beliefs[1].description}
            </p>
          </article>

          {/* Block 3 — back to left, slightly inset */}
          <article className="col-span-12 md:col-span-5 md:col-start-2 group">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm text-primary tracking-widest">
                {beliefs[2].number}
              </span>
              <div className="h-px flex-1 bg-background/15 transition-all duration-500 group-hover:bg-primary/60" />
            </div>
            <h3 className="mt-5 font-display text-4xl md:text-5xl font-bold text-background">
              {beliefs[2].title}
            </h3>
            <p className="mt-4 text-base md:text-lg text-background/65 leading-relaxed max-w-sm">
              {beliefs[2].description}
            </p>
          </article>
        </div>

        {/* Discrete CTA */}
        <div className="mt-20 md:mt-28 md:col-start-2 md:ml-[8.333%]">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/80 hover:text-primary transition-colors duration-300"
          >
            <span>Ver como isso funciona</span>
            <span className="inline-block h-px w-10 bg-current transition-all duration-300 group-hover:w-16" />
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
