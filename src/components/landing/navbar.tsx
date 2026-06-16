"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/logo";

const APP_URL = "https://app.musuq.tech";
const links = [
  { href: "#por-que", label: "Por qué" },
  { href: "#rubros", label: "Rubros" },
  { href: "#pricing", label: "Planes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onCream = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open
            ? "border-b border-warm-800/[0.06] bg-cream-100/90 backdrop-blur-md shadow-[0_8px_30px_-14px_rgba(26,26,26,0.18)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2.5"
            aria-label="Musuq inicio"
          >
            <Logo showText={false} size={28} className={onCream ? "text-warm-800" : "text-cream-50"} />
            <span
              className={`font-display text-2xl font-medium lowercase tracking-[-0.02em] transition-colors ${
                onCream ? "text-warm-800" : "text-cream-50"
              }`}
            >
              musuq
            </span>
          </a>

          {/* Links desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-warm-600 hover:text-warm-800" : "text-cream-50/70 hover:text-cream-50"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              className={`hidden text-sm font-medium transition-colors sm:block ${
                scrolled ? "text-warm-700 hover:text-warm-800" : "text-cream-50/80 hover:text-cream-50"
              }`}
            >
              Iniciar sesión
            </a>
            <a
              href={APP_URL}
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95 sm:inline-flex ${
                scrolled ? "bg-terracotta text-cream-50" : "bg-cream-50 text-terracotta"
              }`}
            >
              Crear cuenta gratis
            </a>

            {/* Botón hamburguesa (móvil) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className={`-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
                onCream ? "text-warm-800" : "text-cream-50"
              }`}
            >
              {open ? <X className="h-6 w-6" strokeWidth={1.8} /> : <Menu className="h-6 w-6" strokeWidth={1.8} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay de menú móvil — FUERA del header (evita el containing-block
          del backdrop-filter, que lo abría parcial y lento). z-40 < header z-50. */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream-100 px-6 pb-10 pt-24 transition-[opacity,transform] duration-200 ease-out md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-warm-800/10 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-warm-800/10 py-4 font-display text-2xl font-medium text-warm-800"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full border border-warm-800/15 px-6 py-3.5 text-sm font-semibold text-warm-800"
          >
            Iniciar sesión
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream-50"
          >
            Crear cuenta gratis
          </a>
        </div>
      </div>
    </>
  );
}
