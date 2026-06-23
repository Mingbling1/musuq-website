# Lottie en la tarjeta de IA del landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) o superpowers:executing-plans para implementar task por task. Los pasos usan checkbox (`- [ ]`).

**Goal:** Reemplazar el visual CSS de la tarjeta "Potenciado con IA" (Benefits) por una animación Lottie on-brand de un núcleo de IA, y corregir el `CLAUDE.md` desactualizado.

**Architecture:** Se autora un Lottie a mano (terracota, validado por screenshot), se integra con un wrapper `lottie-react` lazy y accesible, y se reemplaza solo el contenido de `.viz-ai` en `Benefits.tsx`. El `CLAUDE.md` se corrige para reflejar el landing de producto real.

**Tech Stack:** Next.js 16 + React 19, `lottie-react`, lottie-web (autoría), Playwright (validación visual).

## Global Constraints

- **Proyecto:** `/mnt/data/projects/musuq/musuq-website`. Rama de trabajo: `feat/landing-lottie-ia` (ya creada). NO commitear en `main`.
- **Node 22 vía nvm:** `export NVM_DIR="/home/jac/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22` antes de comandos.
- **Marca:** terracota `#C8553D`, cobre `#B87333`, dark `#7A2F20`, highlight `#F6E0D6`, crema `#FDFCFA`. Sin verde.
- **Una sola section:** solo cambia el visual de la tarjeta "Potenciado con IA". NO crear secciones, NO tocar las otras tarjetas/secciones.
- **Accesibilidad:** respetar `prefers-reduced-motion` (Lottie muestra frame final, sin animar). NO usar `motion.div whileInView` (regla anti-flicker iOS del landing).
- **Commits:** conventional commits en español. Sin emojis.
- El landing **no usa Lottie** todavía; esta es la primera integración.

---

### Task 1: Autorar y validar la animación `ia-core.json`

**Files:**
- Create: `public/lottie/ia-core.json` (generado)
- Create (temporal, no se commitea): `/tmp/gen-ia-core.js`, `/tmp/ia-preview.html`

**Interfaces:**
- Produces: `public/lottie/ia-core.json` — Lottie válido (`v`, `fr`, `layers`), 200×200, loop, fondo transparente, listo para `<LottieViz src="/lottie/ia-core.json">`.

- [ ] **Step 1: Escribir el generador** `/tmp/gen-ia-core.js`

