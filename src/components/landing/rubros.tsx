"use client";

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
  const widths = ["88%", "72%", "94%", "60%"];
  return (
    <div className="flex gap-4 pt-2">
      <div className="pop-in h-36 w-28 shrink-0 bg-cream-50/12 ring-1 ring-cream-50/25" />
      <div className="flex-1 space-y-2.5 pt-1">
        <p className="text-[12px] uppercase tracking-[0.16em] text-cream-50/70">Carta detectada</p>
        {widths.map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="animate-fill h-3 bg-cream-50/30" style={{ "--fill": w, animationDelay: `${i * 160}ms` } as React.CSSProperties} />
          </div>
        ))}
        <p className="pt-1 text-[12px] text-cream-50/70">12 platos · precios listos</p>
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
  const tickets = [
    { mesa: "Mesa 4", hora: "19:42", items: "2× Lomo saltado · 1× Chicha", nuevo: true },
    { mesa: "Para llevar #128", hora: "19:41", items: "1× Café · 1× Alfajor", nuevo: false },
    { mesa: "Mesa 2", hora: "19:39", items: "1× Ceviche · 2× Limonada", nuevo: false },
  ];
  return (
    <div className="space-y-2.5">
      {tickets.map((t, i) => (
        <div key={t.mesa} className="ticket-in bg-cream-50 px-3.5 py-3" style={{ animationDelay: `${i * 110}ms` }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-warm-800">{t.mesa}</span>
            <span className="flex items-center gap-2">
              {t.nuevo && (
                <span className="flex items-center gap-1.5 bg-terracotta px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream-50">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-50" />
                  </span>
                  Nuevo
                </span>
              )}
              <span className="text-[11px] tabular-nums text-warm-400">{t.hora}</span>
            </span>
          </div>
          <p className="mt-1 text-[13px] text-warm-600">{t.items}</p>
        </div>
      ))}
    </div>
  );
}

function CobrosScene() {
  const metodos = [
    { n: "Yape", on: true }, { n: "Plin", on: false },
    { n: "Tarjeta", on: false }, { n: "Efectivo", on: false },
  ];
  return (
    <div className="pt-2">
      <p className="text-[12px] uppercase tracking-[0.18em] text-cream-50/70">Total a cobrar</p>
      <p style={ANTON} className="text-5xl tabular-nums text-cream-50">S/ 42.00</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {metodos.map((m, i) => (
          <div key={m.n} className={`pop-in px-3 py-3 text-sm font-semibold ${m.on ? "bg-cream-50 text-terracotta" : "bg-cream-50/15 text-cream-50/75"}`} style={{ animationDelay: `${i * 80}ms` }}>
            {m.n}
          </div>
        ))}
      </div>
      <p className="pop-in mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-cream-50" style={{ animationDelay: "360ms" }}>
        ✓ Cobrado con Yape
      </p>
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

      {/* ── Tira de plataforma (caja) ───────────────────────────── */}
      <div className="mx-auto mt-6 max-w-5xl border-2 border-warm-800 px-5 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-warm-500">
        Mobile-first · Úsalo en el navegador hoy · App para iOS y Android en camino
      </div>
    </section>
  );
}
