"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const socials = [
  {
    label: "Que Plan App",
    href: "https://www.instagram.com/queplanapp/",
    value: "@queplanapp · CEO",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelroblesz/",
    value: "linkedin.com/in/michaelroblesz",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aspermaster23dev/",
    value: "@aspermaster23dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/aspermaster23yeh/portfolio",
    value: "github.com/aspermaster23yeh",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-11 bg-tile px-5 py-20 text-white sm:px-8 sm:py-[80px]"
    >
      <div className="mx-auto max-w-[980px]">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Hablemos de tu próximo producto.
            </h2>
            <p className="mt-4 text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-body-muted">
              Abierto a colaboraciones, freelance y equipos de producto.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.08}>
            <ul className="space-y-6">
              {socials.map((item) => (
                <li key={item.label}>
                  <p className="text-[12px] tracking-[-0.12px] text-body-muted">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-1 inline-block text-[17px] font-normal text-primary-on-dark transition-opacity hover:opacity-80"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.14}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <Field label="Nombre" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[14px] tracking-[-0.224px] text-body-muted"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-[11px] border border-white/10 bg-white/5 px-4 py-3 text-[17px] tracking-[-0.374px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary-on-dark"
                  placeholder="Cuéntame sobre tu proyecto…"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-[22px] py-[11px] text-[17px] font-normal text-white transition-opacity hover:opacity-90"
              >
                {sent ? "Mensaje enviado" : "Enviar mensaje"}
              </motion.button>

              {sent && (
                <p className="text-center text-[14px] text-body-muted">
                  Gracias. Te responderé pronto.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[14px] tracking-[-0.224px] text-body-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-[11px] border border-white/10 bg-white/5 px-4 text-[17px] tracking-[-0.374px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary-on-dark"
      />
    </div>
  );
}
