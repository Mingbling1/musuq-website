"use client"

import { Suspense, useEffect, useMemo } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import {
  Float,
  PresentationControls,
  ContactShadows,
  RoundedBox,
  Environment,
  Lightformer,
} from "@react-three/drei"

/**
 * Textura de video del flujo de la app con DOS fuentes (webm VP9 + mp4 H.264):
 * cada navegador elige la que sabe reproducir, así nunca se queda congelada.
 * El <video> se crea fuera del DOM y se enchufa a una THREE.VideoTexture.
 */
function useFlowTexture() {
  const { video, texture } = useMemo(() => {
    const v = document.createElement("video")
    v.muted = true
    v.loop = true
    v.playsInline = true
    v.autoplay = true
    v.crossOrigin = "anonymous"
    v.preload = "auto"
    const webm = document.createElement("source")
    webm.src = "/brand/app-flow.webm"
    webm.type = "video/webm"
    const mp4 = document.createElement("source")
    mp4.src = "/brand/app-flow.mp4"
    mp4.type = "video/mp4"
    v.appendChild(webm)
    v.appendChild(mp4)
    const t = new THREE.VideoTexture(v)
    t.colorSpace = THREE.SRGBColorSpace
    return { video: v, texture: t }
  }, [])

  useEffect(() => {
    video.load()
    const tryPlay = () => video.play().catch(() => {})
    tryPlay()
    video.addEventListener("canplay", tryPlay, { once: true })
    return () => {
      video.pause()
      texture.dispose()
    }
  }, [video, texture])

  return texture
}

/**
 * Hero 3D: el celular Musuq como objeto real (Three.js vía R3F).
 *
 * "Bien hecho" = nada de foto plana sobre una caja:
 *  - Chasis metálico (meshPhysical) que refleja un entorno de estudio real
 *    (Lightformers, sin HDRI externo) con un rim cálido terracota de marca.
 *  - La pantalla es un VIDEO real del flujo de la app (pedido → cocina →
 *    listo → cobrado) detrás de una capa de vidrio con brillo (clearcoat).
 *  - Flota con física y se gira con el cursor. Sombra de contacto suave.
 * Se carga diferido y solo en desktop (ver phone-showcase).
 */
function Screen() {
  // Video del flujo de la app (1072x2144, con marco oscuro y esquinas redondeadas
  // ya horneados). Se reproduce en loop, silenciado. Va sobre un PLANO para que el
  // UV mapee 0..1 sin deformar.
  const video = useFlowTexture()

  return (
    <>
      {/* Pantalla viva */}
      <mesh position={[0, 0, 0.212]}>
        <planeGeometry args={[2.34, 4.68]} />
        <meshBasicMaterial map={video} toneMapped={false} />
      </mesh>

      {/* Vidrio: plano fino con clearcoat que recoge el reflejo del estudio */}
      <mesh position={[0, 0, 0.224]}>
        <planeGeometry args={[2.34, 4.68]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          roughness={0.06}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.05}
          color="#ffffff"
        />
      </mesh>
    </>
  )
}

function Phone() {
  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.5}>
      <group rotation={[0, -0.12, 0]}>
        {/* Chasis metálico oscuro: refleja el entorno (titanio) */}
        <RoundedBox args={[2.5, 5.06, 0.42]} radius={0.4} smoothness={10}>
          <meshPhysicalMaterial
            color="#1b1a18"
            metalness={0.92}
            roughness={0.42}
            clearcoat={0.5}
            clearcoatRoughness={0.5}
            envMapIntensity={1.1}
          />
        </RoundedBox>

        {/* Bisel negro mate detrás de la pantalla */}
        <RoundedBox
          args={[2.34, 4.7, 0.04]}
          radius={0.26}
          smoothness={8}
          position={[0, 0, 0.19]}
        >
          <meshStandardMaterial color="#0a0908" roughness={0.6} metalness={0.1} />
        </RoundedBox>

        <Screen />

        {/* Botones laterales */}
        <mesh position={[1.27, 0.55, 0]}>
          <boxGeometry args={[0.05, 0.6, 0.16]} />
          <meshStandardMaterial color="#2a2724" metalness={0.9} roughness={0.4} />
        </mesh>
        <mesh position={[-1.27, 0.85, 0]}>
          <boxGeometry args={[0.05, 0.34, 0.16]} />
          <meshStandardMaterial color="#2a2724" metalness={0.9} roughness={0.4} />
        </mesh>
        <mesh position={[-1.27, 0.42, 0]}>
          <boxGeometry args={[0.05, 0.34, 0.16]} />
          <meshStandardMaterial color="#2a2724" metalness={0.9} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Phone3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 28 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 8, 6]} intensity={1.1} />
      <directionalLight position={[-6, 1, 2]} intensity={0.3} color="#C8553D" />

      {/* Estudio de luz reflejado en el metal y el vidrio (sin HDRI externo) */}
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={2.2}
          position={[0, 4, 4]}
          scale={[8, 4, 1]}
          color="#ffffff"
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          position={[-5, 1, 3]}
          scale={[3, 6, 1]}
          color="#f3ece4"
        />
        <Lightformer
          form="rect"
          intensity={1.6}
          position={[5, -1, 2]}
          scale={[3, 6, 1]}
          color="#C8553D"
        />
        <Lightformer
          form="circle"
          intensity={1.2}
          position={[0, -3, 4]}
          scale={4}
          color="#B87333"
        />
      </Environment>

      <PresentationControls
        global
        snap
        speed={1.2}
        damping={0.25}
        polar={[-0.3, 0.4]}
        azimuth={[-0.7, 0.7]}
      >
        <Suspense fallback={null}>
          <Phone />
        </Suspense>
      </PresentationControls>

      <ContactShadows
        position={[0, -2.85, 0]}
        opacity={0.38}
        blur={2.6}
        scale={10}
        far={4.5}
        color="#2a1c14"
      />
    </Canvas>
  )
}
