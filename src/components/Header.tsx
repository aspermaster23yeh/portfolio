"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#skills", label: "Skills" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#acerca", label: "Acerca de" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-black">
      <nav className="mx-auto flex h-11 max-w-[980px] items-center justify-between px-5 lg:max-w-[1024px]">
        <a
          href="#inicio"
          className="text-[12px] font-normal tracking-[-0.12px] text-white transition-opacity hover:opacity-80"
        >
          Michael Robles
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-normal tracking-[-0.12px] text-white/80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-px w-3.5 bg-white transition-transform duration-200 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`absolute h-px w-3.5 bg-white transition-transform duration-200 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-white/10 bg-surface-black md:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[14px] tracking-[-0.224px] text-white/90 transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
