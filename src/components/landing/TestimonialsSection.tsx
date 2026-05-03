import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Hypersphere has been a game-changer for us. Their service is top-notch and their team is incredibly responsive.",
    name: "Guillermo Rauch",
    role: "CEO of Enigma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote: "We've seen incredible results with Hypersphere. Their expertise, dedication.",
    name: "Rika Shinoda",
    role: "CEO of Kintsugi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Their team is highly professional, and their innovative solutions have truly transformed the way we operate.",
    name: "Reacher",
    role: "CEO of OdeaoLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "We're extremely satisfied with Hypersphere. Their expertise and dedication have exceeded our expectations.",
    name: "John",
    role: "CEO of Labsbo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote: "Their customer support is absolutely exceptional. They are always available, incredibly helpful.",
    name: "Steven Sunny",
    role: "CEO of boxefi",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote: "Hypersphere has been a key partner in our growth journey.",
    name: "Guillermo Rauch",
    role: "CEO of OdeaoLabs",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Hypersphere has been a true game-changer for us. Their exceptional service, combined with their deep expertise and commitment to excellence, has made a significant impact on our business.",
    name: "Paul Brauch",
    role: "CTO of Spectrum",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote: "An incredible level of craft. Every deliverable feels intentional and on-brand.",
    name: "Camila Lopes",
    role: "Founder of Maré",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Trusted by Startups and the world's largest companies
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/70">
            Let's hear how hypersphere client's feels about our service
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.15 }}
              className="rounded-2xl border border-foreground/10 bg-card-grad p-6 shadow-card-premium flex flex-col justify-between"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-4 border-t border-foreground/10">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover border border-foreground/15"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/55">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
