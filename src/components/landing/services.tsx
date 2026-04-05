"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  LandingPreview,
  EcommercePreview,
  AutomationPreview,
  SoftwarePreview,
  ConsultingPreview,
} from "./service-visuals";
import { EcommerceDemo } from "./demos/ecommerce-demo";
import { AutomationDemo } from "./demos/automation-demo";
import { SoftwareDemo } from "./demos/software-demo";
import { ConsultingDemo } from "./demos/consulting-demo";
import { LandingDemo } from "./demos/landing-demo";

/** Map service number → SVG preview component */
const serviceVisuals: Record<string, React.ComponentType> = {
  "01": LandingPreview,
  "02": EcommercePreview,
  "03": AutomationPreview,
  "04": SoftwarePreview,
  "05": ConsultingPreview,
};

/** Map service number → interactive demo (01–05) */
const serviceDemos: Record<
  string,
  { component: React.ComponentType<{ onClose?: () => void }>; label: string }
> = {
  "01": { component: LandingDemo, label: "Probar landing" },
  "02": { component: EcommerceDemo, label: "Probar tienda" },
  "03": { component: AutomationDemo, label: "Probar bot" },
  "04": { component: SoftwareDemo, label: "Probar dashboard" },
  "05": { component: ConsultingDemo, label: "Probar consulta" },
};

const services = [
  {
    number: "01",
    title: "Landings que convierten",
    description:
      "Diseñamos y desarrollamos landing pages hiperpersonalizadas. No usamos plantillas. Cada píxel existe por una razón: posicionar tu marca y convertir visitantes en clientes.",
    details: ["SEO técnico y on-page", "Branding visual integrado", "Copywriting estratégico", "Optimización de velocidad"],
  },
  {
    number: "02",
    title: "Tiendas online",
    description:
      "E-commerce que funciona de verdad. Trabajamos con Medusa, Shopify, Strapi o soluciones headless según lo que necesites. Integramos Izipay, Stripe y lo que haga falta.",
    details: ["Medusa.js / Shopify / headless", "Pasarelas de pago locales", "Gestión de inventario", "CMS integrado o independiente"],
  },
  {
    number: "03",
    title: "Automatizaciones",
    description:
      "Conectamos tus herramientas para que dejen de existir tareas manuales innecesarias. Bots, flujos automatizados, scraping de datos y atención al cliente con Chatwoot.",
    details: ["Bots para WhatsApp y web", "Chatwoot para soporte multicanal", "n8n para flujos complejos", "Scraping y procesamiento de datos"],
  },
  {
    number: "04",
    title: "Software a medida",
    description:
      "Si ninguna herramienta del mercado hace lo que necesitas, la construimos. Desde MVPs para validar tu idea hasta plataformas completas con arquitectura escalable.",
    details: ["Aplicaciones web full-stack", "APIs y microservicios", "Dashboards y paneles admin", "Integraciones con terceros"],
  },
  {
    number: "05",
    title: "Consultas tech",
    description:
      "A veces no necesitas que construyamos, sino que te digamos cómo. Asesoramos en stack, arquitectura, infraestructura y estrategia técnica.",
    details: ["Elección de tecnologías", "Arquitectura de sistemas", "Code review y auditorías", "Estrategia de producto digital"],
  },
];

/** Interactive demo trigger button + dialog */
function DemoButton({
  serviceNumber,
}: {
  serviceNumber: string;
}) {
  const demo = serviceDemos[serviceNumber];
  const [open, setOpen] = useState(false);

  if (!demo) return null;

  const DemoComponent = demo.component;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-warm-800/[0.08] bg-cream-100 px-4 py-2.5 text-xs font-medium text-warm-600 transition hover:bg-cream-200 hover:text-warm-800 hover:border-warm-800/[0.12] cursor-pointer"
      >
        <Play size={13} className="text-terracotta" />
        {demo.label}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-[calc(100vw-2rem)] sm:w-[640px] lg:w-[900px] max-w-[95vw] lg:max-w-4xl h-[80vh] max-h-[85vh] p-0 gap-0 overflow-hidden"
      >
        <DemoComponent onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Floating decorative — upward arrow (growth) */}
      <svg
        className="hidden lg:block absolute top-24 right-[8%] w-7 h-7 text-terracotta/[0.13] drift-y-slow"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M14 24V6M14 6L7 13M14 6L21 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Floating decorative — sparkle / star (empowerment) */}
      <svg
        className="hidden lg:block absolute bottom-32 left-[6%] w-6 h-6 text-sage/[0.16] soft-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 0L13.5 9L22 7L14.5 12L20 20L12 15L4 20L9.5 12L2 7L10.5 9L12 0Z" />
      </svg>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header - left aligned, editorial */}
        <div className="max-w-xl mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-warm-800">
            Cinco formas de impulsar tu negocio
          </h2>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, i) => {
            const Visual = serviceVisuals[service.number];
            const isEven = i % 2 === 1;

            return (
              <div
                key={service.number}
                className="group border-t border-warm-800/[0.06] py-10 sm:py-14"
              >
                {/* ── Mobile layout (stacked) ── */}
                <div className="lg:hidden">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
                    <div className="sm:col-span-1">
                      <span className="text-xs font-medium text-warm-400 tabular-nums">
                        {service.number}
                      </span>
                    </div>
                    <div className="sm:col-span-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-warm-800 leading-tight group-hover:text-terracotta transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="sm:col-span-7">
                      <p className="text-warm-500 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {service.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs text-warm-400 before:content-['—_'] before:text-warm-400/40"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {Visual && (
                    <div>
                      <Visual />
                      <DemoButton serviceNumber={service.number} />
                    </div>
                  )}
                </div>

                {/* ── Desktop layout (side-by-side, alternating) ── */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  {/* Text column */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-xs font-medium text-warm-400 tabular-nums">
                      {service.number}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl xl:text-4xl font-medium text-warm-800 leading-tight group-hover:text-terracotta transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-warm-500 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {service.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs text-warm-400 before:content-['—_'] before:text-warm-400/40"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                    <DemoButton serviceNumber={service.number} />
                  </div>

                  {/* Visual column */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {Visual && <Visual />}
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-warm-800/[0.06]" />
        </div>
      </div>
    </section>
  );
}
