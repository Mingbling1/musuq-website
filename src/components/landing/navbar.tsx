"use client";

import { useState, useEffect } from "react";

const APP_URL = "https://app.musuq.tech";
const links = [
  { href: "#rubros", label: "Rubros" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#impacto", label: "Impacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[0_8px_30px_-12px_rgba(26,26,26,0.18)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-2xl font-extrabold lowercase tracking-tight text-warm-800"
        >
          musuq
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-warm-600 transition-colors hover:text-warm-800"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden text-sm font-medium text-warm-700 transition-colors hover:text-warm-800 sm:block"
          >
            Iniciar sesión
          </a>
          <a
            href={APP_URL}
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream-50 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Crear cuenta gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
