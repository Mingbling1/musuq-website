import { Logo } from "@/components/icons/logo";

const APP_URL = "https://app.musuq.tech";

export function Footer() {
  return (
    <footer className="bg-warm-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2.5">
              <Logo showText={false} size={30} className="text-cream-50" />
              <span className="font-serif text-3xl font-semibold lowercase tracking-tight text-cream-50">
                musuq
              </span>
            </span>
            <p className="mt-2 max-w-xs text-cream-100/70">
              Tecnología que impulsa cada venta. Hecho en Perú.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a
              href={APP_URL}
              className="font-semibold text-cream-50 transition-colors hover:text-terracotta-light"
            >
              Crear cuenta gratis →
            </a>
            <a href="mailto:hello@musuq.tech" className="text-cream-100/70 transition-colors hover:text-cream-50">
              hello@musuq.tech
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream-100/10 pt-6 text-[13px] text-cream-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium uppercase tracking-[0.25em] text-cream-100/70">
            Hecho para quienes mueven al Perú
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-cream-100">Privacidad</a>
            <a href="/terms" className="transition-colors hover:text-cream-100">Términos</a>
            <span>Perú · 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
