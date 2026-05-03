import { ArrowUpRight, Check, X, Laptop } from "lucide-react";

// Isolated faithful replica appended only to /duplicate-page.
// Logging prefix: [DuplicatePage]
const log = (...args: unknown[]) => console.log("[DuplicatePage]", ...args);

const PortraitPlaceholder = ({ initials }: { initials: string }) => (
  <div className="aspect-[3/4] w-full rounded-2xl bg-[linear-gradient(145deg,hsl(222_60%_22%),hsl(218_75%_10%))] flex items-center justify-center text-white/30 font-display text-5xl border border-white/5">
    {initials}
  </div>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--navy-deep))] text-white pt-16 pb-24">
    {/* nav */}
    <div className="relative z-10 mx-auto max-w-6xl px-6 flex items-center justify-between">
      <span className="font-display text-2xl tracking-tight">alma<span className="text-primary">.</span></span>
      <nav className="hidden md:flex gap-8 text-sm text-white/70">
        <a href="#">Quem somos</a><a href="#">Soluções</a><a href="#">Artigos</a><a href="#">Diagnóstico</a>
      </nav>
    </div>

    {/* portraits arc */}
    <div className="relative mx-auto max-w-3xl mt-12 px-6">
      <div className="absolute inset-x-10 top-6 h-56 rounded-b-[140px] bg-primary/40 blur-sm" />
      <div className="relative grid grid-cols-3 gap-3">
        <PortraitPlaceholder initials="RL" />
        <div className="-mt-6"><PortraitPlaceholder initials="RG" /></div>
        <PortraitPlaceholder initials="LA" />
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-6xl px-6 mt-16 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1]">
          Crescer na <em className="font-display italic text-primary-glow">odontologia</em><br />
          é opcional. Crescer sem<br />clareza cobra juros altos.
        </h2>
        <p className="mt-6 text-white/70 max-w-md text-sm leading-relaxed">
          Para clínicas que querem crescer com previsibilidade, organização e estratégia. Aqui o foco é gestão clara, marketing inteligente e decisões baseadas em dados — não em achismo.
        </p>
      </div>
      <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur space-y-4">
        <input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40" placeholder="Nome completo" />
        <input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40" placeholder="WhatsApp" />
        <input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40" placeholder="E-mail" />
        <button type="button" onClick={() => log("hero cta")} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-white hover:bg-primary/90 transition">
          Vamos conversar sobre o seu negócio? <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  </section>
);