```javascript
const fs = require('node:fs'), path = require('node:path')
const OUT = '/mnt/data/projects/musuq/musuq-website/public/lottie'
fs.mkdirSync(OUT, { recursive: true })

const TERRA = [0.784, 0.333, 0.239, 1]   // #C8553D
const HILITE = [0.965, 0.878, 0.839, 1]  // #F6E0D6
const CREMA = [0.992, 0.988, 0.980, 1]   // #FDFCFA

const easeIO = { o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }
const kf = (t, s, e) => ({ t, s, ...(e || {}) })
const fill = (c, o = 100) => ({ ty: 'fl', c: { a: 0, k: c }, o: { a: 0, k: o }, nm: 'fl' })
const stroke = (c, w, o = 100) => ({ ty: 'st', c: { a: 0, k: c }, o: { a: 0, k: o }, w: { a: 0, k: w }, lc: 2, lj: 2, nm: 'st' })
const el = (d) => ({ ty: 'el', d: 1, s: { a: 0, k: [d, d] }, p: { a: 0, k: [0, 0] }, nm: 'el' })
const tr = (pos = [0, 0]) => ({ ty: 'tr', p: { a: 0, k: pos }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 } })

function layer({ ind, nm, shapes, p = [100, 100, 0], scale, rot, opacity, op = 90 }) {
  return { ddd: 0, ind, ty: 4, nm, sr: 1, ks: {
    o: opacity ?? { a: 0, k: 100 }, r: rot ?? { a: 0, k: 0 }, p: { a: 0, k: p },
    a: { a: 0, k: [0, 0, 0] }, s: scale ?? { a: 0, k: [100, 100, 100] },
  }, ao: 0, shapes, ip: 0, op, st: 0, bm: 0 }
}
const breathe = (min, max) => ({ a: 1, k: [kf(0, [min, min, 100], easeIO), kf(45, [max, max, 100], easeIO), kf(90, [min, min, 100])] })
const spin = (dir) => ({ a: 1, k: [kf(0, [0]), kf(90, [360 * dir])] })

// Anillo con nodo que orbita (la rotación de la capa hace girar el nodo)
const ring = (ind, d, color, dir, strokeO) => layer({
  ind, nm: `ring${ind}`, rot: spin(dir),
  shapes: [
    { ty: 'gr', nm: 'g-ring', it: [el(d), stroke(color, 1.5, strokeO), tr()] },
    { ty: 'gr', nm: 'g-node', it: [el(7), fill(color), tr([0, -d / 2])] },
  ],
})

// Chispa que titila una vez por loop (peak en `peakT`)
const spark = (ind, pos, peakT) => {
  const oK = [kf(0, [0]), kf(Math.max(1, peakT - 12), [0], easeIO), kf(peakT, [85], easeIO), kf(peakT + 14, [0], easeIO), kf(90, [0])]
  return layer({ ind, nm: `spark${ind}`, p: [pos[0], pos[1], 0], opacity: { a: 1, k: oK }, scale: breathe(70, 110),
    shapes: [{ ty: 'gr', nm: 'g-spark', it: [el(6), fill(CREMA), tr()] }] })
}

const glow = layer({ ind: 6, nm: 'glow', opacity: { a: 0, k: 36 }, scale: breathe(96, 110),
  shapes: [{ ty: 'gr', it: [el(168), fill(TERRA), tr()] }] })
const core = layer({ ind: 5, nm: 'core', scale: breathe(100, 107),
  shapes: [{ ty: 'gr', it: [el(92), fill(TERRA), tr()] }] })
const hilite = layer({ ind: 4, nm: 'hilite', scale: breathe(100, 107),
  shapes: [{ ty: 'gr', it: [el(34), fill(HILITE, 55), tr([-14, -16])] }] })

const data = {
  v: '5.7.4', fr: 30, ip: 0, op: 90, w: 200, h: 200, nm: 'ia-core', ddd: 0, assets: [],
  layers: [
    spark(1, [160, 44], 18), spark(2, [44, 150], 50), spark(3, [156, 158], 74),
    ring(2, 140, CREMA, 1, 22), ring(3, 178, TERRA, -1, 32),
    hilite, core, glow,
  ],
}
const file = path.join(OUT, 'ia-core.json')
fs.writeFileSync(file, JSON.stringify(data))
const ok = data.v && data.fr && Array.isArray(data.layers) && data.layers.length > 0
console.log(`ia-core.json → ${fs.statSync(file).size} bytes · estructura ${ok ? 'OK' : 'INVÁLIDA'} · ${data.layers.length} layers`)
```

- [ ] **Step 2: Generar el JSON**

Run: `node /tmp/gen-ia-core.js`
Expected: `ia-core.json → <bytes> bytes · estructura OK · 8 layers`, y el archivo existe en `public/lottie/ia-core.json`.

- [ ] **Step 3: Validar el render por screenshot**

Crear `/tmp/ia-preview.html` que cargue lottie-web (CDN) y reproduzca el JSON a varios frames, y capturar con Playwright (el server es headless → `headless:true`). Sobre fondo crema `#FAF8F5` (el de la tarjeta):

