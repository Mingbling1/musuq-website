import Image from "next/image";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Hero drenched (estilo imagen 2): fondo terracota + imagen tenue, ENCERRADO
 * en un border con padding (marco), esquinas rectas. Mismo texto del hero.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-terracotta px-2.5 pb-2.5 pt-[60px] md:px-3 md:pb-3 md:pt-[68px]"
    >
      <div className="relative flex min-h-[calc(100svh-70px)] flex-col justify-between overflow-hidden border-2 border-cream-50/30 px-6 pb-12 pt-9 text-cream-50 md:min-h-[calc(100svh-80px)] md:px-10 md:pb-14 md:pt-12">
        {/* imagen tenue (textura) */}
        <Image
          src="/brand/hero-rock-desktop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14] mix-blend-luminosity"
        />
        {/* glow suave */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[8%] top-0 h-[120%] w-[55%] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 60%)" }}
        />

        {/* meta arriba */}
        <div className="relative flex w-full items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-cream-50/85">
            Próximamente
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cream-50/70">
            2026
          </span>
        </div>

        {/* título gigante (mismo texto) */}
        <h1
          style={ANTON}
          className="relative text-[clamp(3.5rem,12vw,11rem)] uppercase leading-[0.82] tracking-[0.01em]"
        >
          Algo{" "}
          <span style={CAVEAT} className="lowercase tracking-normal text-cream-50/95">
            nuevo
          </span>
          <br />
          está por llegar
        </h1>

        {/* copy + CTA (mismo texto) */}
        <div className="relative flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-cream-50/85">
            Estamos construyendo algo distinto para tu negocio. Muy pronto lo vas
            a poder tocar.
          </p>
          <a
            href={APP_URL}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-cream-50 px-7 py-4 text-[15px] font-semibold text-terracotta transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Quiero saber más
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