const ChartCard = () => (
  <div className="rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 p-6">
    <svg viewBox="0 0 320 140" className="w-full h-32">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(226 100% 57%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(226 100% 57%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,110 C40,100 70,90 110,70 C150,50 180,40 220,30 L240,20 L240,140 L0,140 Z" fill="url(#g1)" />
      <path d="M0,110 C40,100 70,90 110,70 C150,50 180,40 220,30 L240,20" fill="none" stroke="hsl(226 100% 67%)" strokeWidth="2" />
      <line x1="240" y1="0" x2="240" y2="140" stroke="white" strokeOpacity="0.15" strokeDasharray="3 3" />
      <circle cx="240" cy="20" r="5" fill="white" stroke="hsl(226 100% 57%)" strokeWidth="2" />
    </svg>
    <p className="mt-4 font-display text-lg text-white">Mais consultas.<br />Mais entrada de caixa.</p>
    <p className="mt-2 text-xs text-white/60 leading-relaxed">
      Quem cuida da gestão entende que cada decisão impacta o resultado final do mês. Você não precisa esperar para ter previsibilidade.
    </p>
  </div>
);

const StrategicSection = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <div className="mx-auto max-w-3xl text-center">
      <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
        Consultoria em odontologia para<br />
        quem <em className="italic text-primary-glow font-display">cansou do improviso.</em>
      </h3>
      <p className="mt-4 text-sm text-white/65 max-w-2xl mx-auto">
        Atendemos clínicas que querem mais clareza, gestão de verdade e marketing estratégico — não improviso disfarçado de planejamento. Aqui as decisões são tomadas com base em método, não em sorte.
      </p>
    </div>

    <div className="mx-auto max-w-5xl mt-12 grid md:grid-cols-2 gap-6">
      <ChartCard />
      <div className="rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 p-6">
        <p className="text-sm text-white/70 mb-4">Antes de tudo, uma fundo de gestão organizada.</p>
        <ul className="space-y-3 text-sm">
          {["Clareza nos números", "Equipe alinhada", "Agenda otimizada", "Linguagem consistente"].map((t) => (
            <li key={t} className="flex items-center gap-3"><Check className="h-4 w-4 text-primary-glow" />{t}</li>
          ))}
        </ul>
        <div className="mt-6 space-y-2">
          {["Posicionamento", "Gestão", "Crescimento"].map((t, i) => (
            <div key={t} style={{ transform: `translateX(${i * 6}px)`, opacity: 1 - i * 0.15 }} className="rounded-lg bg-primary/80 px-4 py-2 text-sm font-medium">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <h3 className="text-center font-display text-3xl md:text-4xl font-semibold">
      Marketing odontológico não<br />
      sustenta um negócio <em className="italic text-primary-glow font-display">mal gerido.</em>
    </h3>
    <p className="text-center mt-4 text-sm text-white/65 max-w-2xl mx-auto">
      Mais tráfego, mais leads, mais anúncios não resolvem nada se a operação não acompanha. Antes de escalar, é preciso organizar.
    </p>

    <div className="mx-auto max-w-5xl mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
      <div className="rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 p-6">
        <div className="rounded-md bg-primary px-4 py-2 text-sm font-semibold inline-block mb-4">Como muitas clínicas trabalham</div>
        <ul className="space-y-2 text-sm text-white/80">
          <li>• Tráfego sem estratégia clara, custos altos</li>
          <li>• Leads chegando, nenhum sistema para converter</li>
          <li>• Equipe travada, sem padrão de atendimento</li>
          <li>• Falta de processos claros</li>
          <li>• Tudo apoiado em uma só pessoa</li>
        </ul>
      </div>
      <div className="text-3xl text-white/40 text-center">×</div>
      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6">
        <div className="rounded-md bg-primary px-4 py-2 text-sm font-semibold inline-block mb-4">Como fazemos de forma diferente</div>
        <ul className="space-y-2 text-sm text-white/90">
          <li>• Estratégia integrada com gestão e operação</li>
          <li>• Origem em diagnóstico real do negócio</li>
          <li>• Execução guiada com método claro</li>
          <li>• Agenda e processos organizados de ponta a ponta</li>
          <li>• Crescimento construído com método e dados</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-10">
      <button onClick={() => log("comparison cta")} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition">
        Vamos conversar sobre o seu negócio? <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);

const AISection = () => {
  const items = ["Organizar todas as informações do negócio", "Reduzir custo operacional", "Padronizar processos", "Liberar o tempo da equipe", "Aumentar a clareza nas tomadas de decisão"];
  return (
    <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          {items.map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-[hsl(var(--navy))]/60 p-4 flex items-center justify-between gap-4">
              <span className="text-sm">{t}</span>
              <div className="relative h-1 w-24 rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-primary" />
                <div className="absolute -top-1 left-2/3 h-3 w-3 -translate-x-1/2 rounded-full bg-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="md:pt-6">
          <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Automação com IA<br />não resolve bagunça.<br />
            <em className="italic text-primary-glow font-display">Ela amplifica.</em>
          </h3>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Por isso, antes de aplicar inteligência artificial, ajustamos o que é estrutura: gestão, processos e clareza. Só então a tecnologia entra para acelerar resultados.
          </p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Sem mais bagunça. A inteligência. Como funciona quem realmente cresce.
          </p>
        </div>
      </div>
    </section>
  );
};

const OrbitSection = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="font-display text-3xl md:text-4xl font-semibold">
        Gestão, marketing e tecnologia.<br />Tudo integrado.
      </h3>
      <p className="mt-4 text-sm text-white/65">
        A Alma trabalha as três frentes em conexão para entregar resultados reais para sua clínica.
      </p>
    </div>

    <div className="relative mx-auto mt-16 aspect-square max-w-xl">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[12%] rounded-full border border-white/10" />
      <div className="absolute inset-[24%] rounded-full border border-primary/30" />
      <div className="absolute inset-[40%] rounded-full bg-primary flex items-center justify-center font-display text-3xl">a</div>
      {[
        { t: "Gestão da rotina", x: "50%", y: "8%" },
        { t: "Marketing digital estratégico", x: "88%", y: "32%" },
        { t: "Conversão e experiência do paciente", x: "88%", y: "62%" },
        { t: "Automação e inteligência artificial", x: "50%", y: "92%" },
        { t: "Previsibilidade e crescimento", x: "12%", y: "62%" },
        { t: "Marketing e branding consistentes", x: "12%", y: "32%" },
      ].map((p) => (
        <div key={p.t} style={{ left: p.x, top: p.y }} className="absolute -translate-x-1/2 -translate-y-1/2 text-[11px] text-white/80 text-center max-w-[120px]">
          <div className="mx-auto mb-1 h-2 w-2 rounded-full bg-primary-glow" />
          {p.t}
        </div>
      ))}
    </div>
  </section>
);

const FoundersSection = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="font-display text-3xl md:text-4xl font-semibold">
        Experiência, método<br />e <em className="italic text-primary-glow font-display">visão de longo prazo.</em>
      </h3>
      <p className="mt-4 text-sm text-white/65">
        A Alma é conduzida por sócios com método, com anos de experiência ao seu lado. Sem improviso. Sem expectativa de uma jornada solo.
      </p>
    </div>

    <div className="mx-auto max-w-5xl mt-12 grid md:grid-cols-3 gap-6">
      {[
        { name: "Ricardo Lima", role: "Sócio diretor de gestão e estratégia" },
        { name: "Rodrigo Gardelli", role: "Sócio responsável por marketing e branding" },
        { name: "Lucas Azevedo", role: "Sócio diretor de tecnologia e operações" },
      ].map((f) => (
        <div key={f.name} className="rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 overflow-hidden">
          <div className="aspect-[4/5] bg-[linear-gradient(145deg,hsl(222_60%_22%),hsl(218_75%_10%))] flex items-center justify-center text-white/30 font-display text-6xl">
            {f.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="p-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Sócio</p>
            <p className="font-display text-xl mt-1">{f.name}</p>
            <p className="text-xs text-white/60 mt-2">{f.role}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <button onClick={() => log("founders cta")} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition">
        Vamos conversar sobre o seu negócio? <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);

const DiagnosticSection = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
          Diagnóstico não é<br />etapa. <em className="italic text-primary-glow font-display">É fundamento.</em>
        </h3>
        <p className="mt-4 text-sm text-white/65 max-w-md">
          Toda clínica da Alma começa pelo nosso ponto-zero. Uma análise diagnóstica do negócio, identificando os ativos atuais, oportunidades e travas reais antes de qualquer execução.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 p-6">
        <p className="text-sm text-white/70 mb-4">O que fazem no Alma 360 Diagnóstico</p>
        <ul className="space-y-3 text-sm">
          {[
            "Leitura estratégica do negócio",
            "Análise de gestão, marketing e operação",
            "Análise de tráfego, captação e conversão",
            "Mapeamento das travas de crescimento",
            "Definição clara das prioridades",
          ].map((t, i) => (
            <li key={t} className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-primary text-xs flex items-center justify-center font-semibold">0{i + 1}</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ResultBand = () => (
  <section className="relative bg-primary text-white py-20 px-6 overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-24 bg-[hsl(var(--navy-deep))]" />
    <div className="absolute inset-y-0 right-0 w-24 bg-[hsl(var(--navy-deep))]" />
    <div className="relative text-center">
      <h3 className="font-display text-3xl md:text-4xl font-semibold">O resultado:</h3>
      <p className="mt-2 text-sm text-white/80">Clínicas que crescem com método.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Liquidez no caixa", "Equipe estável", "Agenda cheia com pacientes do tipo certo"].map((t) => (
          <span key={t} className="rounded-md bg-[hsl(var(--navy-deep))] px-5 py-2 text-sm">{t}</span>
        ))}
      </div>
    </div>
  </section>
);

const LaptopCta = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white py-24 px-6">
    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/60 p-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="rounded-xl bg-[hsl(var(--navy-deep))] aspect-video flex items-center justify-center">
        <Laptop className="h-20 w-20 text-primary" />
      </div>
      <div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold">Adiar decisões também é uma decisão.</h3>
        <p className="mt-3 text-sm text-white/65">
          Cada mês sem clareza significa pagar pequenos juros invisíveis: agenda mais frágil, conversão mais baixa, equipe mais perdida. O custo do "depois" é maior do que parece.
        </p>
      </div>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="bg-[hsl(var(--navy-deep))] text-white pt-12 pb-24 px-6 text-center">
    <h3 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl mx-auto">
      Antes de investir mais em<br />marketing, invista em <em className="italic text-primary-glow font-display">clareza.</em>
    </h3>
    <button onClick={() => log("final cta")} className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition">
      Vamos conversar sobre o seu negócio? <ArrowUpRight className="h-4 w-4" />
    </button>
    <p className="mt-4 text-[11px] text-white/40 max-w-md mx-auto">
      Conversa estratégica gratuita, sem compromisso, com nossos sócios diretores.
    </p>
    <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between max-w-5xl mx-auto text-xs text-white/50">
      <span className="font-display text-xl">alma<span className="text-primary">.</span></span>
      <span>© 2026 Alma. Todos os direitos reservados.</span>
    </div>
  </section>
);

export const ReferencePixelMatchSection = () => {
  return (
    <div className="bg-[hsl(var(--navy-deep))]">
      <Hero />
      <StrategicSection />
      <ComparisonSection />
      <AISection />
      <OrbitSection />
      <FoundersSection />
      <DiagnosticSection />
      <ResultBand />
      <LaptopCta />
      <FinalCta />
    </div>
  );
};
