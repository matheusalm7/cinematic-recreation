import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { quote: "An incredible level of craft. Every deliverable feels intentional and on-brand.", name: "Camila Lopes", role: "Founder · Maré", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces" },
  { quote: "Game-changer. Their service is top-notch and the team is incredibly responsive.", name: "Guillermo Rauch", role: "CEO · Enigma", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces" },
  { quote: "We've seen incredible results — their expertise and dedication speak for themselves.", name: "Rika Shinoda", role: "CEO · Kintsugi", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" },
  { quote: "Highly professional. Innovative solutions that truly transformed how we operate.", name: "Reacher", role: "CEO · OdeaoLabs", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" },
  { quote: "Expertise and dedication that exceeded every expectation we had.", name: "John", role: "CEO · Labsbo", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces" },
  { quote: "A true game-changer. Significant impact on our business from day one.", name: "Paul Brauch", role: "CTO · Spectrum", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-[#042d1f] text-[#f1ead4] py-24 md:py-32 overflow-hidden border-t border-[#f1ead4]/10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 border-b border-[#f1ead4]/10 pb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1ead4]/40 mb-4">
              [ Words from clients / 002 ]
            </p>
            <h2
              className="text-[10vw] lg:text-[6.5vw] leading-[0.9] tracking-tighter italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Trusted by <span className="not-italic">founders</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#f1ead4]/70">
            Read what teams say about working with us — across local brands, startups, and category leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#f1ead4]/10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-[#042d1f] p-8 flex flex-col justify-between min-h-[280px]"
            >
              <blockquote
                className="text-xl md:text-2xl leading-snug text-[#f1ead4] italic"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-8 pt-6 border-t border-[#f1ead4]/10">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover border border-[#f1ead4]/15"
                />
                <div>
                  <p className="text-sm font-semibold text-[#f1ead4]">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#f1ead4]/50 mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
