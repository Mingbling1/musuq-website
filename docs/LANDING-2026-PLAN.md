# Plan definitivo — Landing de producto Musuq (musuq-app)

## ⚠️ Adenda 2026-06-13 — Reframe: Musuq es para TODO el comercio (no solo gastronomía)

**Decisión de producto:** Musuq no es una app de restaurantes — es una **plataforma para el comercio peruano**. Hoy arranca por **gastronomía** (cafeterías/restaurantes/pastelerías = vertical `hospitalidad`), pero el destino son **bodegas y abarrotes, tiendas/retail y servicios** (consistente con `packages/feature-registry` → verticales `hospitalidad`, `cita`…). Toda la landing y el hero loop deben comunicar esa **amplitud**, sin encasillarse en restaurantes.

**Overrides al plan de abajo:**
- **Posicionamiento (§1):** hero y manifiesto hablan de *"cada venta, de cualquier negocio"*. Restaurantes = el primer vertical y la prueba viva, no el techo.
- **Sección Rubros (sección 3):** deja de ser solo Cafeterías/Restaurantes/Pastelerías → reagrupar en **familias de comercio**: Gastronomía *(live)*, Bodegas y abarrotes, Tiendas/Retail, Servicios *(próximamente)*. Rótulo honesto: *"Empezamos por gastronomía, vamos por todo el comercio."* Marcar live vs próximamente.
- **Registro visual (CRÍTICO):** **moderno, aspiracional, premium y limpio** — NUNCA rústico/folklórico/documental. Servimos a mypes e informales, pero la marca los hace sentir **elevados y profesionales**, jamás "pobres". Referencia de registro: product films tipo Stripe / Linear / Nubank / Mercado Pago. Prohibido: contexto polvoriento/precario, "pobreza pintoresca".
- **Hero video loop:** **vertical-agnóstico** y liderado por **el producto (la app)** o por **motion abstracto de marca** — universal, sin lifestyle de pobreza. Si se usa gente, en registro **fintech-aspiracional** (emprendedores jóvenes, negocios modernos y bien iluminados), no documental.
- **Dominio (confirmado):** esta landing de producto **reemplaza la home actual de `musuq.tech`** (que hoy es de "estudio digital/agencia", desactualizada). App en `app.musuq.tech`.

---

> **Stack verificado:** Next 16.2.1 (App Router, `reactCompiler: true`) · React 19.2.4 · Tailwind v4 (`@theme inline`) · framer-motion 12.38 · lucide-react · deploy `@opennextjs/cloudflare` 1.17 + wrangler. Repo: `/mnt/data/projects/musuq/musuq-website`.
> **Marca definitiva:** terracota `#C8553D` (acción) · carbón `#1A1A1A` (texto) · crema `#FAF8F5` (fondo) · marrón `#6B4A33` (acento). **SIN verde.** Display = Barlow Semi Condensed 700/800 · cuerpo = Barlow 400/500/600. Solo smartphones en mockups. Mascota: zorro chibi peruano, 3 poses.

---

## 1. Resumen ejecutivo y posicionamiento

### De agencia → producto
La web actual (`page.tsx`) es de **estudio digital/agencia**: vende landings, e-commerce, automatizaciones y software a medida (Hero con `BatteryStack`, Services alternados, Process, Testimonials, FAQ, CTA "iniciar un proyecto"). El rediseño la convierte en **landing de producto de una sola app SaaS**: `musuq` = app de gestión y punto de venta para mypes peruanas (caja, inventario, ventas, clientes), con CTA primario único **"Crear cuenta gratis" → https://app.musuq.tech/signup**.

### Cambio de eje
| Dimensión | Antes (agencia) | Después (producto) |
|---|---|---|
| Oferta | Servicios a medida | Un producto: la app |
| CTA | "Iniciar un proyecto" / lead | "Crear cuenta gratis" (signup) |
| Prueba | Portafolio/testimonios | Demo del producto, dashboard vivo, before/after en S/ |
| Marca | Playfair + DM Sans + sage verde | Barlow Semi Cond + Barlow + terracota/carbón/crema/marrón |
| Tono | Profesional digital | Cálido · peruano · premium · cercano (mascota zorro) |

### Arquitectura del embudo (orden de secciones en `page.tsx`)
1. **Hero** — TOFU/activación. "Tecnología que impulsa cada venta". Video loop + zorro saludando + CTA signup.
2. **Manifiesto** — creencia. "Transformamos tus procesos comerciales tradicionales en experiencias inteligentes".
3. **Rubros** — autocalificación. Cafeterías / restaurantes / pastelerías.
4. **Plataforma** — deseo ("show, don't tell"). Dashboard vivo.
5. **Diferenciador** — reframe competitivo (costos, experiencia, adopción).
6. **Antes/Después** — convicción cuantificada en soles (S/26,370/año perdidos).
7. **Mascota + confianza** — pertenencia. "Hecho en Perú, para quienes mueven al Perú".
8. **Cierre + Footer** — conversión final + utilitario.

### KPIs
CTR del CTA primario (signup) por sección · play del demo · scroll-depth >75% Manifiesto · clics CTA por rubro · LCP <2.5s · CLS <0.1 · INP <200ms.

---

## 2. Sistema visual y de motion

### 2.1 Tokens (a editar en `globals.css @theme inline` + `:root`)
**Eliminar / migrar:** `--color-sage`, `--color-sage-light`, `--color-copper` y los usos en `hero.tsx` y `service-visuals.tsx`. `--accent` (hoy `#6B7C5E` sage) → `#6B4A33` marrón.

**Añadir:**
```css
@theme inline {
  --color-brown: #6B4A33;          /* acento cálido (reemplaza sage/copper) */
  --color-clay-700: #6B4A33;       /* alias semántico para escenarios */
  --ease-apple: cubic-bezier(0.32, 0.72, 0, 1);   /* easing de marca (convive con el 0.16,1,0.3,1 existente) */
  --shadow-warm: 0 30px 80px -20px rgba(200,85,61,0.28), 0 8px 24px -12px rgba(107,74,51,0.35);
  --font-display: var(--font-display);  /* Barlow Semi Condensed */
}
```
Paleta crema/warm existente (`cream-50..400`, `warm-400..800`, `terracotta`, `terracotta-light`) **se conserva**, ya cubre carbón/crema. `--font-heading` deja de apuntar a serif y pasa a `var(--font-display)`.

### 2.2 Tipografía (a editar en `layout.tsx`)
Reemplazar `DM_Sans` + `Playfair_Display` por:
```ts
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
const barlow = Barlow({ variable: "--font-sans", subsets: ["latin"], weight: ["400","500","600"], display: "swap" });
const barlowSemi = Barlow_Semi_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["700","800"], display: "swap" });
```
- **Display (títulos):** Barlow Semi Condensed 800, kinético, enorme. `clamp(...)`, `leading: 0.92`, `tracking: -0.02em`, palabra-ancla en terracota.
- **Cuerpo:** Barlow 400/500.
- Conservar `--font-serif` token pero sin uso (o removerlo de `@theme`).

### 2.3 Lenguaje de scroll y motion (timing reference)
| Caso | Duración | Easing | Delay |
|---|---|---|---|
| Reveal por línea (clip-path) | 0.8–0.9s | `--ease-apple` | stagger 80–90ms |
| Reveal de bloque (ScrollReveal) | 0.7–0.85s | `cubic-bezier(0.16,1,0.3,1)` (existente) | i·70ms |
| Hero/entrada cinemática | 1.0–1.1s | `--ease-apple` | encadenado |
| Hover | 0.2–0.3s | ease-out | — |
| Parallax/scrub | — | linear (scroll-bound) | — |
| Contador animado | 1.4–1.6s | ease-out | on-enter once |

