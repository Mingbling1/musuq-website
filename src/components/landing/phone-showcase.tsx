"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AppScreen } from "./app-screen";

// El celular 3D (Three.js) se carga diferido y SOLO en cliente: así `three` no
// entra al bundle inicial ni al SSR del Worker.
const Phone3D = dynamic(() => import("./phone-3d"), { ssr: false });

/** Fallback ligero (sin WebGL) para móvil y reduced-motion: el mismo AppScreen
 *  animado, dentro de un marco de celular en CSS. Cero peso de Three.js. */
function StaticPhone() {
  return (
    <div className="rounded-[40px] bg-warm-800 p-3 shadow-[0_30px_60px_rgba(26,26,26,0.22)]">
      <AppScreen />
    </div>
  );
}

export function PhoneShowcase() {
  // null = primer render (server + hidratación): mostramos el estático, que no
  // necesita Three.js y evita mismatch de hidratación.
  const [mode, setMode] = useState<"static" | "3d" | null>(null);

  useEffect(() => {
    // En una función (no en el cuerpo del effect) para evitar cascading-render warning.
    const decide = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const small = window.innerWidth < 1024;
      setMode(reduce || coarse || small ? "static" : "3d");
    };
    decide();
  }, []);

  if (mode === "3d") {
    return (
      <div className="h-[560px] w-full max-w-[460px]">
        <Phone3D />
      </div>
    );
  }
  return <StaticPhone />;
}
