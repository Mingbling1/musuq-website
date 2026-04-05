"use client";

/**
 * Interactive tech consultation demo — simulated chat with a tech advisor.
 * Shows pre-built Q&A about stack choices, architecture, etc.
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowLeft, Sparkles, User } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────── */

interface Message {
  id: number;
  from: "user" | "advisor";
  text: string;
  code?: string;
}

/* ── Conversation script ───────────────────────────────────────────── */

const advisorScript: { trigger: string; response: string; code?: string }[] = [
  {
    trigger: "stack",
    response:
      "Para un e-commerce en Perú, te recomiendo este stack:\n\n• Frontend: Next.js + Tailwind\n• Backend: Medusa.js (headless)\n• Pagos: Izipay + Stripe\n• CMS: Strapi\n• Deploy: Vercel + Railway\n\nEs escalable, tiene buen SEO, y Medusa maneja inventario + pasarelas locales sin problema.",
    code: "// medusa-config.ts\nmodule.exports = {\n  plugins: [\n    `medusa-payment-izipay`,\n    `medusa-fulfillment-manual`,\n  ],\n  projectConfig: {\n    store_cors: STORE_CORS,\n  },\n};",
  },
  {
    trigger: "mvp",
    response:
      "Para un MVP te sugiero ir por fases:\n\n1. Semana 1-2: Landing + auth + core feature\n2. Semana 3: Integración de pagos\n3. Semana 4: Testing + deploy\n\nStack liviano: Next.js + Supabase + Vercel. Puedes validar tu idea en 4 semanas sin sobrediseñar.",
  },
  {
    trigger: "api",
    response:
      "Para tu caso, una API REST con Node.js + Express es suficiente. Si necesitas real-time (como chat o notificaciones), agrega WebSockets con Socket.io.\n\nSi a futuro necesitas más flexibilidad, puedes migrar a GraphQL con Apollo Server.",
    code: "// Ejemplo de endpoint\napp.get('/api/products', async (req, res) => {\n  const products = await db.product\n    .findMany({\n      where: { active: true },\n      orderBy: { createdAt: 'desc' },\n    });\n  res.json(products);\n});",
  },
  {
    trigger: "base de datos",
    response:
      "Depende del tipo de datos:\n\n• PostgreSQL: Si necesitas relaciones complejas (e-commerce, CRM)\n• MongoDB: Si tu data es muy variable (CMS, logs)\n• Supabase: Si quieres Postgres + auth + storage todo en uno\n• PlanetScale: MySQL serverless, escala automáticamente\n\nPara tu caso, iría con Supabase — tienes Postgres + Row Level Security + API auto-generada.",
  },
  {
    trigger: "costo",
    response:
      "Un estimado realista para un proyecto web en Perú:\n\n• Landing page: S/ 1,500 - 4,000\n• E-commerce básico: S/ 5,000 - 12,000\n• App web custom: S/ 8,000 - 25,000+\n• MVP: S/ 4,000 - 10,000\n\nEstos rangos incluyen diseño, desarrollo y deploy. Mantenimiento mensual aparte.",
  },
  {
    trigger: "__default__",
    response:
      "Buena pregunta. Para darte una recomendación precisa necesitaría saber más sobre tu caso específico.\n\nTe sugiero agendar una consulta de 30 min (gratis) donde analizamos tu proyecto y te doy un plan de acción concreto.\n\n→ hello@musuq.tech",
  },
];

function matchAdvisor(text: string) {
  const lower = text.toLowerCase();
  const match = advisorScript.find(
    (s) => s.trigger !== "__default__" && lower.includes(s.trigger)
  );
  return match || advisorScript.find((s) => s.trigger === "__default__")!;
}

/* ── Main Component ────────────────────────────────────────────────── */

export function ConsultingDemo({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "advisor",
      text: "Hola! Soy tu asesor tech en musuq. Puedes preguntarme sobre:\n\n• Qué stack elegir\n• Cómo armar un MVP\n• Diseño de APIs\n• Base de datos\n• Costos de desarrollo\n\nPregúntame lo que quieras.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { id: nextId.current++, from: "user", text }]);
    setInput("");
    setTyping(true);
    scrollToBottom();

    const script = matchAdvisor(text);
    const delay = 800 + script.response.length * 8;

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          from: "advisor",
          text: script.response,
          code: script.code,
        },
      ]);
      scrollToBottom();
    }, Math.min(delay, 2500));
  }, [input, typing, scrollToBottom]);

  const quickQuestions = [
    "¿Qué stack me recomiendas?",
    "¿Cómo armo un MVP?",
    "¿Cuánto cuesta un proyecto?",
    "¿Qué base de datos uso?",
  ];

  return (
    <div className="flex h-full flex-col bg-cream-50">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 bg-warm-800 px-4 py-3 rounded-t-lg">
        <button onClick={onClose} className="text-cream-300 hover:text-cream-100 transition">
          <ArrowLeft size={18} />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/20">
          <Sparkles size={16} className="text-terracotta-light" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-cream-100">Consulta Tech</p>
          <p className="text-[10px] text-warm-400">
            {typing ? "escribiendo..." : "musuq advisor"}
          </p>
        </div>
      </div>

      {/* ── Messages ────────────────────────────────────────────── */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-2.5 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "advisor" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10 mt-1">
                  <Sparkles size={12} className="text-terracotta" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
                  msg.from === "user"
                    ? "bg-warm-800 text-cream-100 rounded-tr-sm"
                    : "bg-cream-200/70 text-warm-700 rounded-tl-sm"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                {msg.code && (
                  <div className="mt-2.5 rounded-lg bg-warm-800 p-3 overflow-x-auto">
                    <pre className="text-[10px] text-cream-200/80 font-mono leading-relaxed">
                      {msg.code}
                    </pre>
                  </div>
                )}
              </div>
              {msg.from === "user" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warm-800/10 mt-1">
                  <User size={12} className="text-warm-500" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10">
              <Sparkles size={12} className="text-terracotta" />
            </div>
            <div className="rounded-2xl bg-cream-200/70 px-4 py-3 rounded-tl-sm">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-1.5 w-1.5 rounded-full bg-warm-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Quick questions ─────────────────────────────────────── */}
      {messages.length <= 2 && !typing && (
        <div className="flex gap-2 overflow-x-auto px-4 py-2 border-t border-warm-800/[0.04]">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => {
                setInput(q);
                setTimeout(() => {
                  setMessages((prev) => [
                    ...prev,
                    { id: nextId.current++, from: "user", text: q },
                  ]);
                  setTyping(true);
                  const script = matchAdvisor(q);
                  setTimeout(() => {
                    setTyping(false);
                    setMessages((prev) => [
                      ...prev,
                      { id: nextId.current++, from: "advisor", text: script.response, code: script.code },
                    ]);
                  }, 1500);
                }, 100);
                setInput("");
              }}
              className="shrink-0 rounded-full border border-warm-800/[0.08] bg-cream-100 px-3 py-1.5 text-[10px] text-warm-600 font-medium transition hover:bg-cream-200"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* ── Input bar ───────────────────────────────────────────── */}
      <div className="flex items-center gap-2 border-t border-warm-800/[0.06] bg-cream-50 px-4 py-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe tu pregunta..."
          className="flex-1 rounded-xl bg-cream-200/50 px-4 py-2 text-xs text-warm-800 placeholder:text-warm-400 outline-none border-none"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || typing}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-terracotta text-cream-50 transition hover:bg-terracotta-light disabled:opacity-40"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
