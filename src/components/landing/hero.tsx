"use client";

import { useEffect, useState } from "react";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// Fases del mini-flujo que corre dentro del celular (cuenta "vende, cobra y controla").
// 0 = pedido nuevo · 1 = en cocina · 2 = listo · 3 = cobrado.
type Phase = 0 | 1 | 2 | 3;

const BADGE: Record<Phase, { txt: string; cls: string }> = {
  0: { txt: "Nuevo pedido", cls: "bg-terracotta/10 text-terracotta" },
  1: { txt: "En cocina", cls: "bg-copper/15 text-[#86532A]" },
  2: { txt: "Pedido listo", cls: "bg-brown/10 text-brown" },
  3: { txt: "Pedido listo", cls: "bg-brown/10 text-brown" },
};

/**
 * Hero editorial: dos celdas con borde carbón. Izquierda, el mensaje sobre crema
 * (contraste limpio, sin scrim). Derecha, una demo de la app EN CÓDIGO (DOM/CSS):
 * un pedido entra, pasa por cocina, queda listo y se cobra, y las ventas del día
 * suben. Ligera (sin video → no pesa el LCP), nítida y mantenible. Respeta
 * prefers-reduced-motion (cae al estado final estático).
 */
export function Hero() {
  const [phase, setPhase] = useState<Phase>(0);
  const [cardIn, setCardIn] = useState(false);
  const [paid, setPaid] = useState(false); // controla toast + monto del día

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((r) => timers.push(setTimeout(r, ms)));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      // Sin movimiento: mostrar el estado final (listo + cobrado) y salir.
      if (reduce) {
        setPhase(3);
        setCardIn(true);
        setPaid(true);
        return;
      }
      while (!cancelled) {
        setPaid(false);
        setPhase(0);
        setCardIn(false);
        await sleep(80);
        if (cancelled) break;
        setCardIn(true); // el pedido entra
        await sleep(1300);
        if (cancelled) break;
        setPhase(1); // en cocina
        await sleep(1200);
        if (cancelled) break;
        setPhase(2); // listo
        await sleep(1000);
        if (cancelled) break;
        setPhase(3);
        setPaid(true); // cobrado
        await sleep(2100);
        if (cancelled) break;
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

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

        {/* ── Derecha: la app en código (demo animada) ── */}
        <div className="relative flex items-center justify-center border-t-2 border-warm-800 bg-cream-300 p-8 lg:border-l-2 lg:border-t-0">
          <div aria-hidden className="relative h-[560px] w-[280px] rounded-[44px] bg-warm-800 p-3 shadow-[0_30px_60px_rgba(26,26,26,0.22)]">
            {/* notch */}
            <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-warm-800" />
            <div className="flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-white">
              {/* top bar */}
              <div className="border-b border-warm-800/10 px-5 pb-3.5 pt-6">
                <div className="text-[17px] font-bold tracking-tight text-warm-800">musuq</div>
                <div className="text-[11px] text-warm-500">Pedidos · hoy</div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-[11px] text-warm-500">Ventas del día</span>
                  <span
                    className={`text-[22px] font-bold tabular-nums text-warm-800 transition-transform duration-300 ${
                      paid ? "scale-105" : ""
                    }`}
                  >
                    {paid ? "S/ 1,272.00" : "S/ 1,240.00"}
                  </span>
                </div>
              </div>

              {/* lista */}
              <div className="flex flex-1 flex-col gap-3 p-4">
                {/* pedido previo, atenuado */}
                <div className="rounded-[18px] border border-warm-800/10 bg-white p-3.5 opacity-45 shadow-[0_4px_16px_rgba(26,26,26,0.05)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-warm-800">Mesa 2</span>
                    <span className="text-[13px] font-bold text-warm-800">S/ 18.00</span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-warm-500">Causa limeña</div>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-brown/10 px-2.5 py-1 text-[11px] font-semibold text-brown">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    Pedido listo
                  </div>
                </div>

                {/* pedido en vivo */}
                <div
                  className={`rounded-[18px] border border-warm-800/10 bg-white p-3.5 shadow-[0_4px_16px_rgba(26,26,26,0.06)] transition-all duration-[420ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                    cardIn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-warm-800">Mesa 4</span>
                    <span className="text-[13px] font-bold text-warm-800">S/ 32.00</span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-warm-500">Lomo saltado</div>
                  <div
                    className={`mt-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300 ${BADGE[phase].cls}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {BADGE[phase].txt}
                  </div>
                </div>
              </div>

              {/* toast cobrado */}
              <div
                className={`pointer-events-none absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-2xl bg-warm-800 px-4 py-3.5 text-[13px] font-semibold text-cream-50 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                  paid ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[12px] text-cream-50">
                  ✓
                </span>
                Cobrado
                <span className="ml-auto font-bold tabular-nums">S/ 32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
