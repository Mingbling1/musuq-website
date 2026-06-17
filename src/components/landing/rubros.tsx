"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  UtensilsCrossed,
  Store,
  WashingMachine,
  ShoppingBasket,
  Pill,
  ChevronDown,
  Search,
  Check,
  Sparkles,
  Receipt,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";

const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// ── Rubros (extensible) ───────────────────────────────────────────
type Rubro = { label: string; short: string; icon: LucideIcon; status: "live" | "soon" };
const RUBROS: Rubro[] = [
  { label: "Restaurantes y cafeterías", short: "restaurante", icon: UtensilsCrossed, status: "live" },
  { label: "Bodegas", short: "bodega", icon: Store, status: "soon" },
  { label: "Lavanderías", short: "lavandería", icon: WashingMachine, status: "soon" },
  { label: "Minimarkets", short: "minimarket", icon: ShoppingBasket, status: "soon" },
  { label: "Farmacias", short: "farmacia", icon: Pill, status: "soon" },
];

type Feature = { title: string; desc: string };
const FEATURES: Feature[] = [
  { title: "Sube tu carta con una foto", desc: "Tómale una foto a tu menú y la IA lo arma solo: platos y precios listos, sin tipear." },
  { title: "Pedidos por QR", desc: "Tus clientes escanean el QR de la mesa y piden desde su celular." },
  { title: "Comanda a cocina, en vivo", desc: "El pedido salta a la pantalla de cocina al instante. Cero papelitos perdidos." },
  { title: "Cobra como quieras", desc: "Yape, Plin, tarjeta y efectivo, todo en una sola caja." },
];

