import Image from "next/image";
import { ScrollReveal } from "@/components/landing/scroll-reveal";

const APP_URL = "https://app.musuq.tech";

export function Cierre() {
  return (
    <section id="empezar" className="relative overflow-hidden bg-warm-800 pb-24 pt-32 lg:pb-32 lg:pt-44">
      {/* curva crema → carbón */}
      <div aria-hidden className="absolute inset-x-0 top-0 leading-[0] text-cream-100">
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="h-[60px] w-full md:h-[90px]" fill="currentColor">
          <path d="M0,0 L1440,0 L1440,40 C1080,120 360,120 0,40 Z" />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,85,61,0.32), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <Image
            src="/brand/zorro-saludo.png"
            alt="Musuq te da la bienvenida"
            width={300}
            height={400}
            className="mx-auto mb-8 h-auto w-28 drop-shadow-[0_16px_30px_rgba(0,0,0,0.4)]"
          />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-cream-50">
            Tecnología que{" "}
            <span className="text-terracotta-light">impulsa</span> cada venta
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="mx-auto mt-5 max-w-md text-lg text-cream-100/75">
            Empezamos por gastronomía, vamos por todo el comercio. Crea tu cuenta
            y empieza a vender mejor hoy.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Crear cuenta gratis
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="mailto:hello@musuq.tech"
              className="inline-flex items-center rounded-full border border-cream-50/20 px-8 py-4 text-[15px] font-semibold text-cream-50 transition-colors duration-200 hover:bg-cream-50/[0.06]"
            >
              Hablar con nosotros
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
