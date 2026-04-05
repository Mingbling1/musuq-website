<!-- BEGIN:nextjs-agent-rules -->
# musuq — AGENTS.md

> Este proyecto tiene skills en formato OpenCode y Claude Code. Cargar con la herramienta `skill` antes de trabajar.

## Skills disponibles (OpenCode)

```
.opencode/skills/musuq-components/SKILL.md   → Arquitectura, componentes, demos
.opencode/skills/musuq-design/SKILL.md       → Sistema de diseño, paleta, animaciones
.opencode/skills/musuq-nextjs/SKILL.md        → Config Next.js 16, dependencias, breaking changes
.opencode/skills/musuq-seo/SKILL.md          → SEO pendiente, metadata, OG, sitemap
```

## Skills Claude Code (compatibles)

```
.claude/skills/musuq-components.md
.claude/skills/musuq-design.md
.claude/skills/musuq-nextjs.md
.claude/skills/musuq-seo.md
```

## Antes de trabajar — cargar skill

```
skill({ name: "musuq-components" })
skill({ name: "musuq-nextjs" })
skill({ name: "musuq-design" })
skill({ name: "musuq-seo" })
```

## Info rapida

- **Stack:** Next.js 16.2.1 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui v4 + Framer Motion
- **Dominio:** musuq.tech | **Email:** hello@musuq.tech
- **Build:** `npm run build` | **Preview:** `npm start` + `cloudflared tunnel --url http://localhost:3000`
- **Dev server no funciona con tunnel** — siempre usar `npm start` (production build)

## Cloudflare Tunnel

**URL actual:** https://determine-solid-mixture-administrative.trycloudflare.com

**Para generar nueva URL (cada vez que se reinicia el tunnel):**
```
nohup cloudflared tunnel --url http://localhost:3000 > /tmp/cf.log 2>&1 & sleep 12 && grep trycloudflare /tmp/cf.log
```
Guardar la URL del log ANTES de continuar — se pierde si no se anota.

**Verificar que el next-server esta corriendo:**
```
ss -tlnp | grep 3000
```

**Matar puerto 3000 si hay zombie:**
```
ss -tlnp | grep 3000 | awk '{print $7}' | grep -oP 'pid=\K[0-9]+' | xargs -I{} kill -9 {}
```

<!-- END:nextjs-agent-rules -->
