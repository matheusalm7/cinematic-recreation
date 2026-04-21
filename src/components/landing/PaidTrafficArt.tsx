import { useEffect, useRef, useState } from "react";
import metaLogo from "@/assets/logo-meta.png";
import googleAdsLogo from "@/assets/logo-google-ads.png";

export const PaidTrafficArt = () => {
  const [loaded, setLoaded] = useState({ meta: false, google: false });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaded.meta && loaded.google) {
      console.log("[PaidTrafficCard]", "Logos loaded successfully");
    }
  }, [loaded]);

  useEffect(() => {
    console.log("[PaidTrafficCard]", "Card rendered");
  }, []);

  const handleError = (which: string) => {
    console.log("[PaidTrafficCard]", "Fallback image handling triggered", which);
  };

  return (
    <div
      ref={containerRef}
      className="absolute right-[2%] top-[50%] -translate-y-1/2 w-[45%] md:w-[42%] h-[70%] pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-primary/20 blur-[60px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      {/* Google Ads block - back */}
      <div
        className="absolute right-[5%] top-[5%] w-[55%] sm:w-[52%] aspect-square 
          rounded-2xl md:rounded-3xl 
          bg-gradient-to-br from-[#1a2544] to-[#0d1a33] 
          border border-white/10 
          shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.15)] 
          rotate-[12deg] 
          flex items-center justify-center
          animate-[floatBack_6s_ease-in-out_infinite]
          group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(59,130,246,0.25)]
          transition-shadow duration-700"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-transparent to-white/[0.04]" />
        <img
          src={googleAdsLogo}
          alt="Google Ads"
          loading="lazy"
          width={512}
          height={512}
          className="w-[65%] h-[65%] object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          onLoad={() => setLoaded((p) => ({ ...p, google: true }))}
          onError={() => handleError("google")}
        />
      </div>

      {/* Meta block - front */}
      <div
        className="absolute left-[0%] bottom-[5%] w-[55%] sm:w-[52%] aspect-square 
          rounded-2xl md:rounded-3xl 
          bg-gradient-to-br from-[#162040] to-[#0e1630] 
          border border-white/10 
          shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.2)] 
          rotate-[-8deg] 
          flex items-center justify-center
          animate-[floatFront_5s_ease-in-out_infinite]
          group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_50px_rgba(59,130,246,0.3)]
          transition-shadow duration-700"
        style={{ zIndex: 2 }}
      >
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-transparent to-white/[0.06]" />
        {/* Highlight edge */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <img
          src={metaLogo}
          alt="Meta"
          loading="lazy"
          width={512}
          height={512}
          className="w-[62%] h-[62%] object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          onLoad={() => setLoaded((p) => ({ ...p, meta: true }))}
          onError={() => handleError("meta")}
        />
      </div>

      {/* Center light burst */}
      <div className="absolute top-[45%] left-[40%] w-[30%] h-[30%] bg-white/10 blur-[40px] rounded-full" />
    </div>
  );
};
