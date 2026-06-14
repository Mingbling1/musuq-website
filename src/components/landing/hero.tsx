import Image from "next/image";

const APP_URL = "https://app.musuq.tech";

const MARQUEE = [
  "Hecho para quienes mueven al Perú",
  "Vende",
  "Cobra",
  "Controla",
  "Para todo el comercio",
  "Lo nuevo, hecho simple",
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* ── Fondo BG-4 (colores del toolkit) ───────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 130% at 22% 12%, #FDFCFA 0%, #F0B9A6 30%, #C8553D 70%, #6B4A33 100%)",
        }}
      />
      {/* respiración de luz */}
      <div
        aria-hidden
        className="anim-breathe absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 88%, rgba(200,85,61,0.55), transparent)",
        }}
      />
      {/* barrido de luz diagonal */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="anim-sweep absolute -inset-y-1/2 left-0 w-1/3"
          style={{
            background:
              "linear-gradient(105deg, transparent, rgba(255,244,232,0.45), transparent)",
            filter: "blur(50px)",
          }}
        />
      </div>
      {/* grano */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.12]"
        style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }}
      />

      {/* ── Contenido ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 pb-20 pt-28 md:grid-cols-[1.05fr_0.95fr] md:pb-0 md:pt-20">
        <div className="max-w-xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-cream-50/95 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-terracotta">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Hecho en Perú · para todo comercio
          </span>

          <h1
            className="animate-fade-in mt-5 font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-tight text-cream-50 drop-shadow-[0_2px_24px_rgba(26,26,26,0.4)]"
            style={{ animationDelay: "80ms" }}
          >
            Tecnología que <span className="text-warm-800">impulsa</span> cada
            venta
          </h1>

          <p
            className="animate-fade-in mt-5 max-w-md text-lg leading-relaxed text-cream-50/90 drop-shadow-[0_1px_12px_rgba(26,26,26,0.3)]"
            style={{ animationDelay: "160ms" }}
          >
            La plataforma de gestión y punto de venta para todo el comercio
            peruano. Vende, cobra y controla desde un solo lugar.
          </p>

          <div
            className="animate-fade-in mt-8 flex flex-wrap items-center gap-3"
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

        {/* App con glassmorphism, flotando */}
        <div className="anim-float relative mx-auto w-full max-w-[300px]">
          <div className="glass absolute -inset-5 rounded-[2.75rem]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cream-50/40 shadow-[0_36px_80px_-24px_rgba(26,26,26,0.55)]">
            <Image
              src="/brand/app-shot.png"
              alt="La app de Musuq"
              width={780}
              height={1688}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* marquee inferior */}
      <div className="relative z-10 overflow-hidden bg-warm-800 py-3.5">
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
