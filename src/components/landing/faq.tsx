"use client";

import { useState } from "react";

const faqs = [
  {
    id: "1",
    question: "¿Por qué mi pyme necesita una landing page si ya tengo Instagram?",
    answer:
      "Las redes sociales son ventanas. Tu landing page es tu tienda. En Instagram tu cliente compite con cien publicaciones por su atención. En tu landing cada píxel está diseñado para una sola cosa: convertir. Además, mientras más dependes de redes de terceros, menos control tienes sobre tu negocio. Tu landing page es un activo tuyo que no desaparece cuando cambia un algoritmo.",
  },
  {
    id: "2",
    question: "¿Cuánto tiempo toma tener mi proyecto listo?",
    answer:
      "Depende de la complejidad. Una landing page puede estar lista en 2 a 3 semanas. Una tienda online, entre 4 y 6 semanas. Automatizaciones más complejas, de 6 a 8 semanas. El tiempo real lo definimos juntos en la primera reunión, sin sorpresas ni fechas que se estiran.",
  },
  {
    id: "3",
    question: "¿Cuánto cuesta trabajar con ustedes?",
    answer:
      "No tenemos precios estándar porque no hacemos proyectos estándar. Cada presupuesto se calcula según lo que realmente necesitas, sin empaquetar funcionalidades que no vas a usar. La primera reunión es gratuita y ahí definimos juntos qué tiene sentido para tu situación actual.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Floating decorative elements */}
      <svg
        className="hidden lg:block absolute top-16 left-[5%] w-5 h-5 text-terracotta/[0.1] drift-y-slow pointer-events-none"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="10" />
      </svg>
      <svg
        className="hidden lg:block absolute bottom-20 right-[7%] w-6 h-6 text-sage/[0.1] soft-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0L13.5 9L22 7L14.5 12L20 20L12 15L4 20L9.5 12L2 7L10.5 9L12 0Z" />
      </svg>

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-warm-800">
            Resolvemos tus dudas
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-t border-warm-800/[0.06] last:border-b border-warm-800/[0.06]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="group w-full py-6 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-medium text-warm-400/40 tabular-nums mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span
                      className={`font-serif text-xl sm:text-2xl font-medium leading-snug transition-colors duration-300 ${
                        isOpen
                          ? "text-terracotta"
                          : "text-warm-800 group-hover:text-terracotta/70"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus/minus icon */}
                  <div className="shrink-0 mt-1.5 w-5 h-5 relative">
                    <span
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-terracotta"
                      >
                        <path
                          d="M8 2V14M2 8H14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Answer — CSS height transition via max-height trick */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-7 pl-11 sm:pl-12">
                    <p className="text-warm-500 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA nudge */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-warm-400 mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a
            href="mailto:hello@musuq.tech"
            className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-light transition-colors underline decoration-warm-400/30 underline-offset-4"
          >
            Escribenos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
