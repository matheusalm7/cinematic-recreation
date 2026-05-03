import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, MessageCircle, Award, BarChart3 } from "lucide-react";

const whatsMessages = [
  { name: "Pietro Augusto", time: "há 1 min", text: "Olá! Tenho interesse no item do anúncio." },
  { name: "Maria Eduarda", time: "há 5 min", text: "Oiii, esse produto ainda está disponível?" },
  { name: "Patrícia Luz", time: "há 12 min", text: "Quais são os modelos disponíveis??" },
  { name: "Pedro Júnior", time: "há 23 min", text: "Olá! Tenho interesse no item do anúncio." },
];

const orbitTools = [
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be316999be0b9ed3994dcb_google.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be339e31bd9bb366e500fa_orbita2.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be398be9606b7c81d14a87_orbita3.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be3dc60f61cfa425c6de78_orbita-4.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be3dc7f15e065fe682733f_orbita6.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be3dc74ac63608710d7f7e_orbita5.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be3eb22a0a3358af863885_orbita7.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66be3eb3555ffc57d3d83667_orbita8.png",
];

const reportCards = [
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66bbc19e5d128ba8305ff426_carta%CC%83o1.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66bbc19e01f1d2eb894d2b76_carta%CC%83o2.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66bbc19ea97d06e4b8bec5d6_cartao3.png",
  "https://cdn.prod.website-files.com/66abe745afaa2b8c0a261b86/66bbc19e478117223f19da20_cartao4.png",
];

