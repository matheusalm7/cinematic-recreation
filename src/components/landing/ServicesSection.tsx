import fashion from "@/assets/service-fashion.png";
import product from "@/assets/service-product.png";
import ecommerce from "@/assets/service-ecommerce.png";
import direction from "@/assets/service-direction.png";
import { Sparkles } from "lucide-react";

interface ServiceCard {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
  imageClass?: string;
  size?: "sm" | "md" | "lg";
}

const services: ServiceCard[] = [
  {
    num: "//01",
    tag: "Fotografia",
    title: "Fotografia\nde Moda",
    desc: "Campanhas, editoriais, coleções e vitrines que colocam sua marca na vitrine que importa: a do desejo.",
    image: fashion,
    imageClass: "right-[-10%] top-[10%] w-[55%] rotate-[-6deg]",
  },
  {
    num: "//02",
    tag: "Design Social",
    title: "Conteúdo\npara Social",
    desc: "Imagens pensadas pra performar. Formatos otimizados com design e headline prontos para tráfego.",
  },
  {
    num: "//03",
    tag: "Produto & Beauty",
    title: "Produto\n& Beauty",
    desc: "Cosméticos, calçados e embalagens com iluminação precisa, recorte limpo e cor fiel.",
    image: product,
    imageClass: "right-[-15%] top-[5%] w-[70%] rotate-[-4deg]",
  },
  {
    num: "//04",
    tag: "E-commerce",
    title: "Fotografia para\nE-commerce",
    desc: "Still, ghost mannequin, flat lay e variações de cor com padrão de qualidade, ficha técnica e consistência visual.",
    image: ecommerce,
    imageClass: "right-[-12%] top-[20%] w-[55%] rotate-[6deg]",
  },
  {
    num: "//05",
    tag: "Fotografia",
    title: "Direção Criativa\n& Produção",
    desc: "Moodboard, styling, casting e narrativa. Uma produção com alma, feita sob medida.",
    image: direction,
    imageClass: "right-[-12%] top-[5%] w-[55%] rotate-[-4deg]",
  },
  {
    num: "//06",
    tag: "Produção",
    title: "Pós-produção\nProfissional",
    desc: "Tratamento natural, correções de cor, padronização por lote. Você aprova e já pode publicar.",
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

              {/* image */}
              {s.image && (
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
