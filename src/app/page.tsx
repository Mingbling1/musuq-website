import LandingStatic from "@/components/landing-static/LandingStatic";

// Rebrand 2026: la home es el landing estatico portado a Next.
// (las secciones React anteriores quedan en src/components/landing/, sin uso)
export default function Home() {
  return <LandingStatic />;
}
