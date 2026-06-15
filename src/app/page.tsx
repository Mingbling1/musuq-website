import { Hero } from "@/components/landing/hero";
import { Modulos } from "@/components/landing/modulos";
import { Rubros } from "@/components/landing/rubros";
import { PorQue } from "@/components/landing/por-que";
import { Pricing } from "@/components/landing/pricing";
import { Cierre } from "@/components/landing/cierre";

// ── Rebrand 2026: reconstrucción sección por sección ──────────────
// Vivo: hero → módulos → rubros → por qué → pricing → cierre.
// Falta: footer. El resto queda comentado (no borrado).
// import { Manifiesto } from "@/components/landing/manifiesto";
// import { Plataforma } from "@/components/landing/plataforma";
// import { Diferenciador } from "@/components/landing/diferenciador";
// import { AntesDespues } from "@/components/landing/antes-despues";
// import { ScrollFX } from "@/components/landing/scroll-fx";

export default function Home() {
  return (
    <main className="flex-1">
      {/* <ScrollFX /> */}
      <Hero />
      <PorQue />
      <Rubros />
      <Modulos />
      <Pricing />
      <Cierre />
      {/* <Manifiesto /> */}
      {/* <Plataforma /> */}
      {/* <Diferenciador /> */}
      {/* <AntesDespues /> */}
    </main>
  );
}
