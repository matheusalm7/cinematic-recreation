import { Sparkles } from "lucide-react";
import { PaidTrafficArt } from "./PaidTrafficArt";
import { DesignArt } from "./DesignArt";
import { VideoArt } from "./VideoArt";

interface ServiceCard {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
  imageClass?: string;
  size?: "sm" | "md" | "lg";
  customArt?: boolean;
}

const services: ServiceCard[] = [
  {
    num: "//01",
    tag: "PERFORMANCE",
    title: "Paid Traffic\nManagement",
    desc: "We create, manage and optimize ad campaigns to generate qualified leads and sales with predictable performance.",
    customArt: true,
  },
  {
    num: "//02",
    tag: "WEB",
    title: "Websites &\nLanding Pages",
    desc: "We create conversion-focused pages designed to transform visitors into leads or customers.",
  },
  {
    num: "//03",
    tag: "BRAND",
    title: "Branding &\nPositioning",
    desc: "We define how your brand looks, communicates and positions itself to attract the right audience.",
  },
  {
    num: "//04",
    tag: "DESIGN",
    title: "Graphic\nDesign",
    desc: "We design visual materials for campaigns, social media and brand communication with consistency and clarity.",
    customArt: true,
  },
  {
    num: "//05",
    tag: "VIDEO",
    title: "Video Editing &\nPost-Production",
    desc: "We edit and finalize videos for ads, social media and campaigns, ensuring quality and platform adaptation.",
    customArt: true,
  },
  {
    num: "//06",
    tag: "SOCIAL",
    title: "Social Media\nManagement",
    desc: "We plan and manage your content to keep your brand active, consistent and relevant online.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="relative bg-navy-grad text-white py-24 md:py-32 overflow-hidden">
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

        <div className="mt-16 grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.num}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card-grad p-7 md:p-9 min-h-[340px] md:min-h-[380px] hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              {/* radial blue glow inside card */}
              <div className="pointer-events-none absolute -top-10 -left-10 h-[320px] w-[320px] rounded-full bg-primary/35 blur-[90px] opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* image or custom art */}
              {s.customArt && s.tag === "PERFORMANCE" && <PaidTrafficArt />}
              {s.customArt && s.tag === "DESIGN" && <DesignArt />}
              {s.customArt && s.tag === "VIDEO" && <VideoArt />}
              {s.image && !s.customArt && (
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                  className={`pointer-events-none select-none absolute drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] ${s.imageClass}`}
                />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <p className="font-display text-sm text-white/50 tracking-wider">{s.num}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                  <span className="h-1 w-1 rounded-full bg-primary-glow" /> {s.tag}
                </span>

                <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold whitespace-pre-line leading-[1.05] max-w-[60%]">
                  {s.title}
                </h3>

                <p className="mt-auto pt-8 text-sm text-white/70 max-w-[55%] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-blue-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition"
          >
            Entre em contato agora
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
