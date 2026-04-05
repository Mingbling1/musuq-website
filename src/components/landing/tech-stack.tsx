"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { techIcons, imageIconTools } from "@/components/icons/tech-icons";

const tools = [
  "Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Python",
  "PostgreSQL", "Redis", "Medusa.js", "Shopify", "Strapi",
  "n8n", "Chatwoot", "Docker", "Vercel", "Cloudflare",
  "Stripe", "AWS", "Izipay",
];

const imageIcons: Record<string, { src: string; width: number; height: number; alt: string }> = {
  AWS: { src: "/icon-aws.png", width: 200, height: 133, alt: "AWS" },
  Izipay: { src: "/icon-izipay.png", width: 350, height: 134, alt: "Izipay" },
};

/** Individual tool card — static, no entrance animation to avoid sparkle/flicker */
function ToolCard({ tool }: { tool: string; index: number }) {
  const Icon = techIcons[tool];
  const isImageIcon = imageIconTools.includes(tool);
  const imageData = imageIcons[tool];

  return (
    <div
      key={tool}
      className="group flex flex-col items-center gap-2.5 rounded-xl border border-warm-800/[0.05] bg-cream-50/80 px-3 py-5 transition-all duration-300 hover:border-terracotta/20 hover:shadow-[0_2px_12px_rgba(200,85,61,0.06)]"
    >
      {isImageIcon && imageData ? (
        <div className="flex items-center justify-center h-[22px] grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            width={44}
            height={44}
            className="h-[22px] w-auto object-contain"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[22px]">
          {Icon && (
            <Icon
              size={22}
              className="text-warm-500 transition-colors duration-300 group-hover:text-terracotta"
            />
          )}
        </div>
      )}
      <span className="text-[11px] font-medium text-warm-500 text-center leading-tight transition-colors group-hover:text-warm-700">
        {tool}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tecnologias" className="relative py-16 sm:py-24 bg-cream-200/40 overflow-hidden">
      {/* Floating musuq-themed shapes — desktop only */}
      {/* Database cylinder */}
      <svg className="hidden lg:block absolute top-14 left-14 w-8 h-8 soft-bounce pointer-events-none" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="10" ry="4" stroke="#B87333" strokeWidth="1" strokeOpacity="0.07" />
        <path d="M6 8v14c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#B87333" strokeWidth="1" strokeOpacity="0.07" />
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#B87333" strokeWidth="0.6" strokeOpacity="0.04" />
      </svg>
      {/* Terminal cursor */}
      <svg className="hidden lg:block absolute bottom-16 right-24 w-10 h-10 micro-tremble pointer-events-none" viewBox="0 0 40 40" fill="none">
        <path d="M8 12l8 8-8 8" stroke="#6B7C5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.07" />
        <path d="M20 28h12" stroke="#6B7C5E" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.06" />
      </svg>
      {/* Tiny plus sign */}
      <svg className="hidden lg:block absolute top-[55%] left-[6%] w-4 h-4 float-orbit pointer-events-none" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 8h10" stroke="#C8553D" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.06" />
      </svg>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left — editorial text */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-400 mb-4">
              Herramientas
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.15] tracking-tight text-warm-800 mb-6">
              Elegimos la tecnología{" "}
              <span className="italic">correcta</span>,<br />
              no la de moda
            </h2>
            <p className="text-warm-500 leading-relaxed max-w-md">
              Cada proyecto tiene sus propias necesidades. No forzamos un stack
              porque sea popular &mdash; seleccionamos lo que mejor resuelve
              tu problema y escala contigo.
            </p>
          </div>

          {/* Right — icons grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 lg:pt-2">
            {tools.map((tool, i) => (
              <ToolCard key={tool} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
