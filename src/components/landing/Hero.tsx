import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#042d1f] flex flex-col justify-center overflow-hidden selection:bg-[#f1ead4] selection:text-[#042d1f] px-6 md:px-12 py-24 font-sans">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
      />

      {/* Top Utility Bar (avatars + pulse) — leaves room for fixed header */}
      <div className="absolute top-28 left-6 md:left-12 right-6 md:right-12 flex justify-between items-start z-10">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {SOCIAL_AVATARS.map((src, i) => (
              <Avatar key={i} className="h-10 w-10 border-2 border-[#042d1f]">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-[#f1ead4]/60 text-[10px] uppercase tracking-[0.2em] font-medium">
            Trusted by <span className="text-[#f1ead4]">120+ brands</span>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="p-4 border border-[#f1ead4]/20 rounded-full">
            <div className="w-2 h-2 bg-[#f1ead4] rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-12">
            <h1
              translate="no"
              className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tighter text-[#f1ead4] font-normal uppercase italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Before you <span className="not-italic">sell,</span>
              <br />
              <span className="block">
                your <span className="text-[#f1ead4]/40">business</span>
              </span>
              <span className="block lg:text-right">
                needs to{" "}
                <span className="not-italic underline decoration-1 underline-offset-8">look</span>{" "}
                like the
              </span>
              <span className="block">right choice.</span>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:col-start-1 mt-12">
            <p className="text-[#f1ead4]/80 text-lg md:text-xl leading-relaxed max-w-md">
              We shape how local businesses are seen, remembered, and chosen, transforming perception into preference even before the first conversation.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 items-center justify-end">
            <a
              href="#contato"
              className="group relative w-full sm:w-auto px-10 py-6 bg-[#f1ead4] text-[#042d1f] font-semibold text-sm uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 text-center"
            >
              Quero meu orçamento
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto px-10 py-6 border border-[#f1ead4]/30 text-[#f1ead4] font-semibold text-sm uppercase tracking-widest hover:bg-[#f1ead4]/5 transition-colors text-center"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end border-t border-[#f1ead4]/10 pt-8 z-10">
        <div className="text-[#f1ead4]/40 text-[10px] uppercase tracking-widest flex flex-col gap-1">
          <span>Based in Brazil</span>
          <span>EST. 2024</span>
        </div>
        <div className="flex gap-8 text-[#f1ead4]/40 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-[#f1ead4] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#f1ead4] transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#f1ead4]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
