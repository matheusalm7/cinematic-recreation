import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Calendar, Type, Infinity as InfinityIcon, LayoutPanelLeft, Circle, Camera, ChevronUp } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Direção criativa e planejamento",
    text: "Antes da captação, definimos conceito, linguagem visual, enquadramento, ritmo e objetivo de cada entrega. Isso evita vídeo genérico e transforma a produção em material estratégico.",
  },
  {
    icon: Clock,
    title: "Captação com padrão profissional",
    text: "Organizamos câmera, luz, composição, movimento e execução para gerar imagens com mais força visual, percepção de valor e aplicação comercial.",
  },
  {
    icon: Calendar,
    title: "Recursos conforme a demanda do projeto",
    text: "Cada produção pode incluir cenas de produto, lifestyle, bastidores, movimento de câmera, captação aérea com drone e outros recursos visuais de acordo com o objetivo da marca.",
  },
];

const stripText = "Câmera profissional · Drone · Iluminação · Direção criativa · Movimento de câmera · Pós-produção";

export const VideoCaptureSection = () => {
  return (
    <section className="relative bg-black py-16 md:py-24 px-4 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* Top pink pill */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
          <div className="flex items-center justify-center w-16 h-9 rounded-full bg-gradient-to-b from-[#F3B8C9] to-[#E89AB3] shadow-lg">
            <ChevronUp className="h-5 w-5 text-white rotate-180" strokeWidth={3} />
          </div>
        </div>

        {/* Main container */}
        <div className="relative rounded-[40px] md:rounded-[56px] bg-[#F3F0F1] px-6 md:px-16 lg:px-24 pt-16 md:pt-20 pb-0 overflow-hidden">
          {/* Organic decorative shapes */}
          <div className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-[#F0C2A8] opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-40 w-72 h-72 rounded-full bg-[#F3B8C9] opacity-20 blur-3xl pointer-events-none" />
          <svg className="absolute right-10 top-32 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 Q90 30 70 60 T30 90 Q10 70 30 40 T50 10" stroke="#E89AB3" strokeWidth="2" fill="none" />
          </svg>

          {/* Side decorative badge */}
          <div className="hidden lg:flex absolute left-4 top-48 w-28 h-28 rounded-full bg-black items-center justify-center rotate-[-12deg] shadow-xl z-10">
            <div className="text-center">
              <span className="font-display font-bold text-2xl bg-gradient-to-r from-[#F3B8C9] via-[#F0C2A8] to-[#E89AB3] bg-clip-text text-transparent">
                B❀<br/>RA.
              </span>
            </div>
          </div>

          {/* Decorative icons row */}
          <div className="relative flex items-center justify-center gap-6 mb-6">
            <Type className="h-5 w-5 text-[#E89AB3]" />
            <InfinityIcon className="h-5 w-5 text-[#E89AB3]" />
            <LayoutPanelLeft className="h-5 w-5 text-[#E89AB3]" />
            <Circle className="h-5 w-5 text-[#E89AB3]" />
            <Camera className="h-5 w-5 text-[#E89AB3]" />
            <ChevronUp className="h-5 w-5 text-[#E89AB3]" />
          </div>

          {/* Label */}
          <p className="relative text-center text-xs md:text-sm font-semibold tracking-[0.3em] text-[#E89AB3] uppercase mb-6">
            Captação de Vídeo
          </p>

          {/* Headline */}
          <h2 className="relative text-center font-display text-2xl md:text-4xl lg:text-5xl leading-tight text-[#111111] max-w-4xl mx-auto">
            Sua marca precisa de vídeo para{" "}
            <strong className="font-bold">atrair atenção, vender melhor e sustentar posicionamento</strong>.
            O problema é que produzir isso com padrão comercial exige{" "}
            <strong className="font-bold">direção, estrutura e execução profissional</strong>.
          </h2>

          {/* Support text */}
          <p className="relative text-center text-base md:text-lg text-[#3A3A3A] max-w-3xl mx-auto mt-8 leading-relaxed">
            Criamos captações pensadas para marcas que precisam de conteúdo forte para campanhas, redes sociais, lançamentos, apresentação de produto e fortalecimento de marca. Não é só gravar. É produzir com intenção comercial, estética consistente e material pronto para uso real.
          </p>

          {/* Cards grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#FBFBFB] rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center gap-1 bg-black rounded-full px-3 py-1.5">
                    <span className="text-[#E89AB3] text-xs font-bold">ن</span>
                    <card.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg text-[#111111] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#3A3A3A] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative flex justify-center mt-10">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#E89AB3] to-[#F0C2A8] hover:opacity-90 text-white border-0 px-8 h-12 shadow-lg"
            >
              Solicitar orçamento
            </Button>
          </div>

          {/* Decorative bottom strip */}
          <div className="relative mt-16 -mx-6 md:-mx-16 lg:-mx-24">
            <div className="relative h-20 md:h-24 overflow-hidden">
              <div className="absolute inset-x-0 top-2 h-10 md:h-12 bg-[#F0C2A8] -rotate-2 flex items-center overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] font-display text-lg md:text-xl text-[#111111]">
                  {Array(6).fill(stripText).map((t, i) => (
                    <span key={i} className="mx-6">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 top-8 h-10 md:h-12 bg-[#F3B8C9] rotate-1 flex items-center overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_25s_linear_infinite] font-display text-lg md:text-xl text-[#111111]">
                  {Array(6).fill(stripText).map((t, i) => (
                    <span key={i} className="mx-6">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
