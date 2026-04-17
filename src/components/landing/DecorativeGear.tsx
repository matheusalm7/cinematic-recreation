import camera from "@/assets/camera-gear.png";
import lens from "@/assets/lens-gear.png";

interface Props {
  variant?: "camera" | "lens";
  side?: "left" | "right";
  position?: "top" | "bottom" | "middle";
  className?: string;
}

export const DecorativeGear = ({ variant = "camera", side = "left", position = "bottom", className = "" }: Props) => {
  const src = variant === "camera" ? camera : lens;
  const sideClass = side === "left" ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3";
  const posClass = position === "top" ? "top-0 -translate-y-1/4" : position === "bottom" ? "bottom-0 translate-y-1/4" : "top-1/2 -translate-y-1/2";
  const flip = side === "right" ? "scale-x-[-1]" : "";
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none select-none absolute ${sideClass} ${posClass} ${flip} w-[280px] md:w-[420px] lg:w-[520px] opacity-80 hidden md:block z-0 drop-shadow-[0_20px_40px_rgba(36,92,255,0.35)] ${className}`}
    />
  );
};
