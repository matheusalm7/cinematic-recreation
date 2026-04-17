import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const GallerySection = () => {
  const items = [g1, g2, g4, g3, g5, g6];
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Galeria</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Um olhar sobre o que fazemos de melhor.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {items.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-card-premium group ${i === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
