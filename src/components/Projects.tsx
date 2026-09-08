"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { folders, type DesktopFolder } from "@/data/folders";
import { projectsInFolder } from "@/data/projects";
import { FadeIn } from "./FadeIn";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<DesktopFolder | null>(null);

  return (
    <section
      id="proyectos"
      className="scroll-mt-11 relative overflow-hidden px-5 py-20 sm:px-8 sm:py-[80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#e8eef5_0%,_#f5f5f7_45%,_#ebe7e2_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(29,29,31,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[980px]">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[14px] tracking-[-0.224px] text-ink-muted-48">
              Desktop
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Escritorio de trabajo
            </h2>
            <p className="mt-3 text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-ink-muted-80">
              Ocho carpetas. Ingeniería, producto, diseño y escenario —
              organizados como en macOS.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            layout
            className="mt-12 rounded-[22px] border border-white/60 bg-white/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-[18px] sm:p-8 md:p-10"
          >
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-black/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="text-[12px] tracking-[-0.12px] text-ink-muted-48">
                Finder — Portfolio
              </p>
              <p className="text-[12px] tracking-[-0.12px] text-ink-muted-48">
                {folders.length} items
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {folders.map((folder) => (
                  <ProjectCard
                    key={folder.id}
                    folder={folder}
                    itemCount={projectsInFolder(folder.id).length}
                    onSelect={setSelected}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      <ProjectModal folder={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