**Principios:** animaciones solo `transform`/`opacity`/`filter` (sin reflow). `will-change` puntual y removido al terminar. **Prohibido `motion.div whileInView`** (flicker iOS Safari) → reveals por IntersectionObserver+CSS o scroll-driven determinista (`useScroll`/`useTransform`). Reveal de texto por línea = `<span>` en `overflow-hidden` + `clip-path inset(100% 0 0 0)→inset(0)` + `translateY(110%)→0`.

### 2.4 Reduced-motion (regla global, no negociable)
- Fuente de verdad: `useReducedMotion()` (framer-motion) + `matchMedia('(prefers-reduced-motion: reduce)')` + bloque `@media (prefers-reduced-motion: reduce)` ya existente en `globals.css:373` (se **extiende**, no se reemplaza).
- Si reduce: **no se monta Lenis**, no scrub, no pin, no parallax, no magnético, no saludo en loop; contadores muestran valor final; clip-paths en estado final; secciones pinned → `position: static; height: auto`.
- **Cada sección renderiza su estado final en SSR** (nunca `opacity:0` dependiente de JS sobre el contenido LCP). Patrón a replicar: el `ScrollReveal` actual ya añade `is-visible` directo si reduce.

---

## 3. Arquitectura técnica

### 3.1 Smooth scroll + scroll-scrub elegidos
- **Smooth scroll = Lenis** (paquete `lenis`, binding `lenis/react`), montado en un provider `"use client"` que envuelve `{children}` en `layout.tsx`. ~3KB, estándar award-style.
- **Pinning / scroll-scrub / horizontal = GSAP ScrollTrigger** dentro de `useGSAP()` (`@gsap/react`), con `gsap.matchMedia()` para gating responsive + reduced-motion. GSAP 3.13+ trae todos los plugins gratis.
- **Parallax suave, reveals por línea, botones magnéticos, contadores = framer-motion** (ya instalado) con `useScroll`/`useTransform`/`useSpring`/`useMotionValue`. Envolver árbol animado en `LazyMotion features={domAnimation}` para recortar bundle.
- **Reveals de bloque genéricos = el `ScrollReveal` existente** (IntersectionObserver + CSS), se generaliza, no se descarta.

**Puente crítico Lenis ↔ ScrollTrigger** (en el provider, dentro de `useEffect`, solo cliente):
```ts
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
```
`gsap.registerPlugin(ScrollTrigger)` solo en cliente. `useGSAP` hace cleanup/`kill()` automático (evita leaks en navegación App Router).

> **Nota de alcance:** el material original mezcla "Lenis-only" (Hero/Manifiesto) con "Lenis + GSAP" (arch). **Decisión:** Lenis global + GSAP solo para las 4 secciones pinned (Rubros horizontal, Plataforma, Diferenciador, Antes/Después). Hero y Manifiesto pueden resolverse con framer-motion `useScroll` puro (sin GSAP) porque su scrub es ligero; si una sección necesita pin real, usa GSAP. No duplicar motores en la misma sección.

### 3.2 Dependencias npm nuevas
```bash
export NVM_DIR="/home/jac/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22
npm i lenis gsap @gsap/react
```
- `lenis` (incluye `lenis/react`) — **no** usar `@studio-freight/*` (deprecado).
- `gsap` (incluye ScrollTrigger, SplitText).
- `@gsap/react` (`useGSAP`).
- **No** añadir `motion` (duplica framer-motion). **No** ScrollSmoother (de pago).

### 3.3 Estructura de archivos
```
src/lib/
  motion.ts                         # EASE_APPLE=[0.32,0.72,0,1], durations, prefersReducedMotion(), formatSoles (Intl es-PE)
  use-prefers-reduced-motion.ts     # hook matchMedia
src/components/motion/
  motion-provider.tsx               # "use client" — contexto {reducedMotion, isMobile} (max-width:1023px)
  smooth-scroll-provider.tsx        # "use client" — <ReactLenis root> + sync ScrollTrigger/ticker; no monta si reduce||mobile
src/components/landing/
  hero/HeroProductLoop.tsx          # + HeroVideoBackground, HeroWordmark, KineticHeadline, MagneticButton, PhoneMockup, FoxGreeter, AnimatedCounter, useLenis
  manifesto-pin.tsx                 # + ManifestoStage, ManifestoStatic, AndeanGeometry, MagneticChip
  rubros-gallery.tsx                # + RubroPanel, RubroCard, AndeanFrame, PhoneMockup, AnimatedCounter
  plataforma-showcase.tsx           # + DashboardMock, DashboardMockPhone, BenefitPills, AndeanToast, MagneticLink, useScrollScrub
  diferenciador/DiferenciadorPinned.tsx  # + ReasonStepper, PhoneStage, MagneticButton, AnimatedTotal, LineReveal
  before-after/BeforeAfterMusuq.tsx # + StatCard, AnimatedCounter, PhoneMockup, AndeanSeam, MagneticButton
  PeruTrustMoment.tsx               # + LineRevealHeading, FoxMascot, TrustChip, AnimatedCounter, LogoMarquee, MagneticButton, TerracottaCtaBand
  FinaleFooter.tsx                  # + FinaleCTA, SiteFooter, SplitLineReveal, MagneticButton, AndeanGlyph (reemplaza cta.tsx + footer.tsx)
  shared/MagneticButton.tsx         # un solo magnético reutilizable (gated hover/pointer + reduced-motion)
  shared/AnimatedCounter.tsx        # un solo contador reutilizable
src/components/brand/
  AndeanGeometry.tsx / andean-tile (defs <pattern>/<use>)
src/components/icons/
  logo.tsx (existe), andean-motif.tsx (nuevo)
```
**`page.tsx`** se reescribe con las 8 secciones nuevas. Secciones pinned (Rubros, Plataforma, Diferenciador, Antes/Después) se importan con `next/dynamic(..., { ssr: false })`.

### 3.4 SSR / Cloudflare
- Deploy real es **Node runtime en Workers** (OpenNext), middleware edge. Nada de `window`/`document` a nivel de módulo: Lenis y GSAP solo en `useEffect`/componentes `"use client"`.
- `lenis/react` y `useGSAP` montan en `useEffect` → SSR-safe, no corren en el worker durante build.
- **Quitar `data-scroll-behavior="smooth"` del `<html>`** y `scroll-smooth` de `globals.css html` cuando Lenis esté activo (doble suavizado pelea). Lenis maneja anchors con `lenis.scrollTo()`; interceptar `#rubros`, `#features`, `#contacto`.
- El `<html>` mantiene `lang="es"`. Provider Lenis envuelve `{children}` pero **Navbar fixed queda fuera del transform de Lenis**.

### 3.5 Performance / LCP
- **LCP del hero = poster estático `next/image` (`priority`, `fetchPriority="high"`, AVIF/WebP vía `sharp`) o el H1 texto — NUNCA el video.** Video `<video preload="none" muted loop playsInline>` se monta tras hidratación y hace cross-fade sobre el poster en `canplay`.
- Video con dimensiones explícitas (anti-CLS), `.webm` (VP9/AV1) + `.mp4` (H.264). En mobile / `Save-Data` / 2g-3g → solo poster.
- Secciones pesadas con `next/dynamic({ssr:false})`. `LazyMotion+domAnimation`. `content-visibility:auto` en bloques fuera de viewport (fallback estático).
- Diferir Chatwoot/Analytics a `requestIdleCallback`/`load` para no competir con LCP del hero.
- `will-change` solo durante animación; GSAP con `force3D` y limpieza de props.

---

## 4. Secciones de la landing

### 4.1 Hero — "Tecnología que impulsa cada venta" · `HeroProductLoop.tsx`
**Objetivo:** TOFU/activación. En <3s: qué es musuq, que es cálida/peruana/premium, que probarla es gratis. KPI: CTR "Crear cuenta gratis" + play demo. Ancla LCP y tono.

