import { VideoHero } from "@/components/landing/video-hero";

const APP_URL = "https://app.musuq.tech";

const MARQUEE = [
  "Hecho para quienes mueven al Perú",
  "Vende",
  "Cobra",
  "Controla",
  "Para todo el comercio",
  "Lo nuevo, hecho simple",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-terracotta"
    >
      {/* video de fondo (fade-loop) */}
      <div className="absolute inset-0">
        <VideoHero
          src="/brand/hero-kling.mp4"
          poster="/brand/hero-kling-poster.png"
        />
      </div>

      {/* scrim superior para legibilidad del titular */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-warm-800/55 via-warm-800/15 to-transparent"
      />

      {/* contenido encima */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:pb-24">
        <div className="max-w-xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-cream-50/95 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-terracotta">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Hecho en Perú · para todo comercio
          </span>

          <h1
            className="animate-fade-in mt-4 font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-cream-50 drop-shadow-[0_2px_20px_rgba(26,26,26,0.4)]"
            style={{ animationDelay: "80ms" }}
          >
            Tecnología que <span className="text-warm-800">impulsa</span> cada
            venta
          </h1>

          <div
            className="animate-fade-in mt-6 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 text-[15px] font-semibold text-warm-800 shadow-[0_12px_30px_-10px_rgba(26,26,26,0.5)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Crear cuenta gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#plataforma"
              className="inline-flex items-center rounded-full border border-cream-50/40 px-7 py-3.5 text-[15px] font-semibold text-cream-50 transition-colors duration-200 hover:bg-cream-50/10"
            >
              Ver la plataforma
            </a>
          </div>
        </div>
      </div>

      {/* marquee inferior */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden bg-warm-800 py-3.5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-10">
              {MARQUEE.map((t, i) => (
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
