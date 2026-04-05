"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Empezamos por entender tu negocio, no por proponer soluciones. Nos sentamos a conversar sobre lo que necesitas, lo que funciona y lo que no.",
    duration: "1-2 días",
  },
  {
    number: "02",
    title: "Diseñamos la estrategia",
    description:
      "Definimos el camino: qué construir, con qué tecnología y en qué orden. Creas prototipos que puedes tocar antes de escribir una línea de código.",
    duration: "3-5 días",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollo iterativo con entregas semanales. No desaparecemos por meses. Ves progreso real, das feedback, ajustamos. Así de simple.",
    duration: "2-8 semanas",
  },
  {
    number: "04",
    title: "Lanzamos y acompañamos",
    description:
      "Deploy sin dramas. Después del lanzamiento seguimos ahí: monitoreamos, optimizamos y resolvemos lo que surja. No te dejamos solo.",
    duration: "Continuo",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Floating musuq-themed shapes — desktop only */}
      {/* Gear outline */}
      <svg className="hidden lg:block absolute top-16 right-14 w-12 h-12 float-orbit pointer-events-none" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="8" stroke="#6B7C5E" strokeWidth="1.2" strokeOpacity="0.07" />
        <circle cx="24" cy="24" r="3" fill="#6B7C5E" fillOpacity="0.05" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="24"
            y1="14"
            x2="24"
            y2="10"
            stroke="#6B7C5E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.06"
            transform={`rotate(${deg} 24 24)`}
          />
        ))}
      </svg>
      {/* Small sprout / leaf */}
      <svg className="hidden lg:block absolute bottom-20 left-10 w-7 h-7 soft-bounce pointer-events-none" viewBox="0 0 28 28" fill="none">
        <path d="M14 26V14" stroke="#C8553D" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.08" />
        <path d="M14 16C12 14 8 11 6 6c3 1 6 3 8 7" fill="#C8553D" fillOpacity="0.06" />
        <path d="M14 14c2-2 5-5 8-8-2 2-5 4-8 7" fill="#6B7C5E" fillOpacity="0.05" />
      </svg>
      {/* Tiny diamond */}
      <svg className="hidden lg:block absolute top-[45%] right-[5%] w-5 h-5 micro-tremble pointer-events-none" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 10L10 18L2 10Z" stroke="#B87333" strokeWidth="1" strokeOpacity="0.06" />
      </svg>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-4">
            Cómo trabajamos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-warm-800">
            Sin misterios,<br />
            <span className="italic text-terracotta">sin sorpresas</span>
          </h2>
        </motion.div>

        {/* Steps - asymmetric layout */}
        <div className="grid grid-cols-1 gap-16 sm:gap-20 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-xs font-medium text-warm-400 tabular-nums">
                  {step.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-warm-400 bg-cream-300/50 rounded-full px-3 py-1">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-warm-800 mb-4">
                {step.title}
              </h3>
              <p className="text-warm-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
