"use client";

import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";
import {
  Store,
  Wallet,
  Boxes,
  Receipt,
  BarChart3,
  Users,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

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

export function Modulos() {
  return (
    <section id="modulos" className="bg-cream-100 px-6 py-24 text-warm-800 md:py-32">
      <ChapterMarker num="03" label="Y más" />

      {/* ── Encabezado ──────────────────────────────────────────── */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 style={ANTON} className="text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.85] tracking-[0.01em]">
          <span className="text-warm-400 line-through decoration-[3px]">Una</span>{" "}
          varias cosas{" "}
          <span style={CAVEAT} className="lowercase tracking-normal text-terracotta">más</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-warm-600">
          Todo lo que tu negocio necesita para vender, cobrar y crecer — en un
          solo lugar.
        </p>
      </Reveal>

      {/* ── Cuadrícula de módulos (celdas con borde) ────────────── */}
      <div className="mx-auto mt-14 max-w-6xl border-2 border-warm-800">
        <div className="grid grid-cols-1 gap-[2px] bg-warm-800 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="group flex flex-col gap-4 bg-cream-100 p-6 transition-colors duration-200 hover:bg-[#6B4A33] md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span style={ANTON} className="text-2xl leading-none text-copper transition-colors group-hover:text-cream-50/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-warm-500 transition-colors group-hover:text-cream-50" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight tracking-tight transition-colors group-hover:text-cream-50">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-warm-600 transition-colors group-hover:text-cream-50/80">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* celda CTA — marrón drenched (siempre visible, también en móvil) */}
          <a
            href={APP_URL}
            className="group flex flex-col justify-between gap-6 bg-[#6B4A33] p-6 text-cream-50 transition-colors duration-200 hover:bg-[#5a3e2b] md:p-7"
          >
            <span style={ANTON} className="text-2xl leading-none text-cream-50/55">
              +
            </span>
            <span>
              <span className="block text-lg font-semibold leading-tight">
                Todo en una sola plataforma
              </span>
              <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium">
                Crea tu cuenta
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
