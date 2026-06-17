import { MusuqPhone } from "@/components/landing/musuq-phone";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Hero producto-en-vivo: marco terracota sobre crema, copy que dice qué es
 * Musuq y el celular con la app (riel de pedidos) en loop perpetuo.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-cream-100 px-2.5 pb-2.5 pt-[60px] md:px-3 md:pb-3 md:pt-[68px]"
    >
      <div className="relative overflow-hidden border-2 border-warm-800 bg-terracotta px-6 py-12 text-cream-50 md:px-10 md:py-16">
        {/* glow suave */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[6%] top-0 h-[120%] w-[55%] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 60%)" }}
        />

        <div className="relative grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          {/* ── Texto ── */}
          <div>
            <span className="block text-[12px] font-semibold uppercase tracking-[0.24em] text-cream-50/85">
              Punto de venta para tu restaurante
            </span>
            <h1
              style={ANTON}
              className="mt-5 text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.9] tracking-[0.01em]"
            >
              Vende, cobra y{" "}
              <span style={CAVEAT} className="lowercase tracking-normal text-cream-50/95">controla</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-50/85">
              El sistema que conecta tu mesa, tu cocina y tu caja. Toma el pedido,
              avísale a la cocina y cobra con Yape, Plin o tarjeta, todo en un toque.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={APP_URL}
                className="group inline-flex w-fit items-center gap-2 bg-cream-50 px-7 py-4 text-[15px] font-semibold text-terracotta transition-colors hover:bg-cream-200"
              >
                Crear cuenta gratis
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#rubros"
                className="text-[15px] font-semibold text-cream-50 underline decoration-cream-50/40 underline-offset-4 transition-colors hover:decoration-cream-50"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* ── Celular con la app (loop perpetuo) ── */}
          <div className="flex justify-center md:justify-end">
            <MusuqPhone className="lg:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
