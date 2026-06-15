import { Hero } from "@/components/landing/hero";

// ── Rebrand 2026: teaser coming-soon ──────────────────────────────
// Mientras rehacemos toda la landing, dejamos vivo SOLO el hero.
// Las secciones quedan comentadas (no borradas) para restaurarlas luego.
// import { Manifiesto } from "@/components/landing/manifiesto";
// import { Rubros } from "@/components/landing/rubros";
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
      {/* <Manifiesto /> */}
      {/* <Rubros /> */}
      {/* <Plataforma /> */}
      {/* <Diferenciador /> */}
      {/* <AntesDespues /> */}
      {/* <Cierre /> */}
    </main>
  );
}
