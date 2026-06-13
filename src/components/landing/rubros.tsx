import { ScrollReveal } from "@/components/landing/scroll-reveal";

const rubros = [
  { name: "Gastronomía", detail: "Cafeterías, restaurantes, pastelerías", live: true },
  { name: "Bodegas y abarrotes", detail: "Tiendas de barrio y minimarkets", live: false },
  { name: "Retail", detail: "Ropa, accesorios, productos", live: false },
  { name: "Servicios", detail: "Barberías, talleres, estudios", live: false },
];

export function Rubros() {
  return (
    <section id="rubros" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <ScrollReveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              Rubros que atendemos
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-tight text-warm-800">
              Hecho para tu tipo de negocio
            </h2>
            <p className="mt-5 max-w-sm text-warm-600">
              Empezamos por gastronomía y vamos por todo el comercio. Si vendes,
              Musuq es para ti.
            </p>
          </ScrollReveal>
        </div>

        <ul>
          {rubros.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 70}>
              <li className="flex items-baseline justify-between gap-6 border-t border-warm-800/10 py-7 last:border-b">
                <div>
                  <span className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold uppercase tracking-tight text-warm-800">
                    {r.name}
                  </span>
                  <p className="mt-1 text-warm-500">{r.detail}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    r.live
                      ? "bg-terracotta text-cream-50"
                      : "border border-warm-800/15 text-warm-500"
                  }`}
                >
                  {r.live ? "Disponible" : "Pronto"}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
