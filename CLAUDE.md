@AGENTS.md

# musuq | app de gestión y punto de venta

Landing de producto de Musuq: app de gestión y punto de venta para micro y pequeñas empresas (mypes) del Perú. Hoy enfocada en gastronomía/restaurantes, pero no para siempre — la visión es todo el comercio. Nombre en quechua: "musuq" = nuevo.

## Stack

- **Framework:** Next.js 16.2.1 (React Compiler habilitado) — LEER `node_modules/next/dist/docs/` antes de tocar APIs
- **UI:** React 19, Tailwind CSS 4, Framer Motion, shadcn/ui (base-nova), Lucide React
- **Fuentes (cargadas en `layout.tsx`):** Switzer (cuerpo/UI, `--font-sans`, self-hosted) + Clash Display (títulos/wordmark, `--font-fraunces`, self-hosted) + Anton (display condensada) + Caveat (manuscrita). *(Nota: `landing.css` aún referencia "DM Sans" en el `body` — inconsistencia menor pendiente de limpiar.)*
- **Paleta:** crema `#FAF8F5` (base) · terracota `#C8553D` (acción) · carbón `#1A1A1A` (tinta/bordes) · marrón `#6B4A33` + copper `#B87333` (terciarios). **Sin verde.**
- **Lenguaje:** Todo el contenido en espanol

> **Marca:** la landing usa su propio toolkit **editorial-brutalista** (≠ toolkit de las apps). Ver **`docs/brand-landing.md`** (paleta, tipografía, layout, motion y la receta Higgsfield de fotos/video). El toolkit de las apps (web/iOS/Android) vive aparte en `musuq-docs/marca/`.

## Estructura

```
src/
  app/
    layout.tsx          -- Root layout, metadata, fuentes (Switzer/Clash/Anton/Caveat), Chatwoot, Vercel Analytics
    page.tsx            -- Renderiza <Landing />
    globals.css         -- Tema Tailwind, vars de marca, grain overlay
    not-found.tsx       -- Pagina 404 custom (CSS fade-in, sin motion.div)
    opengraph-image.tsx -- OG image (1200x630)
    manifest.ts         -- PWA manifest
    apple-icon.tsx      -- Apple touch icon 180x180 PNG
    privacy/, terms/    -- Paginas legales (Ley 29733 Peru)
  components/
    landing/            -- Landing de PRODUCTO (single-page)
      Landing.tsx       -- Orquesta: Navbar > Hero > Benefits > VSBanner > ScrollyPhone > ScrollyTPV > Pricing > Footer
      Navbar.tsx        -- Header fijo con scroll detection
      Hero.tsx          -- Hero con parallax cinematografico
      Benefits.tsx      -- 3 tarjetas (Todo desde un punto, Potenciado con IA, CRM + Contabilidad)
      VSBanner.tsx      -- Comparativa Con / Sin Musuq
      ScrollyPhone.tsx  -- Scrollytelling de la app en el celular
      ScrollyTPV.tsx    -- Scrollytelling del TPV (transforms 3D en scroll)
      Pricing.tsx       -- 2 planes (Gratis / Pro)
      Footer.tsx        -- Footer + legal
      LottieViz.tsx     -- Wrapper Lottie (lazy, reduced-motion)
      landing.css       -- Estilos de todas las secciones + @keyframes
      hooks/useReveal.ts -- IntersectionObserver reveal
  lib/
    utils.ts            -- cn() utility
```

> El landing de "agencia" (Services/Process/Testimonials/Tech-stack/CTA/demos) que se
> describia antes ya NO existe en el codigo; era una version anterior.

## Reglas de desarrollo

1. **Next.js 16 tiene breaking changes.** Siempre consultar `node_modules/next/dist/docs/01-app/` antes de tocar APIs de Next (metadata, routing, server components, etc.)
2. **Single-page con anchor nav.** IDs reales: `#bondades`, `#comparativa`, `#scrolly`, `#tpv`, `#precios`, `#track`. No crear rutas nuevas sin consultar.
3. **Animaciones SVG puras.** El BatteryStack en hero.tsx usa SVG + CSS, sin JS state. Mantener ese patron.
4. **No usar motion.div con whileInView** en secciones — causa flicker en iOS Safari. Usar CSS animations.
5. **No agregar dependencias sin justificar.** El bundle ya tiene lo necesario.
6. **Mobile-first.** Toda UI debe funcionar en movil. El BatteryStack solo se muestra en desktop.
7. **Accesibilidad.** Respetar `prefers-reduced-motion`. Usar semantica HTML correcta.

## Skills (documentacion detallada)

Para informacion profunda sobre cada area, consultar los skills en `.claude/skills/`:

| Skill | Cuando cargarlo |
|-------|-----------------|
| `musuq-seo` | Metadata, OG tags, sitemap, robots, JSON-LD, canonical |
| `musuq-design` | Paleta, tipografia, animaciones, identidad visual |
| `musuq-components` | Arquitectura de secciones, demos, service-visuals |
| `musuq-nextjs` | Config Next.js 16, dependencias, scripts, breaking changes |

## Dominio y contacto

- **Dominio:** musuq.tech
- **Email:** hello@musuq.tech
- **Mercado:** Peru / LATAM

## Auditoría pendiente (priorizada)

### P0 — Critico ✅
- [x] CTA "Agendar llamada" con Calendly
- [x] Chatwoot widget integrado
- [x] Open Graph + Twitter Cards en metadata
- [x] robots.ts + sitemap.ts
- [x] metadataBase + canonical URL
- [x] Vercel Analytics instalado

### P1 — SEO ✅
- [x] JSON-LD structured data (Organization + Service)
- [x] OG image (1200x630) — rediseñado para WhatsApp crop-safe
- [x] Páginas legales (privacidad, términos) — Ley 29733 Peru
- [x] manifest.ts + apple-icon.tsx + icon-192/512.png
- [x] Pagina 404 personalizada (CSS fade-in, mailto link, sin motion.div)
- [ ] Analytics (Plausible/Umami recomendado para privacidad)

### P2 — Conversion ⚠️
- [ ] Testimonios reales — el componente existe con 3 proyectos pero necesita quotes de clientes
- [ ] prefers-reduced-motion en todas las animaciones
- [ ] Security headers en next.config.ts
- [ ] Portafolio / casos de estudio reales

### P3 — Pulido
- [x] FAQ section con 3 preguntas para mypes
- [ ] Links redes sociales en footer
- [ ] Skip-to-content link
- [ ] Optimizar pesos de fuente (reducir de 4 a 3)
- [ ] FAQ JSON-LD schema

## Deployment — Cloudflare Workers

```bash
npm run deploy  # Build + deploy via GitHub Actions
npm run preview # Build + preview local (npm start)
```

Secrets requeridos en GitHub: `CF_WORKERS_API_TOKEN`, `CF_WORKERS_ACCOUNT_ID`
