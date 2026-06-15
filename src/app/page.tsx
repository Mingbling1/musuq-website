import { Hero } from "@/components/landing/hero";
import { Modulos } from "@/components/landing/modulos";
import { Rubros } from "@/components/landing/rubros";
import { PorQue } from "@/components/landing/por-que";

// ── Rebrand 2026: reconstrucción sección por sección ──────────────
// Vivo: hero + módulos + rubros. El resto queda comentado (no borrado).
// import { Manifiesto } from "@/components/landing/manifiesto";
// import { Plataforma } from "@/components/landing/plataforma";
// import { Diferenciador } from "@/components/landing/diferenciador";
// import { AntesDespues } from "@/components/landing/antes-despues";
// import { Cierre } from "@/components/landing/cierre";
// import { ScrollFX } from "@/components/landing/scroll-fx";

export default function Home() {
  return (
    <main className="flex-1">
      {/* <ScrollFX /> */}
      <Hero />
      <Modulos />
      <Rubros />
      <PorQue />
      {/* <Manifiesto /> */}
      {/* <Plataforma /> */}
      {/* <Diferenciador /> */}
      {/* <AntesDespues /> */}
      {/* <Cierre /> */}
    </main>
  );
}