**Layout desktop (≥1024px):** 100svh (min 720px) full-bleed. Capa 0 = video loop cafetería peruana graded terracota (`object-cover`) + overlay duotono (gradiente crema 92% → terracota 30% diagonal) + viñeta. Grid 12-col, `max-w-[1280px]`, px-8.
- **Col 1–7 (editorial, centro-bajo):** eyebrow pill (`punto terracota + "App de gestión y punto de venta · hecha en Perú"`, Barlow 500 uppercase tracking 0.18em, crema/70 backdrop-blur) → H1 kinético Barlow Semi Cond 800 3 líneas `clamp(3rem,7vw,6.5rem)` leading 0.92 carbón, "impulsa" en terracota con subrayado-trazo andino SVG que se dibuja → subcopy Barlow 400 `max-w-[34rem]` → CTA dual (primario terracota magnético + "Ver demo" ghost con play) → trust row (3 avatares + contador "+120").
- **Col 8–12 (producto):** smartphone mockup POS flotando, `rotate -6deg→0`, sombra cálida terracota; **zorro pose "túnica negra saludando"** (~180px) asomado borde inferior-derecho saludando hacia el copy; forma andina terracota/8% rotando lentísimo detrás.
- **Wordmark "musuq"** marca de agua Barlow Semi Cond 800 ~22vw, carbón/4%, anclado abajo cruzando el ancho (over video, under texto).

**Layout mobile (<1024px):** 1 columna 100svh safe-area. Video cubre (overlay 85% crema, más opaco) → eyebrow → H1 (`clamp 2.5→3.5rem`, 3 líneas) → subcopy corto → smartphone reducido con zorro saludando más pequeño → CTAs full-width apilados (primario arriba) → trust row compacta. Wordmark ~38vw detrás del teléfono. Video opcional (poster si conexión lenta). Chevron scroll-hint con bounce abajo (oculto en reduced-motion).

**Copy final:**
- Eyebrow: `App de gestión y punto de venta · hecha en Perú`
- H1: `Tecnología que / impulsa / cada venta` ("impulsa" terracota)
- Subcopy: `musuq es la app que ordena tu negocio y te ayuda a vender más: caja, inventario, ventas y clientes en un solo lugar. Pensada para la mype peruana — fácil, en español y desde tu celular.`
- CTA primario: `Crear cuenta gratis` → `https://app.musuq.tech/signup`
- CTA secundario: `Ver demo` (play)
- Microcopy: `Gratis para empezar · sin tarjeta`
- Trust: `+120 negocios peruanos ya venden con musuq` (contador 0→120)
- Scroll-hint aria: `Desliza para conocer musuq`

**Motion:** `EASE=[0.32,0.72,0,1]`. Entrada (una vez): wordmark clip-mask abajo→arriba 1.1s; H1 por línea `y:110%→0`+opacity stagger 0.09s; trazo andino `pathLength 0→1` 0.7s tras última línea; teléfono `y40→0 rotate-6→0` 1s delay 0.3s; zorro `scale 0.8→1` overshoot delay 0.6s + loop saludo (rotate ±6deg en hombro 2.2s, o breathe+bob si estático); contador `useInView` 0→120 en 1.4s. Scroll-scrub (Lenis): parallax por capas (video y:0→60, wordmark y:0→-40, teléfono y:0→-90, zorro y:0→-120), video `scale 1→1.06` clampeado. Botón magnético (spring 150/15, max ~10px, label 60%, solo pointer:fine). Video `autoPlay muted loop playsInline preload="metadata"`, poster LCP, fade-in en `canplay`. **Reduced-motion:** sin Lenis/parallax/scrub/saludo/contador animado/magnético; H1 completo; poster pausado.

**Assets:** `public/video/hero-cafe-terracota.{mp4,webm}` (<2.5MB, sin audio), `public/video/hero-cafe-poster.{webp,jpg}`, `public/mascota/zorro-tunica-saludando.{png,webp}` (de `Pose-0390.png`), smartphone POS `public/mockups/musuq-app-pos.png`, `andean-motif.tsx` SVG, avatares `public/trust/avatar-1..3.webp`, fuentes Barlow.

---

### 4.2 Manifiesto — "Quiénes / creencia" · `ManifestoPin.tsx`
**Objetivo:** TOFU→MOFU. Convertir promesa en creencia: "esta gente entiende mi negocio". Define categoría, instala contraste antes/después, humaniza. Sin CTA dura; micro-CTA de scroll. KPI: scroll-depth >75%, dwell.

**Layout desktop:** sección pinned ~280vh; hijo `sticky top-0 h-screen` = escenario. Grid 12-col `max-w-1280` px `clamp(24px,5vw,80px)`. UN escenario que muta en 3 actos:
- **Acto 1 (0–0.30):** eyebrow `QUIÉNES SOMOS · MANIFIESTO` (Barlow 600 tracking +0.18em marrón) + geometría andina SVG terracota 8–12% ~60vh sangrada derecha (parallax lento).
- **Acto 2 (0.20–0.75):** frase manifiesto Barlow Semi Cond 800 `clamp(2.6rem,7.2vw,7rem)` leading 0.94 carbón, ~8/12 col, reveal línea por línea con clip-path; anclas terracota ("inteligentes/interactivas/escalables"); "tradicionales" muta de atenuada→tachada marrón. Zorro túnica saludando ~34vh esquina inferior-derecha (parallax frontal).
- **Acto 3 (0.75–1):** frase se asienta arriba; bajada de categoría (Barlow 400 marrón) + "Hecho en Perú. Pensado para crecer."; chip magnético "Mira cómo funciona ↓" (terracota outline → `lenis.scrollTo('#rubros')`); geometría completa rotación y se asienta.
- Z: [1] geometría (lenta) → [2] frase (base) → [3] zorro (rápida) → [4] UI.

**Layout mobile:** SIN pin. `<section>` padding-block 14vh px-24. Eyebrow → geometría banda estática 8% → frase `clamp(2rem,9vw,3.4rem)` leading 0.98 reveal por línea vía IntersectionObserver (`.manifesto-line` clip-path, una pasada) → zorro ~58vw max 240px fade+translateY → bajada + firma → chip full-width ≥44px. Zorro único raster `loading="lazy" decoding="async"`.

**Copy final:**
- Eyebrow: `QUIÉNES SOMOS · MANIFIESTO`
- Frase: `Transformamos tus procesos / comerciales tradicionales / en experiencias de venta / [t]inteligentes[/t], [t]interactivas[/t] / y [t]escalables[/t].`
- Bajada: `Una sola plataforma de gestión comercial y digitalización operativa: para que vender deje de ser papeleo y se convierta en una experiencia que tu cliente recuerda.`
- Firma: `Somos Musuq — "nuevo" en quechua. Hecho en Perú. Pensado para crecer.`
- Chip: `Mira cómo funciona ↓`
- Alt zorro: `Zorro Musuq, la mascota peruana de la marca, saludando con la mano.`

**Motion:** desktop scrub pinned `useScroll({target, offset:["start start","end end"]})`; reveal por línea clip-path en sub-rangos escalonados ~0.06; contraste "tradicionales"→strike `scaleX 0→1` en [0.30,0.45]; parallax 3 velocidades (geometría y:[40,-120]+rotate, zorro y:['18vh','-6vh']+scale, saludo CSS `gentle-sway` mientras visible); chip magnético (spring 150/15, max 8px). **Mobile:** IntersectionObserver `.manifesto-line` + `.animate-fade-in`. **Reduced-motion:** render condicional `<ManifestoStatic/>` (estado final, sin montar componentes motion).

