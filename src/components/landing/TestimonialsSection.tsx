import { TestimonialsCarousel, type Testimonial } from "@/components/ui/testimonials-carousel";

const row1: Testimonial[] = [
  {
    text: "Trabalho impecável. As imagens elevaram completamente o posicionamento da nossa marca.",
    highlight: "elevaram completamente",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    name: "Marina Souza",
    role: "Diretora de Marca, Atelier Luxe",
  },
  {
    text: "Mais que fotografia, uma consultoria de imagem. Resultado direto em vendas.",
    highlight: "Resultado direto em vendas",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    name: "Rafael Tavares",
    role: "CEO, Studio Moda",
  },
  {
    text: "Profissionalismo do briefing à entrega. Recomendo de olhos fechados para qualquer marca premium.",
    highlight: "Profissionalismo do briefing à entrega",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    name: "Camila Lopes",
    role: "Founder, Maré Cosméticos",
  },
  {
    text: "A direção criativa entendeu nosso DNA e traduziu em vídeo com padrão de campanha nacional.",
    highlight: "padrão de campanha nacional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    name: "Lucas Andrade",
    role: "CMO, Vinhos Reserva",
  },
  {
    text: "Entrega no prazo, estética consistente e material que vendeu sozinho nas redes.",
    highlight: "vendeu sozinho",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    name: "Patrícia Nunes",
    role: "Head Digital, Blume Joalheria",
  },
];

const row2: Testimonial[] = [
  {
    text: "Captação cinematográfica que transformou nosso lançamento em evento. Performance acima do esperado.",
    highlight: "cinematográfica",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    name: "André Mello",
    role: "Diretor, Casa Vértice",
  },
  {
    text: "Trabalham com intenção comercial. Cada frame foi pensado para gerar conversão.",
    highlight: "intenção comercial",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces",
    name: "Beatriz Carvalho",
    role: "Brand Manager, Nova Cosmetics",
  },
  {
    text: "Equipe técnica impecável. Drone, iluminação, direção — tudo em padrão profissional.",
    highlight: "padrão profissional",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
    name: "Ricardo Pinto",
    role: "Sócio, Arquitetura Vetro",
  },
  {
    text: "O melhor investimento de marca que fizemos no ano. Material que continua performando.",
    highlight: "melhor investimento",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    name: "Helena Rocha",
    role: "Founder, Linho & Cia",
  },
  {
    text: "Direção criativa séria, execução premium e atendimento que entende o ritmo de uma marca.",
    highlight: "execução premium",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces",
    name: "Thiago Barros",
    role: "CEO, Origem Restaurante",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-glow">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            What our customers are saying.
          </h2>
        </div>
      </div>

      <div className="mt-14 space-y-6">
        <TestimonialsCarousel testimonials={row1} direction="left" speed={45} />
        <TestimonialsCarousel testimonials={row2} direction="right" speed={50} />
      </div>
    </section>
  );
};
