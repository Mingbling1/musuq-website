# DESIGN.md — Landing (musuq.tech)

> **Dos toolkits, no mezclar.** Este es el de la **landing** (register: **brand**),
> estilo editorial-brutalista sobre **crema**. El de las **apps** (web/iOS/Android,
> register: product) vive en `musuq-app/DESIGN.md` y usa **fondo BLANCO**, cards y
> fuente Barlow. No aplicar el lenguaje de la app a la landing ni viceversa.
> Receta de fotos/video y assets: `docs/brand-landing.md`.

## Register
**Brand** — la landing es marketing; el diseño ES el producto. Maximalismo editorial controlado, no UI de app.

## Color (OKLCH, neutros tintados — nunca #000/#fff)
Estrategia: **drenched dentro de marcos**, base crema fuera. El fondo **base** es crema (`--canvas #FAF8F5`) y no cambia — **excepto el hero**, que es oscuro (`#1a1310`) con degradado para sostener imagen y texto claros. Tokens reales: `--canvas #FAF8F5`, `--terra #C8553D`, `--terra-tint #FCEFEC`, `--ink #1E1C1C`, `--muted #706464`, `--subtle #F7F2EC`, `--cobre #B87333`.

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
Escena: un cocinero peruano en su local moderno y bien iluminado, de día, en control. Base **clara y cálida** (crema); el peso lo dan los **bordes** y los bloques **drenched** dentro de marcos. **Excepción:** el hero usa fondo oscuro con la imagen del celular sobre degradado terracota→carbón.

## Typography
- **Display / títulos:** Playfair Display (serif), 500/600/700 — la voz visual (h1/h2).
- **Cuerpo / UI:** DM Sans, 400/500/600/700.
- **Mockups de la app:** Barlow / Barlow Semi Condensed (las pantallas dibujadas imitan la tipografía del producto).
- Escala con contraste ≥1.25; titulares grandes y seguros. Cuerpo 65–75ch.

## Elevación y layout
- **Esquinas redondeadas moderadas:** `--r-md` 16px (botones/inputs), `--r-lg` 24px (cards), `--r-xl` 32px (secciones grandes); mockups más redondeados (celular 46px). Profundidad por **borde 1px–2px** (`--line`/carbón) y separadores entre secciones; sombras suaves permitidas en mockups.
- **Celdas con borde** (grid-lines: `bg-warm-800 gap-[2px]` + celdas crema; o `border-2` + divisores `border-t-2`/`border-l-2`).
- Secciones **drenched** → enmarcadas en border con padding. Sin fondo → limpias. Layouts editoriales, no grillas de cards idénticas.

## Motion
- Smooth scroll (Lenis). Easing ease-out-expo `cubic-bezier(0.16,1,0.3,1)`; solo `transform`/`opacity`; sin bounce.
- Loops de demo en Rubros (riel de pedidos, escaneo de carta, flujo de cobro). **El hero es una imagen estática** (celular con póster de marca sobre degradado terracota→carbón, generada con GPT Image), no video.
- Fallback completo con `prefers-reduced-motion` (estado final visible en SSR).

## Mascota
Zorro (poses en `Brand/Mascota`). Aparece contenido e integrado en momentos de marca, no como sticker pegado.

## Bans
side-stripe borders · gradient text · hero-metric template · grillas de cards idénticas · **em dashes en copy** · estética rústico-pobreza · **blanco puro #fff (usar crema-50 #FDFCFA)** · **fondo blanco de página (eso es de la app)**.

**Glassmorphism:** solo acento sutil y con propósito (navbar frosted); nunca pesado/default ni si baja la legibilidad.
