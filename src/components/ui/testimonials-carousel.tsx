"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  text: string;
  highlight?: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  speed?: number;
  direction?: "left" | "right";
  cardHeight?: number;
  className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  speed = 30,
  direction = "left",
  cardHeight = 220,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setCarouselWidth(containerRef.current.scrollWidth / 2);
    }
  }, [testimonials]);

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? [-0, -carouselWidth] : [-carouselWidth, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopTestimonials.map(({ text, highlight, image, name, role }, index) => (
          <div
            key={index}
            style={{ height: cardHeight }}
            className="relative flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl border border-white/10 bg-card-grad p-6 shadow-card-premium flex flex-col justify-between"
          >
            <p className="text-sm md:text-[15px] leading-relaxed text-white/85">
              {highlight
                ? text.split(highlight).map((part, idx, arr) => (
                    <React.Fragment key={idx}>
                      {part}
                      {idx !== arr.length - 1 && (
                        <span className="text-primary-glow font-semibold">
                          {highlight}
                        </span>
                      )}
                    </React.Fragment>
                  ))
                : text}
            </p>

            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
              <img
                src={image}
                alt={name}
                className="h-10 w-10 rounded-full object-cover border border-white/15"
                loading="lazy"
              />
              <div>
                <p className="font-display text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-white/55">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
