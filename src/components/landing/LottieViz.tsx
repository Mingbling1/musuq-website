'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { LottieRefCurrentProps } from 'lottie-react'

// lottie-react carga lottie-web (pesado) — lazy + sin SSR para no inflar el bundle.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return reduced
}

type LottieVizProps = { src: string; loop?: boolean; className?: string; style?: CSSProperties }

/** Reproductor Lottie decorativo: lazy, accesible, respeta prefers-reduced-motion. */
export default function LottieViz({ src, loop = true, className, style }: LottieVizProps) {
  const [data, setData] = useState<unknown>(null)
  const reduced = usePrefersReducedMotion()
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    let alive = true
    fetch(src)
      .then((r) => r.json())
      .then((j) => { if (alive) setData(j) })
      .catch(() => {})
    return () => { alive = false }
  }, [src])

  useEffect(() => {
    if (!data || !reduced) return
    const id = window.setTimeout(() => {
      const r = lottieRef.current
      if (r) {
        const total = r.getDuration(true) ?? 0
        r.goToAndStop(Math.max(0, total - 1), true)
      }
    }, 0)
    return () => window.clearTimeout(id)
  }, [data, reduced])

  if (!data) return <div className={className} style={style} aria-hidden />

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data}
      loop={reduced ? false : loop}
      autoplay={!reduced}
      className={className}
      style={style}
      aria-hidden
    />
  )
}
