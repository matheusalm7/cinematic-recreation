import aeLogo from "@/assets/logo-aftereffects.jpg";
import prLogo from "@/assets/logo-premiere.jpg";

export const VideoArt = () => {
  return (
    <div
      className="absolute right-[2%] top-[50%] -translate-y-1/2 w-[45%] md:w-[42%] h-[70%] pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-primary/20 blur-[60px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      {/* After Effects - back */}
      <div
        className="absolute right-[5%] top-[5%] w-[55%] sm:w-[52%] aspect-square
          rounded-2xl md:rounded-3xl
          bg-white
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.25)]
          rotate-[12deg]
          flex items-center justify-center
          overflow-hidden
          animate-[floatBack_6s_ease-in-out_infinite]
          group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_45px_rgba(59,130,246,0.4)]
          transition-shadow duration-700"
        style={{ zIndex: 1 }}
      >
        <img
          src={aeLogo}
          alt="Adobe After Effects"
          loading="lazy"
          width={512}
          height={512}
          className="w-[88%] h-[88%] object-contain object-center"
        />
      </div>

      {/* Premiere - front */}
      <div
        className="absolute left-[0%] bottom-[5%] w-[55%] sm:w-[52%] aspect-square
          rounded-2xl md:rounded-3xl
          bg-white
          border border-white/20
          shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.3)]
          rotate-[-8deg]
          flex items-center justify-center
          overflow-hidden
          animate-[floatFront_5s_ease-in-out_infinite]
          group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_55px_rgba(59,130,246,0.45)]
          transition-shadow duration-700"
        style={{ zIndex: 2 }}
      >
        <img
          src={prLogo}
          alt="Adobe Premiere Pro"
          loading="lazy"
          width={512}
          height={512}
          className="w-[88%] h-[88%] object-contain object-center"
        />
      </div>

      {/* Center light burst */}
      <div className="absolute top-[45%] left-[40%] w-[30%] h-[30%] bg-white/10 blur-[40px] rounded-full" />
    </div>
  );
};
