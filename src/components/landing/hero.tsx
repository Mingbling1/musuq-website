"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Battery recharge visualization ────────────────────────────────── */

const SOURCE_NODES = [
  { label: "Landings", x: 0, y: 20, delay: 0 },
  { label: "Cloud", x: 12, y: 80, delay: 1.2 },
  { label: "Automations", x: 5, y: 140, delay: 2.4 },
  { label: "E-commerce", x: 15, y: 200, delay: 3.6 },
  { label: "Software", x: 8, y: 260, delay: 4.8 },
];

/**
 * Pure-CSS animated battery + energy nodes.
 * No useEffect, no useState, no timers — just SVG + CSS keyframes.
 * The 8s cycle: nodes pulse sequentially → connection lines glow → battery fills.
 */
function BatteryStack() {
  return (
    <div className="relative w-[320px] h-[360px] select-none">
      <svg
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter for connection pulses */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for battery fill */}
          <linearGradient id="batteryFill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#6B7C5E" />
            <stop offset="100%" stopColor="#C8553D" />
          </linearGradient>

          {/* Clip for battery interior */}
          <clipPath id="batteryClip">
            <rect x="222" y="68" width="56" height="224" rx="6" />
          </clipPath>
        </defs>

        {/* ── Connection lines (source → battery) ──────────────── */}
        {SOURCE_NODES.map((node, i) => {
          const startX = node.x + 110;
          const startY = node.y + 30;
          const endX = 222;
          const endY = 180;
          const cpX = startX + 60;

          return (
            <g key={node.label}>
              {/* Base line (always visible, faint) */}
              <path
                d={`M${startX} ${startY} C${cpX} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`}
                stroke="#2D2926"
                strokeWidth="1"
                strokeOpacity="0.06"
                fill="none"
              />
              {/* Glowing pulse line */}
              <path
                d={`M${startX} ${startY} C${cpX} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`}
                stroke="#C8553D"
                strokeWidth="1.5"
                fill="none"
                filter="url(#glow)"
                className="hero-conn-pulse"
                style={{
                  animationDelay: `${node.delay}s`,
                }}
              />
              {/* Traveling energy dot */}
              <circle r="3" fill="#C8553D" className="hero-energy-dot" style={{ animationDelay: `${node.delay}s` }}>
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  begin={`${node.delay}s`}
                  keyTimes="0;0.12;0.15;1"
                  keyPoints="0;1;1;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1;0 0 1 1;0 0 1 1"
                >
                  <mpath href={`#connPath${i}`} />
                </animateMotion>
              </circle>
              {/* Invisible path for animateMotion */}
              <path
                id={`connPath${i}`}
                d={`M${startX} ${startY} C${cpX} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`}
                fill="none"
                stroke="none"
              />
            </g>
          );
        })}

        {/* ── Source node pills ─────────────────────────────────── */}
        {SOURCE_NODES.map((node) => (
          <g key={`pill-${node.label}`}>
            {/* Pill background */}
            <rect
              x={node.x}
              y={node.y + 14}
              width="110"
              height="32"
              rx="16"
              fill="#FDFCFA"
              stroke="#2D2926"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
            {/* Active ring glow */}
            <rect
              x={node.x}
              y={node.y + 14}
              width="110"
              height="32"
              rx="16"
              fill="none"
              stroke="#C8553D"
              strokeWidth="1.5"
              className="hero-node-ring"
              style={{ animationDelay: `${node.delay}s` }}
            />
            {/* Dot indicator */}
            <circle
              cx={node.x + 20}
              cy={node.y + 30}
              r="4"
              fill="#6B7C5E"
              fillOpacity="0.2"
              className="hero-node-dot"
              style={{ animationDelay: `${node.delay}s` }}
            />
            {/* Label */}
            <text
              x={node.x + 32}
              y={node.y + 34}
              fontSize="11"
              fontWeight="500"
              fill="#4A4540"
              fontFamily="var(--font-sans), system-ui, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* ── Battery body ─────────────────────────────────────── */}
        {/* Battery cap */}
        <rect x="238" y="52" width="24" height="16" rx="4" fill="#2D2926" fillOpacity="0.12" />
        {/* Main shell */}
        <rect
          x="218"
          y="64"
          width="64"
          height="232"
          rx="10"
          fill="#FDFCFA"
          stroke="#2D2926"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />

        {/* Battery fill — animated */}
        <g clipPath="url(#batteryClip)">
          <rect
            x="222"
            y="68"
            width="56"
            height="224"
            fill="url(#batteryFill)"
            className="hero-battery-fill"
          />
        </g>

        {/* Battery segments (visual lines) */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="226"
            y1={112 + i * 44}
            x2="274"
            y2={112 + i * 44}
            stroke="#FDFCFA"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
        ))}

        {/* Battery percentage label */}
        <text
          x="250"
          y="186"
          fontSize="16"
          fontWeight="600"
          fill="#FDFCFA"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          className="hero-battery-text"
        >
          %
        </text>

        {/* ── "tu negocio" label ──────────────────────────────── */}
        <text
          x="250"
          y="316"
          fontSize="10"
          fontWeight="500"
          fill="#8A8378"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          letterSpacing="0.08em"
          className="uppercase"
        >
          tu negocio
        </text>

        {/* Lightning bolt icon on battery */}
        <path
          d="M246 148 L252 148 L250 157 L256 157 L247 170 L249 161 L244 161 Z"
          fill="#FDFCFA"
          fillOpacity="0.5"
          className="hero-bolt"
        />
      </svg>
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

        {/* Battery recharge visualization — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="hidden lg:flex absolute right-0 xl:right-4 top-1/2 -translate-y-1/2 items-center justify-center"
        >
          <BatteryStack />
        </motion.div>
      </div>
    </section>
  );
}
