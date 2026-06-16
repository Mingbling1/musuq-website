import Image from "next/image";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;

/**
 * Header drenched (estilo foto 2 — Creative Portfolio): fondo terracota,
 * título gigante condensado (Anton), imagen tenue de textura, meta + CTA.
 * Reemplaza el hero dark del celular sobre roca.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-terracotta px-6 pb-14 pt-28 text-cream-50 md:pb-20 md:pt-32"
    >
      {/* textura tenue (imagen del producto) */}
      <Image
        src="/brand/hero-rock-desktop.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.12] mix-blend-luminosity"
      />
      {/* glow suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-0 h-[120%] w-[55%] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 60%)" }}
      />

      {/* meta arriba */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
        <span style={ANTON} className="text-xl uppercase tracking-wide md:text-2xl">
          Musuq
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream-50/85">
          Próximamente — 2026
        </span>
      </div>

      {/* título gigante */}
      <h1
        style={ANTON}
        className="relative mx-auto w-full max-w-7xl text-[clamp(4.5rem,17vw,13.5rem)] uppercase leading-[0.8] tracking-[0.01em]"
      >
        Algo
        <br />
        nuevo
      </h1>

      {/* sub + CTA abajo */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-base leading-relaxed text-cream-50/85">
          Estamos construyendo algo distinto para tu negocio. Muy pronto lo vas a
          poder tocar.
        </p>
        <a
          href={APP_URL}
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-cream-50 px-7 py-4 text-[15px] font-semibold text-terracotta transition-transform duration-200 hover:scale-[1.03] active:scale-95"
        >
          Quiero saber más
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
