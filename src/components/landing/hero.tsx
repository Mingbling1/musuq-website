import Image from "next/image";

const APP_URL = "https://app.musuq.tech";

const METRICS = [
  { v: "+18%", l: "ventas el primer mes" },
  { v: "1 lugar", l: "vende · cobra · controla" },
  { v: "S/ 0", l: "para empezar" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream-100"
    >
      {/* ── Bloque editorial centrado ──────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-28 text-center md:pt-24">
        <span className="animate-fade-in text-[12px] font-semibold uppercase tracking-[0.26em] text-terracotta">
          Hecho en Perú · para todo comercio
        </span>

        <span
          aria-hidden
          className="animate-fade-in my-7 block h-px w-16 bg-warm-800/15"
          style={{ animationDelay: "60ms" }}
        />

        <h1
          className="animate-fade-in font-display text-[clamp(3rem,8vw,7.25rem)] font-normal leading-[0.9] tracking-[-0.03em] text-warm-800"
          style={{ animationDelay: "100ms" }}
        >
          Tecnología que{" "}
          <em className="font-medium italic text-terracotta">impulsa</em> cada
          venta
        </h1>

        <p
          className="animate-fade-in mt-8 max-w-xl text-lg leading-relaxed text-warm-600"
          style={{ animationDelay: "180ms" }}
        >
          La plataforma de gestión y punto de venta para el comercio peruano.
          Vende, cobra y controla desde un solo lugar.
        </p>

        <div
          className="animate-fade-in mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href={APP_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Crear cuenta gratis
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#plataforma"
            className="inline-flex items-center rounded-full border border-warm-800/15 px-8 py-4 text-[15px] font-semibold text-warm-800 transition-colors duration-200 hover:bg-warm-800/[0.04]"
          >
            Ver la plataforma
          </a>
        </div>
      </div>

      {/* ── Banda cinematográfica del local (foto editorial) ───── */}
      <div className="relative h-[34vh] min-h-[240px] w-full shrink-0 overflow-hidden">
        <Image
          src="/brand/hero-cafe.jpg"
          alt="Comercio peruano moderno usando Musuq"
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover object-[center_38%]"
        />
        {/* fundido crema en el borde superior para enlazar con el bloque */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #FAF8F5 0%, rgba(250,248,245,0.0) 32%)",
          }}
        />
        {/* métricas sobre la foto */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-5xl flex-wrap items-end gap-x-10 gap-y-2 px-6 pb-6">
            {METRICS.map((m) => (
              <div
                key={m.v}
                className="text-cream-50 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
              >
                <div className="font-display text-2xl font-medium leading-none tracking-tight">
                  {m.v}
                </div>
                <div className="mt-1 text-[12px] font-medium uppercase tracking-wide text-cream-50/85">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
