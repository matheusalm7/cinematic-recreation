import { Star } from "lucide-react";

const testimonials = [
  { name: "Marina S.", role: "Diretora de Marca, Atelier Luxe", quote: "Trabalho impecável. As imagens elevaram completamente o posicionamento da nossa marca." },
  { name: "Rafael T.", role: "CEO, Studio Moda", quote: "Mais que fotografia, uma consultoria de imagem. Resultado direto em vendas." },
  { name: "Camila L.", role: "Founder, Maré Cosméticos", quote: "Profissionalismo do briefing à entrega. Recomendo de olhos fechados." },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Depoimentos</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            O que os nossos clientes estão dizendo.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card-grad text-white rounded-2xl p-7 border border-white/10 shadow-card-premium hover:shadow-glow transition">
              <div className="flex gap-1 text-primary-glow">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-white/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
