"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { ChapterMarker } from "@/components/landing/chapter-marker";

const APP_URL = "https://app.musuq.tech";

// ⚠ Placeholders — reemplazar por planes/precios reales de Musuq.
type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  featured: boolean;
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
    cta: "Hablar con ventas",
    href: "mailto:hello@musuq.tech",
    features: ["Todo lo de Pro", "Multi-sucursal", "Usuarios ilimitados", "Soporte prioritario"],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-cream-100 px-6 py-24 text-warm-800 md:py-32"
    >
      <ChapterMarker num="04" label="Planes" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
          Empieza gratis.{" "}
          <em className="not-italic font-semibold text-terracotta">Crece sin límites.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-warm-600">
          Sin tarjeta para empezar, sin letra chica. Cambias de plan cuando tu
          negocio lo pida.
        </p>
      </Reveal>

      {/* ── Toggle Mensual / Anual ──────────────────────────────── */}
      <Reveal delay={80} className="mt-9 flex flex-col items-center">
        <div className="relative flex rounded-full bg-warm-800/[0.06] p-1">
          <span
            aria-hidden
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-terracotta transition-transform duration-300 ease-out"
            style={{ transform: yearly ? "translateX(100%)" : "translateX(0)" }}
          />
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`relative z-10 w-28 py-2.5 text-sm font-semibold transition-colors ${yearly ? "text-warm-600" : "text-cream-50"}`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`relative z-10 w-28 py-2.5 text-sm font-semibold transition-colors ${yearly ? "text-cream-50" : "text-warm-600"}`}
          >
            Anual
          </button>
        </div>
        <span className="mt-2.5 text-[12px] font-medium text-terracotta">
          Plan anual: 2 meses gratis
        </span>
      </Reveal>

      {/* ── Planes (Pro destacado, sin grilla idéntica) ─────────── */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3 md:items-center">
        {PLANS.map((p, i) => {
          const price = yearly ? p.yearly : p.monthly;
          return (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`flex h-full flex-col rounded-[1.75rem] p-7 md:p-8 ${
                  p.featured
                    ? "bg-warm-800 text-cream-50 md:scale-[1.05] md:shadow-[0_30px_70px_-30px_rgba(26,26,26,0.5)]"
                    : "bg-cream-50 text-warm-800 ring-1 ring-warm-800/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-medium tracking-tight">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-terracotta px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cream-50">
                      Recomendado
                    </span>
                  )}
                </div>
                <p className={`mt-1.5 text-sm ${p.featured ? "text-cream-50/65" : "text-warm-500"}`}>
                  {p.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span key={`${price}-${yearly}`} className="pop-in font-display text-5xl font-medium tabular-nums">
                    S/ {price}
                  </span>
                  {price > 0 && (
                    <span className={`text-sm ${p.featured ? "text-cream-50/55" : "text-warm-500"}`}>/mes</span>
                  )}
                  {yearly && p.monthly > 0 && (
                    <span className={`text-lg font-medium tabular-nums line-through ${p.featured ? "text-cream-50/40" : "text-warm-400"}`}>
                      S/ {p.monthly}
                    </span>
                  )}
                </div>
                <span
                  className={`mt-1.5 block h-4 text-[12px] font-medium ${
                    yearly && p.monthly > 0
                      ? p.featured
                        ? "text-terracotta-light"
                        : "text-terracotta"
                      : p.featured
                        ? "text-cream-50/45"
                        : "text-warm-400"
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
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-95 ${
                    p.featured
                      ? "bg-cream-50 text-warm-800"
                      : "bg-terracotta text-cream-50"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-terracotta-light" : "text-terracotta"}`}
                        strokeWidth={2.4}
                      />
                      <span className={p.featured ? "text-cream-50/85" : "text-warm-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] text-warm-500">
        Precios referenciales · se confirman al lanzamiento.
      </p>
    </section>
  );
}
