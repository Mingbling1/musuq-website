"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1] as const;
const APP_URL = "https://app.musuq.tech";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden bg-cream-100">
      {/* glow ambiental terracota */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,85,61,0.18), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-28 md:pt-36 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        {/* Columna texto */}
        <div className="relative z-10 max-w-xl">
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-terracotta)]/25 px-4 py-1.5 text-[13px] font-medium tracking-wide text-terracotta"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Hecho en Perú · para todo comercio
          </motion.span>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 font-serif text-[clamp(2.75rem,7vw,5.25rem)] font-extrabold leading-[0.92] tracking-tight text-warm-800"
          >
            Tecnología que <span className="text-terracotta">impulsa</span> cada
            venta
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 text-lg leading-relaxed text-warm-600"
          >
            La plataforma de gestión y punto de venta para el comercio peruano.
            Vende, cobra y controla tu negocio desde un solo lugar.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={APP_URL}
              className="group inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-cream-50 shadow-[0_12px_30px_-10px_rgba(200,85,61,0.6)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Crear cuenta gratis
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#plataforma"
              className="inline-flex items-center justify-center rounded-full border border-warm-800/15 px-7 py-3.5 text-[15px] font-semibold text-warm-800 transition-colors duration-200 hover:bg-warm-800/5"
            >
              Ver demo
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.32)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-warm-500"
          >
            {["para mypes", "fácil de usar", "siempre contigo"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-terracotta/70" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Columna producto: video loop de la app */}
        <motion.div
          {...rise(0.2)}
          className="relative z-10 mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-[var(--radius-3xl)] border border-warm-800/8 bg-cream-200 shadow-[0_30px_80px_-24px_rgba(26,26,26,0.28)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/brand/hero-poster.png"
            >
              <source src="/brand/hero-loop.mp4" type="video/mp4" />
            </video>
          </div>

          {/* zorro saludando */}
          <div className="pointer-events-none absolute -bottom-6 -left-6 w-24 drop-shadow-xl sm:w-28 lg:-left-10 lg:w-32">
            <Image
              src="/brand/zorro-saludo.png"
              alt="Mascota Musuq saludando"
              width={320}
              height={427}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
