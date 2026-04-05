---
name: musuq-seo
description: Estado SEO actual de musuq.tech - metadata, Open Graph, robots, sitemap, structured data, issues pendientes y prioritize
license: MIT
compatibility: opencode
metadata:
  audience: developer
  project: musuq
---

# musuq SEO

Landing page en espanol para estudio digital peruano. Dominio: musuq.tech.

## Metadata actual (layout.tsx)

```ts
title: "musuq | estudio digital"
description: "Construimos productos digitales con proposito. Landings, e-commerce, automatizaciones y software a medida para negocios que quieren crecer."
keywords: estudio digital, desarrollo web, landing pages, e-commerce, automatizaciones, software a medida
lang: es
```

## IMPLEMENTADO recently

- Title con pipe `|` en lugar de `--`
- SectionDivider y SectionFade en page.tsx

## PENDIENTE - Prioridad alta

### 1. Open Graph + Twitter Cards (CRITICO)

Agregar en `layout.tsx` metadata export:
```ts
metadataBase: new URL('https://musuq.tech'),
openGraph: {
  title: "musuq | estudio digital",
  description: "Construimos productos digitales con proposito...",
  url: 'https://musuq.tech',
  siteName: 'musuq',
  locale: 'es_PE',
  type: 'website',
  images: [{ url: '/og-image.png', width: 1200, height: 630 }]
},
twitter: { card: 'summary_large_image', title: '...', description: '...', images: ['/og-image.png'] }
```

### 2. robots.ts (CRITICO)

Crear `src/app/robots.ts`:
```ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://musuq.tech/sitemap.xml',
  }
}
```

### 3. sitemap.ts (CRITICO)

Crear `src/app/sitemap.ts`:
```ts
export default function sitemap() {
  return [{ url: 'https://musuq.tech', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
```

### 4. Canonical URL

Ya cubierto por `metadataBase` + `openGraph.url`

## PENDIENTE - Prioridad media

### 5. JSON-LD Structured Data

Tipo: `Organization` + `ProfessionalService`. Agregar en `<head>` via metadata:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "musuq",
  "url": "https://musuq.tech",
  "logo": "https://musuq.tech/icon.svg",
  "email": "hello@musuq.tech",
  "areaServed": "Peru",
  "serviceType": ["Landing Pages", "E-commerce", "Automations", "Custom Software"]
}
```

### 6. OG Image

Crear `/public/og-image.png` (1200x630px) con branding musuq (terracotta + cream + logo)

### 7. manifest.ts

Crear `src/app/manifest.ts` para PWA metadata:
```ts
export default function manifest() {
  return {
    name: "musuq | estudio digital",
    short_name: "musuq",
    description: "...",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#C8553D",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }]
  }
}
```

### 8. apple-icon.png

Crear `/src/app/apple-icon.png` (180x180px) para bookmarks en iOS

## PENDIENTE - Prioridad baja

- Security headers en next.config.ts
- prefers-reduced-motion en animaciones CSS
- Legal pages (privacy, terms)
- Social links en footer
- FAQ section con FAQPage schema

## Archivos basura en /public/

Eliminar: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

---

# BACKLOG P0-P3

## P0 — Critico

- [ ] CTA "Agendar llamada" es link muerto (href="#" en cta.tsx) — necesita Calendly/Cal.com
- [ ] Open Graph + Twitter Cards en metadata
- [ ] robots.ts + sitemap.ts
- [ ] metadataBase + canonical URL

## P1 — SEO

- [ ] JSON-LD structured data (Organization + Service)
- [ ] OG image (1200x630)
- [ ] manifest.ts + apple-icon.png
- [ ] Pagina 404 personalizada
- [ ] Analytics (Plausible/Umami recomendado para privacidad)
- [ ] Limpiar archivos basura en /public/ (file.svg, globe.svg, next.svg, vercel.svg, window.svg)

## P2 — Conversion

- [ ] Testimonios / social proof
- [ ] Portafolio / casos de estudio
- [ ] Boton WhatsApp flotante (importante para Peru/LATAM)
- [ ] prefers-reduced-motion en todas las animaciones
- [ ] Security headers en next.config.ts

## P3 — Pulido

- [ ] Seccion FAQ + schema
- [ ] Links redes sociales en footer
- [ ] Skip-to-content link
- [ ] Paginas legales (privacidad, terminos)
- [ ] Optimizar pesos de fuente (reducir de 4 a 3)
