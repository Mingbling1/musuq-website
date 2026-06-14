"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string; className?: string };

/**
 * Fondo de video con loop por fade (técnica Aethera): reproduce una vez,
 * hace fade-out 0.5s antes del final, resetea y vuelve a reproducir con fade-in.
 * Sin costura, siempre hacia adelante. En prefers-reduced-motion muestra el poster.
 */
export function VideoHero({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
      return;
    }
    const v = ref.current;
    if (!v) return;

    const FADE = 0.5;
    let raf = 0;

    const tick = () => {
      const d = v.duration;
      if (d && !Number.isNaN(d)) {
        const t = v.currentTime;
        let o = 1;
        if (t < FADE) o = t / FADE;
        else if (t > d - FADE) o = Math.max(0, (d - t) / FADE);
        v.style.opacity = String(o);
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      v.style.opacity = "0";
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, 100);
    };

    v.addEventListener("ended", onEnded);
    v.play().catch(() => {});
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden className={`h-full w-full object-cover ${className}`} />;
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      aria-hidden
      className={`h-full w-full object-cover ${className}`}
      style={{ opacity: 0, transition: "opacity 0.2s linear" }}
    />
  );
}
