import { Logo } from "@/components/icons/logo";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;

const NAV = {
  Producto: [
    { label: "Rubros", href: "#rubros" },
    { label: "Por qué Musuq", href: "#por-que" },
    { label: "Planes", href: "#pricing" },
  ],
  Empresa: [
    { label: "Contacto", href: "mailto:hello@musuq.tech" },
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
  ],
};

/**
 * Footer editorial-brutalista (estilo imagen 1): cream + todo encerrado en
 * cajas con borders. Celda CTA en terracota. Mismo lenguaje que el header.
 */
export function Footer() {
  return (
    <footer className="bg-cream-100 px-3 pb-3 pt-10 text-warm-800 md:px-4 md:pt-12">
      <div className="border-2 border-warm-800">
        {/* fila 1: marca | CTA terracota */}
        <div className="grid sm:grid-cols-[1fr_auto]">
          <div className="border-b-2 border-warm-800 px-6 py-8 sm:border-b-0 sm:border-r-2 md:px-8">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Musuq inicio">
              <Logo showText={false} size={28} className="text-warm-800" />
              <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">musuq</span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-warm-600">
              Tecnología que impulsa cada venta. Vende, cobra y controla desde un
              solo lugar.
            </p>
          </div>
          <a
            href={APP_URL}
            className="flex items-center justify-center bg-terracotta px-8 py-8 text-cream-50 transition-colors hover:bg-[#b0472f]"
          >
            <span style={ANTON} className="text-2xl uppercase tracking-wide md:text-3xl">
              Crear cuenta →
            </span>
          </a>
        </div>

        {/* fila 2: columnas de navegación en cajas */}
        <div className="grid border-t-2 border-warm-800 sm:grid-cols-2">
          {(Object.keys(NAV) as (keyof typeof NAV)[]).map((group, i) => (
            <div
              key={group}
              className={`px-6 py-7 md:px-8 ${
                i === 0 ? "border-b-2 border-warm-800 sm:border-b-0 sm:border-r-2" : ""
              }`}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">
                {group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {NAV[group].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-warm-700 transition-colors hover:text-terracotta"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* fila 3: legal — banda marrón (base/fundamento de la página) */}
        <div className="flex flex-col items-start justify-between gap-1 border-t-2 border-warm-800 bg-[#6B4A33] px-6 py-4 text-[12px] text-cream-50/70 sm:flex-row sm:items-center md:px-8">
          <span>© 2026 Musuq · Todos los derechos reservados.</span>
          <a href="mailto:hello@musuq.tech" className="transition-colors hover:text-cream-50">
            hello@musuq.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
