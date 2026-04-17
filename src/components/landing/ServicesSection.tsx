import { Camera, ShoppingBag, Sparkles, Image as ImageIcon, Wand2, Palette } from "lucide-react";

const services = [
  { icon: Camera, title: "Fotografia de Moda", desc: "Editoriais e campanhas para marcas que vivem de imagem." },
  { icon: Sparkles, title: "Conteúdo para Social", desc: "Pacotes mensais de imagens com curadoria estratégica." },
  { icon: ShoppingBag, title: "Fotografia de Produto", desc: "Still e ambientação para destacar cada detalhe." },
  { icon: ImageIcon, title: "Fotografia para E-commerce", desc: "Padronização visual com alta conversão de vendas." },
  { icon: Palette, title: "Direção Criativa", desc: "Conceito, estética e narrativa para sua marca." },
  { icon: Wand2, title: "Pós-produção Profissional", desc: "Tratamento de cor e retoque com acabamento premium." },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-navy-grad text-white py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-primary/15 blur-[160px] rounded-full" />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Serviços</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            O que eu faço por você e pelo seu posicionamento.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card-grad border border-white/10 rounded-2xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-grad mb-5 shadow-glow">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
