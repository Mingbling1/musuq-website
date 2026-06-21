# Brand Toolkit — Landing (musuq.tech)

> **Hay DOS toolkits de marca, no mezclar:**
>
> | Toolkit | Para | Dónde se documenta |
> |---|---|---|
> | **Apps** (producto) | App web, iOS, Android | Toolkit/manual de producto (`musuq-docs/marca/*`) |
> | **Landing** (este) | Solo `musuq.tech` | **Este documento** |
>
> La landing usa un lenguaje **editorial-brutalista** propio, con fotografía/video **generados con Higgsfield**. No aplicar este toolkit a las apps ni viceversa.

---

## 1. Estilo: editorial brutalista

- El **fondo de página es SIEMPRE crema** y nunca cambia.
- El **color drenched** (terracota / marrón) solo rellena **dentro de bordes/celdas**, nunca el fondo.
- **Esquinas rectas** (sin redondeos pronunciados). Todo encerrado en celdas con **borde carbón de 2px**.
- Una sección con fondo drenched va **enmarcada en un border con padding**; una sección sin fondo queda limpia.

## 2. Paleta (fuente de verdad: `src/app/globals.css`)

| Rol | Color | Hex |
|---|---|---|
| **Primario / acción** | Terracota | `#C8553D` (light `#D4765F`) |
| **Base / fondo** | Crema | `#FAF8F5` (cream-50 `#FDFCFA`) |
| **Tinta / bordes** | Carbón (warm-800) | `#1A1A1A` |
| Grises cálidos | warm-600/500/400 | `#4A4540` / `#8A8378` / `#B5ADA3` |
| **Terciario "tierra"** | Marrón | `#6B4A33` |
| **Acento** | Copper | `#B87333` |

- **No hay verde.** El antiguo `sage` se reasignó a marrón `#6B4A33` (token `--color-sage` conservado por compatibilidad).
- Jerarquía: **terracota = acción · crema = base · carbón = tinta · marrón + copper = acentos terciarios**.
- Dónde aparece cada drenched: terracota → Hero, CTA navbar, Rubros, estados activos (01–02), Cierre. Marrón → Módulos (03), tier Negocio de Pricing (04), barra legal del Footer. Copper → números, badges, títulos de columna.

## 3. Tipografía

| Uso | Fuente | Variable CSS |
|---|---|---|
| Display / títulos | **Playfair Display** (serif) | h1/h2 en `landing.css` |
| Cuerpo / UI | **DM Sans** | base de `landing.css` |
| Mockups de la app | **Barlow / Barlow Semi Condensed** | pantallas dibujadas |

## 4. Layout

- **Celdas con borde** (grid-lines: contenedor `bg-warm-800 gap-[2px]` + celdas `bg-cream`; o `border-2` + divisores `border-t-2`/`border-l-2`).
- **ChapterMarker**: número grande con outline terracota.
- Móvil-first; las imágenes/videos viven **dentro del marco**.

## 5. Motion

- Easing custom ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`; animar **solo `transform`/`opacity`**; respetar **`prefers-reduced-motion`** siempre.
- Demos animadas en Rubros (riel de pedidos, escaneo de carta, flujo de cobro) en loop.
- Parallax sutil con `useSpring` en el hero (decorativo, desktop-only).

## 6. Fotografía / video — receta Higgsfield (reproducible)

**Tono:** cocineros peruanos **reales**, cocina **moderna y cálida**, comida reconocible (ceviche, lomo saltado). **Ni folclórico ni andino exagerado, ni "humilde"** — premium, aspiracional pero auténtico. Combina con terracota + crema.

- **Imágenes lifestyle:** `higgsfield product-photoshoot create --mode lifestyle_scene`.
- **Edición puntual de una foto** (p. ej. pantalla del celular): modelo `nano_banana_2` (Nano Banana Pro), `--image <foto>`, 2k, prompt que cambie **solo** la zona objetivo y conserve el resto.
- **Video del hero (loop perpetuo):** modelo `kling3_0` (Kling v3.0), `--mode pro --duration 8 --aspect_ratio 16:9`, **`--start-image = --end-image`** (mismo still) → loop sin corte; movimiento **sutil y loop-safe** (vapor, push-in lento, gesto contenido). Reencodear para web: `scale=1600`, `crf 28`, `faststart`, **sin audio**.
- **Pantalla del celular en escena:** app Musuq en **terracota**, con **"musuq"** y **"Pedido listo"**.

## 7. Assets vivos (`public/brand/`)

- `ceviche-band.webp` — poster del hero (también imagen de contexto).
- `ceviche-hero-2.mp4` — video loop del hero.
- `hands-phone-2.webp` — foto de Rubros (celular con la app Musuq).
- `app-mockup.png`, `zorro-*.png` — mascota / mockups de marca.
- Iconos: `src/app/icon.svg`, `favicon.ico`, `apple-icon.png` — el **isotipo M** de Musuq (squircle terracota `#C8553D` con la M en crema, redondez 22.4% ≈ iOS). Es el **único signo** de la marca; el zorro es solo mascota. **La app (`musuq-app`) usa estos mismos archivos** para que el favicon se vea igual en web y app; si cambian aquí, re-copiar allá.

> Limpieza 2026-06-17: se eliminaron iteraciones obsoletas del hero (`hero-rock-*`, `hero-phone-*`, `hero-cafe`, `app-shot`, `owner-control`).