```bash
cd /mnt/data/projects/musuq/musuq-website/public/lottie
node -e '
const fs=require("fs"); const a=fs.readFileSync("ia-core.json","utf8");
fs.writeFileSync("/tmp/ia-preview.html",`<!doctype html><html><head><meta charset=utf8>
<script src="https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js"><\/script>
<style>body{margin:0;background:#FAF8F5;display:flex;gap:8px;padding:16px}.c{width:200px;height:200px}</style></head>
<body><div id=a class=c></div><div id=b class=c></div><div id=d class=c></div>
<script>const D=${a};
function mk(id,f){const an=lottie.loadAnimation({container:document.getElementById(id),renderer:"svg",loop:false,autoplay:false,animationData:JSON.parse(JSON.stringify(D))});an.addEventListener("DOMLoaded",()=>an.goToAndStop(f,true));}
mk("a",20);mk("b",45);mk("d",70);window.__ready=true;<\/script></body></html>`);
'
cd /home/jac/.claude/skills/playwright-skill && node run.js "
const b=await chromium.launch({headless:true});const p=await b.newPage({viewport:{width:660,height:240}});
await p.goto('file:///tmp/ia-preview.html');await p.waitForFunction(()=>window.__ready===true,{timeout:8000});await p.waitForTimeout(1000);
await p.screenshot({path:'/tmp/ia-validate.png'});console.log('screenshot OK');await b.close();
"
```
Expected: `screenshot OK`. Luego INSPECCIONAR `/tmp/ia-validate.png`: debe verse un orbe terracota con highlight, 2 anillos con nodos en distinta posición (rotación) y alguna chispa. Si algo se ve mal (orbe plano, anillos invisibles, chispas raras), ajustar valores en el generador (tamaños/opacidades) y repetir Steps 2–3 hasta que se vea limpio y on-brand.

- [ ] **Step 4: Commit**

```bash
cd /mnt/data/projects/musuq/musuq-website
git add public/lottie/ia-core.json
git commit -m "feat: animacion Lottie de nucleo de IA para el landing"
```

---

### Task 2: Wrapper Lottie + integración en la tarjeta de IA

**Files:**
- Modify: `package.json` (dep `lottie-react`)
- Create: `src/components/landing/LottieViz.tsx`
- Modify: `src/components/landing/Benefits.tsx` (tarjeta "Potenciado con IA", `.viz-ai`)

**Interfaces:**
- Consumes: `public/lottie/ia-core.json` (Task 1).
- Produces: `LottieViz` (default export) — `<LottieViz src={string} className?={string} loop?={boolean} />`, client-only, lazy, `aria-hidden`, reduced-motion → frame final.

- [ ] **Step 1: Instalar `lottie-react`**

Run (desde el repo): `pnpm add lottie-react 2>/dev/null || npm install lottie-react`
Expected: se agrega `lottie-react` a `dependencies` en `package.json`. (Usar el gestor del repo: si hay `pnpm-lock.yaml` usar pnpm; si `package-lock.json`, npm.)

- [ ] **Step 2: Crear el wrapper `src/components/landing/LottieViz.tsx`**

```tsx
'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { LottieRefCurrentProps } from 'lottie-react'

// lottie-react carga lottie-web (pesado) — lazy + sin SSR para no inflar el bundle.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return reduced
}

type LottieVizProps = { src: string; loop?: boolean; className?: string; style?: CSSProperties }

/** Reproductor Lottie decorativo: lazy, accesible, respeta prefers-reduced-motion. */
export default function LottieViz({ src, loop = true, className, style }: LottieVizProps) {
  const [data, setData] = useState<unknown>(null)
  const reduced = usePrefersReducedMotion()
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    let alive = true
    fetch(src).then((r) => r.json()).then((j) => { if (alive) setData(j) }).catch(() => {})
    return () => { alive = false }
  }, [src])

  useEffect(() => {
    if (!data || !reduced) return
    const id = window.setTimeout(() => {
      const r = lottieRef.current
      if (r) {
        const total = r.getDuration(true) ?? 0
        r.goToAndStop(Math.max(0, total - 1), true)
      }
    }, 0)
    return () => window.clearTimeout(id)
  }, [data, reduced])

  if (!data) return <div className={className} style={style} aria-hidden />

  return (
    <Lottie lottieRef={lottieRef} animationData={data} loop={reduced ? false : loop} autoplay={!reduced} className={className} style={style} aria-hidden />
  )
}
```

- [ ] **Step 3: Integrar en `Benefits.tsx`**

Agregar el import al inicio del archivo (después de la primera línea / junto a otros imports si los hay):

```tsx
import LottieViz from "./LottieViz";
```

Reemplazar el contenido del `div.viz-ai` de la tarjeta "Potenciado con IA". Buscar el bloque actual:

```tsx
          <div className="benefit__viz viz-ai">
            <div className="core"><span className="ring"></span><span className="ring2"></span><span className="spark" style={{ top: '2%', left: '8%' }}>✦</span><span className="spark" style={{ bottom: '6%', right: '2%', animationDelay: '-1.2s' }}>✦</span><span className="spark" style={{ top: '54%', left: '-16%', animationDelay: '-.6s' }}>✧</span><span className="spark" style={{ top: '14%', right: '-12%', animationDelay: '-1.9s' }}>✦</span></div>
          </div>
```

y dejarlo así (se conserva `.benefit__viz` y su glow `::before`; solo cambia el interior):

```tsx
          <div className="benefit__viz viz-ai">
            <LottieViz src="/lottie/ia-core.json" style={{ width: 190, height: 190 }} />
          </div>
```

> NO se toca `Benefits.tsx` fuera de ese bloque. Las clases CSS `.viz-ai .core/.ring/.spark` quedan huérfanas en `landing.css` pero son inofensivas; no se borran en esta task (YAGNI / evitar tocar más archivos).

- [ ] **Step 4: Type-check / build**

Run: `npm run build`
Expected: build verde. Si falla por tipo en el wrapper (p.ej. `getDuration` posiblemente `undefined`), ya está manejado con `?? 0`. Si falla por `LottieViz` importado en server component, recordar que `LottieViz` es `'use client'` y se puede importar desde `Benefits.tsx` (server) sin problema.

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml package-lock.json src/components/landing/LottieViz.tsx src/components/landing/Benefits.tsx 2>/dev/null
git commit -m "feat: la tarjeta de IA del landing usa la animacion Lottie"
```

---

### Task 3: Corregir el `CLAUDE.md` desactualizado

**Files:**
- Modify: `CLAUDE.md` (sección "## Estructura", línea de Fuentes en "## Stack", regla 2 de "## Reglas de desarrollo")

**Interfaces:** ninguno (doc).

- [ ] **Step 1: Corregir la línea de Fuentes en "## Stack"**

Reemplazar:

```markdown
- **Fuentes:** Playfair Display (títulos h1/h2, serif) + DM Sans (cuerpo/UI) + Barlow / Barlow Semi Condensed (mockups de la app). *(Anton/Switzer/Clash/Caveat fueron la spec original; ya no se usan en `landing.css`.)*
```

por:

```markdown
- **Fuentes (cargadas en `layout.tsx`):** Switzer (cuerpo/UI, `--font-sans`, self-hosted) + Clash Display (títulos/wordmark, `--font-fraunces`, self-hosted) + Anton (display condensada) + Caveat (manuscrita). *(Nota: `landing.css` aún referencia "DM Sans" en el `body` — inconsistencia menor pendiente de limpiar.)*
```

- [ ] **Step 2: Corregir la sección "## Estructura"**

Reemplazar el bloque de código que lista `app/` y `components/landing/` (el que menciona `services.tsx`, `process.tsx`, `testimonials.tsx`, `faq.tsx`, `tech-stack.tsx`, `cta.tsx`, `demos/` y `page.tsx -- Homepage: Hero > Services > TechStack > Process > Testimonials > FAQ > CTA`) por:

```markdown
src/
  app/
    layout.tsx          -- Root layout, metadata, fuentes (Switzer/Clash/Anton/Caveat), Chatwoot, Vercel Analytics
    page.tsx            -- Renderiza <Landing />
    globals.css         -- Tema Tailwind, vars de marca, grain overlay
    privacy/, terms/    -- Páginas legales (Ley 29733 Perú)
    manifest.ts, robots.ts, sitemap.ts, opengraph-image.tsx, apple-icon.tsx
  components/
    landing/            -- Landing de PRODUCTO (single-page)
      Landing.tsx       -- Orquesta: Navbar > Hero > Benefits > VSBanner > ScrollyPhone > ScrollyTPV > Pricing > Footer
      Navbar.tsx        -- Header fijo con scroll detection
      Hero.tsx          -- Hero con parallax cinematográfico
      Benefits.tsx      -- 3 tarjetas (Todo desde un punto, Potenciado con IA, CRM + Contabilidad)
      VSBanner.tsx      -- Comparativa Con / Sin Musuq
      ScrollyPhone.tsx  -- Scrollytelling de la app en el celular
      ScrollyTPV.tsx    -- Scrollytelling del TPV (transforms 3D en scroll)
      Pricing.tsx       -- 2 planes (Gratis / Pro)
      Footer.tsx        -- Footer + legal
      LottieViz.tsx     -- Wrapper Lottie (lazy, reduced-motion)
      landing.css       -- Estilos de todas las secciones + @keyframes
      hooks/useReveal.ts -- IntersectionObserver reveal
  lib/utils.ts          -- cn()
```

> El landing de "agencia" (Services/Process/Testimonials/Tech-stack/CTA/demos) descrito antes ya NO existe en el código; era una versión anterior.

- [ ] **Step 3: Corregir los anchors en "## Reglas de desarrollo" (regla 2)**

Reemplazar:

```markdown
2. **Single-page con anchor nav.** IDs: `#servicios`, `#proceso`, `#trabajo`, `#faq`, `#contacto`. No crear rutas nuevas sin consultar.
```

por:

```markdown
2. **Single-page con anchor nav.** IDs reales: `#bondades`, `#comparativa`, `#scrolly`, `#tpv`, `#precios`, `#track`. No crear rutas nuevas sin consultar.
```

- [ ] **Step 4: Verificar y commit**

Run: `grep -nE "services\.tsx|#servicios|Playfair" CLAUDE.md` → Expected: sin resultados (ya corregidos).

```bash
git add CLAUDE.md
git commit -m "docs: corrige el CLAUDE.md del landing (estructura, anchors y fuentes reales)"
```

---

## Self-Review (cobertura vs spec)

- Lottie autorado + validado (terracota, orbe + anillos + chispas) → Task 1. ✓
- Wrapper lazy + reduced-motion + sin whileInView → Task 2 Step 2. ✓
- Reemplazo solo del interior de `.viz-ai`, conservando `.benefit__viz` + glow → Task 2 Step 3. ✓
- Una sola section, sin tocar otras tarjetas/secciones → respetado (solo el bloque `.viz-ai`). ✓
- Asset en `public/lottie/ia-core.json` → Task 1. ✓
- `npm run build` verde → Task 2 Step 4. ✓
- Corrección CLAUDE.md (estructura + anchors + fuentes) → Task 3. ✓
- Rama `feat/landing-lottie-ia`, no `main` → Global Constraints. ✓
- Fuera de alcance respetado: no se borra el CSS `.viz-ai` huérfano, no se crean secciones.

**Nota para el ejecutor:** Task 1 Step 3 es iterativo — autorar, renderizar, mirar el screenshot, ajustar. No cerrar la task hasta que el render se vea limpio y on-brand. El landing despliega en Cloudflare Workers vía GitHub Actions al hacer push a `main`; este plan NO hace push (queda en la rama para revisión/merge del usuario).
