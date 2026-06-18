"use client";

import { useEffect, useState } from "react";

// Pantalla de la app (UI + mini-flujo animado). Reutilizable: la usan el
// celular 3D (dentro de <Html>) y el fallback estático en móvil.
type Phase = 0 | 1 | 2 | 3;

const BADGE: Record<Phase, { txt: string; cls: string }> = {
  0: { txt: "Nuevo pedido", cls: "bg-terracotta/10 text-terracotta" },
  1: { txt: "En cocina", cls: "bg-copper/15 text-[#86532A]" },
  2: { txt: "Pedido listo", cls: "bg-brown/10 text-brown" },
  3: { txt: "Pedido listo", cls: "bg-brown/10 text-brown" },
};

export function AppScreen() {
  const [phase, setPhase] = useState<Phase>(0);
  const [cardIn, setCardIn] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((r) => timers.push(setTimeout(r, ms)));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
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
        setCardIn(true);
        await sleep(1300);
        if (cancelled) break;
        setPhase(1);
        await sleep(1200);
        if (cancelled) break;
        setPhase(2);
        await sleep(1000);
        if (cancelled) break;
        setPhase(3);
        setPaid(true);
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
    <div className="flex h-[520px] w-[252px] flex-col overflow-hidden rounded-[30px] bg-white">
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
        className={`pointer-events-none relative mx-4 mb-4 flex items-center gap-2.5 rounded-2xl bg-warm-800 px-4 py-3.5 text-[13px] font-semibold text-cream-50 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          paid ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[12px] text-cream-50">
          ✓
        </span>
        Cobrado
        <span className="ml-auto font-bold tabular-nums">S/ 32.00</span>
      </div>
    </div>
  );
}
