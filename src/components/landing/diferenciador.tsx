import { ScrollReveal } from "@/components/landing/scroll-reveal";

const razones = [
  { t: "Mejores costos", d: "Más conveniente que el punto de venta tradicional, sin equipos caros ni amarres." },
  { t: "Intuitivo de verdad", d: "Diseñado para usarse desde el primer día, sin manuales ni capacitaciones eternas." },
  { t: "Baja barrera de adopción", d: "Tu equipo lo entiende rápido, así que empiezas a vender mejor desde ya." },
];

export function Diferenciador() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Lo hacemos diferente
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-warm-800">
            Un punto de venta pensado para tu negocio
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {razones.map((r, i) => (
            <ScrollReveal key={r.t} delay={i * 80}>
              <div className="border-t-2 border-terracotta pt-6">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-warm-800">
                  {r.t}
                </h3>
                <p className="mt-3 text-warm-600">{r.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
