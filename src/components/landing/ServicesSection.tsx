import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import serviceAuthority from "@/assets/service-authority.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";

interface ServiceCard {
  num: string;
  tag: string;
  title: string;
  italic: string;
  desc: string;
  metric: string;
  metricLabel: string;
  image?: string;
}

const services: ServiceCard[] = [
  {
    num: "01",
    tag: "Performance",
    title: "Visual Authority",
    italic: "System",
    desc: "Produções visuais desenhadas para posicionar sua marca como referência de mercado e elevar o valor percebido antes da primeira venda.",
    metric: "+312%",
    metricLabel: "valor percebido",
    image: serviceAuthority,
  },
  {
    num: "02",
    tag: "Attention",
    title: "Attention &",
    italic: "Engagement Engine",
    desc: "Conteúdo estratégico construído para capturar atenção, sustentar interesse e mover sua audiência para perto da ação.",
    metric: "8.4x",
    metricLabel: "retenção média",
  },
  {
    num: "03",
    tag: "Positioning",
    title: "Brand Positioning",
    italic: "Assets",
    desc: "Ativos estratégicos que diferenciam sua marca e tornam você a escolha óbvia em um mercado saturado.",
    metric: "01/01",
    metricLabel: "único no nicho",
  },
  {
    num: "04",
    tag: "Growth",
    title: "Growth",
    italic: "Amplification",
    desc: "Estratégias de tráfego pago focadas em escalar o que já funciona e transformar atenção em receita consistente.",
    metric: "4.7x",
    metricLabel: "ROAS médio",
    image: serviceGrowth,
  },
  {
    num: "05",
    tag: "Finishing",
    title: "Conversion-Ready",
    italic: "Finishing",
    desc: "Edição e finalização otimizadas para performance — construídas para atrair, engajar e converter em qualquer plataforma.",
    metric: "0.3s",
    metricLabel: "hook time",
    image: serviceFinishing,
  },
  {
    num: "06",
    tag: "Direction",
    title: "Strategic Creative",
    italic: "Direction",
    desc: "Direção visual e narrativa clara para garantir consistência, posicionamento e impacto em cada ponto de contato.",
    metric: "360°",
    metricLabel: "visão estratégica",
  },
];

