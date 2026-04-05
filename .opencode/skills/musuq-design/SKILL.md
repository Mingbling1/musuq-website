---
name: musuq-design
description: Sistema de diseno musuq - paleta warm/terracotta/sage, tipografia Playfair + DM Sans, animaciones CSS, grain texture, reglas visuales
license: MIT
compatibility: opencode
metadata:
  audience: developer
  project: musuq
---

# musuq Design System

Identidad visual organica, calida, editorial. Inspirado en artesania peruana.

## Marca

- **Nombre:** musuq (quechua = "nuevo")
- **Dominio:** musuq.tech
- **Email:** hello@musuq.tech
- **Logo:** Semilla con 3 hojas brotando (SVG en `icons/logo.tsx`)
- **Filosofia:** "Lo simple es lo que funciona"
- **Grain texture:** Overlay sutil en `body::after` — es identidad, no remover

## Paleta de colores (en globals.css)

```css
/* Fondos cream */
cream-50: #FDFCFA   (mas claro)
cream-100: #FAF8F5  (background principal)
cream-200: #F5F0EB  (secciones alternas)
cream-300: #EDE8E1
cream-400: #E8E0D6

/* Grises cafe (textos) */
warm-400: #B5ADA3   (textos debiles)
warm-500: #8A8378   (body text)
warm-600: #4A4540   (textos oscuros)
warm-700: #2D2926   (muy oscuro)
warm-800: #1A1A1A   (mas oscuro)

/* Acentos */
terracotta: #C8553D      (primario - rojo arcilla)
terracotta-light: #D4765F
sage: #6B7C5E           (verde salvia)
sage-light: #8A9B7D
copper: #B87333         (cobre)
```

## Tipografia

| Fuente | Tipo | Uso | Pesos |
|--------|------|-----|-------|
| Playfair Display | Serif | Headlines, titulos | 400, 500, 600, 700 |
| DM Sans | Sans-serif | Cuerpo, nav, botones | 400, 500, 600, 700 |

Variables CSS: `--font-serif`, `--font-sans`

## Animaciones CSS (globals.css)

10 clases de animacion, todas desktop-only (`@media (min-width: 1024px)`):

| Clase | Efecto |
|-------|--------|
| drift-y | Translacion Y -6px |
| drift-y-slow | Translacion Y -6px, ciclo 9s |
| drift-y-reverse | Translacion Y +6px |
| drift-x | Translacion X 5px |
| soft-pulse | Opacidad 0.6→1 |
| gentle-sway | Rotacion 0→1deg→-1deg→0 (bidireccional) |
| micro-tremble | Jitter muy sutil |
| soft-bounce | TranslateY -3px hop |
| float-orbit | Orbita diagonal 4 puntos |
| breathe | Scale 1→1.04 |

## Grain texture overlay

```css
body::after {
  /* feTurbulence fractalNoise, opacity 0.03, z-index 9999 */
}
```

## Reglas de diseno

1. **NO usar** azules, violetas ni colores neon
2. **Serif** (Playfair) solo para headlines, nunca para body
3. **Animaciones** sutiles — nada llamativo ni distractor
4. **Grain overlay** es identidad de marca, no remover
5. **Secciones alternas** usan `bg-cream-200/40` para crear ritmo visual
6. **Separadores**: SectionDivider (linea + hoja) y SectionFade (gradientes)
