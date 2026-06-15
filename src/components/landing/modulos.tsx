"use client";

import { useState } from "react";
import { Reveal } from "@/components/landing/reveal";
import {
  Store,
  Wallet,
  Boxes,
  Receipt,
  BarChart3,
  Users,
  Building2,
  type LucideIcon,
} from "lucide-react";

type Modulo = { icon: LucideIcon; title: string; desc: string };

const MODULES: Modulo[] = [
  {
    icon: Store,
    title: "Punto de venta",
    desc: "Vende en segundos, con o sin internet. La caja más rápida para tu mostrador.",
  },
  {
    icon: Wallet,
    title: "Cobros",
    desc: "Yape, Plin, tarjeta y efectivo en un toque. Tus ventas, cobradas al instante.",
  },
  {
    icon: Boxes,
    title: "Inventario",
    desc: "Stock al día y alertas de quiebre antes de quedarte sin tu producto estrella.",
  },
  {
    icon: Receipt,
    title: "Facturación electrónica",
    desc: "Boletas y facturas SUNAT emitidas automáticamente, sin trámites ni dolores de cabeza.",
  },
  {
    icon: BarChart3,
    title: "Reportes",
    desc: "Ventas, márgenes y caja en tiempo real. Decisiones con datos, no corazonadas.",
  },
  {
    icon: Users,
    title: "Clientes",
    desc: "Historial de compras y fidelización para que vuelvan una y otra vez.",
  },
  {
    icon: Building2,
    title: "Multi-sucursal",
    desc: "Controla todos tus locales desde un solo lugar, estés donde estés.",
  },
];

const ACTIVE_BG =
  "linear-gradient(135deg, rgba(200,85,61,0.30) 0%, rgba(120,45,30,0.18) 38%, rgba(18,13,11,0.55) 100%)";
const IDLE_BG =
  "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)";

export function Modulos() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-[#120D0B] px-6 pb-40 pt-24 text-cream-50 md:pt-32"
    >
      {/* ── Encabezado ──────────────────────────────────────────── */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.02] tracking-[-0.02em]">
          <span className="text-cream-50/35 line-through decoration-[1.5px]">
            Una
          </span>{" "}
          varias cosas más
          <span className="text-terracotta">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-50/55">
          Todo lo que tu negocio necesita para vender, cobrar y crecer — en un
          solo lugar.
        </p>
      </Reveal>

      {/* ── Acordeón horizontal (desktop) ───────────────────────── */}
      <div className="relative z-10 mx-auto mt-16 hidden h-[440px] w-full max-w-6xl gap-2.5 md:flex">
        {MODULES.map((m, i) => {
          const isActive = i === active;
          const Icon = m.icon;
          return (
            <button
              key={m.title}
              type="button"
              aria-expanded={isActive}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, background: isActive ? ACTIVE_BG : IDLE_BG }}
              className={`group relative min-w-0 overflow-hidden rounded-3xl border text-left outline-none transition-[flex-grow,border-color] duration-500 ease-out ${
                isActive
                  ? "border-terracotta/40"
                  : "border-cream-50/10 hover:border-cream-50/25"
              }`}
            >
              {/* contenido expandido */}
              <div
                className={`flex h-full flex-col justify-between p-7 transition-opacity duration-300 ${
                  isActive ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
                }`}
              >
                <Icon className="h-7 w-7 text-terracotta-light" strokeWidth={1.6} />
                <div>
                  <h3 className="font-display text-[1.9rem] font-medium leading-none tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-cream-50/70">
                    {m.desc}
                  </p>
                </div>
              </div>

              {/* contenido colapsado: título vertical + ícono abajo */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-between py-7 transition-opacity duration-300 ${
                  isActive ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <span
                  className="mt-1 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-cream-50/70"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {m.title}
                </span>
                <Icon className="h-5 w-5 text-cream-50/40" strokeWidth={1.6} />
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Acordeón vertical (mobile) ──────────────────────────── */}
      <div className="relative z-10 mx-auto mt-12 flex w-full max-w-md flex-col gap-2.5 md:hidden">
        {MODULES.map((m, i) => {
          const isActive = i === active;
          const Icon = m.icon;
          return (
            <button
              key={m.title}
              type="button"
              aria-expanded={isActive}
              onClick={() => setActive(isActive ? -1 : i)}
              style={{ background: isActive ? ACTIVE_BG : IDLE_BG }}
              className={`overflow-hidden rounded-2xl border p-5 text-left transition-colors duration-300 ${
                isActive ? "border-terracotta/40" : "border-cream-50/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={isActive ? "h-5 w-5 text-terracotta-light" : "h-5 w-5 text-cream-50/50"}
                  strokeWidth={1.6}
                />
                <span className="font-display text-lg font-medium tracking-tight">
                  {m.title}
                </span>
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isActive ? "mt-2.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pl-8 text-sm leading-relaxed text-cream-50/70">
                    {m.desc}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Onda líquida terracota (CSS, lista para video luego) ── */}
      <div
        aria-hidden
        className="liquid-wave pointer-events-none absolute inset-x-0 -bottom-28 z-0 h-80 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 80% at 28% 65%, rgba(200,85,61,0.40) 0%, transparent 70%), radial-gradient(45% 70% at 72% 55%, rgba(212,118,95,0.30) 0%, transparent 72%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 w-full opacity-50"
      >
        <defs>
          <linearGradient id="musuq-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8553D" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4765F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8553D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="wave-drift"
          d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,110"
          fill="none"
          stroke="url(#musuq-wave)"
          strokeWidth="1.5"
        />
        <path
          className="wave-drift-slow"
          d="M0,150 C300,100 560,200 760,150 C1020,90 1240,200 1440,150"
          fill="none"
          stroke="url(#musuq-wave)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </section>
  );
}
