import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  { q: "Como funciona o orçamento?", a: "Após uma conversa inicial entendendo sua marca e necessidades, enviamos uma proposta personalizada em até 48h." },
  { q: "Atendem fora da cidade?", a: "Sim, atendemos no Brasil inteiro e também internacionalmente para projetos de marca." },
  { q: "Qual o prazo de entrega?", a: "Em média de 7 a 15 dias úteis após a sessão, dependendo da complexidade do projeto." },
  { q: "Posso usar as imagens em todas as plataformas?", a: "Sim. Você recebe os direitos de uso para todos os canais conforme contrato." },
  { q: "Vocês ajudam com direção criativa?", a: "Sim, isso é parte essencial do nosso processo. Construímos o conceito junto com você." },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="container">
        {/* Mid CTA card */}
        <div className="bg-card-grad text-white rounded-3xl p-10 md:p-14 text-center shadow-card-premium border border-white/10 max-w-4xl mx-auto mb-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-[300px] w-[300px] bg-primary/30 blur-[100px] rounded-full" />
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow relative">Pronto para começar?</p>
          <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold relative">
            Quer fotos que vendam <em className="text-primary-glow not-italic">e posicionem?</em>
          </h3>
          <Button size="lg" className="mt-6 bg-blue-grad hover:opacity-90 rounded-full h-12 px-8 shadow-glow relative">
            Solicitar orçamento <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">Perguntas frequentes</h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="font-display text-lg hover:no-underline text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
