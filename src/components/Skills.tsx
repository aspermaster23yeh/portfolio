"use client";

import { FadeIn } from "./FadeIn";
import { expertise, skills } from "@/data/skills";

const specialtySkills = skills.filter((s) => s.specialty);
const otherSkills = skills.filter((s) => !s.specialty);

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-11 bg-parchment px-5 py-20 sm:px-8 sm:py-[80px]"
    >
      <div className="mx-auto max-w-[980px]">
        <FadeIn>
          <p className="mb-3 text-[14px] tracking-[-0.224px] text-ink-muted-48">
            Skills
          </p>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            Stack y expertise de punta a punta.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
            Del diseño en Figma al despliegue mobile y web: frontend, backend,
            producto e IA con el mismo nivel de detalle.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <p className="mb-5 text-[13px] tracking-[-0.16px] text-ink-muted-48">
            Stack principal
          </p>
          <ul className="flex flex-wrap items-end gap-x-8 gap-y-5">
            {specialtySkills.map((skill) => (
              <li key={skill.name} className="flex flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
                <span className="text-[13px] tracking-[-0.16px] text-ink">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>

          <p className="mb-4 mt-10 text-[13px] tracking-[-0.16px] text-ink-muted-48">
            También trabajo con
          </p>
          <ul className="flex flex-wrap items-end gap-x-6 gap-y-5">
            {otherSkills.map((skill) => (
              <li key={skill.name} className="flex flex-col items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.logo}
                  alt=""
                  width={26}
                  height={26}
                  className="size-[26px] object-contain"
                />
                <span className="text-[11px] tracking-[-0.12px] text-ink-muted-48">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-16 space-y-14">
          {expertise.map((category, index) => (
            <FadeIn key={category.title} delay={0.06 * (index + 1)}>
              <h3 className="mb-5 text-[21px] font-semibold tracking-[-0.374px] text-ink">
                {category.title}
              </h3>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {category.items.map((item) => (
                  <li
                    key={item.title}
                    className="grid gap-2 py-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8"
                  >
                    <p className="text-[17px] font-semibold tracking-[-0.374px] text-ink">
                      {item.title}
                    </p>
                    <p className="text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
