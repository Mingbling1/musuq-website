"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// Titular con palabras que suben al cargar (kinetic type).
const WORDS = ["Vende,", "cobra", "y"];

/**
 * Hero "motionsite": video full-bleed en loop dentro del marco terracota,
 * con ruido + scrim + titular cinético y parallax sutil con el mouse
 * (spring, GPU, respeta prefers-reduced-motion). Desktop-only por naturaleza
 * (se mueve con mousemove; el touch no lo dispara).
 */
export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 });

  // El video se mueve con el cursor; el texto en sentido contrario (profundidad).
  const vX = useTransform(sx, (v) => v * 16);
  const vY = useTransform(sy, (v) => v * 16);
  const videoT = useMotionTemplate`translate3d(${vX}px, ${vY}px, 0) scale(1.08)`;
  const tX = useTransform(sx, (v) => v * -22);
  const tY = useTransform(sy, (v) => v * -22);
  const textT = useMotionTemplate`translate3d(${tX}px, ${tY}px, 0)`;

  const reduced = useRef(false);
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="bg-cream-100 px-2.5 pb-2.5 pt-[60px] md:px-3 md:pb-3 md:pt-[68px]"
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative flex min-h-[calc(100svh-90px)] flex-col justify-end overflow-hidden border-2 border-warm-800 bg-terracotta"
      >
        {/* ── Video de fondo en loop perpetuo (Kling v3.0, A=B) + parallax ── */}
        <motion.div aria-hidden className="absolute inset-0" style={{ transform: videoT }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/brand/ceviche-band.webp"
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/brand/ceviche-hero-2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* ruido + tinte de marca + scrim para legibilidad */}
        <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-terracotta/35 mix-blend-multiply" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-800/85 via-warm-800/15 to-transparent" />

        {/* ── Contenido (abajo, estilo editorial) con parallax inverso ── */}
        <motion.div className="relative w-full p-6 pt-32 text-cream-50 md:p-10 md:pt-40" style={{ transform: textT }}>
          <span className="block text-[12px] font-semibold uppercase tracking-[0.24em] text-cream-50">
            Punto de venta para tu restaurante
          </span>

          <div className="mt-3 grid items-end gap-6 lg:grid-cols-[1fr_22rem]">
            <h1
              style={ANTON}
              className="text-[clamp(3.25rem,11vw,9rem)] uppercase leading-[0.85] tracking-[0.01em]"
            >
              {WORDS.map((w, i) => (
                <span
                  key={w}
                  className="word-rise mr-[0.25em]"
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  {w}
                </span>
              ))}
              <span
                style={{ ...CAVEAT, animationDelay: `${WORDS.length * 0.09}s` }}
                className="word-rise lowercase tracking-normal text-cream-50"
              >
                controla
              </span>
            </h1>

            <div className="lg:pb-3">
              <p className="max-w-sm text-base leading-relaxed text-cream-50">
                Conecta tu mesa, tu cocina y tu caja. Toma el pedido, avísale a la
                cocina y cobra con Yape, Plin o tarjeta, todo en un toque.
              </p>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={APP_URL}
                  className="group inline-flex w-fit items-center gap-2 bg-cream-50 px-7 py-4 text-[15px] font-semibold text-terracotta transition-colors hover:bg-cream-200 active:scale-[0.97]"
                >
                  Crear cuenta gratis
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#rubros"
                  className="text-[15px] font-semibold text-cream-50 underline decoration-cream-50/60 underline-offset-4 transition-colors hover:decoration-cream-50"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
