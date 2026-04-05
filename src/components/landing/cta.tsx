"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-cream-200/40 overflow-hidden">
      {/* Floating musuq-themed shapes — desktop only */}
      {/* Mail / envelope outline */}
      <svg className="hidden lg:block absolute top-14 right-20 w-10 h-10 float-orbit pointer-events-none" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="20" rx="3" stroke="#C8553D" strokeWidth="1" strokeOpacity="0.06" />
        <path d="M4 10l16 12L36 10" stroke="#C8553D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.06" />
      </svg>
      {/* Chat bubble */}
      <svg className="hidden lg:block absolute bottom-20 right-[30%] w-8 h-8 soft-bounce pointer-events-none" viewBox="0 0 32 32" fill="none">
        <path d="M4 6h24a2 2 0 012 2v12a2 2 0 01-2 2H12l-6 4v-4H4a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#6B7C5E" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="11" cy="14" r="1.5" fill="#6B7C5E" fillOpacity="0.06" />
        <circle cx="16" cy="14" r="1.5" fill="#6B7C5E" fillOpacity="0.06" />
        <circle cx="21" cy="14" r="1.5" fill="#6B7C5E" fillOpacity="0.06" />
      </svg>
      {/* Cursor arrow */}
      <svg className="hidden lg:block absolute top-[40%] right-[8%] w-5 h-5 micro-tremble pointer-events-none" viewBox="0 0 20 20" fill="none">
        <path d="M4 4l10 5-4 1.5L8.5 15z" fill="#B87333" fillOpacity="0.05" stroke="#B87333" strokeWidth="0.8" strokeOpacity="0.06" />
      </svg>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-6">
            Empecemos
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-warm-800 mb-8">
            Tienes una idea.<br />
            <span className="italic text-terracotta">Hagámosla realidad.</span>
          </h2>

          <p className="text-warm-500 leading-relaxed text-lg mb-12 max-w-lg">
            Escríbenos y cuéntanos qué necesitas. Sin formularios
            interminables, sin compromisos. Solo una conversación
            honesta sobre cómo podemos ayudarte.
          </p>

          {/* Email - prominent */}
          <div className="mb-10">
            <Link
              href="mailto:hello@musuq.tech"
              className="group font-serif text-2xl sm:text-3xl text-warm-800 hover:text-terracotta transition-colors duration-300"
            >
              hello@musuq.tech
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">&rarr;</span>
            </Link>
          </div>

          {/* Secondary actions */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3SM54rwbpjCnArOYAC5cVcHGMYc0OQxr2XGlb2w2PtAI8aOAcNkSVndIkBztEKbPwGXj7TF0FI"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-warm-800 px-7 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-warm-700 active:scale-95"
            >
              Agendar llamada
            </Link>
            <div className="flex items-center gap-3 text-sm text-warm-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
              </span>
              Disponible para nuevos proyectos
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
