"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

export function Cierre() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: cablear a webhook (n8n / Sheet) para guardar el correo.
    setSubmitted(true);
  };

  return (
    <section
      id="cierre"
      className="relative overflow-hidden bg-[#120D0B] px-6 py-28 text-cream-50 md:py-40"
    >
      {/* glow terracota central (drenched) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-[48rem] max-w-[92vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,85,61,0.55), transparent 70%)" }}
      />
      {/* palabra fantasma */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[4vw] left-1/2 -translate-x-1/2 select-none font-display text-[22vw] font-medium italic leading-none tracking-[-0.04em] text-cream-50/[0.035]"
      >
        nuevo
      </span>

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <span className="block text-[12px] font-semibold uppercase tracking-[0.32em] text-terracotta-light">
          Próximamente · Hecho en Perú
        </span>
        <h2 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em]">
          Sé de los{" "}
          <em className="font-medium italic text-terracotta-light">primeros</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-cream-50/65">
          Algo nuevo está por llegar para el comercio peruano. Déjanos tu correo
          y te avisamos apenas abramos las puertas.
        </p>

        {submitted ? (
          <div className="pop-in mx-auto mt-9 inline-flex items-center gap-2.5 rounded-full bg-cream-50/[0.06] px-6 py-4 text-cream-50 ring-1 ring-terracotta/40">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-cream-50">
              <Check className="h-4 w-4" strokeWidth={2.6} />
            </span>
            ¡Listo! Te escribimos apenas lancemos.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              aria-label="Tu correo"
              className="flex-1 rounded-full bg-cream-50/[0.06] px-5 py-3.5 text-cream-50 outline-none ring-1 ring-cream-50/15 transition-shadow placeholder:text-cream-50/40 focus:ring-2 focus:ring-terracotta"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Quiero entrar
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="mt-3.5 text-[12px] text-cream-50/40">
          Sin spam. Solo te avisamos del lanzamiento.
        </p>
      </Reveal>

      {/* ── Onda líquida (callback al hero) ─────────────────────── */}
      <div
        aria-hidden
        className="liquid-wave pointer-events-none absolute inset-x-0 -bottom-24 z-0 h-72 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 80% at 30% 60%, rgba(200,85,61,0.4) 0%, transparent 70%), radial-gradient(45% 70% at 72% 55%, rgba(212,118,95,0.3) 0%, transparent 72%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 w-full opacity-50"
      >
        <defs>
          <linearGradient id="cierre-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8553D" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4765F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8553D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="wave-drift"
          d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,110"
          fill="none"
          stroke="url(#cierre-wave)"
          strokeWidth="1.5"
        />
        <path
          className="wave-drift-slow"
          d="M0,150 C300,100 560,200 760,150 C1020,90 1240,200 1440,150"
          fill="none"
          stroke="url(#cierre-wave)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </section>
  );
}