**Assets:** zorro `Pose-0390.png` (WebP/AVIF + PNG + SVG plano mobile), `AndeanGeometry` SVG inline (`currentColor`), ArrowDown lucide, grain existente, fuentes Barlow. **No usar gala ni casaca blanca aquí; no mockups.**

---

### 4.3 Rubros — "Hecho para tu tipo de negocio" · `rubros-gallery.tsx`
**Objetivo:** MOFU consideración/calificación. Autocalificación + especialización + micro-conversión segmentada (`?rubro=`). KPI: clics CTA por rubro, scroll-depth.

**Layout desktop:** galería scroll-horizontal pinned (`h-[300vh]`, inner `sticky top-0 h-screen`). Header editorial izquierda: eyebrow `Para tu rubro` (Barlow 11px uppercase tracking 0.22em marrón/70) + título Barlow Semi Cond 800 `clamp(3rem,7vw,6.5rem)` leading 0.92, "negocio" terracota, 2 líneas + subcopy + contador. Track de 3 paneles (`w-[80vw]` peek 20%) traslada en X por scroll (scrub real). Cada panel split 50/50: izquierda = número outline "01/02/03" stroke terracota detrás del nombre (Barlow Semi Cond 700 `clamp 2.5–4rem`) + dolor→solución + 3 "resuelve" con bullet rombo andino + botón magnético; derecha = foto lifestyle en máscara `AndeanFrame` (greca) + smartphone flotante contextual, parallax por capas (foto lenta < marco < smartphone). Barra de progreso 3 segmentos + hint "scroll →".

**Layout mobile:** carrusel nativo `overflow-x-auto scroll-snap-x mandatory`, tarjetas `w-[86vw]` peek. Tarjeta vertical: foto 4/5 con marco andino + badge número, nombre, 1 línea dolor→solución, 3 chips resuelve, CTA full-width. Smartphone pequeño semioculto esquina. Dots 3 segmentos (IntersectionObserver). Entrada con ScrollReveal (stagger 70ms).

**Copy final:**
- Eyebrow `Para tu rubro` · Título `Hecho para tu tipo de negocio` ("negocio" terracota)
- Subcopy: `No es software genérico adaptado a la fuerza. Musuq entiende cómo se cocina, se cobra y se atiende en tu rubro — y se siente hecho para ti desde el primer día.`
- Contador: `3 rubros · pensado para la gastronomía peruana`
- **01 Cafeterías:** `Las horas pico no avisan. Musuq ordena la cola, agiliza la caja y te muestra cuál es tu bebida estrella — para que el café salga rápido y la fila no espante a nadie.` · Resuelve: `["Comandas sin papeles","Caja en segundos","Tu producto estrella, a la vista"]` · CTA `Ver Musuq para cafeterías`
- **02 Restaurantes:** `Salón lleno, cocina al límite y mesas que rotan. Musuq conecta mozo, cocina y caja en un solo flujo, para que ningún pedido se pierda en el camino y cada mesa vuelva a venderse rápido.` · Resuelve: `["Mozo y cocina sincronizados","Mesas y rotación bajo control","Cierre de turno sin cuadrar a mano"]` · CTA `Ver Musuq para restaurantes`
- **03 Pastelerías:** `Pedidos por encargo, fechas que no se pueden mover y vitrina que cambia cada día. Musuq lleva tus encargos, te avisa qué hornear y cuida el margen de cada torta — para que ninguna fecha se te pase.` · Resuelve: `["Encargos con fecha y seña","Qué hornear hoy, claro","Margen real por producto"]` · CTA `Ver Musuq para pastelerías`
- Cierre: `¿Tu rubro no está en la lista? También te escuchamos →`
- aria carrusel: `Rubros que atiende Musuq: cafeterías, restaurantes y pastelerías`

**Datos:** `const rubros: Rubro[]` con `{ id:'cafeterias'|'restaurantes'|'pastelerias', numero, nombre, dolor, resuelve[], ctaHref:`/contacto?rubro=${id}`, foto, screen }`.

**Motion:** desktop `x = useSpring(useTransform(p,[0,1],["0vw","-160vw"]),{stiffness:90,damping:26,mass:0.6})`; parallax por panel; reveal título por línea (IntersectionObserver `.rubro-line`); número outline drift + wipe terracota al activarse; botón magnético (gated `hover:hover & pointer:fine`); contador rAF easeOutExpo once; barra 3 segmentos. **Mobile:** snap nativo, ScrollReveal, magnético OFF. **Reduced-motion:** grid estático 3 col (desktop)/stack (mobile), título completo, sin drift/wipe/magnético, contador final.

**Assets:** 3 fotos lifestyle (cafetería/restaurante/pastelería peruanos, 4/5 + horizontal, AVIF+WebP, grading cálido), 3 smartphone mockups contextuales, `AndeanFrame` SVG (clip-path greca), bullet rombo SVG, watermark andino 0.04, zorro `Pose-0390` pequeño en cierre, fuentes Barlow. **Foto del panel 1 (cafeterías) = candidata LCP** → `next/image priority fetchpriority=high`; las otras `loading=lazy`.

---

### 4.4 Plataforma — "Una sola plataforma, todo bajo control" · `plataforma-showcase.tsx`
**Objetivo:** MOFU deseo ("show, don't tell"). Dashboard vivo prueba que el producto existe, es bonito y peruano (S/, platos, zorro). KPI: scroll-depth + clic "Ver la plataforma en acción".

**Layout desktop:** pinned 300vh, viewport pegado, fondo crema + wash terracota 0–6% esquina + patrón andino 4%. Grid 12-col:
- **Col 1–5 (sticky):** eyebrow chip `LA PLATAFORMA` terracota → título Barlow Semi Cond 800 `clamp(2.8rem,5.2vw,5rem)` leading 0.95 ("todo bajo control" terracota) → párrafo Barlow 400 marrón → 3 pills (Gauge/Workflow/Zap) que se iluminan con el scrub → zorro túnica saludando ~120px anfitrión → link magnético "Ver la plataforma en acción →".
- **Col 6–12 (dashboard):** mockup panel real en marco navegador (3 dots crema + chip "app.musuq.tech"), radius-2xl, sombra cálida; arranca `rotateY 8deg rotateX 4deg` y se endereza a plano. Overlays DOM/SVG animados.
- **3 beats:** Beat1 (0–33%) panel se endereza + título reveal + pill1 + 3 KPIs count-up (S/282, S/870, 23); Beat2 (33–66%) pill2 + gráfico "Ventas por hora" (line-draw) + barras "Últimos 7 días" + banner "Vas bien" slide-in con check; Beat3 (66–100%) pill3 + donut "Cómo te pagaron" + toasts andinos flotantes ("2 productos bajos", "3 por reponer") + micro-bounce zorro.

**Layout mobile:** NO pinned, vertical apilado. Eyebrow → título `clamp 2.2–2.8rem` 2 líneas → dashboard en marco SMARTPHONE (versión mobile del panel, notch sutil) fade+rise → 3 pills scroll-x snap auto-resaltadas (CSS stagger) → zorro 84px junto CTA → CTA full-width "Ver la plataforma". Solo 2 overlays (KPI count-up + banner) para proteger LCP.

**Copy final:**
- Eyebrow `LA PLATAFORMA`
- Título: `Una sola plataforma. / Todo tu negocio, / bajo control.`
- Párrafo: `Centraliza la gestión de tu negocio, automatiza tu proceso comercial de punta a punta y gana velocidad operativa — todo desde un mismo lugar, en español y pensado para el Perú.`
- Pills: `Gauge — Control centralizado · "Ventas, caja, carta y clientes en un solo panel."` / `Workflow — Automatización comercial · "Tu proceso de venta corre solo, de pedido a caja."` / `Zap — Velocidad operativa · "Decisiones en segundos, no en hojas de cálculo."`
- Banner: `Vas bien — S/ 282 hoy, S/ 50 más que el miércoles pasado.`
- CTA desktop: `Ver la plataforma en acción →` · CTA mobile: `Ver la plataforma`
- Marco: `app.musuq.tech` · Alt: `Panel de Musuq mostrando ventas del día, gráficos y estado del negocio en tiempo real.`

