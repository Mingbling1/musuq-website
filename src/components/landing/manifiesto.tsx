import { ScrollReveal } from "@/components/landing/scroll-reveal";

export function Manifiesto() {
  return (
    <section className="bg-cream-100 py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Quiénes somos
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="mt-7 font-serif text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-warm-800">
            Transformamos los procesos comerciales tradicionales en{" "}
            <span className="text-terracotta">
              experiencias de venta inteligentes, interactivas y escalables
            </span>
            , con una sola plataforma para todo el comercio.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
