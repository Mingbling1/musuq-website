---
name: musuq-seo
description: Estado SEO actual de musuq.tech - metadata, Open Graph, robots, sitemap, structured data, issues pendientes y prioritario
license: MIT
compatibility: opencode
metadata:
  audience: developer
  project: musuq
---

# musuq SEO

Landing page en español para estudio digital peruano. Dominio: musuq.tech.

## Metadata actual (layout.tsx)

```ts
title: "musuq | estudio digital"
description: "Estudio digital peruano. Construimos landings, tiendas online, automatizaciones y software a medida para mypes y negocios que quieren crecer sin plantillas ni misterios."
lang: es
metadataBase: new URL("https://musuq.tech")
openGraph:
  title: "musuq | estudio digital"
  url: "https://musuq.tech"
  siteName: "musuq"
  locale: "es_PE"
  type: "website"
  images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
alternates: { canonical: "https://musuq.tech" }
twitter:
  card: "summary_large_image"
  images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
robots: { index: true, follow: true }
```

## Lighthouse SEO Score: 100/100

Todos los audits SEO pasan:
- canonical, meta-description, document-title, robots.txt, http-status-code
- link-text, crawlable-anchors, hreflang, image-alt, is-crawlable

## IMPLEMENTADO

- Title con pipe `|`
- SectionDivider y SectionFade en page.tsx
- Open Graph + Twitter Cards con imágenes
- Canonical URL (`alternates.canonical`)
- robots.txt (src/app/robots.ts)
- sitemap.xml (src/app/sitemap.ts)
- JSON-LD: FAQPage schema + ProfessionalService schema
- Redirect www → non-www via middleware (src/middleware.ts)

## PENDIENTE - Prioridad media

### 1. OG Image real

Crear `/public/og-image.png` (1200x630px) con branding musuq (terracotta + cream + logo). Actualmente usa `opengraph-image.tsx` generado dinámicamente.

### 2. apple-icon.png

Crear `/public/apple-icon.png` (180x180px) para bookmarks en iOS. Currently 404.

### 3. OG image dinámina vs real

El `opengraph-image.tsx` genera imagen dinámicamente. Una imagen real en `/public/og-image.png` sería más confiable.

## PENDIENTE - Prioridad baja

- Security headers en next.config.ts (ya parcialmente implementados)
- prefers-reduced-motion en animaciones CSS
- Social links en footer
- Legal pages ya existen: /privacy, /terms

## Archivos basura en /public/

Eliminar: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

---

# BACKLOG P0-P3

## P0 — Crítico

- [ ] CTA "Agendar llamada" es link muerto (href="#" en cta.tsx) — necesita Calendly/Cal.com

## P1 — SEO

- [x] Open Graph + Twitter Cards
- [x] robots.ts + sitemap.xml
- [x] metadataBase + canonical URL
- [x] Redirect www → non-www
- [ ] OG image real (1200x630)
- [ ] apple-icon.png (180x180)
- [ ] Analytics (Plausible/Umami recomendado para privacidad)

## P2 — Conversion

- [ ] Testimonios / social proof
- [ ] Portafolio / casos de estudio
- [ ] Botón WhatsApp flotante (importante para Perú/LATAM)
- [ ] prefers-reduced-motion en todas las animaciones

## P3 — Pulido

- [x] FAQ section con FAQPage schema
- [x] Páginas legales (privacy, terms)
- [ ] Links redes sociales en footer
- [ ] Skip-to-content link
- [ ] Optimizar pesos de fuente (reducir de 4 a 3)

## Notas técnicas SEO

- `metadataBase` en Next.js define la URL base para todas las metadata relativas
- `alternates.canonical` agrega `<link rel="canonical">` en el `<head>`
- `openGraph.images` con objeto (no string) permite especificar width/height
- Los schemas JSON-LD se injectan via `dangerouslySetInnerHTML` en el body
