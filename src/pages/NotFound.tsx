import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import lensImage from "@/assets/camera-lens-404.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-[#f1ead4]">
      {/* Warm golden glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(202,148,40,0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 30% 25% at 50% 50%, rgba(255,190,80,0.25), transparent 75%)",
        }}
      />

      {/* Top pill */}
      <div className="relative z-10 flex justify-center pt-10">
        <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-[#f1ead4]/80 backdrop-blur-md">
          Page not found
        </div>
      </div>

      {/* 404 with lens */}
      <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-6">
        <div className="relative flex items-center justify-center">
          <span
            className="select-none font-display font-bold leading-none tracking-tight text-[#f1ead4]"
            style={{ fontSize: "clamp(180px, 38vw, 560px)" }}
          >
            4
          </span>
          <div
            className="relative mx-[-0.08em]"
            style={{ width: "clamp(180px, 38vw, 560px)", height: "clamp(180px, 38vw, 560px)" }}
          >
            <img
              src={lensImage}
              alt="Camera lens"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />
          </div>
          <span
            className="select-none font-display font-bold leading-none tracking-tight text-[#f1ead4]"
            style={{ fontSize: "clamp(180px, 38vw, 560px)" }}
          >
            4
          </span>
        </div>
      </div>

      {/* Subtitle + CTA */}
      <div className="relative z-10 -mt-8 flex flex-col items-center gap-8 px-6 pb-24 text-center">
        <p className="text-lg text-[#f1ead4]/70 md:text-xl">
          Seems like this page didn't make the final cut.
        </p>
        <Link
          to="/"
          className="rounded-full bg-[#f1ead4] px-8 py-3 text-base font-medium text-black transition-transform hover:scale-[1.03]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
