const bullets = [
  "Diagnóstico completo do consultório",
  "Plano estratégico personalizado",
  "Implementação acompanhada de perto",
  "Resultados mensuráveis em até 90 dias",
];

const tabs = ["Posicionamento", "Gestão", "Crescimento"];

const StrategicStack = ({ items }: { items: string[] }) => {
  const STEP_Y = 38;
  const STEP_X = 26;
  const CARD_H = 56;
  const totalH = CARD_H + STEP_Y * (items.length - 1);

  // Sampled directly from the reference image
  const layerColors = [
    "#252E49", // top card
    "#152348", // middle card
    "#22376B", // bottom card (more vivid blue)
  ];

  return (
    <div
      className="mt-auto pt-10 relative w-full"
      style={{ height: `${totalH + 20}px` }}
    >
      {items.map((label, i) => (
        <div
          key={label}
          className="absolute rounded-[16px]"
          style={{
            top: `${i * STEP_Y}px`,
            left: `${-i * STEP_X}px`,
            right: `${i * STEP_X}px`,
            height: `${CARD_H}px`,
            zIndex: i + 1,
            background: layerColors[i],
            border: "1px solid rgba(120, 150, 220, 0.35)",
            boxShadow:
              "0 18px 30px -18px rgba(10, 15, 35, 0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <span className="flex h-full items-center justify-center text-[14px] font-normal tracking-wide text-white/85">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const ChartSVG = () => (
  <svg viewBox="0 0 400 180" className="w-full h-auto" preserveAspectRatio="none">
    <defs>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Area */}
    <path
      d="M0,150 C40,140 70,135 100,125 C140,112 170,95 200,75 C230,55 260,40 290,30 C320,22 350,28 400,40 L400,180 L0,180 Z"
      fill="url(#areaGrad)"
    />
    {/* Line */}
    <path
      d="M0,150 C40,140 70,135 100,125 C140,112 170,95 200,75 C230,55 260,40 290,30 C320,22 350,28 400,40"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Vertical dashed divider at peak */}
    <line
      x1="290"
      y1="0"
      x2="290"
      y2="180"
      stroke="hsl(var(--primary))"
      strokeOpacity="0.35"
      strokeWidth="1"
      strokeDasharray="3 4"
    />
    {/* Peak dot */}
    <circle cx="290" cy="30" r="6" fill="white" stroke="hsl(var(--primary))" strokeWidth="2.5" />
  </svg>
);

export const StrategicCoreSection = () => {
  return (
    <section className="bg-white text-[hsl(var(--navy-deep,222_47%_11%))] py-24 px-6 border-primary-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - wide */}
        <div className="md:col-span-2 rounded-2xl border border-foreground/15 bg-white shadow-sm p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display leading-tight tracking-tight text-foreground">
            Content built to drive{" "}
            <span className="italic text-primary font-display">real results.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
            At Agnus, we go beyond creating visually appealing content. Every project is built with a clear objective: to attract attention, communicate value and support business growth.
          </p>
        </div>

        {/* Card 2 - chart */}
        <div className="rounded-2xl border border-foreground/15 bg-white shadow-sm p-8 flex flex-col">
          <div className="flex-1">
            <ChartSVG />
          </div>
          <div className="mt-6">
            <p className="text-sm uppercase tracking-widest text-foreground/50">Resultado real</p>
            <p className="mt-2 text-xl md:text-2xl font-display text-foreground">
              <span className="italic text-primary">We’re not here to just deliver services.</span> We
              integrate as the strategic team driving your business forward.
            </p>
          </div>
        </div>

        {/* Card 3 - bullets + tabs */}
        <div className="rounded-2xl border border-foreground/15 bg-white shadow-sm p-8 pb-0 flex flex-col overflow-hidden">
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>

          <StrategicStack items={tabs} />
        </div>
      </div>
    </section>
  );
};
