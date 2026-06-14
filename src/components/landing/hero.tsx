import Image from "next/image";
import { LiquidCta } from "@/components/landing/liquid-cta";

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
      {/* ── Fondo crema dominante con aurora de marca a la deriva ───────── */}
      {/* base crema */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 120% at 50% 0%, #FDFCFA 0%, #FAF8F5 45%, #F5F0EB 100%)",
        }}
      />
      {/* capa de blobs — parallax sutil con el cursor (desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{
          transform:
            "translate(calc(var(--mx) * 14px), calc(var(--my) * 14px))",
        }}
      >
        {/* terracota — acento principal, arriba-izquierda */}
        <div
          className="aurora-1 absolute -left-[6%] -top-[10%] h-[46rem] w-[46rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(200,85,61,0.22), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* marrón de marca — abajo-derecha */}
        <div
          className="aurora-2 absolute -right-[8%] bottom-[2%] h-[42rem] w-[42rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(107,74,51,0.18), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* cobre — centro-derecha, calidez intermedia */}
        <div
          className="aurora-3 absolute right-[18%] top-[24%] h-[34rem] w-[34rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(184,115,51,0.14), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* carbón — profundidad muy sutil, abajo-izquierda */}
        <div
          className="aurora-4 absolute -left-[4%] bottom-[6%] h-[36rem] w-[36rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(26,26,26,0.06), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
      {/* grano */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
        style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }}
      />

      {/* ── Contenido ──────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 pb-20 pt-28 md:grid-cols-[1.05fr_0.95fr] md:pb-0 md:pt-20">
        <div className="max-w-xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-warm-800/10 bg-cream-50/90 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-terracotta shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Hecho en Perú · para todo comercio
          </span>

          <h1
            className="animate-fade-in mt-5 font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-bold uppercase leading-[0.92] tracking-tight text-warm-800"
            style={{ animationDelay: "80ms" }}
          >
            Tecnología que <span className="text-terracotta">impulsa</span> cada
            venta
          </h1>

          <p
            className="animate-fade-in mt-5 max-w-md text-lg leading-relaxed text-warm-600"
            style={{ animationDelay: "160ms" }}
          >
            La plataforma de gestión y punto de venta para todo el comercio
            peruano. Vende, cobra y controla desde un solo lugar.
          </p>

          <div
            className="animate-fade-in mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <LiquidCta href={APP_URL} className="text-[15px] font-semibold text-terracotta">
              <span className="flex items-center gap-2">
                Crear cuenta gratis
                <span aria-hidden>→</span>
              </span>
            </LiquidCta>
            <LiquidCta href="#plataforma" className="text-[15px] font-semibold text-warm-700">
              Ver la plataforma
            </LiquidCta>
          </div>
        </div>

        {/* App con glassmorphism, flotando */}
        <div className="anim-float relative mx-auto w-full max-w-[300px]">
          <div className="glass absolute -inset-5 rounded-[2.75rem]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cream-50/40 shadow-[0_36px_80px_-24px_rgba(26,26,26,0.35)]">
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
