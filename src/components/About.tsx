"use client";

import { FadeIn } from "./FadeIn";

const highlights = [
  {
    title: "Claridad primero",
    text: "Cada pantalla debe comunicarse en segundos. Menos ruido, más intención.",
  },
  {
    title: "Detalle deliberado",
    text: "Espaciado, tipografía y motion tratados con la misma precisión que el producto.",
  },
  {
    title: "Construcción real",
    text: "Diseño y código en el mismo flujo: prototipos que se convierten en producto.",
  },
];

export function About() {
  return (
    <section
      id="acerca"
      className="scroll-mt-11 bg-canvas px-5 py-20 sm:px-8 sm:py-[80px]"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FadeIn>
            <p className="mb-3 text-[14px] tracking-[-0.224px] text-ink-muted-48">
              Acerca de
            </p>
            <h2 className="max-w-xl text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Diseño y desarrollo con la misma atención al detalle.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
              Soy Michael Robles (@aspermaster23dev) — CEO de{" "}
              <a
                href="https://www.instagram.com/queplanapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-opacity hover:opacity-80"
              >
                Que Plan App
              </a>
              , diseñador de producto y desarrollador frontend. Trabajo en la
              intersección entre estética e ingeniería: interfaces limpias,
              tipografía clara y experiencias interactivas que se sienten
              nativas.
            </p>
            <p className="mt-4 max-w-lg text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
              Mi enfoque se inspira en el diseño de Apple: espacio negativo,
              tipografía generosa y microinteracciones que nunca gritan.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <ul className="space-y-0 divide-y divide-hairline border-y border-hairline">
              {highlights.map((item) => (
                <li key={item.title} className="py-7">
                  <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
