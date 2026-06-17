"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";

const APP_URL = "https://app.musuq.tech";
const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

// ⚠ Placeholders — reemplazar por planes/precios reales de Musuq.
type Tone = "cream" | "terracotta" | "brown";
type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  featured: boolean;
  tone: Tone;
  cta: string;
  href: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Gratis",
    tagline: "Para empezar hoy.",
    monthly: 0,
    yearly: 0,
    featured: false,
    tone: "cream",
    cta: "Crear cuenta gratis",
    href: APP_URL,
    features: ["1 punto de venta", "Ventas ilimitadas", "Carta digital + QR", "1 usuario"],
  },
  {
    name: "Pro",
    tagline: "Para vender más, sin fricción.",
    monthly: 49,
    yearly: 39,
    featured: true,
    tone: "terracotta",
    cta: "Empezar con Pro",
    href: APP_URL,
    features: [
      "Todo lo de Gratis",
      "Comanda a cocina en vivo",
      "Pedidos por QR",
      "Reportes e inventario",
      "Hasta 5 usuarios",
    ],
  },
  {
    name: "Negocio",
    tagline: "Para varios locales.",
    monthly: 99,
    yearly: 79,
    featured: false,
    tone: "brown",
    cta: "Hablar con ventas",
    href: "mailto:hello@musuq.tech",
    features: ["Todo lo de Pro", "Multi-sucursal", "Usuarios ilimitados", "Soporte prioritario"],
  },
];

const TONE_BG: Record<Tone, string> = {
  cream: "bg-cream-100 text-warm-800",
  terracotta: "bg-terracotta text-cream-50",
  brown: "bg-[#6B4A33] text-cream-50",
};

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-cream-100 px-6 py-24 text-warm-800 md:py-32">
      <ChapterMarker num="04" label="Planes" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 style={ANTON} className="text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.85] tracking-[0.01em]">
          Empieza gratis,{" "}
          <span style={CAVEAT} className="lowercase tracking-normal text-terracotta">crece sin límites</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-warm-600">
          Sin tarjeta para empezar, sin letra chica. Cambias de plan cuando tu
          negocio lo pida.
        </p>
      </Reveal>

      {/* ── Toggle Mensual / Anual (celdas con borde) ───────────── */}
      <div className="mx-auto mt-9 flex w-fit border-2 border-warm-800">
        <button
          type="button"
          onClick={() => setYearly(false)}
          className={`px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
            yearly ? "text-warm-500 hover:text-warm-800" : "bg-warm-800 text-cream-50"
          }`}
        >
          Mensual
        </button>
        <button
          type="button"
          onClick={() => setYearly(true)}
          className={`border-l-2 border-warm-800 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
            yearly ? "bg-terracotta text-cream-50" : "text-warm-500 hover:text-warm-800"
          }`}
        >
          Anual
        </button>
      </div>
      <p className="mt-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-copper">
        Plan anual: 2 meses gratis
      </p>

      {/* ── Planes (3 celdas enmarcadas) ────────────────────────── */}
      <div className="mx-auto mt-10 max-w-5xl border-2 border-warm-800 md:grid md:grid-cols-3">
        {PLANS.map((p, i) => {
          const price = yearly ? p.yearly : p.monthly;
          const drenched = p.tone !== "cream";
          return (
            <div
              key={p.name}
              className={`flex flex-col p-7 md:p-8 ${
                i > 0 ? "border-t-2 border-warm-800 md:border-l-2 md:border-t-0" : ""
              } ${TONE_BG[p.tone]}`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 style={ANTON} className="text-2xl uppercase leading-none tracking-[0.01em]">
                  {p.name}
                </h3>
                {p.featured && (
                  <span className="bg-cream-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-terracotta">
                    Recomendado
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${drenched ? "text-cream-50/70" : "text-warm-500"}`}>
                {p.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span key={`${price}-${yearly}`} style={ANTON} className="pop-in text-5xl tabular-nums">
                  S/ {price}
                </span>
                {price > 0 && (
                  <span className={`text-sm ${drenched ? "text-cream-50/60" : "text-warm-500"}`}>/mes</span>
                )}
                {yearly && p.monthly > 0 && (
                  <span className={`text-lg font-medium tabular-nums line-through ${drenched ? "text-cream-50/45" : "text-warm-400"}`}>
                    S/ {p.monthly}
                  </span>
                )}
              </div>
              <span
                className={`mt-1.5 block h-4 text-[12px] font-medium ${
                  drenched ? "text-cream-50/70" : "text-copper"
                }`}
              >
                {yearly && p.monthly > 0
                  ? `Ahorras S/ ${(p.monthly - p.yearly) * 12} al año`
                  : price > 0
                    ? "Facturado mensual"
                    : "Gratis para siempre"}
              </span>

              <a
                href={p.href}
                className={`mt-7 inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold transition-[background-color,transform] active:scale-[0.98] ${
                  drenched
                    ? "bg-cream-50 text-warm-800 hover:bg-cream-200"
                    : "bg-terracotta text-cream-50 hover:bg-[#b0472f]"
                }`}
              >
                {p.cta}
              </a>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${drenched ? "text-cream-50" : "text-terracotta"}`}
                      strokeWidth={2.4}
                    />
                    <span className={drenched ? "text-cream-50/85" : "text-warm-700"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] text-warm-500">
        Precios referenciales · se confirman al lanzamiento.
      </p>
    </section>
  );
}
