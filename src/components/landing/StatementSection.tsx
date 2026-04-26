import strategicCaptureImage from "@/assets/strategic-capture-clapper.jpg";

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

const BlockGrid = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
    aria-hidden
  />
);

export const StatementSection = () => {
  return (
    <section className="relative w-full bg-white text-foreground py-28 md:py-40 overflow-hidden">
      {/* Soft top-to-bottom luminance */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,255,1) 60%, rgba(255,255,255,1) 100%)",
        }}
        aria-hidden
      />

      {/* Wide, ambient blue glow — top right */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full blur-[120px] opacity-[0.18]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* Subtle counter glow — bottom left */}
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[140px] opacity-[0.10]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* Page-level ultra-subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">

        {/* Headline */}
        <h2 className="mt-8 max-w-5xl font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-tight text-foreground">
          Você não precisa de
          <br />
          mais conteúdo.
          <span className="relative ml-2 inline-block text-primary">
            Precisa de direção.
            <span
              className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 blur-2xl opacity-30"
              style={{ background: "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)" }}
              aria-hidden
            />
          </span>
        </h2>

        {/* Visual break */}
        <div className="mt-16 md:mt-20 flex items-center gap-6">
          <div className="h-px w-24 bg-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/55">
            o que muda quando há método
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>

        {/* Staggered 3-block composition */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-y-12 md:gap-y-20">
          {beliefs.map((b, i) => {
            const placement =
              i === 0
                ? "md:col-span-5 md:col-start-1"
                : i === 1
                ? "md:col-span-5 md:col-start-7 md:mt-12"
                : "md:col-span-5 md:col-start-2";

            return (
              <article
                key={b.number}
                className={`col-span-12 ${placement} group relative`}
              >
                {/* Block surface */}
                <div className="relative rounded-2xl border border-foreground/[0.06] bg-white/60 backdrop-blur-[2px] p-7 md:p-9 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_20px_60px_-30px_hsl(var(--primary)/0.25)] transition-all duration-500 hover:border-primary/25 hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_30px_80px_-30px_hsl(var(--primary)/0.4)]">
                  {/* Per-block technical grid */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <BlockGrid />
                  </div>

                  {/* Localized corner glow */}
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                    style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
                    aria-hidden
                  />

                  {/* Top corner technical marker */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5" aria-hidden>
                    <span className="h-1 w-1 rounded-full bg-primary/70" />
                    <span className="h-px w-4 bg-primary/40" />
                  </div>

                  {/* Number + line */}
                  <div className="relative flex items-baseline gap-4">
                    <span className="font-display text-sm text-primary tracking-widest font-semibold">
                      {b.number}
                    </span>
                    <div className="h-px flex-1 bg-foreground/10 transition-all duration-500 group-hover:bg-primary/50" />
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    {b.title}
                    <span className="ml-2 inline-block h-2 w-2 translate-y-[-0.4em] rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" aria-hidden />
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 text-base md:text-lg text-foreground/65 leading-relaxed max-w-sm">
                    {b.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-px w-8 bg-primary/70 transition-all duration-500 group-hover:w-14" />
                    <span className="h-px flex-1 bg-foreground/[0.06]" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bloco complementar — Por trás de cada captação */}
        <div className="mt-10 md:mt-14 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative flex justify-center md:justify-start">
            <div
              className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)" }}
              aria-hidden
            />
            <img
              src={strategicCaptureImage}
              alt="Elemento visual de captação estratégica"
              loading="lazy"
              className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] object-contain drop-shadow-2xl"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-4 font-display text-sm md:text-base font-semibold text-foreground tracking-wide">
              Por trás de cada captação:
            </p>
            <ul className="space-y-2 text-sm md:text-base leading-relaxed text-foreground/65">
              <li>→ direção comercial</li>
              <li>→ narrativa visual</li>
              <li>→ posicionamento estratégico</li>
              <li>→ execução orientada à conversão</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
