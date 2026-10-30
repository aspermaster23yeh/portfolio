"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  pejExtras,
  pejMeta,
  pejMilestones,
  pejPillars,
  pejStats,
} from "@/data/pej";
import { FadeIn } from "./FadeIn";

export function PejAward() {
  return (
    <section
      id="pej-2026"
      className="scroll-mt-11 relative overflow-hidden bg-surface-black text-white"
    >
      {/* Intro */}
      <div className="relative px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-[88px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(41,151,255,0.18)_0%,_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-[980px]">
          <FadeIn>
            <p className="text-[13px] font-medium tracking-[0.08em] text-primary-on-dark uppercase">
              {pejMeta.award}
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
              Caso de mérito · Ciencia, tecnología y desarrollo
            </h2>
            <p className="mt-3 text-[15px] tracking-[-0.2px] text-white/55">
              {pejMeta.distinction} · {pejMeta.category}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-8 max-w-2xl text-[18px] leading-[1.5] tracking-[-0.3px] text-white/80">
              {pejMeta.summary}
            </p>
            <p className="mt-4 text-[14px] tracking-[-0.16px] text-white/45">
              {pejMeta.name} · {pejMeta.age} años · {pejMeta.city}
              <br />
              {pejMeta.school}
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-6">
              {pejStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <p className="text-[28px] font-semibold tracking-[-0.4px] text-white sm:text-[32px]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.35] tracking-[-0.1px] text-white/50">
                      {stat.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>

      {/* Hero evidence strip */}
      <FadeIn>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[18px] sm:col-span-7 sm:aspect-[16/10]">
              <Image
                src="/pej/selected/page35-img01.jpg"
                alt="Primer Google I/O Extended Nayarit con más de 220 asistentes"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-[13px] text-white/90">
                Primer Google I/O Extended Nayarit · 220+ asistentes
              </figcaption>
            </figure>
            <div className="grid gap-3 sm:col-span-5 sm:grid-rows-2">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[18px] sm:aspect-auto sm:min-h-0">
                <Image
                  src="/pej/selected/page34-img01.jpg"
                  alt="En el escenario de Google I/O Extended"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-[12px] text-white/90">
                  GDG Leader · escenario I/O Extended
                </figcaption>
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[18px] sm:aspect-auto sm:min-h-0">
                <Image
                  src="/pej/selected/page42-img01.jpg"
                  alt="Financiamiento de $300,000 para Estado Limpio"
                  fill
                  sizes="40vw"
                  className="object-cover object-top"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-[12px] text-white/90">
                  $300,000 MXN aprobados · Estado Limpio
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Timeline of victories */}
      <div className="mx-auto max-w-[980px] px-5 py-20 sm:px-8 sm:py-24">
        <FadeIn>
          <p className="text-[13px] tracking-[0.08em] text-white/45 uppercase">
            Trayectoria competitiva
          </p>
          <h3 className="mt-3 max-w-xl text-[clamp(1.6rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-white">
            De Palenque a Durango, de Tepic a Puebla
          </h3>
          <p className="mt-3 max-w-xl text-[16px] leading-[1.5] text-white/65">
            Resultados documentados en hackathons e InnovaTecNM: evidencia
            oficial de innovación aplicada a salud, industria y clima.
          </p>
        </FadeIn>

        <ol className="mt-12 space-y-0 divide-y divide-white/10 border-y border-white/10">
          {pejMilestones.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index * 0.04, 0.2)}>
              <li className="grid gap-6 py-8 sm:grid-cols-[1fr_220px] sm:items-center lg:grid-cols-[1fr_280px]">
                <div>
                  <p className="text-[12px] font-medium tracking-[0.06em] text-primary-on-dark">
                    {item.year}
                  </p>
                  <h4 className="mt-2 text-[18px] font-semibold tracking-[-0.3px] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] font-medium text-white/70">
                    {item.result}
                  </p>
                  <p className="mt-3 max-w-xl text-[15px] leading-[1.5] text-white/55">
                    {item.description}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>

      {/* Pillars */}
      <div className="bg-[#111113] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[980px] space-y-24">
          {pejPillars.map((pillar, pillarIndex) => (
            <div key={pillar.id}>
              <FadeIn>
                <p className="text-[13px] tracking-[0.08em] text-white/45 uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-3 text-[clamp(1.6rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-white/65">
                  {pillar.text}
                </p>
              </FadeIn>

              <div
                className={`mt-8 grid gap-3 sm:gap-4 ${
                  pillarIndex % 2 === 0
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {pillar.images.map((img, i) => (
                  <FadeIn key={img.src} delay={0.05 * i}>
                    <motion.figure
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="group relative overflow-hidden rounded-[14px]"
                    >
                      <div
                        className={`relative overflow-hidden ${
                          pillarIndex % 2 === 0 && i === 0
                            ? "aspect-[16/11] sm:col-span-1"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <figcaption className="mt-2 text-[12px] tracking-[-0.1px] text-white/45">
                        {img.caption}
                      </figcaption>
                    </motion.figure>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra credentials */}
      <div className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[980px]">
          <FadeIn>
            <p className="text-[13px] tracking-[0.08em] text-white/45 uppercase">
              También documentado
            </p>
            <h3 className="mt-3 max-w-xl text-[clamp(1.5rem,3vw,1.85rem)] font-semibold tracking-[-0.02em] text-white">
              Producto, industria y formación continua
            </h3>
          </FadeIn>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {pejExtras.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <li className="border-t border-white/10 pt-6">
                  <h4 className="text-[17px] font-semibold tracking-[-0.3px] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-[1.5] text-white/55">
                    {item.text}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.1}>
            <div className="mt-14 flex flex-col gap-4 rounded-[18px] border border-white/10 bg-white/[0.03] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="text-[15px] font-medium text-white">
                  Postulación PEJ 2026 · autopropuesta individual
                </p>
                <p className="mt-1 max-w-md text-[14px] text-white/50">
                  Expediente respaldado con pruebas documentales, certificados y
                  evidencia fotográfica de impacto en Nayarit.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                Contactar / respaldar
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