export const PerformanceManagementSection = () => {
  console.log("[DuplicatePage]", "PerformanceManagementSection render");

  return (
    <section className="relative overflow-hidden bg-[hsl(168_100%_9%)] py-20 md:py-28 lg:py-32">
      {/* Subtle ambient glows */}
      <div aria-hidden className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[hsl(144_90%_16%/0.35)] blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[hsl(29_73%_71%/0.10)] blur-[120px]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(29_73%_71%)]">
            Performance
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[hsl(36_89%_90%)]">
            Gestão de <span className="italic text-[hsl(29_73%_71%)]">Performance</span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[hsl(36_89%_90%/0.72)] max-w-2xl">
            Dormimos e acordamos pensando em estratégias para te fazer vender mais.
            Somos TUDO: menos "apertadores de botão."
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-[hsl(144_90%_16%)] hover:bg-[hsl(144_90%_20%)] text-[hsl(36_89%_90%)] border-0 rounded-full px-7 h-12 shadow-[0_20px_60px_-20px_hsl(144_90%_16%/0.7)]">
              Entrar em contato <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Card 1 - Performance / chart */}
          <article className="group relative overflow-hidden rounded-3xl border border-[hsl(36_89%_90%/0.14)] bg-[hsl(168_90%_11%/0.6)] backdrop-blur-sm p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-all duration-500 hover:border-[hsl(29_73%_71%/0.45)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_hsl(0_0%_0%/0.6)]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(144_90%_16%/0.4)] ring-1 ring-[hsl(36_89%_90%/0.12)]">
                <TrendingUp className="h-4 w-4 text-[hsl(29_73%_71%)]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[hsl(36_89%_90%/0.65)]">e-commerce</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(36_89%_90%)] leading-tight max-w-md">
              Previsibilidade e picos de vendas para o seu e-commerce
            </h3>
            <div className="mt-8 relative h-40">
              <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(29 73% 71%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(29 73% 71%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,130 C60,120 90,100 140,90 C190,80 220,100 260,75 C300,50 340,30 400,15 L400,160 L0,160 Z" fill="url(#perfGrad)" />
                <path d="M0,130 C60,120 90,100 140,90 C190,80 220,100 260,75 C300,50 340,30 400,15" fill="none" stroke="hsl(29 73% 71%)" strokeWidth="2.5" />
                {[ [60,120],[140,90],[260,75],[340,30],[400,15] ].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="4" fill="hsl(36 89% 90%)" stroke="hsl(144 90% 16%)" strokeWidth="2" />
                ))}
              </svg>
            </div>
          </article>

          {/* Card 2 - WhatsApp */}
          <article className="group relative overflow-hidden rounded-3xl border border-[hsl(36_89%_90%/0.14)] bg-[hsl(168_90%_11%/0.6)] backdrop-blur-sm p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-all duration-500 hover:border-[hsl(29_73%_71%/0.45)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_hsl(0_0%_0%/0.6)]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(144_90%_16%/0.4)] ring-1 ring-[hsl(36_89%_90%/0.12)]">
                <MessageCircle className="h-4 w-4 text-[hsl(29_73%_71%)]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[hsl(36_89%_90%/0.65)]">WhatsApp · CRM</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(36_89%_90%)] leading-tight max-w-md">
              Receba leads altamente qualificados no seu WhatsApp ou CRM
            </h3>
            <ul className="mt-6 space-y-2.5">
              {whatsMessages.map((m, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-[hsl(36_89%_90%/0.10)] bg-[hsl(168_100%_9%/0.5)] px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(144_90%_16%)] text-[hsl(36_89%_90%)] text-[11px] font-semibold">
                    {m.name.split(" ").map(n=>n[0]).slice(0,2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-[hsl(36_89%_90%)] truncate">{m.name}</p>
                      <span className="text-[10px] text-[hsl(36_89%_90%/0.55)] shrink-0">{m.time}</span>
                    </div>
                    <p className="text-xs text-[hsl(36_89%_90%/0.7)] truncate">{m.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card 3 - Especialistas / orbits */}
          <article className="group relative overflow-hidden rounded-3xl border border-[hsl(36_89%_90%/0.14)] bg-[hsl(168_90%_11%/0.6)] backdrop-blur-sm p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-all duration-500 hover:border-[hsl(29_73%_71%/0.45)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_hsl(0_0%_0%/0.6)]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(144_90%_16%/0.4)] ring-1 ring-[hsl(36_89%_90%/0.12)]">
                <Award className="h-4 w-4 text-[hsl(29_73%_71%)]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[hsl(36_89%_90%/0.65)]">Certificações</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(36_89%_90%)] leading-tight max-w-md">
              Seja atendido por especialistas certificados nas principais ferramentas
            </h3>
            <div className="mt-8 relative h-48 md:h-56 flex items-center justify-center">
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-32 w-32 md:h-40 md:w-40 rounded-full border border-[hsl(36_89%_90%/0.15)]" />
                <div className="absolute h-48 w-48 md:h-56 md:w-56 rounded-full border border-[hsl(36_89%_90%/0.10)]" />
              </div>
              {/* Outer orbit (slow) */}
              <div className="absolute h-48 w-48 md:h-56 md:w-56 animate-[spin_30s_linear_infinite]">
                {orbitTools.slice(0, 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="absolute h-9 w-9 rounded-full bg-[hsl(36_89%_90%)] p-1.5 shadow-md"
                    style={{
                      top: `${50 - 50 * Math.cos((i / 4) * Math.PI * 2)}%`,
                      left: `${50 + 50 * Math.sin((i / 4) * Math.PI * 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
              {/* Inner orbit (reverse) */}
              <div className="absolute h-32 w-32 md:h-40 md:w-40 animate-[spin_20s_linear_infinite_reverse]">
                {orbitTools.slice(4, 8).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="absolute h-8 w-8 rounded-full bg-[hsl(36_89%_90%)] p-1.5 shadow-md"
                    style={{
                      top: `${50 - 50 * Math.cos((i / 4) * Math.PI * 2 + Math.PI / 4)}%`,
                      left: `${50 + 50 * Math.sin((i / 4) * Math.PI * 2 + Math.PI / 4)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
              {/* Center logo */}
              <div className="relative h-14 w-14 rounded-full bg-[hsl(144_90%_16%)] flex items-center justify-center ring-4 ring-[hsl(168_100%_9%)] shadow-[0_0_30px_-5px_hsl(29_73%_71%/0.5)]">
                <Award className="h-6 w-6 text-[hsl(29_73%_71%)]" />
              </div>
            </div>
          </article>

          {/* Card 4 - Relatórios */}
          <article className="group relative overflow-hidden rounded-3xl border border-[hsl(36_89%_90%/0.14)] bg-[hsl(168_90%_11%/0.6)] backdrop-blur-sm p-7 md:p-9 min-h-[340px] md:min-h-[380px] transition-all duration-500 hover:border-[hsl(29_73%_71%/0.45)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_hsl(0_0%_0%/0.6)]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(144_90%_16%/0.4)] ring-1 ring-[hsl(36_89%_90%/0.12)]">
                <BarChart3 className="h-4 w-4 text-[hsl(29_73%_71%)]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[hsl(36_89%_90%/0.65)]">Relatórios</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(36_89%_90%)] leading-tight max-w-md">
              Acompanhe seu crescimento a partir de nossos relatórios semanais
            </h3>
            <div className="mt-6 -mx-7 md:-mx-9 px-7 md:px-9 overflow-hidden">
              <div className="flex gap-3 animate-[reportSlide_28s_linear_infinite]">
                {[...reportCards, ...reportCards].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-40 w-auto rounded-xl border border-[hsl(36_89%_90%/0.10)] shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.6)] shrink-0"
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes reportSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
