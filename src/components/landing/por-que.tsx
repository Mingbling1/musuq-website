"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";
import { Parallax } from "@/components/landing/parallax";

// Antes (cuaderno / desorden) → Después (con Musuq, control)
const PAIRS: { antes: string; despues: string }[] = [
  { antes: "Las ventas viven en un cuaderno o en tu memoria.", despues: "Cada venta se registra sola, sin que muevas un dedo." },
  { antes: "Cierras el día sin saber cuánto ganaste de verdad.", despues: "Tus ganancias del día, claras al instante." },
  { antes: "El stock va a ojo: te quedas sin lo que más vendes.", despues: "Inventario al día, con alerta antes del quiebre." },
  { antes: "Cobros sueltos: Yape por aquí, efectivo por allá.", despues: "Yape, Plin, tarjeta y efectivo en una sola caja." },
];

export function PorQue() {
  const [after, setAfter] = useState(true);

  return (
    <section
      id="por-que"
      className="relative overflow-hidden bg-[#120D0B] px-6 py-24 text-cream-50 md:py-32"
    >
      {/* glow terracota sutil + parallax */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2">
        <Parallax speed={0.16}>
          <div
            aria-hidden
            className="h-72 w-[42rem] max-w-[90vw] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(200,85,61,0.45), transparent 70%)" }}
          />
        </Parallax>
      </div>

      <ChapterMarker num="01" label="Por qué" />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em]">
          Del cuaderno al{" "}
          <em className="font-medium italic text-terracotta-light">control</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-50/60">
          El salto que tu negocio estaba esperando. Toca el interruptor y mira la
          diferencia.
        </p>
      </Reveal>

      {/* ── Toggle Sin Musuq / Con Musuq (pill deslizante) ──────── */}
      <div className="relative mx-auto mt-9 w-fit">
        <div className="relative flex rounded-full bg-cream-50/[0.07] p-1">
          <span
            aria-hidden
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-terracotta transition-transform duration-300 ease-out"
            style={{ transform: after ? "translateX(100%)" : "translateX(0)" }}
          />
          <button
            type="button"
            onClick={() => setAfter(false)}
            className={`relative z-10 w-32 py-2.5 text-sm font-semibold transition-colors ${after ? "text-cream-50/55" : "text-cream-50"}`}
          >
            Sin Musuq
          </button>
          <button
            type="button"
            onClick={() => setAfter(true)}
            className={`relative z-10 w-32 py-2.5 text-sm font-semibold transition-colors ${after ? "text-cream-50" : "text-cream-50/55"}`}
          >
            Con Musuq
          </button>
        </div>
      </div>

      {/* ── Lista que se transforma (antes ↔ después) ───────────── */}
      <ul key={after ? "after" : "before"} className="relative mx-auto mt-12 max-w-2xl">
        {PAIRS.map((p, i) => (
          <li
            key={i}
            className="scene-in flex items-start gap-4 border-t border-cream-50/10 py-4 first:border-t-0"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span
              className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                after ? "bg-terracotta text-cream-50" : "bg-cream-50/[0.08] text-cream-50/40"
              }`}
            >
              {after ? <Check className="h-4 w-4" strokeWidth={2.4} /> : <X className="h-4 w-4" strokeWidth={2.2} />}
            </span>
            <span
              className={`pt-0.5 text-lg leading-snug transition-colors md:text-xl ${
                after ? "text-cream-50" : "text-cream-50/55"
              }`}
            >
              {after ? p.despues : p.antes}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Remate diferenciador ────────────────────────────────── */}
      <p className="mx-auto mt-12 max-w-xl text-center font-display text-xl font-normal leading-snug text-cream-50/80 md:text-2xl">
        Una sola plataforma peruana para vender, cobrar y entender tu negocio.
        <span className="text-cream-50"> Premium, simple, tuya.</span>
      </p>
    </section>
  );
}
