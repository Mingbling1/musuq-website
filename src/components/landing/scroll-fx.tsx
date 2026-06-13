"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

/**
 * Capa de movimiento con GSAP ScrollTrigger, sincronizada con Lenis.
 * SOLO aplica transform (parallax / giro) — nunca esconde contenido,
 * así que si el JS no corre, todo sigue visible.
 * Se desactiva con prefers-reduced-motion.
 */
export function ScrollFX() {
  const lenis = useLenis();

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => ScrollTrigger.update();
    lenis?.on?.("scroll", onScroll);

    const ctx = gsap.context(() => {
      // Parallax vertical (data-parallax = factor, + baja más lento, - sube)
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const f = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(
          el,
          { yPercent: f * 60 },
          {
            yPercent: -f * 60,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      // Banda andina que se "dibuja" al scrollear
      gsap.utils.toArray<SVGPathElement>("[data-draw] path").forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: path.closest("[data-draw]") as Element,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.6,
          },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      lenis?.off?.("scroll", onScroll);
    };
  }, [lenis]);

  return null;
}
