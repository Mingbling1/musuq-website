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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Barra cream con bordes (el fondo del sitio es cream permanente) */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-warm-800/15 bg-cream-100/95 backdrop-blur-md">
        <div className="flex items-stretch">
          {/* Celda marca */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex flex-1 items-center gap-2.5 border-r border-warm-800/15 px-5 py-3.5 text-warm-800 md:px-6"
            aria-label="Musuq inicio"
          >
            <Logo showText={false} size={26} className="text-warm-800" />
            <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">musuq</span>
          </a>

          {/* Celdas de navegación (desktop) */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden items-center border-r border-warm-800/15 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-warm-600 transition-colors hover:text-warm-800 md:flex"
            >
              {l.label}
            </a>
          ))}

          {/* Celda CTA terracota (desktop) */}
          <a
            href={APP_URL}
            className="hidden items-center bg-terracotta px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-cream-50 transition-[background-color,transform] hover:bg-[#b0472f] active:scale-[0.97] md:flex"
          >
            Crear cuenta
          </a>

          {/* Celda hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex w-14 items-center justify-center border-l border-warm-800/15 text-warm-800 md:hidden"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.8} /> : <Menu className="h-6 w-6" strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* Overlay de menú móvil */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream-100 px-6 pb-10 pt-24 transition-[opacity,transform] duration-200 ease-out md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-2 border-warm-800">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-5 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-warm-700 ${
                i > 0 ? "border-t-2 border-warm-800" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_URL}
            className="border-t-2 border-warm-800 bg-terracotta px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-cream-50"
          >
            Crear cuenta
          </a>
        </nav>
      </div>
    </>
  );
}
