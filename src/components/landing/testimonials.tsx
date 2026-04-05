"use client";

import Link from "next/link";

const projects = [
  {
    name: "Empliq",
    tagline: "Transparencia salarial para el Perú",
    services: ["Software a medida", "Landing page", "Automatizaciones"],
    stack: ["Next.js 16", "NestJS", "PostgreSQL", "ReactFlow", "n8n"],
    url: "https://empliq.io",
    metric: "~19,000 empresas enriquecidas",
  },
  {
    name: "Classiq",
    tagline: "E-commerce de lujo para Perú",
    services: ["Tiendas online", "CMS", "Integraciones"],
    stack: ["Next.js 16", "Medusa.js", "Payload CMS", "Izipay", "Stripe"],
    url: null,
    metric: "Izipay + Stripe integradas",
  },
  {
    name: "BDesign",
    tagline: "Estudio de diseño de interiores",
    services: ["Landing page", "SEO", "Diseño"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://www.bdesign.agency",
    metric: "Proyecto en producción",
  },
];

export function Testimonials() {
  return (
    <section id="trabajo" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Floating quote mark */}
      <svg
        className="hidden lg:block absolute top-20 left-[8%] w-8 h-8 drift-y-slow pointer-events-none"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 20c0-4.4 2.4-8 6-10l2 4c-2 .8-3 2.4-3 4h4v6H8v-4zm14 0c0-4.4 2.4-8 6-10l2 4c-2 .8-3 2.4-3 4h4v6H22v-4z"
          fill="#C8553D"
          fillOpacity="0.07"
        />
      </svg>

      {/* Floating dot grid */}
      <svg
        className="hidden lg:block absolute bottom-20 right-[10%] w-10 h-10 micro-tremble pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={8 + col * 8}
              cy={8 + row * 8}
              r="1.5"
              fill="#6B7C5E"
              fillOpacity="0.08"
            />
          ))
        )}
      </svg>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-4">
            Trabajo seleccionado
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-warm-800">
            Proyectos que{" "}
            <span className="italic text-terracotta">hablan por nosotros</span>
          </h2>
        </div>

        {/* Compact project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-xl border border-warm-800/[0.06] bg-cream-100 p-5 transition-all duration-300 hover:border-terracotta/20 hover:shadow-[0_4px_20px_rgba(200,85,61,0.08)]"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-xl font-medium text-warm-800 group-hover:text-terracotta transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-terracotta mt-0.5">
                    {project.tagline}
                  </p>
                </div>
                {project.url ? (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-warm-800/10 px-3 py-1.5 text-[10px] font-medium text-warm-500 transition-all hover:bg-warm-800 hover:text-cream-50 active:scale-95"
                  >
                    Ver &rarr;
                  </Link>
                ) : (
                  <span className="shrink-0 rounded-full border border-warm-800/[0.06] bg-cream-200/50 px-3 py-1.5 text-[10px] font-medium text-warm-400">
                    Confidencial
                  </span>
                )}
              </div>

              {/* Services tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="text-[9px] font-medium text-warm-400 bg-cream-200/70 rounded-full px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-warm-800/[0.05] my-auto pt-3">
                {/* Metric */}
                <div className="flex items-center gap-1.5 mb-2">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className="text-sage shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
                  </svg>
                  <span className="text-[10px] font-medium text-sage">
                    {project.metric}
                  </span>
                </div>
                {/* Stack */}
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] text-warm-400/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[9px] text-warm-400/40">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-warm-800/[0.06] mt-16" />
      </div>
    </section>
  );
}
