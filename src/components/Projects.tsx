"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  filterTabs,
  projects,
  type FilterId,
  type Project,
} from "@/data/projects";
import { FadeIn } from "./FadeIn";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="proyectos"
      className="scroll-mt-11 bg-parchment px-5 py-20 sm:px-8 sm:py-[80px]"
    >
      <div className="mx-auto max-w-[980px]">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Proyectos seleccionados
            </h2>
            <p className="mt-3 text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-ink-muted-80">
              Productos digitales con atención al detalle.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <LayoutGroup>
            <div
              role="tablist"
              aria-label="Filtrar proyectos"
              className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-1 rounded-full border border-hairline bg-canvas p-1"
            >
              {filterTabs.map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(tab.id)}
                    className={`relative rounded-full px-4 py-2 text-[14px] tracking-[-0.224px] transition-colors ${
                      active ? "text-ink" : "text-ink-muted-48 hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-parchment"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </FadeIn>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
