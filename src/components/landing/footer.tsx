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
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Musuq inicio">
              <Logo showText={false} size={30} className="text-cream-50" />
              <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">
                musuq
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream-50/55">
              Tecnología que impulsa cada venta. La plataforma de gestión y punto
              de venta para el comercio peruano.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-50/[0.06] px-3 py-1.5 text-[12px] font-medium text-cream-50/70">
              Hecho en Perú
            </span>
          </div>

          {/* Columnas de navegación */}
          {(Object.keys(NAV) as (keyof typeof NAV)[]).map((group) => (
            <div key={group}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cream-50/40">
                {group}
              </h3>
              <ul className="mt-4 space-y-3">
                {NAV[group].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-cream-50/75 transition-colors hover:text-cream-50"
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
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-[13px] text-cream-50/45 sm:flex-row sm:items-center">
          <span>© 2026 Musuq · Todos los derechos reservados.</span>
          <span>hello@musuq.tech</span>
        </div>
      </div>

      {/* Wordmark gigante de marca de agua */}
      <span
        aria-hidden
        className="pointer-events-none block select-none text-center font-display text-[28vw] font-medium lowercase leading-[0.8] tracking-[-0.04em] text-cream-50/[0.04]"
      >
        musuq
      </span>
    </footer>
  );
}
