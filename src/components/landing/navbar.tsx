"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/icons/logo";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream-100/80 backdrop-blur-sm border-b border-warm-800/[0.04] shadow-[0_1px_3px_rgba(26,26,26,0.03)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="text-warm-800">
          <Logo size={32} textClassName="text-warm-800" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-warm-500 transition-colors hover:text-warm-800"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-full border border-warm-800 px-5 py-2 text-sm font-medium text-warm-800 transition-all hover:bg-warm-800 hover:text-cream-50 active:scale-95"
          >
            Hablemos
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden p-2"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-5 bg-warm-800 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-warm-800 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-warm-800/[0.04] bg-cream-100/95 backdrop-blur-sm px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-warm-600 hover:text-warm-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full border border-warm-800 px-5 py-2.5 text-center text-sm font-medium text-warm-800"
            >
              Hablemos
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
