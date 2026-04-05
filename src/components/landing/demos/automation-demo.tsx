"use client";

/**
 * Interactive automation demo — simulates a WhatsApp bot flow.
 * User sends a message → bot responds step by step with typing indicators.
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, ArrowLeft } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────── */

interface Message {
  id: number;
  from: "user" | "bot";
  text: string;
  timestamp: string;
}

/* ── Bot conversation script ───────────────────────────────────────── */

const botScript: { trigger: string; responses: string[] }[] = [
  {
    trigger: "__init__",
    responses: [
      "Hola! 👋 Soy el asistente virtual de tu negocio. ¿En qué puedo ayudarte?",
      "Puedes preguntarme sobre:\n• 📦 Estado de pedido\n• 💰 Precios y catálogo\n• 🕐 Horarios de atención\n• 🤝 Hablar con un agente",
    ],
  },
  {
    trigger: "pedido",
    responses: [
      "Dame tu número de pedido y lo busco al instante 🔍",
      "Encontré tu pedido #MSQ-4821:\n📦 Estado: En camino\n🚚 Llega: Mañana 2-5pm\n📍 Desde: Lima → Cusco",
    ],
  },
  {
    trigger: "precio",
    responses: [
      "Aquí tienes nuestros productos más populares:\n\n☕ Café Orgánico — S/ 42.00\n🍯 Miel de Abeja — S/ 28.00\n🍫 Chocolate 72% — S/ 35.00\n🍵 Té de Muña — S/ 18.00",
      "¿Te interesa alguno? Puedo agregarlo a tu carrito directamente 🛒",
    ],
  },
  {
    trigger: "horario",
    responses: [
      "Nuestros horarios de atención:\n\n🕘 Lunes a Viernes: 9am - 6pm\n🕐 Sábados: 10am - 2pm\n🚫 Domingos: Cerrado\n\n📞 WhatsApp disponible 24/7 con este bot 🤖",
    ],
  },
  {
    trigger: "agente",
    responses: [
      "Conectándote con un agente humano... 🔄",
      "✅ Un agente se unirá en breve.\nTiempo estimado: < 2 minutos.\n\nMientras tanto, ¿hay algo más en lo que pueda ayudarte?",
    ],
  },
  {
    trigger: "__default__",
    responses: [
      "Entendido. Déjame verificar eso... 🔍",
      "No encontré información específica, pero puedo conectarte con un agente que te ayude mejor. ¿Quieres que lo haga? 🤝",
    ],
  },
];

function getTime() {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}

function matchScript(text: string) {
  const lower = text.toLowerCase();
  const match = botScript.find(
    (s) => s.trigger !== "__init__" && s.trigger !== "__default__" && lower.includes(s.trigger)
  );
  return match || botScript.find((s) => s.trigger === "__default__")!;
}

/* ── Main Component ────────────────────────────────────────────────── */

export function AutomationDemo({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
  }, []);

  const addBotMessages = useCallback(
    (responses: string[]) => {
      let delay = 0;
      responses.forEach((text, i) => {
        delay += 600 + text.length * 12; // simulate typing time
        setTimeout(() => {
          if (i === responses.length - 1) setTyping(false);
          setMessages((prev) => [
            ...prev,
            { id: nextId.current++, from: "bot", text, timestamp: getTime() },
          ]);
          scrollToBottom();
        }, delay);
      });
      setTyping(true);
      scrollToBottom();
    },
    [scrollToBottom]
  );

  // Start conversation
  useEffect(() => {
    if (!started) {
      setStarted(true);
      const initScript = botScript.find((s) => s.trigger === "__init__")!;
      addBotMessages(initScript.responses);
    }
  }, [started, addBotMessages]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || typing) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text, timestamp: getTime() },
    ]);
    setInput("");
    scrollToBottom();

    // Bot responds
    const script = matchScript(text);
    setTimeout(() => addBotMessages(script.responses), 400);
  }, [input, typing, addBotMessages, scrollToBottom]);

  const quickReplies = ["Estado de pedido", "Precios", "Horarios", "Hablar con agente"];

  return (
    <div className="flex h-full flex-col bg-[#ECE5DD]">
      {/* ── WhatsApp-style header ───────────────────────────────── */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 rounded-t-lg">
        <button onClick={onClose} className="text-white/70 hover:text-white transition">
          <ArrowLeft size={18} />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20">
          <Bot size={18} className="text-[#25D366]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">Asistente Virtual</p>
          <p className="text-[10px] text-white/60">
            {typing ? "escribiendo..." : "en línea"}
          </p>
        </div>
      </div>

      {/* ── Messages ────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-4 space-y-2"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-3 py-2 text-[13px] leading-relaxed shadow-sm ${
                  msg.from === "user"
                    ? "bg-[#DCF8C6] text-warm-800 rounded-tr-sm"
                    : "bg-white text-warm-700 rounded-tl-sm"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <p
                  className={`mt-1 text-[9px] text-right ${
                    msg.from === "user" ? "text-warm-400" : "text-warm-400/70"
                  }`}
                >
                  {msg.timestamp}
                  {msg.from === "user" && " ✓✓"}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="rounded-xl bg-white px-4 py-3 shadow-sm rounded-tl-sm">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-2 w-2 rounded-full bg-warm-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Quick replies ───────────────────────────────────────── */}
      {messages.length <= 3 && !typing && (
        <div className="flex gap-2 overflow-x-auto px-3 py-2 bg-[#ECE5DD]">
          {quickReplies.map((qr) => (
            <button
              key={qr}
              onClick={() => {
                setInput(qr);
                setTimeout(() => {
                  setMessages((prev) => [
                    ...prev,
                    { id: nextId.current++, from: "user", text: qr, timestamp: getTime() },
                  ]);
                  const script = matchScript(qr);
                  setTimeout(() => addBotMessages(script.responses), 400);
                }, 100);
              }}
              className="shrink-0 rounded-full border border-[#075E54]/20 bg-white px-3 py-1.5 text-[11px] text-[#075E54] font-medium transition hover:bg-[#075E54]/5"
            >
              {qr}
            </button>
          ))}
        </div>
      )}

      {/* ── Input bar ───────────────────────────────────────────── */}
      <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe un mensaje..."
          className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-warm-800 placeholder:text-warm-400 outline-none border-none"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || typing}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075E54] text-white transition hover:bg-[#064E47] disabled:opacity-40"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
