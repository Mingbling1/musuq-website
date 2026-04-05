"use client";

/**
 * Interactive landing page demo — shows a mini landing page being built
 * section by section. User scrolls/clicks through to see it come alive.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Code2,
  Smartphone,
  Monitor,
  ArrowLeft,
  Gauge,
  Search,
  Paintbrush,
} from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────── */

type View = "preview" | "code";
type Device = "desktop" | "mobile";

/* ── Main Component ────────────────────────────────────────────────── */

export function LandingDemo({ onClose }: { onClose?: () => void }) {
  const [view, setView] = useState<View>("preview");
  const [device, setDevice] = useState<Device>("desktop");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const scores = [
    { label: "Performance", value: 98, color: "#6B7C5E" },
    { label: "SEO", value: 100, color: "#6B7C5E" },
    { label: "Accesibilidad", value: 95, color: "#6B7C5E" },
    { label: "Buenas prácticas", value: 100, color: "#6B7C5E" },
  ];

  return (
    <div className="flex h-full flex-col bg-cream-50">
      {/* ── Browser chrome ──────────────────────────────────────── */}
      <div className="flex items-center gap-2 bg-warm-700 px-4 py-2.5 rounded-t-lg">
        <div className="flex gap-1.5">
          <button
            onClick={onClose}
            className="h-3 w-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition"
          />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-warm-600/50 px-3 py-1">
          <span className="text-[11px] text-warm-400 font-mono">
            https://tunegocio.musuq.tech
          </span>
        </div>
      </div>

      {/* ── Toolbar ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-warm-800/[0.06] px-3 py-2 bg-cream-100">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setView("preview")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition ${
              view === "preview"
                ? "bg-warm-800 text-cream-100"
                : "text-warm-500 hover:bg-cream-200"
            }`}
          >
            <Eye size={12} />
            Preview
          </button>
          <button
            onClick={() => setView("code")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition ${
              view === "code"
                ? "bg-warm-800 text-cream-100"
                : "text-warm-500 hover:bg-cream-200"
            }`}
          >
            <Code2 size={12} />
            Código
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setDevice("desktop")}
            className={`rounded-lg p-1.5 transition ${
              device === "desktop" ? "text-warm-800" : "text-warm-400 hover:text-warm-600"
            }`}
          >
            <Monitor size={14} />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`rounded-lg p-1.5 transition ${
              device === "mobile" ? "text-warm-800" : "text-warm-400 hover:text-warm-600"
            }`}
          >
            <Smartphone size={14} />
          </button>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto bg-cream-200/30 p-4 flex justify-center">
        <AnimatePresence mode="wait">
          {view === "preview" ? (
            <motion.div
              key={`preview-${device}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
                device === "mobile" ? "w-[280px]" : "w-full max-w-2xl"
              }`}
            >
              {/* Mini landing — Navbar */}
              <div
                onMouseEnter={() => setHoveredSection("nav")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`flex items-center justify-between px-4 py-3 border-b border-gray-100 transition ${
                  hoveredSection === "nav" ? "ring-2 ring-terracotta/30 ring-inset" : ""
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-terracotta/20" />
                  <span className="text-[10px] font-medium text-warm-700">marca</span>
                </div>
                <div className={`flex items-center gap-3 ${device === "mobile" ? "hidden" : ""}`}>
                  <span className="text-[9px] text-warm-400">Inicio</span>
                  <span className="text-[9px] text-warm-400">Servicios</span>
                  <span className="text-[9px] text-warm-400">Contacto</span>
                  <span className="rounded-full bg-warm-800 px-2 py-0.5 text-[8px] text-white">
                    CTA
                  </span>
                </div>
                {device === "mobile" && (
                  <div className="flex flex-col gap-[2px]">
                    <span className="block h-[1.5px] w-3 bg-warm-600" />
                    <span className="block h-[1.5px] w-3 bg-warm-600" />
                  </div>
                )}
              </div>

              {/* Mini landing — Hero */}
              <div
                onMouseEnter={() => setHoveredSection("hero")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`px-4 py-6 transition ${
                  hoveredSection === "hero" ? "ring-2 ring-sage/30 ring-inset" : ""
                } ${device === "mobile" ? "py-5" : "py-8"}`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[8px] uppercase tracking-widest text-terracotta mb-2"
                >
                  Tu negocio digital
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`font-serif font-medium text-warm-800 leading-tight mb-2 ${
                    device === "mobile" ? "text-base" : "text-xl"
                  }`}
                >
                  Hacemos que tu marca<br />
                  <span className="italic text-terracotta">destaque online</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[10px] text-warm-400 leading-relaxed max-w-[200px] mb-3"
                >
                  Diseño que convierte visitantes en clientes reales.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2"
                >
                  <span className="rounded-full bg-warm-800 px-3 py-1 text-[8px] text-white font-medium">
                    Empezar
                  </span>
                  <span className="rounded-full border border-warm-300 px-3 py-1 text-[8px] text-warm-500 font-medium">
                    Ver más
                  </span>
                </motion.div>
              </div>

              {/* Mini landing — Features/Services */}
              <div
                onMouseEnter={() => setHoveredSection("features")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`px-4 py-5 bg-cream-50 transition ${
                  hoveredSection === "features" ? "ring-2 ring-copper/30 ring-inset" : ""
                }`}
              >
                <p className="text-[8px] uppercase tracking-widest text-warm-400 mb-3">
                  Servicios
                </p>
                <div className={`grid gap-2 ${device === "mobile" ? "grid-cols-1" : "grid-cols-3"}`}>
                  {[
                    { icon: Paintbrush, title: "Diseño", desc: "UI/UX premium" },
                    { icon: Code2, title: "Desarrollo", desc: "Código limpio" },
                    { icon: Gauge, title: "Performance", desc: "100/100 score" },
                  ].map((feat, i) => (
                    <motion.div
                      key={feat.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="rounded-lg border border-warm-800/[0.04] bg-white p-2.5"
                    >
                      <feat.icon size={12} className="text-terracotta mb-1.5" />
                      <p className="text-[9px] font-medium text-warm-700">{feat.title}</p>
                      <p className="text-[8px] text-warm-400">{feat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini landing — Testimonial */}
              <div
                onMouseEnter={() => setHoveredSection("testimonial")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`px-4 py-5 transition ${
                  hoveredSection === "testimonial" ? "ring-2 ring-terracotta/20 ring-inset" : ""
                }`}
              >
                <div className="rounded-xl bg-warm-800 p-4 text-center">
                  <p className="text-[10px] text-cream-200 italic leading-relaxed mb-2">
                    &ldquo;Duplicamos nuestras conversiones en 3 semanas&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-cream-200/20" />
                    <div>
                      <p className="text-[8px] text-cream-200 font-medium">Ana R.</p>
                      <p className="text-[7px] text-cream-400">CEO, Empresa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini landing — CTA */}
              <div
                onMouseEnter={() => setHoveredSection("cta")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`px-4 py-5 bg-cream-50 text-center transition ${
                  hoveredSection === "cta" ? "ring-2 ring-sage/30 ring-inset" : ""
                }`}
              >
                <p className={`font-serif font-medium text-warm-800 mb-2 ${device === "mobile" ? "text-sm" : "text-base"}`}>
                  ¿Listo para empezar?
                </p>
                <p className="text-[9px] text-warm-400 mb-3">
                  Contáctanos y hagamos realidad tu proyecto
                </p>
                <span className="inline-block rounded-full bg-terracotta px-4 py-1.5 text-[9px] font-medium text-white">
                  Agendar llamada
                </span>
              </div>
            </motion.div>
          ) : (
            /* Code view */
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl rounded-xl bg-warm-800 p-4 overflow-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] text-warm-400 bg-warm-700 px-2 py-0.5 rounded">
                  page.tsx
                </span>
                <span className="text-[10px] text-warm-400/40 bg-warm-700/50 px-2 py-0.5 rounded">
                  globals.css
                </span>
                <span className="text-[10px] text-warm-400/40 bg-warm-700/50 px-2 py-0.5 rounded">
                  layout.tsx
                </span>
              </div>
              <pre className="text-[10px] font-mono leading-relaxed">
                <code>
                  <span className="text-[#7C9C6B]">{"// Next.js 16 + Tailwind v4\n"}</span>
                  <span className="text-[#C8553D]">{"import "}</span>
                  <span className="text-cream-200">{"{ Hero, Services, CTA }"}</span>
                  <span className="text-[#C8553D]">{" from "}</span>
                  <span className="text-[#D4A54A]">{"'@/components'\n\n"}</span>
                  <span className="text-[#C8553D]">{"export default function "}</span>
                  <span className="text-[#7DAEDB]">{"Page"}</span>
                  <span className="text-cream-200">{"() {\n"}</span>
                  <span className="text-cream-200">{"  "}</span>
                  <span className="text-[#C8553D]">{"return "}</span>
                  <span className="text-cream-200">{"(\n"}</span>
                  <span className="text-cream-200">{"    <"}</span>
                  <span className="text-[#7DAEDB]">{"main"}</span>
                  <span className="text-cream-200">{">\n"}</span>
                  <span className="text-cream-200">{"      <"}</span>
                  <span className="text-[#6B7C5E]">{"Hero\n"}</span>
                  <span className="text-cream-200">{"        "}</span>
                  <span className="text-[#D4A54A]">{"title"}</span>
                  <span className="text-cream-200">{"="}</span>
                  <span className="text-[#D4A54A]">{"\"Tu marca destaca\"\n"}</span>
                  <span className="text-cream-200">{"        "}</span>
                  <span className="text-[#D4A54A]">{"cta"}</span>
                  <span className="text-cream-200">{"="}</span>
                  <span className="text-[#D4A54A]">{"\"Empezar\"\n"}</span>
                  <span className="text-cream-200">{"      />\n"}</span>
                  <span className="text-cream-200">{"      <"}</span>
                  <span className="text-[#6B7C5E]">{"Services "}</span>
                  <span className="text-cream-200">{"/>\n"}</span>
                  <span className="text-cream-200">{"      <"}</span>
                  <span className="text-[#6B7C5E]">{"Testimonials "}</span>
                  <span className="text-cream-200">{"/>\n"}</span>
                  <span className="text-cream-200">{"      <"}</span>
                  <span className="text-[#6B7C5E]">{"CTA "}</span>
                  <span className="text-cream-200">{"/>\n"}</span>
                  <span className="text-cream-200">{"    </"}</span>
                  <span className="text-[#7DAEDB]">{"main"}</span>
                  <span className="text-cream-200">{">\n"}</span>
                  <span className="text-cream-200">{"  )\n"}</span>
                  <span className="text-cream-200">{"}"}</span>
                </code>
              </pre>

              {/* Lighthouse scores */}
              <div className="mt-6 pt-4 border-t border-warm-600/20">
                <p className="text-[10px] text-warm-400 mb-3 flex items-center gap-1.5">
                  <Gauge size={11} /> Lighthouse Score
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {scores.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="relative mx-auto h-10 w-10 mb-1">
                        <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90">
                          <circle
                            cx="18" cy="18" r="15"
                            fill="none" stroke="#4A4540" strokeWidth="3"
                          />
                          <motion.circle
                            cx="18" cy="18" r="15"
                            fill="none"
                            stroke={s.color}
                            strokeWidth="3"
                            strokeDasharray={`${s.value * 0.94} 100`}
                            initial={{ strokeDasharray: "0 100" }}
                            animate={{ strokeDasharray: `${s.value * 0.94} 100` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-cream-200">
                          {s.value}
                        </span>
                      </div>
                      <p className="text-[8px] text-warm-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Section indicator ───────────────────────────────────── */}
      {view === "preview" && hoveredSection && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-warm-800/[0.06] bg-cream-100 px-4 py-2 flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-terracotta/40" />
          <span className="text-[10px] text-warm-500">
            Sección: <span className="font-medium text-warm-700">{
              hoveredSection === "nav" ? "Navegación" :
              hoveredSection === "hero" ? "Hero" :
              hoveredSection === "features" ? "Servicios" :
              hoveredSection === "testimonial" ? "Testimonios" :
              "Call to Action"
            }</span>
          </span>
          <span className="text-[9px] text-warm-400 ml-auto">
            Hover para inspeccionar
          </span>
        </motion.div>
      )}
    </div>
  );
}
