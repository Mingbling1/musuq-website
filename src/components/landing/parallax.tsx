"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Parallax sutil ligado al scroll (Framer Motion).
 * Solo mueve transform (GPU). speed = fracción de 120px de recorrido.
 * Respeta prefers-reduced-motion (sin movimiento).
 * Úsalo solo en capas decorativas (ghosts, glows), nunca en contenido legible
 * ni en elementos con animación CSS de transform (evita doble transform).
 */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 120 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