/* ── Escenas del panel vivo (crema sobre terracota drenched) ──────── */
function IaScene() {
  const menuLines = ["62%", "84%", "48%", "76%", "40%"];
  const dishes = [
    { n: "Lomo saltado", p: "28" },
    { n: "Ají de gallina", p: "24" },
    { n: "Ceviche mixto", p: "32" },
    { n: "Causa limeña", p: "18" },
  ];
  const base = 700; // ms: empieza tras el primer barrido del escáner
  return (
    <div className="pt-2">
      <div className="grid grid-cols-[112px_1fr] gap-4">
        {/* foto de la carta (papel) con escáner */}
        <div className="pop-in relative h-[150px] w-[112px] shrink-0 overflow-hidden bg-cream-50 shadow-[0_10px_24px_-10px_rgba(26,26,26,0.6)] ring-1 ring-cream-50/30">
          <div className="space-y-2 p-2.5">
            <div className="h-2.5 w-1/2 bg-warm-800/30" />
            {menuLines.map((w, i) => (
              <div key={i} className="flex items-center justify-between gap-1.5">
                <div className="h-1.5 bg-warm-800/15" style={{ width: w }} />
                <div className="h-1.5 w-4 bg-warm-800/15" />
              </div>
            ))}
          </div>
          {/* línea de escaneo */}
          <div className="animate-scan-menu absolute inset-x-1 top-0 h-[3px] bg-cream-50 shadow-[0_0_14px_3px_rgba(255,255,255,0.85)]" />
          <span className="absolute bottom-1.5 left-1.5 bg-warm-800/85 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-cream-50">
            tu carta
          </span>
        </div>

        {/* platos detectados por la IA */}
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream-50/85">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Leyendo con IA…
          </p>
          <div className="mt-2.5 space-y-1.5">
            {dishes.map((d, i) => (
              <div
                key={d.n}
                className="pop-in flex items-center justify-between gap-2 bg-cream-50/12 px-2.5 py-1.5"
                style={{ animationDelay: `${base + i * 320}ms` }}
              >
                <span className="flex items-center gap-1.5 truncate text-[12px] text-cream-50">
                  <Check className="h-3 w-3 shrink-0 text-terracotta-light" strokeWidth={3} />
                  {d.n}
                </span>
                <span className="shrink-0 text-[12px] tabular-nums text-cream-50/80">S/ {d.p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* remate: ¡funciona! */}
      <div
        className="pop-in mt-3 flex items-center justify-between bg-cream-50 px-3.5 py-2.5"
        style={{ animationDelay: `${base + dishes.length * 320 + 250}ms` }}
      >
        <span className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-terracotta">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
          Carta lista
        </span>
        <span className="text-[11px] font-medium text-warm-600">12 platos · sin tipear nada</span>
      </div>
    </div>
  );
}

function QrScene() {
  return (
    <div className="flex items-center justify-center pt-2">
      <div className="relative aspect-[9/18] w-[150px] overflow-hidden bg-cream-50 p-3 ring-1 ring-warm-800/10">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-warm-800/20" />
        <p className="text-[11px] font-semibold text-warm-800">Carta · Mesa 4</p>
        <div className="mt-2 space-y-1.5">
          {["Lomo saltado", "Ají de gallina", "Ceviche", "Chicha morada"].map((d) => (
            <div key={d} className="flex items-center justify-between bg-warm-800/[0.05] px-2 py-1.5">
              <span className="text-[10px] text-warm-700">{d}</span>
              <span className="text-[10px] text-terracotta">＋</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center py-2">
          <div className="grid grid-cols-4 gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 ${i % 3 === 0 ? "bg-warm-800" : "bg-warm-800/30"}`} />
            ))}
          </div>
        </div>
        <div className="animate-scan absolute inset-x-2.5 top-3 h-[3px] bg-gradient-to-r from-transparent via-terracotta to-transparent shadow-[0_0_16px_3px_rgba(200,85,61,0.6)]" />
      </div>
    </div>
  );
}

function ComandaScene() {
  const steps = ["Nuevo", "En cocina", "Listo", "Entregado"];
  return (
    <div className="pt-1">
      {/* pedido */}
      <div className="bg-cream-50 px-3.5 py-3 shadow-[0_8px_20px_-12px_rgba(26,26,26,0.5)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-warm-800">Mesa 4</span>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-terracotta">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terracotta" />
            </span>
            En curso
          </span>
        </div>
        <div className="mt-1.5 space-y-0.5">
          {["2× Lomo saltado", "1× Chicha morada"].map((it) => (
            <p key={it} className="flex items-center gap-1.5 text-[12px] text-warm-600">
              <span className="h-1 w-1 shrink-0 rounded-full bg-terracotta/50" />
              {it}
            </p>
          ))}
        </div>
      </div>

      {/* seguimiento animado: la etapa avanza por el riel en loop */}
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-cream-50/75">
        Seguimiento del pedido
      </p>
      <div className="relative mt-3.5 flex items-start justify-between">
        <div className="absolute inset-x-3 top-[7px] h-0.5 bg-cream-50/20" />
        <div className="flow-line absolute left-3 top-[7px] h-0.5 bg-cream-50" style={{ width: "calc(100% - 1.5rem)" }} />
        {steps.map((s, i) => (
          <div key={s} className="relative z-10 flex w-14 flex-col items-center gap-1.5">
            <span className={`flow-s${i + 1} flex h-4 w-4 items-center justify-center rounded-full bg-cream-50 text-terracotta`}>
              <Check className="h-2.5 w-2.5" strokeWidth={4} />
            </span>
            <span className="text-center text-[8px] font-bold uppercase leading-tight text-cream-50/85">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CobrosScene() {
  const metodos = [
    { n: "Yape", on: true }, { n: "Plin", on: false },
    { n: "Tarjeta", on: false }, { n: "Efectivo", on: false },
  ];
  return (
    <div className="pt-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream-50/75">Total a cobrar</p>
      <p style={ANTON} className="pop-in mt-0.5 text-[3.25rem] leading-none tabular-nums text-cream-50">S/ 42.00</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {metodos.map((m, i) => (
          <div
            key={m.n}
            className={`pop-in relative flex items-center justify-center px-3 py-3 text-sm font-semibold ${
              m.on ? "bg-cream-50 text-terracotta ring-2 ring-cream-50" : "bg-cream-50/12 text-cream-50/75"
            }`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {m.on && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50 opacity-75" />
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-cream-50">
                  <Check className="h-2.5 w-2.5 text-terracotta" strokeWidth={3.5} />
                </span>
              </span>
            )}
            {m.n}
          </div>
        ))}
      </div>
      {/* flujo de cobro animado: avanza paso a paso en loop */}
      <div className="mt-4 space-y-1.5">
        <div className="flow-s1 flex items-center gap-2.5 bg-cream-50 px-3.5 py-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream-50">
            <Wallet className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className="text-[13px] font-bold uppercase tracking-wide text-terracotta">Cobrando con Yape</span>
          <span className="ml-auto text-[11px] font-medium text-warm-500">S/ 42.00</span>
        </div>
        <div className="flow-s2 flex items-center gap-2.5 bg-cream-50 px-3.5 py-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream-50">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-[13px] font-bold uppercase tracking-wide text-terracotta">Pago confirmado</span>
          <span className="ml-auto text-[11px] font-medium text-warm-500">en 2 s</span>
        </div>
        <div className="flow-s3 flex items-center gap-2.5 bg-cream-50 px-3.5 py-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream-50">
            <Receipt className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className="text-[13px] font-bold uppercase tracking-wide text-terracotta">Boleta enviada</span>
          <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-warm-500">
            <Check className="h-3 w-3" strokeWidth={3} />
            SUNAT
          </span>
        </div>
      </div>
    </div>
  );
}

const SCENES = [IaScene, QrScene, ComandaScene, CobrosScene];

export function Rubros() {
  const [rubro, setRubro] = useState(0);
  const [feature, setFeature] = useState(0);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selectorRef = useRef<HTMLDivElement>(null);
  const Scene = SCENES[feature];
  const activeRubro = RUBROS[rubro];
  const ActiveIcon = activeRubro.icon;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const showSearch = RUBROS.length > 8;
  const filtered = RUBROS.map((r, i) => ({ r, i })).filter(({ r }) =>
    r.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section id="rubros" className="bg-cream-100 px-6 py-24 text-warm-800 md:py-32">
      <ChapterMarker num="02" label="Rubros" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 style={ANTON} className="text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.85] tracking-[0.01em]">
          Pensado para tu{" "}
          <span style={CAVEAT} className="lowercase tracking-normal text-terracotta">restaurante</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-warm-600">
          De la mesa a la cocina y a la caja, todo conectado. Pasa el mouse y míralo funcionar.
        </p>
      </Reveal>

      {/* ── Selector de rubro (dropdown brutalista) ─────────────── */}
      <div ref={selectorRef} className="relative z-30 mx-auto mt-8 flex w-fit flex-col items-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="inline-flex items-center gap-2.5 border-2 border-warm-800 bg-terracotta px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-cream-50 transition-colors hover:bg-[#b0472f]"
        >
          <ActiveIcon className="h-4 w-4" strokeWidth={1.8} />
          {activeRubro.label}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={2} />
        </button>
        <p className="mt-2.5 text-[12px] text-warm-500">Empezamos por restaurantes · más rubros en camino</p>

        {open && (
          <div role="listbox" className="pop-in absolute top-14 z-30 w-[min(90vw,360px)] border-2 border-warm-800 bg-cream-50">
            {showSearch && (
              <div className="flex items-center gap-2 border-b-2 border-warm-800 px-3 py-2.5">
                <Search className="h-4 w-4 text-warm-400" strokeWidth={1.8} />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Busca tu rubro…" className="w-full bg-transparent text-sm text-warm-800 outline-none placeholder:text-warm-400" />
              </div>
            )}
            <div className="max-h-[300px] overflow-y-auto">
              {filtered.map(({ r, i }, idx) => {
                const Icon = r.icon;
                const isLive = r.status === "live";
                const isActive = i === rubro;
                return (
                  <button
                    key={r.label}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    disabled={!isLive}
                    onClick={() => {
                      if (!isLive) return;
                      setRubro(i);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`flex w-full items-center gap-2.5 px-4 py-3 text-left text-sm ${idx > 0 ? "border-t-2 border-warm-800" : ""} ${
                      isLive ? "text-warm-800 hover:bg-terracotta/10" : "cursor-default text-warm-400"
                    } ${isActive ? "bg-terracotta/10 font-semibold" : ""}`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isLive ? "text-terracotta" : "text-warm-400"}`} strokeWidth={1.8} />
                    <span className="flex-1">{r.label}</span>
                    {isActive && <Check className="h-4 w-4 text-terracotta" strokeWidth={2.2} />}
                    {!isLive && (
                      <span className="bg-warm-800/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-warm-500">Pronto</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Cuadrícula: bondades (celdas) + panel vivo (carbón) ──── */}
      <div className="mx-auto mt-12 max-w-5xl border-2 border-warm-800 md:grid md:grid-cols-[0.9fr_1.1fr]">
        {/* lista de celdas */}
        <ul className="flex flex-col">
          {FEATURES.map((f, i) => {
            const on = i === feature;
            return (
              <li key={f.title} className={`${i > 0 ? "border-t-2 border-warm-800" : ""} ${on ? "bg-terracotta text-cream-50" : ""}`}>
                <button
                  type="button"
                  onMouseEnter={() => setFeature(i)}
                  onFocus={() => setFeature(i)}
                  onClick={() => setFeature(i)}
                  aria-current={on}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
                >
                  <span style={ANTON} className={`text-lg leading-none ${on ? "text-cream-50" : "text-terracotta"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold leading-tight tracking-tight md:text-xl">{f.title}</span>
                    <span className={`grid transition-all duration-300 ease-out ${on ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <span className="overflow-hidden">
                        <span className={`block text-[14px] leading-relaxed ${on ? "text-cream-50/80" : "text-warm-600"}`}>{f.desc}</span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* panel vivo terracota drenched (celda enmarcada) */}
        <div className="relative min-h-[360px] overflow-hidden border-t-2 border-warm-800 bg-terracotta p-6 md:min-h-[460px] md:border-l-2 md:border-t-0 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)" }}
          />
          <div className="relative flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50/75">{FEATURES[feature].title}</span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-cream-50/85">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cream-50" />
              </span>
              En vivo
            </span>
          </div>
          <div key={feature} className="scene-in relative mt-5">
            <Scene />
          </div>
        </div>
      </div>

      {/* ── Foto: el pedido en la vida real + la app en vivo ──────── */}
      <div className="mx-auto mt-6 max-w-5xl overflow-hidden border-2 border-warm-800">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/brand/hands-phone-2.webp"
            alt="Manos de cocinero emplatando, con el pedido listo en la app Musuq del mostrador"
            fill
            sizes="(min-width: 768px) 64rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ── Tira de plataforma (caja) ───────────────────────────── */}
      <div className="mx-auto mt-6 max-w-5xl border-2 border-warm-800 px-5 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-warm-500">
        Mobile-first · Úsalo en el navegador hoy · App para iOS y Android en camino
      </div>
    </section>
  );
}
