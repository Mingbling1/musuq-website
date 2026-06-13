import { ScrollReveal } from "@/components/landing/scroll-reveal";

const razones = [
  {
    n: "01",
    t: "Mejores costos",
    d: "Más conveniente que el punto de venta tradicional, sin equipos caros ni amarres.",
  },
  {
    n: "02",
    t: "Intuitivo de verdad",
    d: "Diseñado para usarse desde el primer día, sin manuales ni capacitaciones eternas.",
  },
  {
    n: "03",
    t: "Baja barrera de adopción",
    d: "Tu equipo lo entiende rápido, así que empiezas a vender mejor desde ya.",
  },
];

export function Diferenciador() {
  return (
    <section className="relative bg-cream-100 py-10">
      {/* panel curvo tintado */}
      <div className="relative mx-3 overflow-hidden rounded-[2.5rem] bg-cream-200/60 px-6 py-20 sm:mx-6 lg:rounded-[4rem] lg:py-28">
        <div
          aria-hidden
          data-parallax="0.2"
          className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] bg-terracotta/[0.07]"
          style={{ borderRadius: "47% 53% 70% 30% / 38% 53% 47% 62%" }}
        />

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              Lo hacemos diferente
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-warm-800">
              Un punto de venta pensado para tu negocio
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-px">
            {razones.map((r, i) => (
              <ScrollReveal key={r.t} delay={i * 90}>
                <div
                  className={`group flex flex-col gap-3 py-9 sm:flex-row sm:items-center sm:gap-10 ${
                    i % 2 === 1 ? "sm:pl-[10%]" : "sm:pr-[10%]"
                  }`}
                >
                  <span
                    className={`font-serif text-[clamp(4rem,11vw,8rem)] font-extrabold leading-[0.8] text-terracotta/15 transition-colors duration-300 group-hover:text-terracotta/30 ${
                      i % 2 === 1 ? "sm:order-2 sm:text-right" : ""
                    }`}
                  >
                    {r.n}
                  </span>
                  <div className={`max-w-md ${i % 2 === 1 ? "sm:order-1 sm:ml-auto sm:text-right" : ""}`}>
                    <h3 className="font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold uppercase tracking-tight text-warm-800">
                      {r.t}
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed text-warm-600">{r.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
