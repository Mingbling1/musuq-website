import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Counter } from "@/components/landing/counter";

const stats = [
  { prefix: "+", to: 35, suffix: "%", label: "atención más rápida" },
  { prefix: "+", to: 30, suffix: "%", label: "rotación de mesas" },
  { prefix: "−", to: 50, suffix: "%", label: "tiempo operativo perdido" },
];

const sin = [
  "Errores en pedidos del 10% al 20%",
  "Merma e inventario perdido del 5% al 10%",
  "El equipo pierde 25% a 40% del tiempo en tareas manuales",
  "Clientes con pedidos demorados o incorrectos",
];
const con = [
  "Errores en pedidos reducidos al 1% a 5%",
  "Merma controlada al 3% a 5%",
  "Tiempo operativo perdido baja 30% a 50%",
  "Atención hasta 25% a 35% más rápida",
];

export function AntesDespues() {
  return (
    <section id="impacto" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Cómo impactamos tu negocio
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-warm-800">
            El antes y después de Musuq
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm text-warm-500">
            Rangos referenciales según el tipo y tamaño de negocio.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <Counter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="font-display text-[clamp(3rem,7vw,5.25rem)] font-normal tracking-[-0.02em] text-terracotta"
                />
                <p className="mt-1 text-sm font-medium text-warm-600">
                  hasta {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-[2.5rem] bg-cream-300/60 p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                Modelos tradicionales
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-[-0.01em] text-warm-700">
                Sin Musuq
              </h3>
              <ul className="mt-7 space-y-4">
                {sin.map((s) => (
                  <li key={s} className="flex gap-3 text-warm-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="h-full rounded-[2.5rem] bg-warm-800 p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-terracotta-light">
                Negocio digitalizado
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-[-0.01em] text-cream-50">
                Con Musuq
              </h3>
              <ul className="mt-7 space-y-4">
                {con.map((c) => (
                  <li key={c} className="flex gap-3 text-cream-100/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
