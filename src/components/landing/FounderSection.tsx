import founder from "@/assets/founder-portrait-new.jpg";

export const FounderSection = () => {
  const circularText = "MUDAR O JOGO • NASCEMOS PARA • ";

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Portrait + overlapping card + circular badge */}
        <div className="relative max-w-[560px] mx-auto lg:mx-0 w-full">
          {/* Portrait */}
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src={founder}
              alt="Matheus Nascimento, fundador"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>

          {/* Overlapping dark info card */}
          <div className="absolute -bottom-6 -right-4 sm:right-0 lg:-right-10 w-[78%] sm:w-[62%] bg-hero text-white p-6 sm:p-8 shadow-glow">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl sm:text-3xl leading-tight text-primary-glow">
                Matheus<br />Nascimento
              </h3>
              <svg
                className="h-5 w-5 text-primary-glow shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-4 h-px w-full bg-primary-glow/40" />
            <div className="mt-4 space-y-1 text-sm text-white/80">
              <p>Diretor Criativo</p>
              <p>+10 anos em direção visual</p>
              <p>Especialista em fotografia editorial</p>
            </div>
          </div>

          {/* Rotating circular text badge */}
          <div className="hidden md:flex absolute -top-6 -right-6 lg:-top-8 lg:-right-8 h-28 w-28 lg:h-32 lg:w-32 items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] text-primary"
            >
              <defs>
                <path
                  id="founder-circle"
                  d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                />
              </defs>
              <text fontSize="18" fontWeight="500" letterSpacing="3" fill="currentColor">
                <textPath href="#founder-circle">{circularText}</textPath>
              </text>
            </svg>
            <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="font-display text-primary text-lg">M</span>
            </div>
          </div>
        </div>

        {/* Right: Heading + copy */}
        <div className="lg:pl-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Quem está por trás</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Nascemos para<br />
            mudar <span className="text-primary">o jogo.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Nossa direção criativa nasceu da força de quem constrói. Reunimos um time que enxerga além das imagens para entender a essência de cada marca.
          </p>
          <p className="mt-5 inline-block bg-primary/15 text-foreground px-2 py-1 text-base sm:text-lg leading-relaxed max-w-xl">
            Inspirados na precisão do cinema, combinamos visão ampla e movimentos exatos — porque sabemos que sua marca é única, e nossa entrega também precisa ser.
          </p>
        </div>
      </div>
    </section>
  );
};
