"use client";

import { useEffect } from "react";
import { MARKUP } from "./markup";
import { SCRIPT } from "./script";
import "./landing.css";

// Landing rebrand 2026 portado tal cual desde el build estatico.
// El markup se inyecta como HTML y el JS (scrollytelling, mega-menu,
// header dinamico, reveals) se ejecuta una vez montado.
export default function LandingStatic() {
  useEffect(() => {
    const s = document.createElement("script");
    s.textContent = SCRIPT;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
