import founder from "@/assets/founder-portrait-new.jpg";
import { DecorativeGear } from "./DecorativeGear";

export const FounderSection = () => {
  return (
    <section className="relative bg-hero text-white py-24 overflow-hidden">
      <DecorativeGear variant="lens" side="left" position="bottom" />
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] bg-primary/20 blur-[140px] rounded-full" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Quem está por trás</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-tight">
            Matheus<br />Nascimento
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-md">
            Mais de 10 anos transformando marcas em referências visuais. Especialista em direção criativa e fotografia editorial para marcas que querem se destacar.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
            <div><p className="font-display text-3xl text-primary-glow">+10</p><p className="text-xs text-white/60 uppercase tracking-wider">anos</p></div>
            <div><p className="font-display text-3xl text-primary-glow">+500</p><p className="text-xs text-white/60 uppercase tracking-wider">campanhas</p></div>
            <div><p className="font-display text-3xl text-primary-glow">+120</p><p className="text-xs text-white/60 uppercase tracking-wider">marcas</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-grad rounded-[2rem] opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img src={founder} alt="Matheus Nascimento" loading="lazy" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
