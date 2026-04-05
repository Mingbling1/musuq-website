---
name: musuq-nextjs
description: Configuracion Next.js 16 de musuq - React Compiler, Tailwind 4, shadcn/ui v4, base-ui, breaking changes, scripts y dependencias
license: MIT
compatibility: opencode
metadata:
  audience: developer
  project: musuq
---

# musuq Next.js Config

## Version CRITICA

**Next.js 16.2.1** — tiene breaking changes vs versiones anteriores.
SIEMPRE consultar `node_modules/next/dist/docs/01-app/` antes de usar APIs de Next.

## next.config.ts

```ts
const nextConfig: NextConfig = {
  reactCompiler: true,  // Babel React Compiler habilitado
};
```

## Dependencias principales

| Paquete | Version | Nota |
|---------|---------|------|
| next | 16.2.1 | React Compiler ON |
| react / react-dom | 19.2.4 | |
| framer-motion | 12.38.0 | Animaciones de entrada |
| tailwindcss | 4 | Via @tailwindcss/postcss |
| shadcn | 4.1.0 | Estilo base-nova |
| lucide-react | 1.0.1 | Iconografia |
| simple-icons | 16.13.0 | Logos tech |
| clsx + tailwind-merge | | cn() utility |
| class-variance-authority | | Variantes de componentes |
| @base-ui-components/react | 1.3.0 | Dialog, Popover, etc. |

## Scripts

```json
"dev": "next dev",        // No funciona con Cloudflare tunnel (WebSocket HMR)
"build": "next build",    // Usar para preview
"start": "next start",    // Production server
"lint": "next lint"
```

## Tailwind v4

- Usa `@theme inline` block en globals.css para variables CSS
- `@import "tailwindcss"` syntax
- PostCSS via `@tailwindcss/postcss`

## shadcn/ui v4

- Estilo: **base-nova**
- Usa `@base-ui/react` primitives (NO Radix)
- Dialog: `DialogPrimitive.Root`, `DialogPrimitive.Trigger`, `DialogPrimitive.Popup`, `DialogPrimitive.Backdrop`, `DialogPrimitive.Close`
- NO usa `DialogContent` estandar — verificar composicion real

## TypeScript

Path alias: `@/*` -> `./src/*`

## Breaking changes Next.js 16

1. `params`/`searchParams` son **Promises** — usar `await` o `React.use()`
2. Turbopack es el default bundler
3. `middleware.ts` renombrado a `proxy.ts`

## Framer Motion

- **NO usar** `ease: "easeOut"` — causa errores de TypeScript
- **Usar** arrays de cubic bezier: `ease: [0.25, 0.1, 0.25, 1]`

## Deployment

- Build: `npm run build`
- Preview: `npm start`
- Tunnel: `cloudflared tunnel --url http://localhost:3000`
- **Importante**: matar procesos anteriores (`pkill -f next-server`) antes de reiniciar

## Cosas que NO hacer

1. NO asumir que las APIs de Next.js funcionan igual que en v14/v15
2. NO agregar dependencias sin justificar
3. NO usar `pages/` router — solo App Router
4. NO desactivar React Compiler sin razon
5. NO hacer `cd` — usar `workdir` en Bash tool
