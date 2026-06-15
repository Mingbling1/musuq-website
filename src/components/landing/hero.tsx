import Image from "next/image";

const APP_URL = "https://app.musuq.tech";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#120D0B] text-cream-50"
    >
      {/* ── Imagen full-bleed: mano + celular (glow terracota) ──── */}
      {/* Desktop: mano al tercio izquierdo, negro atmosférico a la derecha */}
      <Image
        src="/brand/hero-phone-desktop.jpg"
        alt="Algo nuevo está por llegar"
        fill
        priority
        sizes="100vw"
        className="hero-drift hidden object-cover object-left md:block"
      />
      {/* Mobile: celular vertical centrado con aura de glow */}
      <Image
        src="/brand/hero-phone-mobile.jpg"
        alt="Algo nuevo está por llegar"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_32%] md:hidden"
      />

      {/* ── Veladuras para legibilidad del texto ─────────────────── */}
      {/* Desktop: oscurece la mitad derecha donde vive el titular */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(18,13,11,0) 30%, rgba(18,13,11,0.55) 52%, #120D0B 86%)",
        }}
      />
      {/* Mobile: oscurece el borde inferior donde se ancla el texto */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,13,11,0.25) 0%, rgba(18,13,11,0) 28%, rgba(18,13,11,0.85) 72%, #120D0B 100%)",
        }}
      />

      {/* ── Palabra fantasma display (intriga: musuq = nuevo) ────── */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[6vw] right-[2vw] z-0 hidden select-none font-display text-[26vw] font-medium italic leading-none tracking-[-0.04em] text-cream-50/[0.04] md:block"
      >
        nuevo
      </span>

      {/* ── Contenido editorial ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pb-20 md:flex-row md:items-center md:justify-end md:pb-0">
        <div className="w-full md:w-[48%]">
          <span className="animate-fade-in block text-[12px] font-semibold uppercase tracking-[0.32em] text-terracotta-light">
            Próximamente · Hecho en Perú
          </span>

          <h1
            className="animate-fade-in mt-6 font-display text-[clamp(3rem,8.5vw,6.75rem)] font-normal leading-[0.92] tracking-[-0.035em]"
            style={{ animationDelay: "100ms" }}
          >
            Algo{" "}
            <em className="font-medium italic text-terracotta-light">nuevo</em>
            <br />
            está por llegar
          </h1>

          <p
            className="animate-fade-in mt-7 max-w-md text-lg leading-relaxed text-cream-50/70"
            style={{ animationDelay: "180ms" }}
          >
            Estamos construyendo algo distinto para el comercio peruano.
            Muy pronto lo vas a poder tocar.
          </p>

          <div
            className="animate-fade-in mt-9"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-full border border-cream-50/25 bg-cream-50/[0.03] px-8 py-4 text-[15px] font-semibold text-cream-50 backdrop-blur-sm transition-all duration-200 hover:border-terracotta hover:bg-terracotta active:scale-95"
            >
              Quiero saber más
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
