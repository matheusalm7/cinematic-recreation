import { DecorativeGear } from "./DecorativeGear";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const PortfolioSection = () => {
  const items = [g1, g2, g3, g4, g5];
  return (
    <section id="portfolio" className="relative bg-navy-grad text-white py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[800px] bg-primary/15 blur-[140px] rounded-full" />
      <DecorativeGear variant="lens" side="left" position="top" />

      <div className="container relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Portfólio</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Trabalhos que falam por si.</h2>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="flex gap-6 marquee w-max">
          {[...items, ...items].map((src, i) => (
            <div key={i} className="w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-card-premium shrink-0">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-white/10 py-6">
        <div className="flex gap-12 marquee w-max font-display text-3xl md:text-5xl uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-white/30 shrink-0">
              P★RTFÓLIO <span className="text-primary-glow">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
