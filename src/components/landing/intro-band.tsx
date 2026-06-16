import { Reveal } from "@/components/landing/reveal";

const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Banda drenched estilo "Creative Portfolio" (foto 2): fondo terracota,
 * título gigante condensado (Anton) + acento manuscrito (Caveat). Acento
 * editorial-brutalista dentro del sitio dark. Sube con curva sobre el hero.
 */
export function IntroBand() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-[2.5rem] bg-terracotta px-6 py-20 text-cream-50 md:-mt-14 md:rounded-t-[3.5rem] md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] -top-[30%] h-[160%] w-[55%] rounded-full opacity-25 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 60%)" }}
      />
      <Reveal className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <span style={ANTON} className="text-xl uppercase tracking-wide md:text-2xl">
            Musuq
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50/85">
            Próximamente — 2026
          </span>
        </div>

        <h2 style={ANTON} className="mt-8 text-[clamp(3.25rem,12vw,10rem)] uppercase leading-[0.82] tracking-[0.01em] md:mt-10">
          Vende, cobra
          <br />
          <span style={CAVEAT} className="lowercase tracking-normal text-cream-50/95">
            y crece.
          </span>
        </h2>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-cream-50/85 md:mt-10 md:text-base">
          Tecnología que impulsa cada venta. Vende, cobra y controla tu negocio
          desde un solo lugar.
        </p>
      </Reveal>
    </section>
  );
}
