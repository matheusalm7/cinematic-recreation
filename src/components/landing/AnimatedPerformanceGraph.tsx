import { useEffect, useMemo, useState } from "react";
import { Phone, MessageCircle, FileText, TrendingUp, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

type BarDatum = {
  x: number;
  base: number;
  hover: number;
  accent?: "lime" | "mint" | "warm";
};

const bars: BarDatum[] = [
  { x: 5, base: 28, hover: 42 },
  { x: 12, base: 36, hover: 52, accent: "mint" },
  { x: 19, base: 30, hover: 48 },
  { x: 26, base: 44, hover: 58 },
  { x: 33, base: 38, hover: 62, accent: "lime" },
  { x: 40, base: 50, hover: 66 },
  { x: 47, base: 46, hover: 70 },
  { x: 54, base: 58, hover: 74, accent: "mint" },
  { x: 61, base: 54, hover: 76 },
  { x: 68, base: 64, hover: 82 },
  { x: 75, base: 60, hover: 86, accent: "lime" },
  { x: 82, base: 72, hover: 90 },
  { x: 89, base: 78, hover: 94, accent: "mint" },
];

function barFill(accent?: BarDatum["accent"]) {
  if (accent === "mint") return "rgba(126,224,181,0.55)";
  if (accent === "warm") return "rgba(235,184,126,0.55)";
  if (accent === "lime") return "rgba(159,232,112,0.65)";
  return "rgba(245,239,217,0.18)";
}

const linePath =
  "M 0 174 C 42 162, 76 146, 112 132 C 150 116, 184 104, 220 88 C 260 70, 304 55, 350 42 C 395 30, 438 20, 500 10";
const areaPath =
  linePath + " L 500 220 L 0 220 Z";
const softLinePath =
  "M 0 192 C 54 178, 92 166, 132 154 C 180 140, 224 126, 268 110 C 314 94, 374 76, 500 52";

export const AnimatedPerformanceGraph = ({ className }: { className?: string }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log("[AnimatedPerformanceGraph]", "render");
  }, []);

  const points = useMemo(
    () => [
      { cx: 112, cy: 132, delay: "0s" },
      { cx: 268, cy: 78, delay: "0.6s" },
      { cx: 438, cy: 20, delay: "1.2s" },
    ],
    []
  );

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group/perf relative w-full overflow-hidden rounded-[28px] p-7 md:p-9",
        "border border-[rgba(214,255,230,0.10)]",
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(200,255,155,0.22)]",
        "min-h-[440px] md:min-h-[480px]",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.026))",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.045), 0 28px 90px rgba(0,0,0,0.24)",
      }}
      aria-label="Animated local performance analytics card"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -right-16 h-72 w-72 rounded-full opacity-70"
          style={{ background: "radial-gradient(circle, rgba(159,232,112,0.18), transparent 60%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(126,224,181,0.12), transparent 60%)", filter: "blur(50px)" }}
        />
        {/* Tech grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,239,217,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,217,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black 50%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 50%, transparent 85%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(214,255,230,0.14)] bg-[rgba(255,255,255,0.04)] px-3 py-1 mb-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(159,232,112,0.18)]">
                <TrendingUp className="h-3 w-3 text-[#9FE870]" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#F5EFD9]/75">
                Local Performance
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-[28px] lg:text-3xl font-semibold leading-[1.15] text-[#F5EFD9] max-w-md">
              Predictable growth in calls, inquiries, and quote requests
            </h3>
          </div>

          {/* Tooltip / insight */}
          <div
            className="hidden md:block apg-tooltip-float relative shrink-0 rounded-2xl border border-[rgba(214,255,230,0.14)] px-4 py-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0 0 28px rgba(159,232,112,0.10), 0 14px 32px rgba(0,0,0,0.28)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <Trophy className="h-3 w-3 text-[#9FE870]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#9FE870]">
                Peak reached
              </span>
            </div>
            <div className="mt-1 text-[13px] font-medium text-[#F5EFD9] leading-tight max-w-[180px]">
              Highest call volume this quarter
            </div>
            {/* connector dot */}
            <span className="absolute -bottom-1 left-6 h-2 w-2 rounded-full bg-[#9FE870] shadow-[0_0_10px_#9FE870]" />
          </div>
        </div>

        {/* Metric chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          <MetricChip icon={<Phone className="h-3.5 w-3.5" />} label="Calls" value="+32%" />
          <MetricChip icon={<MessageCircle className="h-3.5 w-3.5" />} label="Customer Inquiries" value="+18%" />
          <MetricChip icon={<FileText className="h-3.5 w-3.5" />} label="Quote Requests" value="+24%" />
        </div>

        {/* Mobile insight */}
        <div
          className="md:hidden mt-4 inline-flex items-center gap-2 rounded-2xl border border-[rgba(214,255,230,0.14)] px-3 py-2"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))" }}
        >
          <Trophy className="h-3.5 w-3.5 text-[#9FE870]" />
          <span className="text-[12px] text-[#F5EFD9]">Highest call volume this quarter</span>
        </div>

        {/* Graph */}
        <div className="relative mt-7 md:mt-8 h-52 md:h-60 w-full">
          <svg
            viewBox="0 0 500 220"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="apgArea2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9FE870" stopOpacity="0.45" />
                <stop offset="55%" stopColor="#7EE0B5" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#7EE0B5" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="apgLine2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7EE0B5" />
                <stop offset="55%" stopColor="#C8FF9B" />
                <stop offset="100%" stopColor="#9FE870" />
              </linearGradient>
              <linearGradient id="apgBar2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8FF9B" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#9FE870" stopOpacity="0.15" />
              </linearGradient>
              <filter id="apgGlow2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* vertical grid */}
            {[0, 62.5, 125, 187.5, 250, 312.5, 375, 437.5, 500].map((x) => (
              <line
                key={x}
                x1={x}
                x2={x}
                y1="6"
                y2="210"
                stroke="rgba(214,255,230,0.06)"
                strokeWidth="1"
                strokeDasharray="2 5"
              />
            ))}

            {/* bars */}
            <g>
              {bars.map((bar, i) => {
                const w = 22;
                const xPos = (bar.x / 100) * 500 - w / 2;
                const height = hovered ? bar.hover : bar.base;
                const y = 202 - height;
                return (
                  <rect
                    key={i}
                    x={xPos}
                    y={y}
                    width={w}
                    height={height}
                    rx="6"
                    fill={barFill(bar.accent)}
                    className="apg-bar"
                    style={{
                      transformOrigin: `${xPos + w / 2}px 202px`,
                      transition: "y 700ms cubic-bezier(0.65,0,0.35,1), height 700ms cubic-bezier(0.65,0,0.35,1), fill 400ms ease",
                      animationDelay: `${i * 0.12}s`,
                    }}
                  />
                );
              })}
            </g>

            {/* soft secondary line */}
            <path
              d={softLinePath}
              fill="none"
              stroke="rgba(126,224,181,0.35)"
              strokeWidth="1.4"
              strokeDasharray="4 6"
              className="apg-dash-flow"
            />

            {/* area */}
            <path d={areaPath} fill="url(#apgArea2)" className="apg-area-breath" />

            {/* main line */}
            <path
              d={linePath}
              fill="none"
              stroke="url(#apgLine2)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#apgGlow2)"
              className="apg-line-draw2"
            />

            {/* points */}
            {points.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r="7"
                  fill="#9FE870"
                  className="apg-point-pulse"
                  style={{ animationDelay: p.delay, transformOrigin: `${p.cx}px ${p.cy}px` }}
                />
                <circle cx={p.cx} cy={p.cy} r="3.2" fill="#F5EFD9" stroke="#052E28" strokeWidth="1.5" />
              </g>
            ))}
          </svg>

          {/* Floating bubbles */}
          <div
            className="apg-bubble-a absolute flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full text-xl md:text-2xl"
            style={{
              left: "30%",
              top: "48%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(214,255,230,0.16)",
              boxShadow: "0 0 28px rgba(126,224,181,0.22), 0 16px 40px rgba(0,0,0,0.32)",
              backdropFilter: "blur(12px)",
            }}
            aria-hidden
          >
            💬
          </div>
          <div
            className="apg-bubble-b absolute flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full text-xl md:text-2xl"
            style={{
              left: "74%",
              top: "20%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(214,255,230,0.16)",
              boxShadow: "0 0 32px rgba(200,255,155,0.26), 0 16px 40px rgba(0,0,0,0.32)",
              backdropFilter: "blur(12px)",
            }}
            aria-hidden
          >
            📞
          </div>

          {/* bottom fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{ background: "linear-gradient(180deg, transparent, rgba(3,31,27,0.35))" }}
          />
        </div>
      </div>

      <style>{`
        .apg-line-draw2 {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: apgDraw2 2s cubic-bezier(0.65,0,0.35,1) forwards, apgLineGlow 4s ease-in-out 2s infinite;
        }
        @keyframes apgDraw2 { to { stroke-dashoffset: 0; } }
        @keyframes apgLineGlow {
          0%,100% { filter: url(#apgGlow2) brightness(1); }
          50% { filter: url(#apgGlow2) brightness(1.15); }
        }
        .apg-dash-flow {
          animation: apgDashFlow 1.6s linear infinite;
        }
        @keyframes apgDashFlow { to { stroke-dashoffset: -40; } }
        .apg-area-breath {
          transform-origin: bottom;
          animation: apgAreaBreath 5.5s ease-in-out infinite;
        }
        @keyframes apgAreaBreath {
          0%,100% { opacity: 0.8; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        .apg-bar {
          animation: apgBarBreath 3.2s ease-in-out infinite;
        }
        @keyframes apgBarBreath {
          0%,100% { opacity: 0.85; transform: scaleY(0.97); }
          50% { opacity: 1; transform: scaleY(1.03); }
        }
        .apg-point-pulse {
          opacity: 0.4;
          animation: apgPointPulse 2.4s ease-in-out infinite;
        }
        @keyframes apgPointPulse {
          0%,100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.7); }
        }
        .apg-bubble-a { animation: apgFloatA 5.5s ease-in-out infinite; }
        .apg-bubble-b { animation: apgFloatA 6.5s ease-in-out infinite; animation-delay: -1.6s; }
        @keyframes apgFloatA {
          0%,100% { transform: translate(-50%,-50%) translateY(0); }
          50% { transform: translate(-50%,-50%) translateY(-8px); }
        }
        .apg-tooltip-float { animation: apgTipFloat 4.5s ease-in-out infinite; }
        @keyframes apgTipFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .group\\/perf:hover .apg-tooltip-float { transform: translateY(-6px); transition: transform 400ms ease; }
        @media (prefers-reduced-motion: reduce) {
          .apg-line-draw2, .apg-dash-flow, .apg-area-breath, .apg-bar,
          .apg-point-pulse, .apg-bubble-a, .apg-bubble-b, .apg-tooltip-float {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </article>
  );
};

function MetricChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(214,255,230,0.12)] bg-[rgba(255,255,255,0.045)] px-3 py-1.5 text-xs text-[#F5EFD9]/85 backdrop-blur-sm transition-colors group-hover/perf:border-[rgba(200,255,155,0.28)]">
      <span className="text-[#9FE870]">{icon}</span>
      <span>{label}</span>
      <span className="font-semibold text-[#C8FF9B]">{value}</span>
    </span>
  );
}
