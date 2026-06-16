import { Reveal } from "@/components/landing/reveal";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

type Cell = { t: string; v: "big" | "scr" | "fill" };
const CELLS: Cell[] = [
  { t: "Todo", v: "big" },
  { t: "tu negocio", v: "scr" },
  { t: "en un", v: "big" },
  { t: "solo", v: "fill" },
  { t: "toque", v: "scr" },
  { t: "¡listo!", v: "big" },
];

/**
 * Manifiesto editorial-brutalista (estilo SMIRCS): frase en grilla de celdas
 * con líneas (técnica gap-sobre-fondo → responsive en cualquier nº de columnas),
 * acentos manuscritos (Caveat) y una celda terracota. Cream (secundario).
 */
export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="relative overflow-hidden bg-cream-100 px-6 py-24 text-warm-800 md:py-32"
    >
      <Reveal className="mx-auto max-w-5xl">
        {/* Grilla de la frase */}
        <div className="grid grid-cols-2 gap-[2px] overflow-hidden rounded-[1.5rem] bg-warm-800 ring-2 ring-warm-800 md:grid-cols-3">
          {CELLS.map((c) => {
            const fill = c.v === "fill";
            return (
              <div
                key={c.t}
                className={`flex min-h-[104px] items-center justify-center px-4 py-6 text-center md:min-h-[150px] ${
                  fill ? "bg-terracotta text-cream-50" : "bg-cream-100"
                }`}
              >
                {c.v === "scr" ? (
                  <span style={CAVEAT} className="text-[2.6rem] font-bold leading-none text-terracotta md:text-[4rem]">
                    {c.t}
                  </span>
                ) : (
                  <span
                    style={ANTON}
                    className={`text-[2.3rem] uppercase leading-[0.85] md:text-[3.6rem] ${fill ? "text-cream-50" : "text-warm-800"}`}
                  >
                    {c.t}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bajada */}
        <p className="mx-auto mt-7 max-w-xl text-center text-[15px] leading-relaxed text-warm-600">
          Vende, cobra y controla desde un solo lugar. Empezamos por restaurantes
          y cafeterías; pronto, muchos más rubros.
        </p>

        {/* CTA boxed */}
        <div className="mt-8 grid grid-cols-1 gap-[2px] overflow-hidden rounded-[1.5rem] bg-warm-800 ring-2 ring-warm-800 sm:grid-cols-[1fr_1fr_auto]">
          <div className="flex items-center justify-center bg-cream-100 px-6 py-5">
            <span style={ANTON} className="text-[1.9rem] uppercase leading-none md:text-[2.5rem]">
              Sé de
            </span>
          </div>
          <div className="flex items-center justify-center bg-cream-100 px-6 py-5">
            <span style={CAVEAT} className="text-[2.3rem] font-bold leading-none text-terracotta md:text-[3rem]">
              los primeros
            </span>
          </div>
          <a
            href={APP_URL}
            className="flex items-center justify-center bg-terracotta px-8 py-5 text-cream-50 transition-colors hover:bg-[#b0472f]"
          >
            <span style={ANTON} className="text-lg uppercase tracking-wide md:text-2xl">
              Quiero entrar →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
