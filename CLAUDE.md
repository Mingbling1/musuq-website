@AGENTS.md

# musuq | estudio digital

Landing page profesional para estudio digital peruano. Nombre en quechua: "musuq" = nuevo.

## Stack

- **Framework:** Next.js 16.2.1 (React Compiler habilitado) — LEER `node_modules/next/dist/docs/` antes de tocar APIs
- **UI:** React 19, Tailwind CSS 4, Framer Motion, shadcn/ui (base-nova), Lucide React
- **Fuentes:** DM Sans (sans), Playfair Display (serif)
- **Paleta:** cream, warm (grises-cafe), terracotta (#C8553D), sage (#6B7C5E), copper (#B87333)
- **Lenguaje:** Todo el contenido en espanol

## Estructura

```
src/
  app/
    layout.tsx          -- Root layout, metadata, fuentes, Chatwoot, Vercel Analytics
    page.tsx            -- Homepage: Hero > Services > TechStack > Process > Testimonials > FAQ > CTA
    globals.css         -- Tema Tailwind, utilidades, animaciones, grain overlay
    not-found.tsx       -- Pagina 404 custom (CSS fade-in, sin motion.div)
    opengraph-image.tsx -- OG image (1200x630, semilla + musuq + tagline)
    manifest.ts         -- PWA manifest
    apple-icon.tsx      -- Apple touch icon 180x180 PNG
    privacy/            -- Politica de privacidad (Ley 29733 Peru)
    terms/              -- Terminos y condiciones
  components/
    landing/            -- Secciones de la landing
      hero.tsx          -- BatteryStack SVG animation + CTA principal
      navbar.tsx        -- Header fijo con scroll detection
      footer.tsx        -- Footer con servicios y contacto + legal links
      services.tsx      -- 5 servicios, layout split desktop (alternado), hover-reveal wireframes
      service-visuals.tsx -- SVG wireframes por servicio, grayscale → color en hover
      cta.tsx           -- Seccion contacto (Calendly + mailto)
      process.tsx       -- 4 pasos del proceso
      tech-stack.tsx    -- Grid de tecnologias (17+ tools)
      testimonials.tsx  -- 3 proyectos (Empliq, Classiq, BDesign)
      faq.tsx           -- 3 preguntas frecuentes para myisas
      demos/            -- Demos interactivos por servicio (Dialog modales)
    ui/                 -- Componentes shadcn/ui base
    icons/              -- Logo musuq + iconos tech (Simple Icons)
  lib/
    utils.ts            -- cn() utility
```

## Reglas de desarrollo

1. **Next.js 16 tiene breaking changes.** Siempre consultar `node_modules/next/dist/docs/01-app/` antes de tocar APIs de Next (metadata, routing, server components, etc.)
2. **Single-page con anchor nav.** IDs: `#servicios`, `#proceso`, `#trabajo`, `#faq`, `#contacto`. No crear rutas nuevas sin consultar.
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
- [x] FAQ section con 3 preguntas para myisas
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
