import Image from "next/image";
import { ScrollReveal } from "@/components/landing/scroll-reveal";

const features = [
  { n: "01", t: "Vende y cobra", d: "Punto de venta rápido: efectivo, tarjeta, Yape o Plin, sin enredos." },
  { n: "02", t: "Controla tu stock", d: "Inventario al día y alertas para no quedarte sin lo que más se vende." },
  { n: "03", t: "Entiende tu negocio", d: "Reportes claros de ventas y productos, en soles, todos los días." },
];

export function Plataforma() {
  return (
    <section id="plataforma" className="relative overflow-hidden bg-cream-200/50 py-24 lg:py-32">
      {/* curva de entrada */}
      <div aria-hidden className="absolute inset-x-0 top-0 leading-[0] text-cream-100">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-[50px] w-full md:h-[80px]" fill="currentColor">
          <path d="M0,0 L1440,0 L1440,30 C1080,95 360,95 0,30 Z" />
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="order-2 lg:order-1">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            La plataforma
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-warm-800">
            Una sola plataforma, todo bajo control
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-warm-600">
            Gestión centralizada de tu negocio, automatización del proceso
            comercial y más velocidad en la atención. Todo desde un mismo lugar.
          </p>

          <div className="mt-10 space-y-7">
            {features.map((f) => (
              <div key={f.n} className="flex gap-5">
                <span className="font-serif text-2xl font-bold text-terracotta">
                  {f.n}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-warm-800">
                    {f.t}
                  </h3>
                  <p className="mt-1 max-w-sm text-warm-600">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="order-1 lg:order-2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-[2.5rem] opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(200,85,61,0.14), transparent)",
              }}
            />
            <Image
              src="/brand/app-mockup.png"
              alt="La app de Musuq en un smartphone"
              width={1200}
              height={675}
              data-parallax="0.12"
              className="relative z-10 h-auto w-full rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.35)]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
