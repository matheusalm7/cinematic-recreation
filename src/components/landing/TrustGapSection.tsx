import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const riskyItems = [
  { title: "Outdated website", desc: "Makes people wonder if your business is still active." },
  { title: "Weak Google presence", desc: "Missing photos, unclear info, or inconsistent details create doubt." },
  { title: "Hidden reviews", desc: "Proof exists, but customers don't see it when they need it." },
  { title: "Confusing services", desc: "People can't quickly understand what you do or what to choose." },
  { title: "Weak call to action", desc: "Visitors leave because calling or booking doesn't feel obvious." },
  { title: "Competitors look safer", desc: "They may not be better — they just look easier to trust." },
];

const trustItems = [
  { title: "Clean, modern website", desc: "Your business feels active, professional, and ready to hire." },
  { title: "Stronger local presence", desc: "Your Google profile supports the decision before they contact you." },
  { title: "Visible trust signals", desc: "Reviews, photos, proof, and credibility appear where they matter." },
  { title: "Clear service structure", desc: "Customers understand your offers without having to think hard." },
  { title: "Simple conversion path", desc: "Calls, bookings, quote requests, and visits become easier." },
  { title: "You become the safer option", desc: "The customer feels confident choosing you over the next business." },
];

export function TrustGapSection() {
  console.log("[TrustGapSection]", "render");

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        background: `
          radial-gradient(circle at 50% 16%, rgba(235, 184, 126, 0.10), transparent 34%),
          radial-gradient(circle at 50% 48%, rgba(4, 79, 36, 0.22), transparent 45%),
          linear-gradient(180deg, #002e25 0%, #003f32 45%, #002e25 100%)
        `,
      }}
      aria-labelledby="trust-gap-title"
    >
      <div className="relative z-10 mx-auto max-w-[1100px] px-5 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] uppercase tracking-[0.18em]"
            style={{
              background: "rgba(253, 236, 208, 0.06)",
              border: "1px solid rgba(253, 236, 208, 0.18)",
              color: "#fdecd0",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#ebb87e", boxShadow: "0 0 12px #ebb87e" }} />
            The Trust Gap
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          id="trust-gap-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mx-auto mt-6 max-w-[820px] text-center text-[34px] font-bold leading-[1.05] md:text-[56px]"
          style={{ color: "#fdecd0", letterSpacing: "-0.02em" }}
        >
          Customers don't always choose<br />
          the best business.<br />
          <span style={{ color: "#ebb87e" }}>They choose the one that feels safer.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-[680px] text-center text-[15px] leading-relaxed md:text-[18px]"
          style={{ color: "rgba(253, 236, 208, 0.72)" }}
        >
          Before they call, book, visit, or request a quote, local customers judge your website,
          reviews, photos, Google profile, and first impression. If you look unclear or outdated,
          they move on.
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mt-12 rounded-[28px] p-5 md:p-9"
          style={{
            background: "rgba(0, 60, 48, 0.62)",
            border: "1px solid rgba(253, 236, 208, 0.12)",
            boxShadow: "0 30px 100px rgba(0, 0, 0, 0.26), 0 0 80px rgba(235, 184, 126, 0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
            {/* Risky column */}
            <div>
              <div className="mb-5">
                <h3 className="font-display text-xl font-semibold md:text-2xl" style={{ color: "#fdecd0" }}>
                  When your business looks risky
                </h3>
                <p className="mt-1.5 text-sm" style={{ color: "rgba(253, 236, 208, 0.6)" }}>
                  What makes local customers hesitate
                </p>
              </div>
              <ul className="space-y-3">
                {riskyItems.map((it) => (
                  <li
                    key={it.title}
                    className="group flex gap-3 rounded-[14px] p-4 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "rgba(0, 0, 0, 0.16)",
                      border: "1px solid rgba(253, 236, 208, 0.07)",
                    }}
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(235, 184, 126, 0.12)", color: "#ebb87e" }}
                    >
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold" style={{ color: "#fdecd0" }}>{it.title}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: "rgba(253, 236, 208, 0.62)" }}>
                        {it.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust column */}
            <div className="relative">
              {/* vertical divider (desktop) */}
              <div
                className="pointer-events-none absolute -left-[18px] top-0 hidden h-full w-px md:block"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(253,236,208,0.18), transparent)",
                }}
              />
              <div className="mb-5">
                <h3 className="font-display text-xl font-semibold md:text-2xl" style={{ color: "#fdecd0" }}>
                  When your business feels like the right choice
                </h3>
                <p className="mt-1.5 text-sm" style={{ color: "rgba(253, 236, 208, 0.6)" }}>
                  What makes customers trust you faster
                </p>
              </div>
              <ul className="space-y-3">
                {trustItems.map((it) => (
                  <li
                    key={it.title}
                    className="group flex gap-3 rounded-[14px] p-4 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "rgba(253, 236, 208, 0.07)",
                      border: "1px solid rgba(235, 184, 126, 0.18)",
                    }}
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(235, 184, 126, 0.18)", color: "#fdecd0", boxShadow: "0 0 12px rgba(235,184,126,0.25)" }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold" style={{ color: "#fdecd0" }}>{it.title}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: "rgba(253, 236, 208, 0.72)" }}>
                        {it.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Shift badge — centered between columns */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
              style={{
                background: "#ebb87e",
                color: "#002e25",
                boxShadow: "0 6px 24px rgba(235, 184, 126, 0.35)",
              }}
            >
              Trust Shift
            </span>
          </div>

          {/* Mobile divider */}
          <div className="my-2 flex items-center justify-center md:hidden" aria-hidden>
            <span className="h-px flex-1" style={{ background: "rgba(253,236,208,0.14)" }} />
            <span
              className="mx-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "#ebb87e", color: "#002e25" }}
            >
              Trust Shift
            </span>
            <span className="h-px flex-1" style={{ background: "rgba(253,236,208,0.14)" }} />
          </div>

          {/* CTA strip */}
          <div
            className="mt-7 flex flex-col items-stretch gap-3 rounded-[18px] p-5 md:flex-row md:items-center md:justify-between md:gap-4"
            style={{
              background: "rgba(253, 236, 208, 0.06)",
              border: "1px solid rgba(253, 236, 208, 0.10)",
            }}
          >
            <p className="text-[15px] md:text-base" style={{ color: "#fdecd0" }}>
              Not sure where your business is losing trust?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: "#ebb87e", color: "#002e25" }}
            >
              Get My Local Business Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustGapSection;
