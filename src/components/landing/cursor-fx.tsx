"use client";

import { useEffect } from "react";

/**
 * Cursor parallax sutil. Escribe variables CSS --mx/--my (-1..1, suavizadas)
 * en :root; los elementos las usan con `transform: translate(calc(var(--mx)*Npx) ...)`.
 * Se desactiva en táctil (pointer: coarse) y con prefers-reduced-motion,
 * dejando --mx/--my en 0 (sin movimiento).
 */
export function CursorFx() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      root.style.setProperty("--mx", cx.toFixed(3));
      root.style.setProperty("--my", cy.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      root.style.setProperty("--mx", "0");
      root.style.setProperty("--my", "0");
    };
  }, []);

  return null;
}
