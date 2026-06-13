# Despliegue — musuq-website

> Fuente de verdad del proceso de deploy. **No improvisar** (no túneles manuales para "ver producción"): producción se actualiza por push a `main`.

## Cómo se despliega (CI/CD)

Producción (`musuq.tech`) corre en **Cloudflare Workers** y se despliega automáticamente vía **GitHub Actions**.

- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** `push` a la rama **`main`** (o `workflow_dispatch` manual).
- **Pasos del job:** `npm ci` → `npx opennextjs-cloudflare build` → `npx wrangler deploy`.
- **Secrets requeridos** (en GitHub repo settings): `CF_WORKERS_API_TOKEN`, `CF_WORKERS_ACCOUNT_ID`.
- **Repo:** `github.com/Mingbling1/musuq-website`.

### Para publicar un cambio

```bash
# trabajar en una rama feature
git checkout -b feat/<algo>
# … cambios …
git add -A && git commit -m "feat: …"

# verificar el build de Cloudflare ANTES de subir (evita deploy roto)
export NVM_DIR="/home/jac/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22
npm run build        # build de Next
npm run cf:build     # build de OpenNext/Cloudflare (lo que corre el CI)

# integrar a main y publicar
git checkout main && git merge feat/<algo>
git push origin main   # ← esto dispara el deploy en GitHub Actions
```

El deploy tarda ~3–5 min. Ver estado en GitHub → Actions, o con `gh run watch`.

## Preview local (NO usar túnel para "producción")

```bash
npm run preview   # opennextjs-cloudflare build && wrangler dev  (preview del worker en local)
# o, para screenshots de QA:
npx next start -p 3007 -H 127.0.0.1
```

> El dev server (`next dev`) no se usa para validar el deploy; el CI corre `opennextjs-cloudflare build`.
> Para revisar "como producción" sin publicar, usar `npm run preview` (wrangler dev), no un quick-tunnel público.
