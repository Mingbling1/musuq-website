---
name: musuq-components
description: Arquitectura de componentes landing musuq - page.tsx, secciones, demos modales, service-visuals, flujo completo de la landing page
license: MIT
compatibility: opencode
metadata:
  audience: developer
  project: musuq
---

# musuq Components

Landing page SPA compuesta en `src/app/page.tsx`.

## Orden de secciones (page.tsx)

```
Hero
  SectionDivider (linea + hoja centro)
Services
  SectionFade (gradiente tintado)
TechStack (bg-cream-200/40)
  SectionFade (gradiente plano)
Process
  SectionFade (gradiente tintado)
CTA (bg-cream-200/40)
```

## Archivos de componentes (src/components/landing/)

| Archivo | Descripcion |
|---------|-------------|
| hero.tsx | BatteryStack SVG animado + headline + CTAs |
| navbar.tsx | Header fijo, scroll detection, mobile hamburger menu |
| footer.tsx | Links servicios, contacto, quote |
| services.tsx | 5 servicios con preview SVG + Dialog demo |
| cta.tsx | Email hello@musuq.tech + "Agendar llamada" (LINK MUERTO: href="#") |
| process.tsx | 4 pasos del workflow asymmetric layout |
| tech-stack.tsx | Grid 17+ tecnologias con iconos |

## Demos interactivas (src/components/landing/demos/)

Dialog disparado desde services.tsx usando shadcn/ui (base-ui):
- `landing-demo.tsx`
- `ecommerce-demo.tsx`
- `automation-demo.tsx`
- `software-demo.tsx`
- `consulting-demo.tsx`

## Service visuals (src/components/landing/service-visuals.tsx)

SVG wireframes estaticos por cada servicio. Animados con `gentle-sway`.

## 5 Servicios

| # | Titulo | Descripcion corta |
|---|--------|-------------------|
| 01 | Landings que convierten | SEO, copywriting, velocidad |
| 02 | Tiendas online | Medusa/Shopify/headless + Izipay/Stripe |
| 03 | Automatizaciones | Bots, n8n, Chatwoot, scraping |
| 04 | Software a medida | MVPs, full-stack, dashboards |
| 05 | Consultas tech | Asesoria stack/arquitectura |

## Composicion page.tsx

```tsx
<Hero />
<SectionDivider />
<Services />
<SectionFade to="tinted" />
<TechStack />
<SectionFade to="plain" />
<Process />
<SectionFade to="tinted" />
<CTA />
```

## Iconos (src/components/icons/)

- `logo.tsx` — Semilla + 3 hojas SVG. Ajustar opacidades y stroke para hacerlo mas grueso.
- `tech-icons.tsx` — Wrappers de simple-icons

## UI base (src/components/ui/)

shadcn/ui v4 con base-ui primitives: badge, button, card, dialog, separator

## Reglas

1. Navbar IDs: #servicios, #proceso, #contacto
2. BatteryStack solo visible en desktop (hidden lg:block)
3. Service demos: Dialog con `showCloseButton={false}`, `max-h-[600px]`
4. "Agendar llamada" en cta.tsx tiene href="#" — es un link muerto que hay que arreglar
5. NO usar motion.div con whileInView en secciones — causa flicker/sparkle en iOS Safari. Usar CSS animations o nada.
6. Cloudflare tunnel: iniciar con `nohup cloudflared tunnel --url http://localhost:3000 > /tmp/cf.log 2>&1 & sleep 10 && grep trycloudflare /tmp/cf.log`. Guardar URL输出的 URL en la variable de sesion para informar al usuario.

## Testimonials (src/components/landing/testimonials.tsx)

- NO motion.div — todos los elementos son estáticos
- Grid: 1 col mobile, 2 col sm, 3 col lg
- Funcion: mostrar 3 proyectos (Empliq, Classiq, BDesign)

---

# BACKLOG P0-P3

## P0 — Critico

- [ ] **CTA "Agendar llamada" link muerto** (cta.tsx, href="#") — necesita Calendly/Cal.com

## P2 — Conversion

- [ ] Boton WhatsApp flotante (importante para Peru/LATAM)
- [ ] Testimonios / social proof (testimonials.tsx ya existe, solo falta contenido real)
