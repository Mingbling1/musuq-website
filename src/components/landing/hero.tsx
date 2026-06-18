"use client";

import { PhoneShowcase } from "./phone-showcase";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Hero editorial: dos celdas con borde carbón. Izquierda, el mensaje sobre crema
 * (contraste limpio, sin scrim). Derecha, el celular Musuq como objeto 3D real
 * (Three.js) que flota y se puede girar, con la app corriendo en vivo. En móvil
 * y reduced-motion cae a una versión estática y liviana (sin WebGL).
 */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-cream-100 px-2.5 pb-2.5 pt-[60px] md:px-3 md:pb-3 md:pt-[68px]"
    >
      <div className="grid min-h-[calc(100svh-90px)] grid-cols-1 overflow-hidden border-2 border-warm-800 bg-cream-100 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Izquierda: mensaje sobre crema ── */}
        <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-terracotta">
            Punto de venta para tu restaurante
          </span>

          <h1
            style={ANTON}
            className="text-[clamp(2.75rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[0.01em] text-warm-800"
          >
            Vende, cobra y
            <br />
            <span style={CAVEAT} className="lowercase tracking-normal text-terracotta">
              controla
            </span>
          </h1>

          <p className="max-w-md text-[17px] leading-relaxed text-warm-600">
            Toma el pedido, avísale a la cocina y cóbralo con Yape, Plin o tarjeta.
            Todo desde un toque, en un solo lugar.
          </p>

          <div className="mt-1 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={APP_URL}
              className="group inline-flex w-fit items-center gap-2 border-2 border-terracotta bg-terracotta px-7 py-4 text-[15px] font-semibold text-cream-50 transition-transform active:scale-[0.97]"
            >
              Crear cuenta gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#rubros"
              className="border-2 border-warm-800 px-7 py-4 text-[15px] font-semibold text-warm-800 transition-colors hover:bg-warm-800 hover:text-cream-50"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* ── Derecha: el celular (3D en desktop, estático en móvil) ── */}
        <div className="relative flex min-h-[420px] items-center justify-center border-t-2 border-warm-800 bg-cream-300 p-8 lg:border-l-2 lg:border-t-0">
          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}
