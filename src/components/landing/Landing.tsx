"use client";

import "./landing.css";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Benefits from "./Benefits";
import VSBanner from "./VSBanner";
import ScrollyPhone from "./ScrollyPhone";
import ScrollyTPV from "./ScrollyTPV";
import Pricing from "./Pricing";
import Footer from "./Footer";

// Landing rebrand 2026 — migracion del build estatico a componentes React.
// El motion (scrollytelling, reveals, header) vive en cada componente via
// hooks/Framer en vez del script.ts inyectado.
export default function Landing() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <VSBanner />
      <ScrollyPhone />
      <ScrollyTPV />
      <Pricing />
      <Footer />
    </>
  );
}