**Motion:** `EASE=[0.32,0.72,0,1]`. Perspectiva `rotateY [8,0] rotateX [4,0] scale [0.92,1] y[40,0]` en p[0,0.25], `transform-style:preserve-3d perspective:1400px`. Título 3 spans clip-path. Pills activan en p 0.10/0.40/0.70 vía `motionValue.on('change')`. KPIs `useSpring` 0→282/870/23 en p[0.12,0.30]. Línea `pathLength` p[0.35,0.55]; barras `scaleY origin-bottom` stagger p[0.4,0.6]. Banner `y:-24→0` spring p=0.45. Donut arcos p[0.7,0.9]. Toasts parallax frontal p[0.72,0.85]. Link magnético spring 150/15. Zorro idle `breathe`/`float-orbit` + bounce p>0.92. **Mobile:** ScrollReveal + pills CSS stagger + 2 overlays once. **Reduced-motion:** `.plataforma-pinned{height:auto;position:static}`, todo en estado final.

**Assets:** `App design/nuevo diseño desktop/d-01-admi-dashboard.png` → `public/plataforma/dashboard-desktop.{webp,avif}`; `13-mobile-dashboard.png` → `dashboard-mobile.{webp,avif}`; zorro `Pose-0390` → `public/plataforma/zorro-saludo.png`; `public/plataforma/andean-chevron.svg`; lucide Gauge/Workflow/Zap/Check/ArrowRight/TrendingUp; marcos navegador/smartphone en CSS; token `--shadow-warm`; fuentes Barlow.

---

### 4.5 Diferenciador — "Un punto de venta pensado para tu negocio" · `diferenciador/DiferenciadorPinned.tsx`
**Objetivo:** MOFU. Reframe competitivo: 3 objeciones (caro/complicado/miedo) → 3 razones. Prueba visual (mockup). Hand-off a conversión. KPI: scroll-depth + clic CTA secundario.

**Layout desktop:** pinned ~250vh, grid asimétrico 5/7. Fondo crema con escenario carbón `#1A1A1A` `rounded-[2.5rem]` centro-derecha (device flota sobre carbón, premium tipo Apple). Izquierda sticky: eyebrow pill con glifo andino `Lo hacemos diferente` (uppercase tracking 0.22em terracota) → título Barlow Semi Cond 800 `text-6xl xl:text-7xl` leading 0.92 ("tu negocio" terracota, reveal por línea) → acordeón-stepper vertical 01/02/03 (solo activa expandida, sincronizada al scrub + a la pantalla del smartphone, barra de progreso vertical terracota) → CTA magnético "Quiero verlo en mi negocio" + link "Ver la demo →". Derecha (escenario carbón): smartphone `rotateY -8deg rotateX 4deg`→0, cross-fade/clip-swap de 3 pantallas; geometría andina marrón `#6B4A33` baja opacidad parallax lento; **zorro casaca blanca bordada** asomado esquina presentando.

**Layout mobile:** SIN pin, 1 columna. Eyebrow → título `text-4xl` reveal → smartphone escenario carbón full-width `rounded-3xl` (zorro esquina) → 3 razones como cards apiladas (crema-200, número grande terracota, ScrollReveal stagger) → CTA full-width. Smartphone muestra pantalla cobro con loop del total; otras 2 pantallas como thumbnails en cada card.

**Copy final:**
- Eyebrow `Lo hacemos diferente` · Título `Un punto de venta / pensado para tu negocio` ("tu negocio" terracota)
- Intro (solo desktop): `No adaptamos tu negocio a un sistema importado. Construimos el sistema alrededor de cómo ya vendes.`
- **01 Costos** — `Mejores costos que lo tradicional` · `Sin caja registradora cara ni licencias atadas a una marca. Pagas por vender, no por instalar.` · Tag `Arranca sin inversión en hardware`
- **02 Experiencia** — `Intuitivo desde el primer cobro` · `Si sabes usar tu celular, ya sabes cobrar con Musuq. Sin manuales, sin capacitaciones de horas.` · Tag `Tu primera venta en minutos`
- **03 Adopción** — `Pensado para que sí lo uses` · `Te acompañamos en quechua y español, paso a paso, hasta que tu equipo lo haga solo. Cambiar deja de dar miedo.` · Tag `Soporte cercano, en tu idioma`
- CTA primario `Quiero verlo en mi negocio` · secundario `Ver la demo →`
- Microcopy zorro (aria): `Allin — tu socio digital`

**Motion:** pin scrub `useScroll` + 3 tramos (0–0.33/0.33–0.66/0.66–1) → razón activa; stepper expande con clip-path inset, inactivos opacity-40, barra `scaleY=scrollYProgress`; smartphone swap clip-path mask + crossfade 280ms, entra `rotateY -8→0`; parallax geometría 0.4x, zorro 0.7x. Título reveal por línea (IntersectionObserver). Botón magnético (offset·0.25, spring 150/15). Contador total `S/ 0.00 → S/ 128.50` (useMotionValue) en pantalla cobro, loop al activar razón 01. **Mobile:** sin pin, cards ScrollReveal `i*80`, device pantalla fija con loop. **Reduced-motion:** `.diff-pin{position:static!important;height:auto!important}`, layout mobile estático en todos los breakpoints, contador muestra `S/ 128.50` directo.

**Assets:** smartphone mockup 3 pantallas (cobro S/128.50 / catálogo / onboarding), zorro **casaca blanca bordada** (`Pose-0391`) PNG @2x, geometría andina SVG marrón + glifo eyebrow, token `--color-clay-700:#6B4A33`, sprites WebP lazy razones 02/03, ArrowRight lucide, fuentes Barlow.

---

### 4.6 Antes / Después — transformación cuantificada · `before-after/BeforeAfterMusuq.tsx`
**Objetivo:** MOFU convicción. Cuantifica el dolor en soles (S/17,580–26,370/año) para que el precio luego parezca barato. Convierte beneficios en deltas (errores 15%→3%, mesas +15–30%). Contraste físico de scroll. KPI: permanencia >6s, scroll-through, clic "Calcular". **Métrica estrella: soles recuperados.**

**Layout desktop:** pinned 280vh. Split "SIN MUSUQ" (izq, frío/gris) vs "CON MUSUQ" (der, cálido/terracota) con costura diagonal andina central. Cabecera sticky: eyebrow pill `¿Cómo impactamos en tu negocio?` + título Barlow Semi Cond 800 `clamp(2.6rem,6vw,5.5rem)` ("después" terracota, reveal por línea). Cada panel: header + smartphone único (papel/caos grayscale izq, app limpia der), 4 stat cards alineadas en filas (comparación horizontal 15% vs 3%), hairline punteada uniendo pares. Izq zorro túnica grayscale 70% mirando a la costura; der zorro casaca blanca a color + banda GANANCIA terracota (+30% atención · +22% mesas). Pie: `De perder hasta S/26,370 al año… a recuperar la mayor parte.` + `Calcular cuánto recuperas tú →`.

**Layout mobile:** SIN pin, stack narrativo. Eyebrow+título `clamp(2rem,9vw,2.8rem)` → bloque SIN MUSUQ (grayscale, stat cards 2x2, zorro túnica) → conector chevron andino terracota 12vh con ↓ → bloque CON MUSUQ (cálido, 2x2 + banda GANANCIA + zorro casaca) → pie + botón full-width. ScrollReveal por bloque, contadores once.

