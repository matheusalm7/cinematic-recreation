const logos = ["Marsa", "KIA", "Zion", "Mavrik", "Nova", "Helix", "Orbit", "Vellum"];

export const LogoStrip = () => {
  return (
    <section className="bg-background py-16 border-b border-border/50">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Já atendi marcas que <span className="text-primary font-semibold">você respeita</span>
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center gap-x-8 gap-y-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center">
              <span className="font-display text-2xl text-foreground/40 hover:text-foreground transition">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
