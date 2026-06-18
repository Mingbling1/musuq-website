"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Float,
  PresentationControls,
  ContactShadows,
  RoundedBox,
  useTexture,
} from "@react-three/drei"

/**
 * Hero 3D: el celular Musuq como objeto real (Three.js vía R3F). La pantalla es
 * una TEXTURA sobre la cara del celular (no DOM): así pantalla y cuerpo son la
 * misma geometría y calzan perfecto en cualquier viewport. Flota y se puede
 * girar arrastrándolo (mouse y tacto). Se carga diferido y solo en desktop.
 */
function Phone() {
  const tex = useTexture("/brand/app-screen.png")

  return (
    <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.4}>
      <group>
        {/* cuerpo */}
        <RoundedBox args={[2.3, 4.5, 0.24]} radius={0.3} smoothness={8}>
          <meshStandardMaterial color="#161514" metalness={0.55} roughness={0.35} />
        </RoundedBox>
        {/* pantalla = textura sobre la cara frontal (sin paralaje) */}
        <mesh position={[0, 0, 0.122]}>
          <planeGeometry args={[2.04, 4.21]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Phone3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 6]} intensity={1.2} />
      <directionalLight position={[-6, 2, -4]} intensity={0.35} color="#C8553D" />

      <PresentationControls
        global
        snap
        speed={1.2}
        damping={0.25}
        polar={[-0.25, 0.35]}
        azimuth={[-0.6, 0.6]}
      >
        <Suspense fallback={null}>
          <Phone />
        </Suspense>
      </PresentationControls>

      <ContactShadows position={[0, -2.7, 0]} opacity={0.32} blur={2.8} scale={9} far={4} />
    </Canvas>
  )
}
