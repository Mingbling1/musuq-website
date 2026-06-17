"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";

const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// Antes (cuaderno / desorden) → Después (con Musuq, control)
const PAIRS: { antes: string; despues: string }[] = [
  { antes: "Las ventas viven en un cuaderno o en tu memoria.", despues: "Cada venta se registra sola, sin que muevas un dedo." },
  { antes: "Cierras el día sin saber cuánto ganaste de verdad.", despues: "Tus ganancias del día, claras al instante." },
  { antes: "El stock va a ojo: te quedas sin lo que más vendes.", despues: "Inventario al día, con alerta antes del quiebre." },
  { antes: "Cobros sueltos: Yape por aquí, efectivo por allá.", despues: "Yape, Plin, tarjeta y efectivo en una sola caja." },
];

export function PorQue() {
  const [after, setAfter] = useState(true);
  const pausedRef = useRef(false);
  const inViewRef = useRef(true);
  const sectionRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-itera Sin/Con Musuq de forma perpetua. Pausa 5 s al interactuar y se
  // detiene si la sección no está a la vista o hay prefers-reduced-motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current && inViewRef.current) setAfter((v) => !v);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { inViewRef.current = e.isIntersecting; },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (val: boolean) => {
    setAfter(val);
    pausedRef.current = true;
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  return (
    <section ref={sectionRef} id="por-que" className="bg-cream-100 px-6 py-24 text-warm-800 md:py-32">
      <ChapterMarker num="01" label="Por qué" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 style={ANTON} className="text-[clamp(2.75rem,8vw,6rem)] uppercase leading-[0.85] tracking-[0.01em]">
          Del cuaderno al{" "}
          <span style={CAVEAT} className="lowercase tracking-normal text-terracotta">control</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-warm-600">
          El salto que tu negocio estaba esperando. Toca el interruptor y mira la
          diferencia.
        </p>
      </Reveal>

      {/* ── Toggle Sin / Con Musuq (celdas con borde) ───────────── */}
      <div className="mx-auto mt-9 flex w-fit border-2 border-warm-800">
        <button
          type="button"
          onClick={() => select(false)}
          className={`px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
            after ? "text-warm-500 hover:text-warm-800" : "bg-warm-800 text-cream-50"
          }`}
        >
          Sin Musuq
        </button>
        <button
          type="button"
          onClick={() => select(true)}
          className={`border-l-2 border-warm-800 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
            after ? "bg-terracotta text-cream-50" : "text-warm-500 hover:text-warm-800"
          }`}
        >
          Con Musuq
        </button>
      </div>

      {/* ── Contrastes en caja con divisores ────────────────────── */}
      <div key={after ? "after" : "before"} className="mx-auto mt-10 max-w-2xl border-2 border-warm-800">
        {PAIRS.map((p, i) => (
          <div
            key={i}
            className={`scene-in flex items-center gap-4 px-5 py-5 ${i > 0 ? "border-t-2 border-warm-800" : ""}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center ${
                after ? "bg-terracotta text-cream-50" : "bg-warm-800/8 text-warm-400"
              }`}
            >
              {after ? <Check className="h-4 w-4" strokeWidth={2.6} /> : <X className="h-4 w-4" strokeWidth={2.2} />}
            </span>
            <span className={`text-[17px] leading-snug md:text-lg ${after ? "text-warm-800" : "text-warm-500"}`}>
              {after ? p.despues : p.antes}
            </span>
          </div>
        ))}
      </div>

      {/* ── Remate ──────────────────────────────────────────────── */}
      <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-warm-600">
        Una sola plataforma para vender, cobrar y entender tu negocio.{" "}
        <span className="font-semibold text-warm-800">Premium, simple, tuya.</span>
      </p>
    </section>
  );
}
