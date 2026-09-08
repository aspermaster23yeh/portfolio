"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const specialtySkills = skills.filter((s) => s.specialty);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col items-center justify-center bg-canvas px-5 pt-11 pb-24 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[720px] text-center"
      >
        <motion.div variants={item} className="mb-7 flex justify-center">
          <div className="relative size-[128px] overflow-hidden rounded-full ring-1 ring-hairline sm:size-[148px]">
            <Image
              src="/michael-robles.jpg"
              alt="Michael Robles"
              fill
              priority
              sizes="148px"
              className="object-cover object-[center_20%]"
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 text-[14px] font-normal tracking-[-0.224px] text-ink-muted-48"
        >
          @aspermaster23dev
        </motion.p>

        <motion.h1
          variants={item}
          className="text-[clamp(2.5rem,8vw,3.5rem)] font-semibold leading-[1.07] tracking-[-0.28px] text-ink"
        >
          Michael Robles
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-[clamp(1.25rem,3vw,1.75rem)] font-normal leading-[1.14] tracking-[0.196px] text-ink"
        >
          CEO de Que Plan App · Google Developer Groups Leader · Desarrollador
          full stack.
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-md text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-ink-muted-80"
        >
          Especializado en Flutter, Firebase, Vue y Figma — con stack amplio
          para producto web y mobile.
        </motion.p>

        <motion.a
          variants={item}
          href="https://www.instagram.com/queplanapp/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-[14px] tracking-[-0.224px] text-primary transition-opacity hover:opacity-80"
        >
          @queplanapp
        </motion.a>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#proyectos"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-[22px] py-[11px] text-[17px] font-normal text-white transition-opacity hover:opacity-90"
          >
            Ver proyectos
          </motion.a>
          <motion.a
            href="#contacto"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-[22px] py-[11px] text-[17px] font-normal text-primary transition-opacity hover:opacity-80"
          >
            Contactar
          </motion.a>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          aria-label="Stack principal"
        >
          {specialtySkills.map((skill) => (
            <li key={skill.name} className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.logo}
                alt=""
                width={22}
                height={22}
                className="size-[22px] object-contain"
              />
              <span className="text-[13px] tracking-[-0.16px] text-ink-muted-80">
                {skill.name}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.a
          variants={item}
          href="#skills"
          className="mt-5 inline-block text-[14px] tracking-[-0.224px] text-primary transition-opacity hover:opacity-80"
        >
          Ver expertise completo
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#skills"
          aria-label="Ir a skills"
          className="flex flex-col items-center gap-2 text-ink-muted-48 transition-opacity hover:opacity-70"
        >
          <span className="text-[12px] tracking-[-0.12px]">Explorar</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-5 w-px bg-hairline"
          />
        </a>
      </motion.div>
    </section>
  );
}
