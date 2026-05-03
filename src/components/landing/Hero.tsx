import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { HeroVideoPanel } from "./HeroVideoPanel";

const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
];

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,hsl(var(--navy-deep))_0%,hsl(var(--navy-deep))_78%,hsl(var(--background))_78%,hsl(var(--background))_100%)] md:bg-[linear-gradient(to_bottom,hsl(var(--navy-deep))_0%,hsl(var(--navy-deep))_82%,hsl(var(--background))_82%,hsl(var(--background))_100%)] lg:bg-[linear-gradient(to_bottom,hsl(var(--navy-deep))_0%,hsl(var(--navy-deep))_84%,hsl(var(--background))_84%,hsl(var(--background))_100%)] text-primary-foreground bg-primary-foreground"
    >
      {/* Layered hero gradient (radial glows) on top of the blue area only */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[78%] md:h-[82%] lg:h-[84%] bg-hero z-0" />
      {/* Glows (kept inside blue area) */}
      <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[140px] z-0" />
      <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-glow/20 blur-[120px] z-0" />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <div className="container relative z-10 flex justify-center pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div className="fade-up relative w-full max-w-5xl text-center px-4 sm:px-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
            <div className="flex -space-x-2">
              {SOCIAL_AVATARS.map((src, i) => (
                <Avatar key={i} className="h-7 w-7 ring-2 ring-background">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-white/80">
              Trusted by <strong className="text-white">120+ brands</strong>.
            </span>
          </div>
          <h1 translate="no" className="mt-8 text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight text-white font-serif lg:text-7xl">
            <span>Before you sell, your </span>
            <span className="italic text-primary-glow">business</span>
            <br />
            <span>needs to look like the </span>
            <span className="underline decoration-primary decoration-[6px] underline-offset-[10px]">right choice</span>
            <span>.</span>
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-lg md:text-xl text-white/75">
            We shape how local businesses are seen, remembered, and chosen, transforming perception into preference even before the first conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-blue-grad hover:opacity-90 border-0 rounded-full px-7 h-12 shadow-glow">
              Quero meu orçamento <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 border-white/20 bg-white/5 text-white hover:bg-white/10">
              Ver portfólio
            </Button>
          </div>
        </div>
      </div>
      <HeroVideoPanel />
    </section>
  );
};
