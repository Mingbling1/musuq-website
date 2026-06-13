import Image from "next/image";
import { CursorFx } from "@/components/landing/cursor-fx";

const APP_URL = "https://app.musuq.tech";

const MARQUEE = [
  "Hecho para quienes mueven al Perú",
  "Vende",
  "Cobra",
  "Controla",
  "Para todo el comercio",
  "Lo nuevo, hecho simple",
];

function AndeanBand({ className = "" }: { className?: string }) {
  return (
    <div data-draw className={className}>
      <svg viewBox="0 0 240 16" fill="none" aria-hidden className="h-full w-full" preserveAspectRatio="none">
        <path
          d="M0 14 L16 2 L32 14 L48 2 L64 14 L80 2 L96 14 L112 2 L128 14 L144 2 L160 14 L176 2 L192 14 L208 2 L224 14 L240 2"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 md:flex md:h-[100svh] md:flex-col">
      <CursorFx />
      {/* glow + blob orgánico (parallax) */}
      <div
        aria-hidden
        data-parallax="0.3"
        className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] translate-x-1/4 -translate-y-1/4 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(200,85,61,0.16), transparent)" }}
      />
      <div
        aria-hidden
        data-parallax="0.18"
        className="pointer-events-none absolute right-[6%] top-[22%] hidden h-[26rem] w-[26rem] bg-terracotta/[0.06] lg:block"
        style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
      />
      <AndeanBand className="absolute left-6 top-24 hidden h-4 w-40 text-terracotta/40 lg:block" />

      {/* micro-labels de esquina (editorial) */}
      <span className="absolute bottom-20 left-6 hidden -rotate-90 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400 lg:block">
        Perú · 2026
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-32 md:grid-cols-[1.1fr_0.9fr] md:content-center md:gap-6 md:pb-0 md:pt-20 md:min-h-0 md:flex-1">
        <div className="max-w-xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-cream-50">
            Tu negocio · más simple · más ventas
          </span>

          <h1
            className="animate-fade-in mt-6 font-serif text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-warm-800"
            style={{ animationDelay: "80ms" }}
          >
            Tecnología que{" "}
            <span className="inline-block -rotate-2 text-terracotta">impulsa</span>{" "}
            cada venta
          </h1>

          <p
            className="animate-fade-in mt-6 max-w-md text-lg leading-relaxed text-warm-600"
            style={{ animationDelay: "160ms" }}
          >
            La plataforma de gestión y punto de venta para todo el comercio
            peruano. Vende, cobra y controla tu negocio desde un solo lugar.
          </p>

          <div className="animate-fade-in mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Crear cuenta gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#plataforma"
              className="inline-flex items-center rounded-full border border-warm-800/15 px-7 py-3.5 text-[15px] font-semibold text-warm-800 transition-colors duration-200 hover:bg-warm-800/[0.04]"
            >
              Ver la plataforma
            </a>
          </div>

          <ul className="animate-fade-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
            {[
              {
                l1: "Para",
                l2: "mypes",
                icon: <path d="M3 7l1-3h16l1 3M4 7v13h16V7M4 7h16M9 20v-6h6v6" />,
              },
              {
                l1: "Fácil de",
                l2: "usar",
                icon: (
                  <>
                    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                    <path d="M18.5 14l.55 1.45L20.5 16l-1.45.55L18.5 18l-.55-1.45L16.5 16l1.45-.55z" />
                  </>
                ),
              },
              {
                l1: "Siempre",
                l2: "contigo",
                icon: (
                  <path d="M12 21s-6.5-4.3-6.5-9.2A3.2 3.2 0 0 1 12 8a3.2 3.2 0 0 1 6.5 3.8C18.5 16.7 12 21 12 21z" />
                ),
              },
            ].map((f) => (
              <li
                key={f.l2}
                className="glass inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_-14px_rgba(26,26,26,0.2)]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-terracotta"
                >
                  {f.icon}
                </svg>
                <span className="text-[13px] font-bold uppercase leading-[1.05] tracking-wide text-warm-800">
                  {f.l1}
                  <br />
                  {f.l2}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center md:max-w-none md:items-center">
          {/* zorro — parallax sutil siguiendo el cursor */}
          <div
            className="relative z-10 w-[60%] max-w-[12rem] will-change-transform md:h-[50vh] md:max-h-[480px] md:w-auto md:max-w-none"
            style={{ transform: "translate3d(calc(var(--mx) * 14px), calc(var(--my) * 14px), 0)" }}
          >
            <Image
              src="/brand/zorro-gala.png"
              alt="Musuq, la mascota que impulsa tu negocio"
              width={574}
              height={916}
              priority
              className="animate-fade-in h-auto w-full drop-shadow-[0_24px_40px_rgba(26,26,26,0.18)] md:h-full md:w-auto lg:float-orbit"
            />
          </div>

          {/* chip glass flotante — más profundidad de parallax */}
          <div
            className="absolute right-2 top-10 z-20 hidden will-change-transform sm:block"
            style={{ transform: "translate3d(calc(var(--mx) * 26px), calc(var(--my) * 26px), 0)" }}
          >
            <div
              className="glass animate-fade-in rounded-2xl px-4 py-3 shadow-[0_16px_40px_-12px_rgba(26,26,26,0.25)]"
              style={{ animationDelay: "420ms" }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-terracotta/60 lg:soft-pulse" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-warm-500">Vendido hoy</span>
              </div>
              <p className="mt-1 font-serif text-2xl font-extrabold tracking-tight text-warm-800">S/ 1,248</p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee — recto en móvil, levemente oblicuo en desktop */}
      <div className="relative overflow-hidden">
        <div className="overflow-hidden bg-warm-800 py-3.5 lg:-rotate-1 lg:scale-105">
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
      </div>
    </section>
  );
}
