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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sobre el hero dark → claro; al hacer scroll → barra cream con texto oscuro.
  const light = !scrolled && !open;
  const border = light ? "border-cream-50/25" : "border-warm-800/15";
  const txt = light ? "text-cream-50/80 hover:text-cream-50" : "text-warm-700 hover:text-warm-800";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${border} ${
          light ? "bg-transparent" : "bg-cream-100/95 backdrop-blur-md"
        }`}
      >
        {/* Fila de celdas con borders — edge-to-edge, sin corchetes */}
        <div className="flex items-stretch">
          {/* Celda marca (ocupa el espacio) */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`flex flex-1 items-center gap-2.5 border-r px-5 py-3.5 md:px-6 ${border} ${
              light ? "text-cream-50" : "text-warm-800"
            }`}
            aria-label="Musuq inicio"
          >
            <Logo showText={false} size={26} className={light ? "text-cream-50" : "text-warm-800"} />
            <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">musuq</span>
          </a>

          {/* Celdas de navegación (desktop) */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`hidden items-center border-r px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors md:flex ${border} ${txt}`}
            >
              {l.label}
            </a>
          ))}

          {/* Celda CTA destacada en terracota (desktop) */}
          <a
            href={APP_URL}
            className="hidden items-center bg-terracotta px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-cream-50 transition-colors hover:bg-[#b0472f] md:flex"
          >
            Crear cuenta
          </a>

          {/* Celda hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={`flex w-14 items-center justify-center border-l md:hidden ${border} ${
              light ? "text-cream-50" : "text-warm-800"
            }`}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.8} /> : <Menu className="h-6 w-6" strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* Overlay de menú móvil — celdas con borders */}
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
