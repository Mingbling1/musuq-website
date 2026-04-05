import Link from "next/link";
import { Logo } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="border-t border-warm-800/[0.06] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-5">
            <Link href="/" className="inline-block mb-4 text-warm-800">
              <Logo size={32} textClassName="text-warm-800" />
            </Link>
            <p className="text-sm text-warm-400 leading-relaxed max-w-xs">
              Estudio digital que construye productos con propósito.
              Cada línea de código tiene una razón de existir.
            </p>
          </div>

          {/* Links */}
          <div className="sm:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-warm-400 mb-4">
              Servicios
            </p>
            <ul className="space-y-2.5">
              {[
                "Landing Pages",
                "E-commerce",
                "Automatizaciones",
                "Software a Medida",
                "Consultas Tech",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#servicios"
                    className="text-sm text-warm-500 hover:text-warm-800 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-warm-400 mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="mailto:hello@musuq.tech"
                  className="text-sm text-warm-500 hover:text-warm-800 transition-colors"
                >
                  hello@musuq.tech
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs text-warm-400 italic">
                &ldquo;Lo simple es lo que funciona.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-warm-800/[0.04] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-warm-400">
            &copy; {new Date().getFullYear()} musuq
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-warm-400 hover:text-warm-800 transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="text-xs text-warm-400 hover:text-warm-800 transition-colors">
              Términos
            </Link>
            <p className="text-xs text-warm-400">
              Hecho con cuidado desde Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
