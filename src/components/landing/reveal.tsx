"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal on scroll. Anima opacidad + translateY al entrar al viewport.
 * CSS-driven (sin motion.div/whileInView → sin flicker en iOS Safari).
 * Respeta prefers-reduced-motion (muestra el estado final de inmediato).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
