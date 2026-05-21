import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How does pricing work?", a: "After an initial conversation to understand your brand and needs, we send a tailored proposal within 48h." },
  { q: "Do you work outside the city?", a: "Yes — we work nationwide and internationally for brand projects." },
  { q: "What's the delivery timeline?", a: "On average 7 to 15 business days after the session, depending on project complexity." },
  { q: "Can I use the assets across all platforms?", a: "Yes. You receive usage rights for every channel as defined in the contract." },
  { q: "Do you help with creative direction?", a: "Absolutely — it's a core part of our process. We build the concept together with you." },
];

export const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#042d1f] text-[#f1ead4] py-24 md:py-32 border-t border-[#f1ead4]/10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40 mb-6">
              [ FAQ / 005 ]
            </p>
            <h2
              className="text-[10vw] lg:text-[5.5vw] leading-[0.9] tracking-tighter italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Frequently<br />
              <span className="not-italic">asked.</span>
            </h2>
            <p className="mt-8 text-[#f1ead4]/70 max-w-sm leading-relaxed">
              Everything you need to know before we start. Still curious? Drop us a line.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#f1ead4]/10 border-t border-b border-[#f1ead4]/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span
                        className="text-2xl md:text-3xl text-[#f1ead4] italic"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {f.q}
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 shrink-0 text-[#f1ead4]/60" />
                      ) : (
                        <Plus className="h-5 w-5 shrink-0 text-[#f1ead4]/60 group-hover:text-[#f1ead4]" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-10 text-[#f1ead4]/70 leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
