import Image from "next/image";
import { MusuqPhone } from "@/components/landing/musuq-phone";

const ANTON = { fontFamily: "var(--font-anton)" } as const;
const CAVEAT = { fontFamily: "var(--font-caveat)" } as const;

/**
 * Banda de contexto bajo el Hero: foto cinematográfica enmarcada (cocinero
 * peruano + ceviche) con una línea editorial. Da el "para quién es" rápido.
 */
export function BandaContexto() {
  return (
    <section id="contexto" className="bg-cream-100 px-2.5 pb-2.5 md:px-3 md:pb-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-warm-800 sm:aspect-[16/8] lg:aspect-[16/6]">
        <Image
          src="/brand/ceviche-band.webp"
          alt="Cocinero peruano emplatando un ceviche"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-800/65 via-warm-800/10 to-transparent" />
        {/* celular con la app flotando */}
        <div className="absolute bottom-4 right-4 origin-bottom-right scale-[0.6] sm:bottom-6 sm:right-8 sm:scale-[0.78] lg:scale-90">
          <MusuqPhone />
        </div>
        <div className="absolute bottom-0 left-0 p-5 md:p-8">
          <span style={ANTON} className="block text-[clamp(1.4rem,4vw,2.5rem)] uppercase leading-[0.9] text-cream-50">
            Empezamos por la{" "}
            <span style={CAVEAT} className="lowercase text-terracotta-light">cocina peruana</span>
          </span>
        </div>
      </div>
    </section>
  );
}