const ServiceTile = ({ s, index }: { s: ServiceCard; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  };

  const hasImage = Boolean(s.image);

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setMouse((m) => ({ ...m, active: false }))}
      style={{
        ["--mx" as any]: `${mouse.x}%`,
        ["--my" as any]: `${mouse.y}%`,
      }}
      className="group relative overflow-hidden border border-[hsl(var(--foreground)/0.12)] bg-[hsl(var(--background))] transition-all duration-500 hover:border-[hsl(var(--foreground)/0.35)]"
    >
      {/* Spotlight follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), hsl(var(--foreground) / 0.10), transparent 55%)",
        }}
      />

      {/* Diagonal grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 6px)",
        }}
      />

      {/* Animated border sweep */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-1/2 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--foreground)/0.55)] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />
      </div>

      <div className="relative z-10 grid gap-10 p-8 md:p-12 min-h-[460px]">
        {/* Header row */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span
              className="font-serif italic text-[hsl(var(--foreground)/0.25)] leading-none"
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              {s.num}
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--foreground)/0.55)] translate-y-[-0.4rem]">
              — {s.tag}
            </span>
          </div>
          <ArrowUpRight className="h-6 w-6 text-[hsl(var(--foreground)/0.45)] transition-all duration-500 group-hover:rotate-45 group-hover:text-[hsl(var(--foreground))]" />
        </div>

        {/* Title block */}
        <div>
          <h3
            className="leading-[0.92] tracking-[-0.02em]"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.4rem, 4.4vw, 4.5rem)",
            }}
          >
            <span className="block">{s.title}</span>
            <span className="block italic text-[hsl(var(--foreground)/0.7)]">
              {s.italic}
            </span>
          </h3>
        </div>

        {/* Optional image */}
        {hasImage && (
          <div className="relative overflow-hidden border border-[hsl(var(--foreground)/0.12)]">
            <img
              src={s.image}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className="aspect-[16/9] w-full object-cover grayscale-[40%] transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/70 via-transparent to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground)/0.7)]">
              FRAME / {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        )}

        {/* Footer row: desc + metric */}
        <div className="mt-auto grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end pt-8 border-t border-[hsl(var(--foreground)/0.12)]">
          <p className="text-sm md:text-[15px] text-[hsl(var(--foreground)/0.7)] leading-relaxed max-w-[46ch]">
            {s.desc}
          </p>
          <div className="md:text-right">
            <div
              className="font-serif leading-none tracking-tight"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.4rem, 3.6vw, 3.6rem)",
              }}
            >
              {s.metric}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground)/0.5)]">
              {s.metricLabel}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setScrollY(-r.top * 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-32 md:py-44"
    >
      {/* Parallax background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center select-none"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <span
          className="block leading-none whitespace-nowrap text-transparent"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(10rem, 26vw, 32rem)",
            WebkitTextStroke: "1px hsl(var(--foreground) / 0.07)",
          }}
        >
          Services
        </span>
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-[hsl(var(--foreground)/0.05)] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[hsl(var(--foreground)/0.04)] blur-[140px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 items-end mb-20 md:mb-28">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[hsl(var(--foreground)/0.4)]" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-[hsl(var(--foreground)/0.6)]">
                ⟶ Serviços disponíveis / 06 capítulos
              </span>
            </div>
            <h2
              className="leading-[0.88] tracking-[-0.025em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(3.5rem, 9vw, 10rem)",
              }}
            >
              <span className="block">O que eu faço</span>
              <span className="block italic text-[hsl(var(--foreground)/0.65)]">
                pelo seu&nbsp;
                <span
                  className="not-italic"
                  style={{
                    WebkitTextStroke: "1px hsl(var(--foreground) / 0.85)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  posicionamento.
                </span>
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-sm md:text-base text-[hsl(var(--foreground)/0.7)] leading-relaxed max-w-[42ch]">
              Um sistema modular construído para marcas que exigem
              presença, performance e permanência. Cada serviço opera de forma
              independente — juntos, formam uma máquina de posicionamento.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground)/0.5)]">
              <span>EST. 2024</span>
              <span className="h-px w-8 bg-[hsl(var(--foreground)/0.25)]" />
              <span>BRAZIL → WORLD</span>
            </div>
          </div>
        </div>

        {/* Marquee divider */}
        <div className="relative overflow-hidden border-y border-[hsl(var(--foreground)/0.12)] py-4 mb-16">
          <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {services.map((s) => (
                  <span
                    key={`${i}-${s.num}`}
                    className="text-[11px] uppercase tracking-[0.5em] text-[hsl(var(--foreground)/0.55)] flex items-center gap-12"
                  >
                    <span className="italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      ✦
                    </span>
                    {s.tag} — {s.title.replace(/\n/g, " ")}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Services grid — asymmetric bento */}
        <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--foreground)/0.12)] border border-[hsl(var(--foreground)/0.12)]">
          {services.map((s, i) => (
            <ServiceTile key={s.num} s={s} index={i} />
          ))}
        </div>

        {/* CTA block */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p
              className="leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              }}
            >
              Pronto para deixar de ser{" "}
              <span className="italic text-[hsl(var(--foreground)/0.55)]">opção</span>{" "}
              e virar <span className="italic">referência?</span>
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-4 px-8 py-5 border border-[hsl(var(--foreground)/0.3)] rounded-full overflow-hidden transition-colors duration-500 hover:text-[hsl(var(--background))]"
            >
              <span className="absolute inset-0 bg-[hsl(var(--foreground))] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative text-sm uppercase tracking-[0.35em] font-medium">
                Quero meu orçamento
              </span>
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-current">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
