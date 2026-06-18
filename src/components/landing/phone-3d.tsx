"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Html,
  PresentationControls,
  ContactShadows,
  RoundedBox,
} from "@react-three/drei";
import { AppScreen } from "./app-screen";

/**
 * Hero 3D: el celular Musuq como objeto real (WebGL, Three.js vía R3F). Flota,
 * se puede arrastrar para girarlo (mouse y tacto), y muestra la app en vivo
 * (la pantalla es DOM real dentro de <Html>, por eso el texto queda nítido y el
 * flujo se anima). Se carga diferido y solo en desktop (ver phone-showcase).
 */
export default function Phone3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", touchAction: "none" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 6]} intensity={1.3} />
      <directionalLight position={[-6, 2, -4]} intensity={0.4} color="#C8553D" />

      <PresentationControls
        global
        snap
        speed={1.2}
        damping={0.25}
        polar={[-0.25, 0.35]}
        azimuth={[-0.6, 0.6]}
      >
        <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.4}>
          <group>
            {/* cuerpo del celular */}
            <RoundedBox args={[2.25, 4.6, 0.24]} radius={0.3} smoothness={8}>
              <meshStandardMaterial color="#161514" metalness={0.55} roughness={0.35} />
            </RoundedBox>
            {/* pantalla = DOM real, embebida con bisel */}
            <Html
              transform
              distanceFactor={2.4}
              position={[0, 0, 0.122]}
              style={{ pointerEvents: "none" }}
              zIndexRange={[10, 0]}
            >
              <AppScreen />
            </Html>
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2.7, 0]} opacity={0.32} blur={2.8} scale={9} far={4} />
    </Canvas>
  );
}
