# Lottie en la tarjeta "Potenciado con IA" (Benefits) + corrección del CLAUDE.md

**Fecha:** 2026-06-23
**Proyecto:** musuq-website (landing de producto, musuq.tech — Next.js 16 + React 19, deploy Cloudflare Workers)
**Estado:** Diseño aprobado por el usuario. Pendiente plan de implementación.

## Objetivo

Agregar **una** animación Lottie on-brand a una section existente del landing: el visual de la
tarjeta **"Potenciado con IA"** dentro de **Benefits**, reemplazando el "core" de IA hecho con
CSS por un Lottie más fluido y vivo. Además, **corregir el `CLAUDE.md`** del proyecto, que está
desactualizado (describe un landing viejo de agencia, no el de producto actual).

> Restricción del usuario: agregar Lottie a una section **existente**, NO crear una section nueva.

## Estado actual verificado

- `Landing.tsx` renderiza: `Navbar → Hero → Benefits → VSBanner → ScrollyPhone → ScrollyTPV → Pricing → Footer`.
- `Benefits.tsx` tiene 3 tarjetas: "Todo desde un punto" (`.viz-dev`), **"Potenciado con IA" (`.viz-ai`)**, "CRM + Contabilidad" (`.viz-biz`).
- El visual `.viz-ai` (en `landing.css`): un `.core` 140×140 con gradiente radial `#F6E0D6→#C8553D→#7A2F20`, glow, `animation:ai-pulse`; 2 `.ring`/`.ring2` que rotan (`ai-spin`); 4 `.spark` (`ai-tw`). Dentro de `.benefit__viz` (absolute, inset 60px 0 16px) con un glow `::before` de 260px.
- El landing **no usa Lottie** todavía. Anima con Framer Motion + CSS `@keyframes` (respetando `prefers-reduced-motion`).
- Marca: terracota `--terra #C8553D`, cobre `#B87333`, tinta `#1E1C1C`, crema `#FAF8F5`.

### Desincronización del CLAUDE.md (a corregir)

`CLAUDE.md` describe componentes y composición que **ya no existen**:
- Dice page: `Hero > Services > TechStack > Process > Testimonials > FAQ > CTA` y lista
  `services.tsx, process.tsx, testimonials.tsx, faq.tsx, tech-stack.tsx, cta.tsx, demos/`
  (minúsculas, landing de **agencia**). **Real:** `Navbar, Hero, Benefits, VSBanner, ScrollyPhone,
  ScrollyTPV, Pricing, Footer` (PascalCase, landing de **producto**).
- Dice anchors `#servicios, #proceso, #trabajo, #faq, #contacto`. **Real:** `#bondades, #comparativa,
  #precios, #scrolly, #tpv, #track`.
- Dice fuentes `Playfair Display + DM Sans` y "Switzer/Clash ya no se usan". **Real** (layout.tsx):
  Switzer (`--font-sans`, cuerpo) + Clash Display (`--font-fraunces`, títulos) + Anton + Caveat (acentos).

## Diseño

### 1. Animación Lottie "núcleo de IA"

Autorada a mano (como en la app), fondo transparente, colores de marca:
- **Orbe central**: terracota (`#C8553D`) con un highlight más claro (`#F6E0D6`) arriba-izquierda
  para dar volumen; respira (scale loop suave). Un halo terracota tenue detrás como glow.
- **2 anillos** orbitando a distinta velocidad (rotación loop), cada uno con un nodo/punto
  (blanco y terracota) sobre el anillo.
- **2–3 chispas** que titilan (opacity + scale loop), color crema.
- Loop continuo, ~3s, viewBox 200×200.

Validación obligatoria: render por screenshot (lottie-web) antes de integrar; iterar hasta que
se vea limpio y on-brand. Fallback: si el orbe con gradiente no renderiza bien, usar sólido +
highlight.

### 2. Integración

- Instalar `lottie-react` en `musuq-website`.
- Crear `src/components/landing/LottieViz.tsx`: wrapper client, **lazy** (dynamic import, sin SSR),
  decorativo (`aria-hidden`), respeta `prefers-reduced-motion` (muestra el frame final, sin animar).
  NO usa `motion.div whileInView` (respeta la regla anti-flicker iOS del landing).
- En `Benefits.tsx`, dentro de la tarjeta "Potenciado con IA": reemplazar el contenido de
  `<div className="benefit__viz viz-ai">` (los `.core/.ring/.spark`) por `<LottieViz src="/lottie/ia-core.json" className="..." />`. Se **conserva** `.benefit__viz` y su glow `::before`.
- El JSON va en `public/lottie/ia-core.json`.
- Las otras 2 tarjetas, el copy, el link (`→ app.musuq.tech`) y la estructura quedan **iguales**.

### 3. Corrección del CLAUDE.md

Actualizar la sección **"## Estructura"** (lista de componentes + composición de `page.tsx`/`Landing.tsx`),
los **anchors** y las **fuentes** para reflejar el landing de producto real (ver "Desincronización"
arriba). No reescribir sin necesidad otras secciones que ya estén correctas (dominio, deploy,
reglas de Next 16).

## Alcance / fuera de alcance

- **Dentro:** la tarjeta "Potenciado con IA" (su visual), el wrapper Lottie, el asset, y el CLAUDE.md.
- **Fuera (YAGNI):** ninguna section nueva; no se tocan Hero/VSBanner/Scrolly/Pricing/Footer; no se
  cambian las otras 2 tarjetas; no se reescribe el resto del CLAUDE.md.

## Verificación

- Render del Lottie validado por screenshot.
- `npm run build` (Next 16) verde.
- Visual de la tarjeta reemplazado; reduced-motion muestra frame estático.

## Notas

- Trade-off: suma `lottie-react` (justificado: pedido del usuario). El landing prefería "SVG puro
  sin JS", pero Lottie renderiza en SVG y respeta reduced-motion → encaja sin romper esa filosofía.
