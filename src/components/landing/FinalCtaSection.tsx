import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="bg-hero text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/25 blur-[160px] rounded-full" />
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Vamos conversar</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Vamos criar algo<br />
            <span className="text-primary-glow italic">extraordinário</span> juntos.
          </h2>
          <p className="mt-5 text-white/70 max-w-md text-lg">
            Conte sua história. Construímos a imagem certa para sua marca ser desejada.
          </p>
        </div>

        <div className="bg-card-grad rounded-3xl p-8 border border-white/10 shadow-card-premium">
          <h3 className="font-display text-2xl font-semibold">Solicite seu orçamento</h3>
          <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
            />
            <textarea
              rows={3}
              placeholder="Conte sobre seu projeto"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary resize-none"
            />
            <Button type="submit" size="lg" className="w-full bg-blue-grad hover:opacity-90 rounded-xl h-12 shadow-glow">
              Enviar mensagem <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
          <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="flex items-center gap-2 hover:text-white"><Instagram className="h-4 w-4" /> @studio</a>
            <a href="#" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> hello@studio.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
