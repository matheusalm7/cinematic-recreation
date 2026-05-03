import { useEffect } from "react";
import { TrendingUp, Phone, MessageSquare, FileText, Trophy } from "lucide-react";

/**
 * Premium animated analytics card for the Performance section.
 * Local-only component – do not reuse globally.
 */
export const AnimatedPerformanceGraph = () => {
  useEffect(() => {
    console.log("[AnimatedPerformanceGraph]", "render");
  }, []);

  // Curve carefully starts at x=0 (left edge) and ends at x=400.
  const linePath =
    "M 0 132 C 40 124, 70 110, 110 100 S 180 84, 220 70 S 300 48, 340 32 L 400 18";
  const areaPath =
    "M 0 132 C 40 124, 70 110, 110 100 S 180 84, 220 70 S 300 48, 340 32 L 400 18 L 400 160 L 0 160 Z";
  const ghostPath =
    "M 0 145 C 60 140, 100 130, 150 122 S 240 110, 290 96 S 360 80, 400 68";

  // Two emoji bubble anchors (in % of card width / graph height).
  // Positioned to sit on the curve.
  const bubbleA = { left: "30%", top: "46%" }; // 💬 around mid curve
  const bubbleB = { left: "72%", top: "22%" }; // 📞 near peak

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-[rgba(214,255,230,0.10)] p-7 md:p-9 min-h-[400px] md:min-h-[440px] transition-all duration-500 hover:border-[rgba(200,255,155,0.22)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_hsl(0_0%_0%/0.65)]"
      style={{
        background:
          "radial-gradient(circle at 72% 22%, rgba(159,232,112,0.10), transparent 32%), radial-gradient(circle at 18% 78%, rgba(126,224,181,0.07), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(144_90%_16%/0.4)] ring-1 ring-[hsl(36_89%_90%/0.12)]">
              <TrendingUp className="h-4 w-4 text-[hsl(29_73%_71%)]" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(36_89%_90%/0.65)]">
              Local performance
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-[28px] lg:text-3xl font-semibold text-[hsl(36_89%_90%)] leading-[1.15] max-w-md">
            Predictable growth in calls, inquiries, and quote requests
          </h3>
        </div>

        {/* Premium badge top-right (desktop) */}
        <div
          className="hidden md:flex apg-badge-float shrink-0 flex-col items-start gap-1 rounded-2xl border border-[rgba(214,255,230,0.14)] px-4 py-3 text-right"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            backdropFilter: "blur(10px)",
            boxShadow:
              "0 0 24px rgba(159,232,112,0.08), 0 12px 30px rgba(0,0,0,0.25)",
          }}
        >
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9FE870]">
            <Trophy className="h-3 w-3" /> Peak reached
          </span>
          <span className="text-[13px] font-medium text-[hsl(36_89%_90%)] leading-tight max-w-[180px]">
            Highest call volume this quarter
          </span>
        </div>
      </div>

      {/* Metric chips */}
      <div className="mt-5 flex flex-wrap gap-2 relative z-10">
        {[
          { icon: Phone, label: "Calls", value: "+32%" },
          { icon: MessageSquare, label: "Customer Inquiries", value: "+18%" },
          { icon: FileText, label: "Quote Requests", value: "+24%" },
        ].map(({ icon: Icon, label, value }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(214,255,230,0.12)] bg-[rgba(255,255,255,0.045)] px-3 py-1.5 text-xs text-[hsl(36_89%_90%/0.85)] backdrop-blur-sm"
          >
            <Icon className="h-3.5 w-3.5 text-[#9FE870]" />
            <span>{label}</span>
            <span className="font-semibold text-[#C8FF9B]">{value}</span>
          </span>
        ))}
      </div>

      {/* Mobile badge (below chips) */}
      <div
        className="md:hidden mt-4 inline-flex items-center gap-2 rounded-2xl border border-[rgba(214,255,230,0.14)] px-3 py-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        }}
      >
        <Trophy className="h-3.5 w-3.5 text-[#9FE870]" />
        <span className="text-[12px] text-[hsl(36_89%_90%)]">
          Highest call volume this quarter
        </span>
      </div>

      <span className="sr-only">
        Performance graph showing increased calls, customer inquiries, and quote requests.
      </span>

      {/* Graph area */}
      <div className="relative mt-6 md:mt-8 h-44 md:h-52 w-full">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="apgArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9FE870" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#7EE0B5" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7EE0B5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="apgLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7EE0B5" />
              <stop offset="60%" stopColor="#C8FF9B" />
              <stop offset="100%" stopColor="#9FE870" />
            </linearGradient>
            <filter id="apgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Vertical grid */}
          {[0.1, 0.3, 0.5, 0.7, 0.9].map((p, i) => (
            <line
              key={i}
              x1={400 * p}
              x2={400 * p}
              y1="10"
              y2="150"
              stroke="rgba(214,255,230,0.06)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          ))}

          {/* Filled area */}
          <path
            d={areaPath}
            fill="url(#apgArea)"
            className="apg-area-shimmer"
          />

          {/* Ghost / secondary line */}
          <path
            d={ghostPath}
            fill="none"
            stroke="rgba(126,224,181,0.35)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            className="apg-ghost"
          />

          {/* Primary line with draw animation */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#apgLine)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#apgGlow)"
            className="apg-line-draw"
          />

          {/* Data points */}
          {[
            { x: 110, y: 100 },
            { x: 220, y: 70 },
            { x: 340, y: 32 },
          ].map((pt, i) => (
            <g key={i}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="6"
                fill="#9FE870"
                opacity="0.18"
                className="apg-pulse"
                style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${pt.x}px ${pt.y}px` }}
              />
              <circle
                cx={pt.x}
                cy={pt.y}
                r="3"
                fill="#F5EFD9"
                stroke="#052E28"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </svg>

        {/* Floating bubble 1 - 💬 inquiries */}
        <div
          className="apg-bubble apg-bubble-a absolute flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full text-xl md:text-2xl"
          style={{
            left: bubbleA.left,
            top: bubbleA.top,
            transform: "translate(-50%, -50%)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(214,255,230,0.14)",
            boxShadow:
              "0 0 28px rgba(159,232,112,0.18), 0 18px 45px rgba(0,0,0,0.32)",
            backdropFilter: "blur(12px)",
          }}
          aria-hidden="true"
        >
          💬
        </div>

        {/* Floating bubble 2 - 📞 calls */}
        <div
          className="apg-bubble apg-bubble-b absolute flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full text-xl md:text-2xl"
          style={{
            left: bubbleB.left,
            top: bubbleB.top,
            transform: "translate(-50%, -50%)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(214,255,230,0.14)",
            boxShadow:
              "0 0 32px rgba(200,255,155,0.22), 0 18px 45px rgba(0,0,0,0.32)",
            backdropFilter: "blur(12px)",
          }}
          aria-hidden="true"
        >
          📞
        </div>
      </div>

      <style>{`
        .apg-line-draw {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: apgLineDraw 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        @keyframes apgLineDraw {
          to { stroke-dashoffset: 0; }
        }
        .apg-area-shimmer {
          animation: apgShimmer 6s ease-in-out infinite;
          transform-origin: bottom;
        }
        @keyframes apgShimmer {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .apg-ghost {
          animation: apgGhost 7s ease-in-out infinite;
        }
        @keyframes apgGhost {
          0%, 100% { opacity: 0.55; transform: translateY(0); }
          50% { opacity: 0.9; transform: translateY(-2px); }
        }
        .apg-pulse {
          animation: apgPulse 2.4s ease-in-out infinite;
        }
        @keyframes apgPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.6); }
        }
        .apg-bubble-a {
          animation: apgFloat 5.5s ease-in-out infinite;
        }
        .apg-bubble-b {
          animation: apgFloat 6.5s ease-in-out infinite;
          animation-delay: -1.5s;
        }
        @keyframes apgFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        .apg-badge-float {
          animation: apgBadgeFloat 4.5s ease-in-out infinite;
        }
        @keyframes apgBadgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .apg-line-draw, .apg-area-shimmer, .apg-ghost, .apg-pulse,
          .apg-bubble-a, .apg-bubble-b, .apg-badge-float {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </article>
  );
};