**Copy final:**
- Eyebrow `¿Cómo impactamos en tu negocio?` · Título `El antes y el después de Musuq` ("después" terracota)
- Subtítulo: `Lo que un local pierde sin darse cuenta — y lo que recupera cuando todo se vuelve digital.`
- **SIN MUSUQ** (`Modelos tradicionales, a punta de papel y memoria`): Errores de pedido `15%` (1 de cada 7 platos sale mal, 10–20%) · Desperdicio inventario `8%` (5–10%) · Tiempo del mesero en trámites `32%` (25–40%) · Pérdida anual `hasta S/26,370` (S/17,580–S/26,370). Micro: `Y el cliente lo siente: espera de más y a veces le llega lo que no pidió.`
- **CON MUSUQ** (`Tu local digitalizado, de la mesa a la cocina`): Errores `3%` (1–5%) · Merma `4%` (3–5%) · Tiempo recuperado por mesero `−40%` (30–50%) · Pérdida anual `se reduce al mínimo` (~S/5,300). Banda GANANCIA: `+30% velocidad de atención · +22% rotación de mesas` — `Atiendes a más gente en el mismo local, sin contratar a nadie más.`
- Pie: `De perder hasta S/26,370 al año a recuperar la mayor parte.` · Botón `Calcula cuánto recuperas tú →`
- Notas: "S/" con espacio fino; el número grande = punto medio del rango, rangos como nota secundaria.

**Motion:** scrub 280vh. p0–0.12 reveal título; p0.12–0.45 entrada ANTES (panel x:-40, stat cards stagger 60ms, contadores 0→15%/26,370, grayscale 0.5); p0.45–0.55 costura badge "→" rota 0→90° vira warm-500→terracota + wipe diagonal; p0.55–0.90 DESPUÉS (panel x:+40, **contadores como TRANSICIÓN 15→3, 26,370→~5,300** ~1.2s, grayscale 0.5→0); p0.78–0.92 banda GANANCIA cuenta 0 con overshoot + zorro casaca pop; p0.92–1 pie. Parallax 3 velocidades. Botón magnético. Contadores: desktop ligados al scrub; mobile IntersectionObserver threshold 0.4 once. **Reduced-motion:** 2 columnas estáticas (desktop)/stack (mobile), números finales, badge estático terracota, sin parallax/wipe/glow animado; extender `@media reduced-motion` para `.ad-counter/.ad-bar/.ad-seam`.

**Assets:** mockup smartphone ANTES (papel/caos, grayscale CSS) + DESPUÉS (app real — pedir captura a musuq-app, no inventar UI); zorro túnica `Pose-0390` → `public/mascota/zorro-tunica.webp`; zorro casaca `Pose-0391` → `public/mascota/zorro-casaca.webp`; chevron andino SVG (`AndeanSeam`); lucide AlertTriangle/Trash2/Clock/TrendingDown (antes), CheckCircle2/Package/Timer/TrendingUp/Coins (después); `Intl.NumberFormat('es-PE')` en `lib/`; fuentes Barlow.

---

### 4.7 Mascota + confianza — "Hecho en Perú, para quienes mueven al Perú" · `PeruTrustMoment.tsx`
**Objetivo:** BOFU bisagra emocional. Responde "¿puedo confiar en quién la hizo?". Pertenencia + prueba social ligera (+120 negocios). KPI: CTR del CTA inferior + scroll-depth al fondo + permanencia en "momento zorro".

**Layout desktop:** full-bleed, mitad superior crema → mitad inferior panel terracota con texto crema; el zorro se sienta en la costura. Patrón andino tileable 4–6% + marca de agua "PERÚ" Barlow Semi Cond 800 ~5%. 3 bandas:
1. **Emocional (≥78vh):** izquierda (col 1–6) eyebrow `DESDE LIMA, PARA TODO EL PERÚ` + kicker `100% peruano` + H2 Barlow Semi Cond 800 `clamp(3.5rem,7vw,7rem)` leading 0.92 ("mueven al Perú" terracota) + párrafo marrón. Derecha (col 7–12) zorro túnica saludando grande con halo radial terracota + sombra elíptica; 3 chips glassy (Store/Heart/MessageCircle). El zorro pisa la banda terracota.
2. **Prueba social (crema-200):** logos grayscale + contador `+120 negocios ya confían`. Fallback: 3 píldoras "para mypes · fácil de usar · siempre contigo".
3. **CTA (terracota, texto crema, ≥46vh):** H3 `¿Listo para mover tu negocio?` + subcopy + botón crema sólido magnético `Crear mi cuenta gratis` + link `Ver cómo funciona ↓`; smartphone mockup pequeño con zorro casaca acento opcional.

**Layout mobile:** 1 columna. Eyebrow+H2 `clamp ~2.5rem` ("mueven al Perú" terracota) → párrafo → zorro centrado ~70vw → 3 píldoras stack full-width (debajo, no encima) → contador centrado + logos carrusel/grid → banda CTA terracota full-width, H3 + botón ≥48px + link. Mockup se reduce/omite <480px. safe-area.

**Copy final:**
- Eyebrow `DESDE LIMA, PARA TODO EL PERÚ` · kicker `100% peruano 🇵🇪` (o `◇` si no emojis)
- H2: `Hecho en Perú, / para quienes / mueven al Perú.` (últimas 2 palabras terracota)
- Párrafo: `No somos otra app gringa traducida a la rápida. Musuq lo construimos acá, con el zorro de la suerte de nuestro lado, pensando en la bodega, el taller y el emprendimiento que sostiene a su familia. Tu negocio en tu idioma, a tu ritmo.`
- Chips: `Store → Para mypes / Hecho a la medida del negocio peruano` · `Heart → Fácil de usar / Si sabes usar WhatsApp, sabes usar Musuq` · `MessageCircle → Siempre contigo / Soporte humano que te responde en serio`
- Prueba social: `+120` + `negocios peruanos ya se mueven con Musuq` · `Confían en nosotros`
- CTA: H3 `¿Listo para mover tu negocio?` · `Crea tu cuenta gratis en 2 minutos. Sin tarjeta, sin letra chica.` · botón `Crear mi cuenta gratis` · link `Ver cómo funciona ↓` · micro `Gratis para empezar · cancela cuando quieras`
- Contraste AA: crema sobre terracota usar pesos 600+.

**Motion:** H2 reveal por línea clip-path stagger 0.09s ("Perú" final shift a terracota). Zorro entra `y60→0 scale0.92→1 rotate-3→0` + halo `opacity 0→0.5` + parallax por capas (halo lento, chips rápido) + idle `breathe`/`gentle-sway`; mano saludando alineada con primer chip. Chips stagger 0.12s, hover eleva 4px. Contador `+120` 0→120 useMotionValue 1.6s once. Logos marquee 60s linear (pausa hover). Transición crema→terracota wipe `clip-path inset(100% 0 0 0)→inset(0)` 1.1s. Botón magnético (pointer:fine, ~8px, label 0.3x). Smartphone `drift-y-slow`. **Reduced-motion:** H2 completo, zorro estático halo fijo, contador final, marquee detenido, panel pintado, sin magnético/Lenis.

**Assets:** zorro túnica `Pose-0390` → `public/mascota/zorro-saludando.{webp,avif}` ~900px; zorro casaca `Pose-0391` → `public/mascota/zorro-casaca.webp`; patrón andino SVG (2 variantes color), sombra elíptica, halo CSS, "PERÚ" texto, smartphone `public/mockups/app-cta-phone.webp`, logos grayscale (pedir set; fallback píldoras), lucide Store/Heart/MessageCircle/ArrowDown, fuentes Barlow.

---

