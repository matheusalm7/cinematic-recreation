import { Sparkles, Zap, Camera, PenTool, Wand2, Users } from "lucide-react";
import lens from "@/assets/camera-lens-404.png";
import gallery from "@/assets/gallery-3.jpg";
import f1 from "@/assets/founder-portrait.jpg";
import f2 from "@/assets/founder-2.jpg";
import f3 from "@/assets/founder-portrait-new.jpg";
import f4 from "@/assets/hero-photographer.jpg";

const bars = [
  { label: "14M", h: 55 },
  { label: "24M", h: 78 },
  { label: "12M", h: 48 },
  { label: "16M", h: 60 },
  { label: "42M", h: 100 },
];

export const OurProcessSection = () => {
  return (
    <section id="nosso-processo" className="relative bg-[#f1ead4] py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8511f] text-white px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Características
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-[#1a1a1a]">
            Nosso processo
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-5 auto-rows-[minmax(0,auto)]">
          {/* Card 1: Bar chart */}
          <article className="col-span-12 md:col-span-4 row-span-2 rounded-3xl bg-white/70 backdrop-blur p-7 border border-black/5 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-[#1a1a1a] leading-snug">
              Mais de 500 milhões de visualizações geradas
            </h3>
            <p className="mt-3 text-sm text-[#1a1a1a]/65 leading-relaxed">
              Ajudando marcas e criadores a expandir seu alcance por meio de conteúdo envolvente.
            </p>
            <div className="mt-6 rounded-2xl bg-[#0e0e0e] p-6 h-[260px] flex items-end justify-between gap-3">
              {bars.map((b, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                  <span className="text-[11px] font-semibold text-white/90">{b.label}</span>
                  <div
                    className="w-full rounded-md bg-[#e8511f] origin-bottom"
                    style={{
                      height: `${b.h}%`,
                      animation: `grow-bar 1.2s ${i * 0.12}s cubic-bezier(.2,.8,.2,1) both`,
                    }}
                  />
                </div>
              ))}
            </div>
          </article>

          {/* Card 2: Audience circles */}
          <article className="col-span-12 md:col-span-4 row-span-2 rounded-3xl bg-white/70 backdrop-blur p-7 border border-black/5 shadow-sm overflow-hidden">
            <h3 className="font-display text-xl font-semibold text-[#1a1a1a] leading-snug">
              Prazos de entrega rápidos e eficientes
            </h3>
            <p className="mt-3 text-sm text-[#1a1a1a]/65 leading-relaxed">
              Obtenha conteúdo de alta qualidade mais rapidamente do que com agências tradicionais.
            </p>
            <div className="relative mt-6 h-[260px]">
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[280px] h-[180px] rounded-t-full bg-[#fde0d8]" />
              {[
                { src: f1, cls: "left-[8%] top-[35%] w-16 h-16" },
                { src: f2, cls: "left-[26%] top-[8%] w-20 h-20" },
                { src: f3, cls: "left-[calc(50%-3rem)] top-0 w-24 h-24" },
                { src: f4, cls: "right-[20%] top-[12%] w-20 h-20" },
                { src: f1, cls: "right-[4%] top-[40%] w-16 h-16" },
              ].map((c, i) => (
                <img
                  key={i}
                  src={c.src}
                  alt=""
                  className={`absolute rounded-full object-cover border-4 border-white shadow-md ${c.cls}`}
                  style={{ animation: `float-y 4s ${i * 0.3}s ease-in-out infinite` }}
                />
              ))}
            </div>
          </article>

          {/* Card 3: Dark tall card with lens */}
          <article className="col-span-12 md:col-span-4 md:row-span-4 rounded-3xl bg-[#0e0e0e] p-7 border border-black/20 shadow-sm overflow-hidden relative flex flex-col">
            <h3 className="font-display text-xl font-semibold text-white leading-snug">
              Soluções criativas para conteúdo de formato curto de alto impacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {[
                "Edições otimizadas para a plataforma",
                "Ganchos de parada de rolagem",
                "Prazos de entrega rápidos e confiáveis.",
                "Fluxo de trabalho claro e colaborativo",
                "Suporte contínuo de conteúdo",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <Zap className="h-4 w-4 text-[#e8511f] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 -mb-7 -mr-7 flex justify-end">
              <img src={lens} alt="" className="w-[420px] max-w-full object-contain" />
            </div>
          </article>

          {/* Card 4: Top tools */}
          <article className="col-span-12 md:col-span-4 row-span-2 rounded-3xl bg-white/70 backdrop-blur p-7 border border-black/5 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-[#1a1a1a] leading-snug">
              Desenvolvido por Top Tools
            </h3>
            <p className="mt-3 text-sm text-[#1a1a1a]/65 leading-relaxed">
              Ajudando marcas e criadores a expandir seu alcance por meio de conteúdo envolvente.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-[240px]">
              {[Camera, PenTool, Wand2, Sparkles, Users].map((Icon, i) => (
                <div
                  key={i}
                  className="h-12 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm hover:shadow-md transition"
                >
                  <Icon className="h-5 w-5 text-[#1a1a1a]/70" />
                </div>
              ))}
            </div>
          </article>

          {/* Card 5: Wide support card */}
          <article
            className="col-span-12 md:col-span-4 row-span-2 rounded-3xl border border-black/5 shadow-sm overflow-hidden relative min-h-[220px] flex items-center"
            style={{ backgroundImage: `url(${gallery})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30" />
            <div className="relative z-10 p-7">
              <p className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug max-w-md">
                Suporte 24 horas por dia, 7 dias por semana
              </p>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes grow-bar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes float-y { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </section>
  );
};
