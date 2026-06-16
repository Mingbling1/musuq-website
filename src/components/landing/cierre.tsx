"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Cierre brutalista: marco terracota drenched sobre crema (bookend con el
 * Hero), formato editorial y formulario de waitlist con celdas y bordes.
 */
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
      className="bg-cream-100 px-2.5 pb-2.5 pt-6 md:px-3 md:pb-3 md:pt-8"
    >
      <div className="relative overflow-hidden border-2 border-warm-800 bg-terracotta px-6 py-24 text-cream-50 md:px-10 md:py-32">
        {/* glow suave (mismo lenguaje que el hero) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[6%] -top-[10%] h-[120%] w-[55%] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 60%)" }}
        />

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <span className="block text-[12px] font-semibold uppercase tracking-[0.32em] text-cream-50/80">
            Próximamente
          </span>
          <h2 style={ANTON} className="mt-6 text-[clamp(2.75rem,8vw,6rem)] uppercase leading-[0.85] tracking-[0.01em]">
            Sé de los{" "}
            <span style={CAVEAT} className="lowercase tracking-normal text-cream-50/95">primeros</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-cream-50/85">
            Algo nuevo está por llegar. Déjanos tu correo y te avisamos apenas
            abramos las puertas.
          </p>

          {submitted ? (
            <div className="pop-in mx-auto mt-9 inline-flex items-center gap-2.5 border-2 border-cream-50 bg-cream-50/10 px-6 py-4 font-medium text-cream-50">
              <span className="inline-flex h-6 w-6 items-center justify-center bg-cream-50 text-terracotta">
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
                className="flex-1 border-2 border-cream-50 bg-transparent px-5 py-3.5 text-cream-50 outline-none transition-colors placeholder:text-cream-50/55 focus:bg-cream-50/10"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-cream-50 px-7 py-3.5 text-[15px] font-semibold text-terracotta transition-colors hover:bg-cream-200"
              >
                Quiero entrar
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="mt-3.5 text-[12px] text-cream-50/55">
            Sin spam. Solo te avisamos del lanzamiento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
