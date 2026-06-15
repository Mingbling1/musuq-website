"use client";

import { useState } from "react";
import {
  UtensilsCrossed,
  Store,
  WashingMachine,
  ShoppingBasket,
  Pill,
  ChefHat,
  QrCode,
  BookOpen,
  ShoppingBag,
  LayoutGrid,
  Wallet,
  Camera,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

// ── Rubros (extensible) ───────────────────────────────────────────
// Hoy solo "Restaurantes y cafeterías" está vivo. Para sumar un rubro:
// agregar { label, icon, status: "live" } y su set de tiles de bondades.
type Rubro = { label: string; icon: LucideIcon; status: "live" | "soon" };

const RUBROS: Rubro[] = [
  { label: "Restaurantes y cafeterías", icon: UtensilsCrossed, status: "live" },
  { label: "Bodegas", icon: Store, status: "soon" },
  { label: "Lavanderías", icon: WashingMachine, status: "soon" },
  { label: "Minimarkets", icon: ShoppingBasket, status: "soon" },
  { label: "Farmacias", icon: Pill, status: "soon" },
];

type Feature = { icon: LucideIcon; title: string; desc: string; span: string };

const FEATURES: Feature[] = [
  {
    icon: ChefHat,
    title: "Comanda a cocina en tiempo real",
    desc: "El pedido llega a la pantalla de cocina al instante. Cero papelitos perdidos.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: QrCode,
    title: "Pedidos por QR",
    desc: "Tus clientes escanean el QR de la mesa y piden desde su celular.",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Carta digital",
    desc: "Cambia platos y precios al toque, sin reimprimir nada.",
    span: "",
  },
  {
    icon: ShoppingBag,
    title: "Para llevar, en vivo",
    desc: "Llevar, recojo o delivery — organizados aparte de las mesas.",
    span: "",
  },
  {
    icon: LayoutGrid,
    title: "Gestión de mesas",
    desc: "Libre, ocupada o por limpiar, de un vistazo.",
    span: "",
  },
  {
    icon: Wallet,
    title: "Cobra como quieras",
    desc: "Yape, Plin, tarjeta y efectivo — todo unificado en una sola caja.",
    span: "md:col-span-2",
  },
  {
    icon: Camera,
    title: "Sube tu carta con una foto",
    desc: "La IA extrae platos y precios. Sin tipear nada.",
    span: "",
  },
  {
    icon: BadgeCheck,
    title: "Sin RUC, también",
    desc: "¿Aún informal? Funciona igual, sin trabas.",
    span: "",
  },
];

function ComandaMockup() {
  const tickets = [
    { mesa: "Mesa 4", hora: "19:42", items: "2× Lomo saltado · 1× Chicha", nuevo: true },
    { mesa: "Para llevar #128", hora: "19:41", items: "1× Café · 1× Alfajor", nuevo: false },
    { mesa: "Mesa 2", hora: "19:39", items: "1× Ceviche · 2× Limonada", nuevo: false },
  ];
  return (
    <div className="mt-5 rounded-2xl bg-warm-800 p-4 shadow-[0_20px_50px_-20px_rgba(26,26,26,0.5)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50/55">
          Cocina · pantalla en vivo
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-terracotta-light">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta-light" />
          </span>
          En tiempo real
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {tickets.map((t) => (
          <div
            key={t.mesa}
            className="rounded-xl border-l-2 border-terracotta bg-cream-50/[0.05] px-3 py-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-cream-50">{t.mesa}</span>
              <span className="flex items-center gap-2">
                {t.nuevo && (
                  <span className="rounded-full bg-terracotta px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream-50">
                    Nuevo
                  </span>
                )}
                <span className="text-[11px] tabular-nums text-cream-50/45">{t.hora}</span>
              </span>
            </div>
            <p className="mt-0.5 text-[13px] text-cream-50/65">{t.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Rubros() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="rubros"
      className="relative overflow-hidden bg-cream-100 px-6 py-24 text-warm-800 md:py-32"
    >
      {/* ── Encabezado ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="block text-[12px] font-semibold uppercase tracking-[0.3em] text-terracotta">
          Hecho para tu rubro
        </span>
        <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
          Pensado para tu{" "}
          <em className="font-medium italic text-terracotta">restaurante</em>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-warm-600">
          Desde la mesa hasta la cocina y la caja — todo conectado, en una sola
          app. Empezamos por restaurantes y cafeterías; pronto, muchos más.
        </p>
      </div>

      {/* ── Selector de rubros (pills) ──────────────────────────── */}
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2.5">
        {RUBROS.map((r, i) => {
          const Icon = r.icon;
          const isLive = r.status === "live";
          const isActive = i === active && isLive;
          return (
            <button
              key={r.label}
              type="button"
              disabled={!isLive}
              onClick={() => isLive && setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-terracotta bg-terracotta text-cream-50"
                  : isLive
                    ? "border-warm-800/15 text-warm-700 hover:border-warm-800/30"
                    : "cursor-default border-warm-800/10 text-warm-400"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
              {r.label}
              {!isLive && (
                <span className="rounded-full bg-warm-800/[0.08] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-warm-500">
                  Pronto
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Bento de bondades ───────────────────────────────────── */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 md:mt-14 md:auto-rows-[minmax(0,1fr)] md:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          const isBig = i === 0;
          return (
            <div
              key={f.title}
              className={`flex flex-col rounded-3xl border border-warm-800/[0.08] bg-cream-50 p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(26,26,26,0.28)] ${f.span} ${
                isBig ? "col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-medium leading-tight tracking-tight md:text-xl">
                  {f.title}
                </h3>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-warm-600">
                {f.desc}
              </p>
              {isBig && <ComandaMockup />}
            </div>
          );
        })}
      </div>

      {/* ── Tira de plataforma ──────────────────────────────────── */}
      <p className="mx-auto mt-10 max-w-3xl text-center text-[13px] font-medium uppercase tracking-[0.16em] text-warm-500">
        Mobile-first · Úsalo en el navegador hoy · App para iOS y Android en camino
      </p>
    </section>
  );
}
