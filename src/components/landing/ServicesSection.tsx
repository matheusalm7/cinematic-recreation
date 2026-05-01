import { Sparkles } from "lucide-react";
import serviceAuthority from "@/assets/service-authority.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";

interface ServiceCard {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
}

const services: ServiceCard[] = [
  {
    num: "//01",
    tag: "PERFORMANCE",
    title: "Visual Authority\nSystem",
    desc: "Visual productions designed to position your brand as a market reference and elevate perceived value before the first sale.",
    image: serviceAuthority,
  },
  {
    num: "//02",
    tag: "ATTENTION",
    title: "Attention &\nEngagement Engine",
    desc: "Strategic content built to capture attention, sustain interest, and move your audience closer to action.",
  },
  {
    num: "//03",
    tag: "POSITIONING",
    title: "Brand Positioning\nAssets",
    desc: "Strategic assets that differentiate your brand and make you the obvious choice in a crowded market.",
  },
  {
    num: "//04",
    tag: "GROWTH",
    title: "Growth\nAmplification",
    desc: "Paid traffic strategies focused on scaling what already works and turning attention into consistent revenue.",
    image: serviceGrowth,
  },
  {
    num: "//05",
    tag: "FINISHING",
    title: "Conversion-Ready\nFinishing",
    desc: "Editing and finalization optimized for performance — built to attract, engage, and convert across platforms.",
    image: serviceFinishing,
  },
  {
    num: "//06",
    tag: "DIRECTION",
    title: "Strategic Creative\nDirection",
    desc: "Clear visual and narrative direction to ensure consistency, positioning, and impact across every touchpoint.",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="relative bg-navy-grad text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary-glow" /> Serviços disponíveis
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            O que eu faço por você e<br />
            pelo seu posicionamento:
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => {
            const hasImage = Boolean(s.image);
            return (
              <article
                key={s.num}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card-grad p-7 md:p-8 min-h-[420px] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* radial blue glow inside card */}
                <div className="pointer-events-none absolute -top-10 -left-10 h-[280px] w-[280px] rounded-full bg-primary/30 blur-[90px] opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* For cards without image: subtle decorative accents */}
                {!hasImage && (
                  <>
                    <div className="pointer-events-none absolute -bottom-20 -right-10 h-[260px] w-[260px] rounded-full bg-primary-glow/15 blur-[100px]" />
                    <div className="pointer-events-none absolute inset-x-7 bottom-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </>
                )}

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm text-white/50 tracking-wider">
                      {s.num}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                      <span className="h-1 w-1 rounded-full bg-primary-glow" />
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl md:text-[26px] font-bold whitespace-pre-line leading-[1.1]">
                    {s.title}
                  </h3>

                  {hasImage && (
                    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        width={1024}
                        height={1024}
                        aria-hidden="true"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/60 via-transparent to-transparent" />
                    </div>
                  )}

                  <p
                    className={`text-sm text-white/70 leading-relaxed ${
                      hasImage ? "mt-5" : "mt-auto pt-10"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-blue-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition"
          >
            Entre em contato agora
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
