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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          light
            ? "border-cream-50/15 bg-transparent"
            : "border-warm-800/10 bg-cream-100/92 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-6">
          {/* Marca + etiqueta editorial */}
          <div className="flex items-center gap-4">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className={`inline-flex items-center gap-2.5 ${light ? "text-cream-50" : "text-warm-800"}`}
              aria-label="Musuq inicio"
            >
              <Logo showText={false} size={26} className={light ? "text-cream-50" : "text-warm-800"} />
              <span className="font-display text-2xl font-medium lowercase tracking-[-0.02em]">musuq</span>
            </a>
            <span
              className={`hidden text-[10px] font-semibold uppercase tracking-[0.2em] lg:inline ${
                light ? "text-cream-50/55" : "text-warm-400"
              }`}
            >
              ( Página principal )
            </span>
          </div>

          {/* Links editoriales entre corchetes */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  light ? "text-cream-50/75 hover:text-cream-50" : "text-warm-600 hover:text-warm-800"
                }`}
              >
                <span className={light ? "text-cream-50/35" : "text-warm-400"}>[</span>
                {l.label}
                <span className={light ? "text-cream-50/35" : "text-warm-400"}>]</span>
              </a>
            ))}
            <a
              href={APP_URL}
              className={`ml-2 inline-flex items-center gap-1 border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                light
                  ? "border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-warm-800"
                  : "border-terracotta text-terracotta hover:bg-terracotta hover:text-cream-50"
              }`}
            >
              [ Crear cuenta ]
            </a>
          </div>

          {/* Hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={`-mr-1.5 inline-flex h-10 w-10 items-center justify-center md:hidden ${
              light ? "text-cream-50" : "text-warm-800"
            }`}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.8} /> : <Menu className="h-6 w-6" strokeWidth={1.8} />}
          </button>
        </nav>
      </header>

      {/* Overlay de menú móvil */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream-100 px-6 pb-10 pt-24 transition-[opacity,transform] duration-200 ease-out md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-warm-800/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-warm-800/10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-700"
            >
              <span className="text-warm-400">[</span>
              {l.label}
              <span className="text-warm-400">]</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center border border-warm-800/20 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-warm-800"
          >
            [ Iniciar sesión ]
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center bg-terracotta px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream-50"
          >
            [ Crear cuenta ]
          </a>
        </div>
      </div>
    </>
  );
}
