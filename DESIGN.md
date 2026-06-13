# DESIGN.md — Musuq (landing)

## Color (OKLCH, neutrales tintados — nunca #000/#fff)

Estrategia: **Committed** — la terracota carga la identidad sobre una base crema cálida; secciones puntuales **drenched** en carbón para contraste dramático.

| Rol | Hex | OKLCH aprox | Uso |
|---|---|---|---|
| Crema (fondo) | `#FAF8F5` | `oklch(0.98 0.004 80)` | base luminosa |
| Terracota (marca) | `#C8553D` | `oklch(0.59 0.13 38)` | acción, énfasis, identidad |
| Carbón (texto/secciones) | `#1A1A1A` | `oklch(0.22 0.004 60)` | texto, secciones drenched |
| Marrón (acento) | `#6B4A33` | `oklch(0.42 0.05 55)` | acento secundario, profundidad cálida |
| Terracota clara | `#D4765F` | `oklch(0.68 0.11 38)` | sobre carbón, hovers |

Neutros tintados hacia el hue cálido (chroma 0.004–0.01). **Sin verde.**

## Theme

**Escena:** un comerciante peruano revisa Musuq en su celular dentro de su local moderno y bien iluminado, de día, sintiéndose en control y orgulloso. → Base **clara y cálida** (crema), con **rupturas en carbón drenched** para momentos de peso (manifiesto, cierre, antes/después). El carbón da drama; la crema da calidez y aspiración.

## Typography

- **Display / títulos / wordmark:** Barlow Semi Condensed 700/800 — enorme, kinético, `tracking` apretado, `leading` ~0.92. Es la voz visual.
- **Cuerpo:** Barlow 400/500. Line-length 65–75ch.
- Escala con contraste ≥1.25; nada plano. Los titulares deben ser grandes y seguros.

## Elevación y layout (anti-genérico)

- **Prohibido el card border+shadow** como recurso. Profundidad por: bloques de color full-bleed, cambios de fondo (crema ↔ carbón), espacio negativo generoso, superposición/parallax, hairlines finísimos solo cuando aportan.
- Layouts **editoriales y asimétricos**, no grillas de cards idénticas. Romper el ritmo del spacing a propósito.
- Pocos contenedores; secciones que respiran a ancho completo.

## Motion

- **Lenis** smooth scroll global. Scroll-driven: reveals por línea (clip/mask), parallax por capas, scroll-scrub en secciones clave, contadores atados al scroll.
- Easing **ease-out-expo/quart**. Sin bounce/elastic. No animar propiedades de layout (usar transform/opacity).
- Fallback completo con `prefers-reduced-motion` (estado final visible en SSR).
- El **video loop** del producto es pieza central, no decorativo.

## Mascota

Zorro (3 poses en `Brand/Mascota`). Aparece en hero y momentos de emoción/cierre. Tamaño contenido, integrado, no sticker pegado.

## Bans (refuerzo del shared law)

side-stripe borders · gradient text · glassmorphism decorativo · hero-metric template · grillas de cards idénticas · em dashes en copy · estética rústico-pobreza.