### 4.8 Cierre + Footer — "El último impulso" · `FinaleFooter.tsx`
**Objetivo:** BOFU. Convertir toda la energía en una decisión: Crear cuenta. Footer utilitario (marca, contacto, legales). Reemplaza `cta.tsx` + `footer.tsx`. KPI: clics "Crear cuenta" al final del scroll + clic a email.

**Layout desktop:** `min-h-[100svh]` partida en Finale (~72vh) + Footer (~28vh). Fondo **invertido = carbón `#1A1A1A` con grain** (el cierre pesa, el terracota explota). Finale grid 12-col `max-w-[1280px] px-8`: eyebrow `El último paso` (Barlow 700 uppercase terracota 13px) → titular gigante Barlow Semi Cond 800 `clamp(3.5rem,?,7.5rem)` leading 0.92 crema, "impulsa" terracota, ~9 col → subcopy warm-300 → fila acción (botón pill terracota 56px magnético + link `hello@musuq.tech`) → trust row 3 chips → **zorro GALA (esmoquin)** col 8–12 esquina inferior-derecha alto `clamp(360px→560px)`, pata levantada apunta al botón, asoma bajo el fold. Footer (hairline `border-white/8`): col 1–4 wordmark "musuq" + tagline + glifo andino; col 5–7 Producto; col 8–9 Contacto; col 10–12 Legal; barra inferior `© 2026 Musuq · Hecho en Perú` + `Perú · 2026`.

**Layout mobile:** Finale `min-h-[88svh]` stack `px-6 py-20`. Eyebrow → titular `clamp(2.6rem→3.4rem)` ("impulsa" terracota) → subcopy → botón full-width h-14 → link centrado → trust chips wrap 2 filas → **zorro GALA reducido ~200px ARRIBA del titular** como presentador. Footer acordeón visual: wordmark+tagline, columnas Producto/Contacto/Legal apiladas, barra inferior centrada. Sin breakpoint intermedio.

**Copy final:**
- Eyebrow `El último paso` · Titular `Tecnología que impulsa cada venta.` ("impulsa" terracota)
- Subcopy: `Crea tu cuenta y empieza a vender con todo de tu lado — sin fricción, sin esperar.`
- CTA primario `Crear cuenta` (→ signup) · secundario `Hablar con el equipo →` (`mailto:hello@musuq.tech`)
- Trust chips: `Sin tarjeta · Listo en minutos · Soporte en español`
- Footer wordmark `musuq` · tagline `Tecnología peruana que vende por ti.` · firma `Nuevo, en quechua.`
- Producto: `Cómo funciona · Funciones · Precios · Crear cuenta` · Contacto: `hello@musuq.tech · musuq.tech` · Legal: `Términos (/terms) · Privacidad (/privacy)`
- Barra: `© 2026 Musuq · Hecho con orgullo en Perú · Perú · 2026`

**Motion:** titular reveal por línea (IntersectionObserver, no whileInView) `translateY(110%)→0 clip-path inset(100% 0 0 0)→inset(0)` stagger 80ms 0.9s; "impulsa" wipe crema→terracota (`background-size 0%→100%` + `-webkit-background-clip:text`) +120ms. Scrub Lenis: zorro parallax `y:40→-30 rotate:-2→1.5` (micro-saludo), titular `y:0→-12`. Botón magnético (spring 220/18, radio 60px, label 0.4x). Trust chips stagger 90ms. Footer: wordmark reveal 0.6s, glifo andino `stroke-dashoffset` 1.2s, links `link-underline` existente. Contador opcional `metric` prop. **Reduced-motion:** todo estático completo, "impulsa" ya terracota, sin parallax/scrub/magnético, glifo `dash=0`; titular texto real visible (LCP-safe).

**Assets:** zorro **GALA** `Musuq-Zorro-Mascota-Gala.png` → `public/zorro-gala.{webp,png}` ~1100px (`Image priority={false} loading="lazy"`, no es LCP); zorro casaca `Pose-0391` como variante A/B opcional; `AndeanGlyph.tsx` SVG; wordmark texto; grain (variante oscura para fondo carbón); tokens `--color-brown`, eliminar `--color-sage/-light`; fuentes Barlow `display:swap`.

---

## 5. Plan de assets

### 5.1 Hero video loop (Higgsfield Seedance 2.0)
Flujo recomendado: 2 keyframes con GPT Image 2 (first-frame = last-frame para loop perfecto) → image-to-video Seedance 2.0 con motion mínimo. Invocar vía skill `higgsfield-generate`.

