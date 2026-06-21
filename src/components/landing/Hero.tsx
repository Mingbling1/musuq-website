"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Progreso 0 (hero al tope) -> 1 (hero termina de salir por arriba).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax cinematografico imperativo (mismo patron que ScrollyPhone/TPV: escribir
  // estilo directo en cada frame). La foto se rezaga + zoom suave desde el centro
  // (conserva el encuadre); el copy flota hacia arriba y se desvanece; la guia de
  // scroll se apaga al iniciar el scroll.
  const apply = (p: number) => {
    const bg = bgRef.current, copy = copyRef.current, cue = cueRef.current;
    if (reduce) {
      if (bg) bg.style.transform = "";
      if (copy) { copy.style.transform = ""; copy.style.opacity = "1"; }
      if (cue) cue.style.opacity = "1";
      return;
    }
    if (bg) bg.style.transform = `translateY(${p * 5}%) scale(${1.06 + p * 0.1})`;
    if (copy) {
      copy.style.transform = `translateY(${-90 * p}px)`;
      copy.style.opacity = String(Math.max(0, 1 - p / 0.7));
    }
    if (cue) cue.style.opacity = String(Math.max(0, 1 - p / 0.16));
  };

  useMotionValueEvent(scrollYProgress, "change", apply);
  useEffect(() => {
    apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg" ref={bgRef} aria-hidden="true">
        <picture>
          <source media="(max-width:860px)" srcSet="brand/hero-musuq-mobile.jpg" />
          <img className="hero__img" src="brand/hero-musuq-desktop.jpg" alt="" fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="wrap">
        <div className="hero__copy" ref={copyRef}>
          <h1>Tecnología que impulsa cada venta</h1>
          <p>Cobra, organiza y entiende tu negocio desde una sola app.</p>
          <div className="hero__cta"><a className="btn btn--dark" href="https://app.musuq.tech">Empieza gratis</a></div>
        </div>
      </div>
      <div className="hero__scroll" ref={cueRef} aria-hidden="true" />
    </section>
  );
}
