import Image from "next/image";

const APP_URL = "https://app.musuq.tech";

/** Motivo andino (deriva del patrón de la frente del zorro). */
function AndeanBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0 14 L16 2 L32 14 L48 2 L64 14 L80 2 L96 14 L112 2 L128 14 L144 2 L160 14 L176 2 L192 14 L208 2 L224 14 L240 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] translate-x-1/4 -translate-y-1/4 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,85,61,0.16), transparent)",
        }}
      />
      <AndeanBand className="absolute left-6 top-24 hidden w-40 text-terracotta/30 lg:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-32 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div className="max-w-xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-cream-50">
            Tu negocio · más simple · más ventas
          </span>

          <h1
            className="animate-fade-in mt-6 font-serif text-[clamp(2.75rem,7.5vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-warm-800"
            style={{ animationDelay: "80ms" }}
          >
            Tecnología que <span className="text-terracotta">impulsa</span> cada
            venta
          </h1>

          <p
            className="animate-fade-in mt-6 max-w-md text-lg leading-relaxed text-warm-600"
            style={{ animationDelay: "160ms" }}
          >
            La plataforma de gestión y punto de venta para todo el comercio
            peruano. Vende, cobra y controla tu negocio desde un solo lugar.
          </p>

          <div
            className="animate-fade-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Crear cuenta gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#plataforma"
              className="inline-flex items-center rounded-full border border-warm-800/15 px-7 py-3.5 text-[15px] font-semibold text-warm-800 transition-colors duration-200 hover:bg-warm-800/[0.04]"
            >
              Ver la plataforma
            </a>
          </div>

          <ul
            className="animate-fade-in mt-9 flex flex-wrap gap-2.5"
            style={{ animationDelay: "320ms" }}
          >
            {["Para mypes", "Fácil de usar", "Siempre contigo"].map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-warm-800/12 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-wide text-warm-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none">
          <div
            aria-hidden
            className="absolute bottom-6 h-56 w-56 rounded-full opacity-70 blur-2xl lg:breathe"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,85,61,0.18), transparent)",
            }}
          />
          <Image
            src="/brand/zorro-gala.png"
            alt="Musuq, la mascota que impulsa tu negocio"
            width={574}
            height={916}
            priority
            className="animate-fade-in relative z-10 h-auto w-[68%] max-w-xs drop-shadow-[0_24px_40px_rgba(26,26,26,0.18)] lg:float-orbit lg:w-[78%]"
          />

          {/* chip glass flotante — toque moderno/tech */}
          <div
            className="animate-fade-in glass absolute right-0 top-10 z-20 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-12px_rgba(26,26,26,0.25)] lg:right-2"
            style={{ animationDelay: "420ms" }}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-terracotta/60 lg:soft-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-warm-500">
                Vendido hoy
              </span>
            </div>
            <p className="mt-1 font-serif text-2xl font-extrabold tracking-tight text-warm-800">
              S/ 1,248
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-warm-800 py-3.5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-10">
              {[
                "Hecho para quienes mueven al Perú",
                "Vende",
                "Cobra",
                "Controla",
                "Para todo el comercio",
                "Lo nuevo, hecho simple",
              ].map((t, i) => (
                <span
                  key={`${k}-${i}`}
                  className="flex items-center gap-10 text-[12px] font-semibold uppercase tracking-[0.35em] text-cream-100/90"
                >
                  {t}
                  <span className="text-terracotta">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
