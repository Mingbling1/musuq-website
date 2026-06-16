import { Logo } from "@/components/icons/logo";

const APP_URL = "https://app.musuq.tech";

const NAV = {
  Producto: [
    { label: "Rubros", href: "#rubros" },
    { label: "Por qué Musuq", href: "#por-que" },
    { label: "Planes", href: "#pricing" },
    { label: "Crear cuenta", href: APP_URL },
  ],
  Empresa: [
    { label: "Contacto", href: "mailto:hello@musuq.tech" },
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#120D0B] text-cream-50">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-4 pt-14 md:pb-6 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Musuq inicio">
              <Logo showText={false} size={28} className="text-cream-50" />
              <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">
                musuq
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-cream-50/55">
              Tecnología que impulsa cada venta. Para el comercio peruano.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream-50/[0.06] px-3 py-1.5 text-[12px] font-medium text-cream-50/70">
              Hecho en Perú
            </span>
          </div>

          {/* Columnas de navegación */}
          {(Object.keys(NAV) as (keyof typeof NAV)[]).map((group) => (
            <div key={group}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cream-50/40">
                {group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {NAV[group].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-cream-50/75 transition-colors hover:text-cream-50"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-5 text-[13px] text-cream-50/45 sm:flex-row sm:items-center">
          <span>© 2026 Musuq · Todos los derechos reservados.</span>
          <a href="mailto:hello@musuq.tech" className="transition-colors hover:text-cream-50/70">
            hello@musuq.tech
          </a>
        </div>
      </div>

      {/* Wordmark edge-to-edge en SVG: se autoajusta al ancho → palabra completa
          ("musuq", nunca recortada) y responsive en cualquier pantalla.
          Va en flujo, debajo del legal, así el legal siempre queda encima. */}
      <div aria-hidden className="pointer-events-none mt-3 px-3 md:mt-4">
        <svg
          viewBox="0 0 1000 185"
          preserveAspectRatio="xMidYMax meet"
          className="block w-full"
        >
          <text
            x="0"
            y="120"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-fraunces)"
            fontWeight={500}
            fontSize={240}
            fill="#FDFCFA"
            fillOpacity={0.06}
          >
            musuq
          </text>
        </svg>
      </div>
    </footer>
  );
}
