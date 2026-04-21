import { Sparkles } from "lucide-react";
import { DecorativeGear } from "./DecorativeGear";

const steps = [
  {
    n: "01",
    title: "Understanding your business",
    desc: "Before anything is executed, we get into your business to understand how you currently attract customers, where the bottlenecks are, and what actually needs to change for you to grow. Decisions come from your real situation.",
  },
  {
    n: "02",
    title: "Strategic\nplanning",
    desc: "Once that’s clear, we build a simple and focused plan around what actually drives results. You understand what will be done, why it matters, and how it impacts your growth.",
  },
  {
    n: "03",
    title: "Guided\nexecution",
    desc: "From here, execution is on us. Our team handles every step closely, without adding complexity or extra work for you. While we run the process, you stay fully focused on your business.",
  },
  {
    n: "04",
    title: "Continuous\noptimization",
    desc: "As things go live, we look at what’s working and quickly adjust what needs improvement. Nothing stays static. The process evolves based on real performance.",
  },
  {
    n: "05",
    title: "Ready to use",
    desc: "Everything is delivered ready to go, with clear next steps so you can start using it immediately and turn it into real results for your business.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="relative bg-navy-grad text-white py-24 md:py-32 overflow-hidden">
      {/* ambient bg glows */}
      <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-primary-glow/10 blur-[160px]" />

      <DecorativeGear variant="lens" side="left" position="middle" />

      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary-glow" /> PROCESSES
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            How the process works
          </h2>
        </div>

        <div className="mt-16 max-w-5xl mx-auto space-y-5">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card-grad p-8 md:p-10 hover:border-primary/40 transition-all"
            >
              {/* huge soft blue glow centered-left */}
              <div className="pointer-events-none absolute inset-y-0 left-1/4 w-[55%] bg-[radial-gradient(ellipse_at_center,_hsl(226_100%_57%_/_0.55),_transparent_65%)] blur-2xl" />

              <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                <div>
                  <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                    <Sparkles className="h-3 w-3 text-primary-glow" /> STEP | {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold whitespace-pre-line leading-[1.1]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed md:pt-12">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary/30 backdrop-blur border border-primary/40 px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-primary/40 transition"
          >
            Get in touch now
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">↗</span>
          </a>
        </div>
      </div>

    </section>
  );
};
