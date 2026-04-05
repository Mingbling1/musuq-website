"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

interface Field {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  required?: boolean;
}

const initialMessages: Message[] = [
  { id: 1, role: "bot", text: "¡Hola! 👋 Soy el asistente de musuq. Antes de empezar, me gustaría conocerte un poco." },
  { id: 2, role: "bot", text: "¿Cómo te llamas?" },
];

const questions = [
  {
    field: { id: "name", label: "Tu nombre", type: "text" as const, placeholder: "Ej: María García", required: true },
    bot: "Perfecto, {name}. ¿Cuál es tu email para contactarte?",
  },
  {
    field: { id: "email", label: "Tu email", type: "email" as const, placeholder: "Ej: maria@empresa.com", required: true },
    bot: "¿Hay un teléfono donde podamos contactarte? (Opcional)",
  },
  {
    field: { id: "phone", label: "Teléfono", type: "tel" as const, placeholder: "Ej: +51 999 888 777", required: false },
    bot: "¿Qué tipo de proyecto tienes en mente?",
  },
  {
    field: { id: "project", label: "Tu proyecto", type: "textarea" as const, placeholder: "Cuéntanos brevemente qué necesitas...", required: false },
    bot: "¡Listo! Hemos recibido tu información. Un miembro de nuestro equipo se comunicará contigo en las próximas 24 horas.",
  },
];

const projectTypes = [
  "Landing page",
  "Tienda online / E-commerce",
  "Automatizaciones",
  "Software a medida",
  "Consultoría técnica",
  "No estoy seguro / Quiero advice",
];

let messageId = 10;

function createBotMessage(text: string): Message {
  return { id: ++messageId, role: "bot", text };
}

export function LeadCapture() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 2) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, createBotMessage("Perfecto, ¿cuál es tu email para contactarte?")]);
          setIsTyping(false);
          setStep(1);
        }, 800);
      }, 1200);
    }
  }, [isOpen]);

  function handleProjectChoice(choice: string) {
    const updatedData = { ...formData, project: choice };
    setFormData(updatedData);

    const botText = questions[3].bot.replace("{name}", formData.name || "");
    setMessages((prev) => [
      ...prev,
      { id: ++messageId, role: "user" as const, text: choice },
      createBotMessage(botText),
    ]);
    setIsDone(true);
  }

  function handleProjectInput(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const currentQuestion = questions[step - 1];
    const updatedData = { ...formData, [currentQuestion.field.id]: input };
    setFormData(updatedData);

    let botText = questions[step].bot.replace("{name}", input);

    // Special handling for step 2 (phone) — skip to project type selection
    if (step === 2) {
      setMessages((prev) => [
        ...prev,
        { id: ++messageId, role: "user" as const, text: input },
        createBotMessage("¿Qué tipo de proyecto tienes en mente?"),
      ]);
      setInput("");
      setStep(3);
      return;
    }

    if (step === 3) {
      // Final step — project description
      const finalBotText = questions[3].bot.replace("{name}", updatedData.name || "");
      setMessages((prev) => [
        ...prev,
        { id: ++messageId, role: "user" as const, text: input },
        createBotMessage(finalBotText),
      ]);
      setInput("");
      setIsDone(true);
      return;
    }

    setMessages((prev) => [...prev, { id: ++messageId, role: "user" as const, text: input }]);
    setInput("");
    setStep(step + 1);

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, createBotMessage(botText)]);
        setIsTyping(false);
      }, 600);
    }, 200);
  }

  function handleNextStep() {
    if (step === 3) {
      setStep(4);
    }
  }

  const currentField = questions[step - 1]?.field;
  const showProjectChoices = step === 3 && !formData.project;

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-warm-800 px-5 py-3 text-sm font-medium text-cream-50 shadow-lg hover:bg-warm-700 active:scale-95 transition-all duration-200 pr-4"
          aria-label="Abrir chat con musuq"
        >
          <MessageCircle size={20} className="text-cream-100" />
          <span className="hidden sm:inline">¿Hablamos?</span>
          <span className="sm:hidden">Chat</span>
        </motion.button>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-48px)] sm:w-[420px] max-h-[75vh] flex flex-col rounded-2xl bg-cream-50 border border-warm-800/[0.08] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-warm-800/[0.06] bg-warm-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cream-100/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="32" r="4" fill="#FAF8F5" opacity="0.9" />
                    <path d="M20 34 L20 20" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 22 C18 20 13 15 11 9 C14 10 18 13 20 18" fill="#FAF8F5" opacity="0.75" />
                    <path d="M20 20 C22 17 26 12 29 7 C27 9 23 13 20 17" fill="#FAF8F5" opacity="0.55" />
                    <path d="M20 16 C18.5 12 18 8 19.5 4 C20.5 4 21 8 21.5 12 C21.5 14 20 16 20 16" fill="#FAF8F5" opacity="0.92" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-cream-50">musuq</p>
                  <p className="text-[10px] text-cream-100/60">Normalmente responde en ~1 hora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream-100/60 hover:text-cream-50 transition-colors p-1"
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-cream-200/60 text-warm-700 rounded-tl-sm"
                        : "bg-warm-800 text-cream-50 rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Project type quick choices */}
              {showProjectChoices && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2"
                >
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleProjectChoice(type)}
                      className="rounded-full border border-warm-800/[0.1] bg-cream-100 px-3 py-1.5 text-[11px] text-warm-600 hover:border-terracotta/30 hover:text-terracotta hover:bg-terracotta/5 transition-all duration-200"
                    >
                      {type}
                    </button>
                  ))}
                </motion.div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cream-200/60 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-1.5 h-1.5 rounded-full bg-warm-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-warm-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 rounded-full bg-warm-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {isDone && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-terracotta px-5 py-2.5 text-xs font-medium text-cream-50 hover:bg-terracotta-light transition-colors mt-2"
                  >
                    Cerrar chat
                  </button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input — shown only during Q&A */}
            {!isDone && step > 0 && step < 4 && (
              <form onSubmit={handleProjectInput} className="px-4 pb-4 pt-2 border-t border-warm-800/[0.06]">
                <div className="flex gap-2">
                  <input
                    type={currentField?.type || "text"}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={currentField?.placeholder}
                    className="flex-1 rounded-xl border border-warm-800/[0.08] bg-cream-100 px-4 py-2.5 text-sm text-warm-700 placeholder:text-warm-400/60 focus:outline-none focus:border-terracotta/30 focus:ring-1 focus:ring-terracotta/10 transition-all"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-warm-800 px-4 py-2.5 text-sm font-medium text-cream-50 hover:bg-warm-700 active:scale-95 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
