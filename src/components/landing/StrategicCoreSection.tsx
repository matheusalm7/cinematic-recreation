const bullets = [
  "Diagnóstico completo do consultório",
  "Plano estratégico personalizado",
  "Implementação acompanhada de perto",
  "Resultados mensuráveis em até 90 dias",
];

const tabs = ["Posicionamento", "Gestão", "Crescimento"];

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
    <section className="bg-white text-[hsl(var(--navy-deep,222_47%_11%))] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - wide */}
        <div className="md:col-span-2 rounded-2xl border border-foreground/15 bg-white shadow-sm p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display leading-tight tracking-tight text-foreground">
            Consultoria em odontologia para quem{" "}
            <span className="italic text-primary font-display">cansou do improviso.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
            A ALMA é o núcleo estratégico que transforma consultórios odontológicos em negócios
            sólidos, escaláveis e lucrativos — com método, clareza e acompanhamento próximo.
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
              <span className="italic text-primary">Não somos agência.</span> Somos o time
              estratégico que faltava no seu consultório.
            </p>
          </div>
        </div>

        {/* Card 3 - bullets + tabs */}
        <div className="rounded-2xl border border-foreground/15 bg-white shadow-sm p-8 flex flex-col">
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 relative flex flex-col items-center">
            {tabs.map((t, i) => (
              <div
                key={t}
                style={{
                  transform: `translateY(${i * -8}px) scale(${1 - i * 0.05})`,
                  zIndex: tabs.length - i,
                }}
                className="w-full max-w-xs rounded-full border border-foreground/15 bg-white shadow-sm py-3 px-6 text-center text-foreground font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