**Prompt Seedance 2.0 (video):**
> *Cinematic top-down 35-degree shot of a warm Peruvian cafe counter on a cream background. A smartphone on a stand displays a clean point-of-sale app; a terracotta-colored checkmark draws itself on screen as an order is confirmed. A cup of coffee gently steams, soft wisps rising and dissolving. Warm morning side light, shallow depth of field, soft bokeh, artisanal premium mood, terracotta (#C8553D) and warm brown (#6B4A33) accents over cream (#FAF8F5). Extremely slow, almost still camera with a 4cm dolly-in and subtle breathing motion. No people, no hands in frame, no tablets, no text overlays. Seamless loop: first and last frame identical, steam cycles smoothly. 6 to 8 seconds, photoreal, calm, high-end commercial but human and warm.*

**Negative:** `tablet, laptop, busy office, cold blue tones, green colors, fast motion, camera shake, on-screen text/captions, watermark, people faces, cluttered background`.

**Ratios:** DESKTOP 16:9 (1920×1080), smartphone a la derecha (tercio izquierdo libre para H1). MOBILE 9:16 (1080×1920) **re-generado** (no recortar), smartphone arriba-centro. 2–3 variantes por ratio, elegir loop más limpio.

**Grading post (DaVinci/ffmpeg):** warm, naranjas→#C8553D, **saturación de verde a 0**, sombras→#6B4A33, blancos→crema (no 255), grano 0.03, viñeta cálida leve.

**Entrega:** `public/hero/hero-loop-desktop.{webm,mp4}` (<2.5MB) + `hero-loop-mobile.{webm,mp4}` (<1.5MB) + `hero-poster-desktop.jpg` + `hero-poster-mobile.jpg` (primer frame graded = poster LCP + fallback reduced-motion + OG). `<video autoplay muted loop playsinline preload="metadata" poster=...>` con `<source media="(max-width:768px)">`.

### 5.2 Uso del zorro por sección (3 poses confirmadas en `Brand/Mascota/`)
| Pose | Archivo fuente | Secciones |
|---|---|---|
| **Gala/esmoquin** | `Musuq-Zorro-Mascota-Gala.png` | Cierre/CTA final, navbar (solo cabeza), OG secundaria |
| **Túnica negra saludando** | `Musuq-Zorro-Pose-0390.png` | Hero, Manifiesto, Plataforma, Antes (lado SIN), Mascota-CTA banda emocional, 404 |
| **Casaca blanca bordada** | `Musuq-Zorro-Pose-0391.png` | Diferenciador, Rubros (cierre), Antes (lado CON), acento CTA |

**Regla:** una sola pose por viewport. **No usar:** zorro grande encima del video hero, páginas legales, recolor/deformado/rotado, <48px cuerpo (usar cabeza). Área de protección = altura de la oreja. Copiar a `public/mascota/` como WebP/AVIF + PNG @1x/@2x.

### 5.3 Motivos andinos (SVG derivado de la frente del zorro)
Tile maestro único en `<defs>` referenciado con `<use>` (divisor, fondo, borde de card son la misma familia). Paleta: terracota/marrón sobre crema, `currentColor`, nunca verde. Componentes: `andean-divider.svg` (cenefa horizontal entre secciones), `andean-bg-tile.svg` (fondo 4–8% que reemplaza el grain plano), borde de card (regla superior + mini-chevron esquina), `andean-corner.svg`. Vectorizar fiel (no reconstruir a mano), optimizar con svgo, respetar 60-30-10 (motivo = acento 10%). Animación opcional: drift horizontal o `stroke-dashoffset` al scroll-reveal.

### 5.4 Imágenes lifestyle + dashboard
- **Lifestyle rubros** (`higgsfield-product-photoshoot` modo `lifestyle_scene` o foto real): cafetería (barista + smartphone cobrando), restaurante (mesero + plato peruano), pastelería (dueña mayor facturando). Solo smartphones, grading terracota/crema, personas MYPE peruanas reales (no stock), aire para texto Barlow, 4:5 + 16:9, grano 0.03 + cenefa andina inferior. Entrega WebP+JPG @1x/@2x en `public/rubros/`.
- **Dashboard** (capturas reales musuq-app): POS, pedidos, comprobante, ventas, **siempre en mockup smartphone** (frame minimal, esquinas 8–10px), paleta Musuq, RUC/DNI **enmascarados**. 1 hero de producto (cobro con check terracota) + 2–3 secundarios. Entrega PNG alpha + screenshot en `public/producto/` y `public/plataforma/`.

> **Nota de marca:** el Manual v1 en NextCloud aún dice Playfair+DM Sans+sage. **Este plan manda sobre el manual v1** → versionar a v2 con esta paleta/tipografía.

---

## 6. Orden de build por fases y criterios de verificación

### Fase 0 — Fundaciones de marca (bloquea todo)
1. `layout.tsx`: swap fuentes a Barlow + Barlow Semi Condensed; quitar `data-scroll-behavior="smooth"`.
2. `globals.css`: añadir `--color-brown`, `--color-clay-700`, `--ease-apple`, `--shadow-warm`, `--font-display`; `--font-heading → display`; **eliminar `--color-sage`, `--color-sage-light`, `--color-copper`** y migrar `--accent` a marrón; quitar `scroll-smooth` del `html`.
3. Limpiar usos de sage/copper en `hero.tsx`, `service-visuals.tsx`.
4. `src/lib/motion.ts` (EASE_APPLE, formatSoles) + `use-prefers-reduced-motion.ts`.

### Fase 1 — Infra de motion
5. `npm i lenis gsap @gsap/react` (Node 22).
6. `motion-provider.tsx` + `smooth-scroll-provider.tsx` (sync Lenis↔ScrollTrigger, gating reduce/mobile). Montar en `layout.tsx`.
7. Generalizar `ScrollReveal`; añadir keyframes `.manifesto-line`, `.rubro-line`, `.num-wipe`, `.ad-counter/.ad-bar/.ad-seam` + sus reglas reduced-motion.
8. `shared/MagneticButton.tsx`, `shared/AnimatedCounter.tsx`, `brand/AndeanGeometry.tsx`.

### Fase 2 — Hero + Manifiesto (above/near fold, sin GSAP)
9. Producir/colocar video+poster+zorro túnica. `HeroProductLoop`. **Verificar LCP aquí primero.**
10. `ManifestoPin` (+ Static fallback).

### Fase 3 — Secciones pinned con GSAP (dynamic ssr:false)
11. `rubros-gallery` (horizontal) + fotos/mockups.
12. `plataforma-showcase` + dashboard assets.
13. `DiferenciadorPinned` + zorro casaca.
14. `BeforeAfterMusuq` + ambos zorros.

### Fase 4 — Cierre + ensamblaje
15. `PeruTrustMoment` + zorro túnica/gala.
16. `FinaleFooter` (reemplaza cta.tsx+footer.tsx) + zorro gala.
17. Reescribir `page.tsx` con las 8 secciones + dividers andinos; `#rubros`/`#features` al navbar.
18. Eliminar componentes de agencia no usados (services, process, tech-stack, testimonials viejos, demos) o archivarlos.

### Criterios de verificación (por fase y final)
- **Lighthouse:** LCP <2.5s (poster/H1, no video), CLS <0.1 (dimensiones explícitas en video/imágenes/mockups), INP <200ms, Performance ≥85 mobile.
- **Reduced-motion:** con `prefers-reduced-motion: reduce` activo — sin Lenis, sin scrub, sin pin, sin magnético; todas las secciones muestran estado final legible; ningún contenido oculto. Probar con `playwright-skill` + emulación.
- **Responsive:** verificar 360/390/768/1024/1280/1440. Sin scroll horizontal accidental. Mockups solo smartphone (nunca tablet); sin breakpoint intermedio de tablet en mockups.
- **Marca:** grep de que no queden `sage`/`copper`/`#6B7C5E`/`#B87333`/Playfair/DM Sans. Solo terracota/carbón/crema/marrón.
- **SSR/Cloudflare:** `npm run build` y `npm run cf:build` sin errores; ningún `window`/`document` a nivel de módulo. Probar `wrangler dev`.
- **A11y:** contraste AA (crema sobre terracota con pesos 600+), aria-labels de carrusel/scroll-hint, tap targets ≥44px.
- **CTA:** todos los primarios → `https://app.musuq.tech/signup`; secundario mailto `hello@musuq.tech`; rubros → `/contacto?rubro=${id}`.

---

## 7. Riesgos y preguntas abiertas

**Riesgos**
- **Pin + iOS Safari:** GSAP pin es más estable que sticky manual, pero validar en iOS real. Mobile va sin pin por diseño.
- **Lenis + anchors del navbar existente:** hay que interceptar todos los `<a href="#">`; riesgo de saltos si se olvida alguno.
- **LCP del video:** si el poster no se trata como LCP candidate (priority/fetchpriority), el video puede degradar la métrica. Verificar en Fase 2.
- **Doble motor (Lenis global + GSAP por sección):** sincronización del ticker es crítica; si se desfasa, el scrub salta. Test dedicado.
- **Peso de assets:** 8 secciones con zorros/fotos/dashboard pueden inflar el bundle de imágenes; presupuesto estricto AVIF/WebP + lazy.
- **React Compiler + GSAP imperativo:** envolver siempre en `useGSAP`; vigilar memory leaks en navegación.
- **Bundle framer-motion + GSAP juntos:** usar `LazyMotion` + dynamic import de secciones pinned para no penalizar el inicial.

**Preguntas abiertas**
1. ¿La app `app.musuq.tech` ya tiene UI on-brand (terracota/carbón/Barlow) para las capturas de dashboard/mockups, o hay que diseñar mockups que la respeten? (afecta Plataforma, Diferenciador, Antes/Después).
2. ¿`+120 negocios` es cifra real verificable o placeholder? (impacta credibilidad del contador y prueba social).
3. ¿Existen logos reales de clientes/aliados para el marquee, o se usa el fallback de píldoras?
4. ¿La calculadora "Calcula cuánto recuperas" es una página/modal real o solo ancla al CTA? (define si Antes/Después necesita ruta nueva).
5. ¿Avatares de la trust row del Hero = fotos reales de comerciantes (con consentimiento) o ilustraciones?
6. ¿`/contacto` existe como ruta? Hoy hay `privacy`/`terms`; el deeplink `?rubro=` necesita destino.
7. ¿Se conserva Chatwoot? Si sí, diferirlo a idle para no competir con LCP.
8. ¿Cifras del before/after (S/26,370, +30% mesas) tienen respaldo para evitar claims no sustentados?
9. ¿Confirmado que `Pose-0390` = túnica negra saludando y `Pose-0391` = casaca blanca? (verificación visual final antes de exportar).
10. ¿El dominio canónico del producto es `musuq.tech` (marketing) con app en `app.musuq.tech`? El layout actual usa `musuq.tech` como metadataBase — confirmar que la landing de producto vive ahí y no en subdominio.