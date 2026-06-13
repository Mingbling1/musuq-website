import { ScrollReveal } from "@/components/landing/scroll-reveal";

const APP_URL = "https://app.musuq.tech";

export function Cierre() {
  return (
    <section
      id="plataforma"
      className="relative overflow-hidden bg-warm-800 py-28 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,85,61,0.35), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-cream-50">
            Tecnología que <span className="text-terracotta-light">impulsa</span>{" "}
            cada venta
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream-200/80">
            Empezamos por gastronomía, vamos por todo el comercio. Crea tu cuenta
            y empieza a vender hoy.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APP_URL}
              className="group inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-cream-50 shadow-[0_12px_30px_-10px_rgba(200,85,61,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Crear cuenta gratis
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="mailto:hello@musuq.tech"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/20 px-8 py-4 text-[15px] font-semibold text-cream-50 transition-colors duration-200 hover:bg-cream-50/5"
            >
              Hablar con nosotros
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
