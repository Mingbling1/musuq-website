"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import type { PointerEvent } from "react";

/* ── Cinematic 3D hero visualization ────────────────────────────────── */

const SCENE_LAYERS = [
  { label: "idea", className: "left-7 top-24 w-40 rotate-[-9deg]", delay: "0s" },
  { label: "diseño", className: "right-8 top-16 w-36 rotate-[7deg]", delay: "0.9s" },
  { label: "código", className: "left-14 bottom-20 w-44 rotate-[4deg]", delay: "1.8s" },
];

/**
 * Faux cinematic 3D scene: no heavy video asset, but it behaves like one.
 * Motion values keep pointer tilt and spotlight updates outside React renders.
 */
function CinematicHeroScene() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.35 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], reduceMotion ? [0, 0] : [7, -7]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], ["18%", "82%"]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], ["22%", "78%"]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${lightX} ${lightY}, rgba(200, 85, 61, 0.2), transparent 32%), radial-gradient(circle at 80% 18%, rgba(107, 124, 94, 0.18), transparent 28%), linear-gradient(145deg, rgba(253, 252, 250, 0.92), rgba(245, 240, 235, 0.72))`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="hero-cinema-perspective relative h-[460px] w-[420px] select-none">
      <motion.div
        aria-label="Escena 3D interactiva de musuq"
        className="hero-cinema group relative h-full w-full rounded-[2.75rem] bg-warm-800/5 p-2 shadow-[0_34px_90px_-54px_rgba(74,69,64,0.7)] ring-1 ring-warm-800/5"
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        role="img"
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
      >
        <motion.div
          className="hero-cinema-core relative h-full overflow-hidden rounded-[2.25rem] border border-cream-50/70 bg-cream-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),inset_0_-28px_70px_rgba(200,85,61,0.08)]"
          style={{ background: spotlight }}
        >
          <div className="absolute inset-x-7 top-7 z-10 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.24em] text-warm-500">
            <span>musuq studio</span>
            <span className="flex items-center gap-2 text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-sage hero-cinema-pulse" />
              en vivo
            </span>
          </div>

          <div className="absolute inset-x-8 top-20 h-52 rounded-[2rem] bg-warm-800/[0.035] ring-1 ring-warm-800/5 hero-cinema-floor" />

          <div className="absolute left-1/2 top-[43%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/15 bg-[radial-gradient(circle,rgba(200,85,61,0.12),transparent_68%)] hero-cinema-orbit" />

          {SCENE_LAYERS.map((layer) => (
            <div
              className={`hero-cinema-layer absolute rounded-[1.4rem] bg-cream-50/80 p-3 shadow-[0_18px_45px_-30px_rgba(74,69,64,0.7)] ring-1 ring-warm-800/[0.07] backdrop-blur-sm ${layer.className}`}
              key={layer.label}
              style={{ animationDelay: layer.delay }}
            >
              <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-warm-400">
                <span>{layer.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta/70" />
              </div>
              <div className="space-y-2">
                <span className="block h-2 rounded-full bg-warm-800/10" />
                <span className="block h-2 w-4/5 rounded-full bg-sage/15" />
                <span className="block h-2 w-3/5 rounded-full bg-terracotta/15" />
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-8 right-8 rounded-[1.75rem] bg-warm-800/[0.055] p-4 ring-1 ring-warm-800/[0.06]">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-warm-400">del problema al producto</p>
                <p className="mt-2 max-w-[18rem] font-serif text-2xl leading-none text-warm-800">Landing, tienda y automatización en una sola escena.</p>
              </div>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-terracotta text-sm font-semibold text-cream-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                3D
              </div>
            </div>
          </div>

          <div className="hero-cinema-sheen absolute inset-0 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Hero section ──────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-end pb-20 pt-32 sm:items-center sm:pb-0 sm:pt-0 overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-cream-300/50 via-transparent to-transparent drift-y-slow" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-cream-300/30 via-transparent to-transparent drift-y-reverse" />

        {/* Floating musuq-themed shapes — desktop only */}
        {/* Small leaf silhouette */}
        <svg className="hidden lg:block absolute top-[18%] left-[12%] w-6 h-6 float-orbit pointer-events-none" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C9 6 4 10 4 14c0 4 3.5 7 8 7s8-3 8-7c0-4-5-8-8-12z" fill="#6B7C5E" fillOpacity="0.06" />
        </svg>
        {/* Code bracket </> */}
        <svg className="hidden lg:block absolute bottom-[22%] left-[8%] w-8 h-8 soft-bounce pointer-events-none" viewBox="0 0 32 32" fill="none">
          <path d="M10 8L4 16l6 8" stroke="#C8553D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.08" />
          <path d="M22 8l6 8-6 8" stroke="#C8553D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.08" />
          <path d="M18 6l-4 20" stroke="#B87333" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.06" />
        </svg>
        {/* Three connected dots — circuit/network */}
        <svg className="hidden lg:block absolute top-[30%] left-[42%] w-10 h-10 micro-tremble pointer-events-none" viewBox="0 0 40 40" fill="none">
          <circle cx="8" cy="20" r="2.5" fill="#6B7C5E" fillOpacity="0.07" />
          <circle cx="20" cy="10" r="2.5" fill="#C8553D" fillOpacity="0.06" />
          <circle cx="32" cy="24" r="2.5" fill="#B87333" fillOpacity="0.06" />
          <path d="M8 20L20 10M20 10L32 24" stroke="#2D2926" strokeWidth="0.8" strokeOpacity="0.04" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-8"
          >
            Estudio digital
          </motion.p>

          {/* Main headline - editorial serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-warm-800 text-balance"
          >
            Construimos lo que{" "}
            <span className="italic text-terracotta">tu negocio</span>{" "}
            necesita para crecer
          </motion.h1>

          {/* Subtitle - conversational */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-warm-500"
          >
            No somos una fábrica de templates. Cada proyecto que hacemos
            existe porque entendimos el problema primero. Landings, tiendas,
            automatizaciones y software &mdash; a tu medida.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <Link
              href="#contacto"
              className="rounded-full bg-warm-800 px-7 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-warm-700 active:scale-95"
            >
              Iniciar un proyecto
            </Link>
            <Link
              href="#servicios"
              className="link-underline text-sm font-medium text-warm-600 hover:text-warm-800 transition-colors"
            >
              Ver qué hacemos
            </Link>
          </motion.div>
        </div>

        {/* Cinematic 3D scene — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="hidden lg:flex absolute right-0 xl:right-4 top-1/2 -translate-y-1/2 items-center justify-center"
        >
          <CinematicHeroScene />
        </motion.div>
      </div>
    </section>
  );
}
