import { ScrollReveal } from "@/components/landing/scroll-reveal";

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
          <h2 className="mx-auto mt-5 max-w-2xl text-center font-serif text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-warm-800">
            El antes y después de Musuq
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm text-warm-500">
            Rangos referenciales según el tipo y tamaño de negocio.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-[1.75rem] bg-cream-300/60 p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                Modelos tradicionales
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold uppercase tracking-tight text-warm-700">
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
            <div className="h-full rounded-[1.75rem] bg-warm-800 p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-terracotta-light">
                Negocio digitalizado
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold uppercase tracking-tight text-cream-50">
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
