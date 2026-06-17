const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// Titular con palabras que suben al cargar (kinetic type).
const WORDS = ["Vende,", "cobra", "y"];

/**
 * Hero "motionsite": media full-bleed en loop dentro del marco terracota,
 * con ruido + scrim + titular cinético. Paso 1 usa el still del ceviche;
 * el <video> A→B (loop perpetuo) reemplazará al <Image> cuando esté listo.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-cream-100 px-2.5 pb-2.5 pt-[60px] md:px-3 md:pb-3 md:pt-[68px]"
    >
      <div className="relative flex min-h-[calc(100svh-90px)] flex-col justify-end overflow-hidden border-2 border-warm-800 bg-terracotta">
        {/* ── Video de fondo en loop perpetuo (Kling v3.0, A=B) ── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/brand/ceviche-band.webp"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/brand/ceviche-hero.mp4" type="video/mp4" />
        </video>

        {/* ruido + tinte de marca + scrim para legibilidad */}
        <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-terracotta/35 mix-blend-multiply" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-800/85 via-warm-800/15 to-transparent" />

        {/* ── Contenido (abajo, estilo editorial) ── */}
        <div className="relative w-full p-6 pt-32 text-cream-50 md:p-10 md:pt-40">
          <span className="block text-[12px] font-semibold uppercase tracking-[0.24em] text-cream-50/85">
            Punto de venta para tu restaurante
          </span>

          <div className="mt-3 grid items-end gap-6 lg:grid-cols-[1fr_22rem]">
            <h1
              style={ANTON}
              className="text-[clamp(3.25rem,11vw,9rem)] uppercase leading-[0.85] tracking-[0.01em]"
            >
              {WORDS.map((w, i) => (
                <span
                  key={w}
                  className="word-rise mr-[0.25em]"
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  {w}
                </span>
              ))}
              <span
                style={{ ...CAVEAT, animationDelay: `${WORDS.length * 0.09}s` }}
                className="word-rise lowercase tracking-normal text-cream-50/95"
              >
                controla
              </span>
            </h1>

            <div className="lg:pb-3">
              <p className="max-w-sm text-base leading-relaxed text-cream-50/85">
                Conecta tu mesa, tu cocina y tu caja. Toma el pedido, avísale a la
                cocina y cobra con Yape, Plin o tarjeta, todo en un toque.
              </p>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={APP_URL}
                  className="group inline-flex w-fit items-center gap-2 bg-cream-50 px-7 py-4 text-[15px] font-semibold text-terracotta transition-colors hover:bg-cream-200"
                >
                  Crear cuenta gratis
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#rubros"
                  className="text-[15px] font-semibold text-cream-50 underline decoration-cream-50/40 underline-offset-4 transition-colors hover:decoration-cream-50"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
