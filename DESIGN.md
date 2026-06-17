# DESIGN.md — Landing (musuq.tech)

> **Dos toolkits, no mezclar.** Este es el de la **landing** (register: **brand**),
> estilo editorial-brutalista sobre **crema**. El de las **apps** (web/iOS/Android,
> register: product) vive en `musuq-app/DESIGN.md` y usa **fondo BLANCO**, cards y
> fuente Barlow. No aplicar el lenguaje de la app a la landing ni viceversa.
> Receta de fotos/video y assets: `docs/brand-landing.md`.

## Register
**Brand** — la landing es marketing; el diseño ES el producto. Maximalismo editorial controlado, no UI de app.

## Color (OKLCH, neutros tintados — nunca #000/#fff)
Estrategia: **drenched dentro de marcos**, base crema fuera. El fondo de página es siempre crema y no cambia.

| Rol | Hex | Uso |
|---|---|---|
| Crema (fondo, fijo) | `#FAF8F5` (cream-50 `#FDFCFA`) | base luminosa de toda la página |
| Terracota (acción) | `#C8553D` (light `#D4765F`) | rellena **dentro** de bordes/celdas |
| Carbón (tinta/bordes) | `#1A1A1A` | texto y bordes de 2px |
| Grises cálidos | warm-600 `#4A4540` · 500 `#8A8378` · 400 `#B5ADA3` | texto secundario |
| Marrón (terciario) | `#6B4A33` | profundidad "tierra" |
| Copper (acento) | `#B87333` | números, badges, títulos |

**Sin verde.** Reparto: terracota → Hero/CTA/Rubros/Cierre · marrón → Módulos, tier alto de Pricing, base del Footer · copper → acentos.

## Theme
Escena: un cocinero peruano en su local moderno y bien iluminado, de día, en control. Base **clara y cálida** (crema); el peso lo dan los **bordes carbón** y los bloques **drenched** dentro de marcos, no fondos oscuros.

## Typography
- **Display brutalista:** Anton (`--font-anton`), uppercase condensada, `leading-[0.85]`. Es la voz visual.
- **Acento manuscrito:** Caveat (`--font-caveat`) para una palabra suelta.
- **Cuerpo / UI:** Switzer (`--font-sans`), 400/500/600.
- **Wordmark / serif:** Clash Display (`--font-fraunces`).
- Escala con contraste ≥1.25; titulares grandes y seguros. Cuerpo 65–75ch.

## Elevación y layout
- **Esquinas rectas.** Profundidad por **borde de 2px** carbón, no sombras. Prohibido el patrón card border+shadow como recurso.
- **Celdas con borde** (grid-lines: `bg-warm-800 gap-[2px]` + celdas crema; o `border-2` + divisores `border-t-2`/`border-l-2`).
- Secciones **drenched** → enmarcadas en border con padding. Sin fondo → limpias. Layouts editoriales, no grillas de cards idénticas.

## Motion
- Smooth scroll (Lenis). Easing ease-out-expo `cubic-bezier(0.16,1,0.3,1)`; solo `transform`/`opacity`; sin bounce.
- Loops de demo en Rubros (riel de pedidos, escaneo de carta, flujo de cobro). Parallax con spring en el hero. **Video loop del hero = pieza central.**
- Fallback completo con `prefers-reduced-motion` (estado final visible en SSR).

## Mascota
Zorro (poses en `Brand/Mascota`). Aparece contenido e integrado en momentos de marca, no como sticker pegado.

## Bans
side-stripe borders · gradient text · hero-metric template · grillas de cards idénticas · **em dashes en copy** · esquinas muy redondeadas · serif tipo Georgia/Playfair · estética rústico-pobreza · **fondo blanco (eso es de la app)**.

**Glassmorphism:** solo acento sutil y con propósito (navbar frosted); nunca pesado/default ni si baja la legibilidad.
