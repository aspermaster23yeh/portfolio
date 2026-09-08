"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Acerca de", href: "#acerca" },
  { label: "Contacto", href: "#contacto" },
  {
    label: "Que Plan App",
    href: "https://www.instagram.com/queplanapp/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelroblesz/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aspermaster23dev/",
  },
  {
    label: "GitHub",
    href: "https://github.com/aspermaster23yeh/portfolio",
  },
];

export function Footer() {
  return (
    <footer className="bg-parchment px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
              Michael Robles
            </p>
            <p className="mt-2 max-w-xs text-[12px] leading-relaxed tracking-[-0.12px] text-ink-muted-80">
              CEO de Que Plan App · @aspermaster23dev
            </p>
          </div>

          <div className="flex flex-col gap-0 sm:min-w-[180px]">
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileTap={{ scale: 0.98 }}
                className="py-2 text-[17px] leading-[1.2] tracking-normal text-ink-muted-80 transition-opacity hover:opacity-60"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-[-0.12px] text-ink-muted-48">
            Copyright © {new Date().getFullYear()} Michael Robles. Todos los
            derechos reservados.
          </p>
          <p className="text-[12px] tracking-[-0.12px] text-ink-muted-48">
            Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
