"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      role="button"
      tabIndex={0}
      className="group cursor-pointer overflow-hidden rounded-[18px] border border-hairline bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-parchment">
        <ProjectMockup title={project.title} category={project.category} />
      </div>

      <div className="space-y-2 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-ink">
            {project.title}
          </h3>
          <span className="shrink-0 text-[12px] tracking-[-0.12px] text-ink-muted-48">
            {project.year}
          </span>
        </div>
        <p className="text-[14px] leading-[1.43] tracking-[-0.224px] text-ink-muted-80">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-parchment px-3 py-1.5 text-[12px] tracking-[-0.12px] text-ink-muted-80"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="pt-1 text-[14px] text-primary">Saber más</p>
      </div>
    </motion.article>
  );
}

function ProjectMockup({
  title,
  category,
}: {
  title: string;
  category: Project["category"];
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full max-w-[280px]">
        {category === "mobile" ? (
          <div className="product-shadow mx-auto w-[120px] rounded-[22px] border border-black/10 bg-canvas p-2 transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="aspect-[9/16] overflow-hidden rounded-[16px] bg-parchment">
              <div className="flex h-full flex-col justify-between p-3">
                <div className="space-y-2">
                  <div className="h-1.5 w-8 rounded-full bg-chip" />
                  <div className="h-2 w-16 rounded-full bg-ink/80" />
                  <div className="h-1.5 w-12 rounded-full bg-chip" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-8 rounded-lg bg-canvas" />
                  <div className="h-8 rounded-lg bg-canvas" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="product-shadow overflow-hidden rounded-[8px] border border-black/10 bg-canvas transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-chip" />
              <span className="h-1.5 w-1.5 rounded-full bg-chip" />
              <span className="h-1.5 w-1.5 rounded-full bg-chip" />
            </div>
            <div className="space-y-3 p-4">
              <div className="h-2.5 w-2/3 rounded-full bg-ink/85" />
              <div className="h-1.5 w-full rounded-full bg-hairline" />
              <div className="h-1.5 w-5/6 rounded-full bg-hairline" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-lg bg-parchment" />
                <div className="aspect-square rounded-lg bg-parchment" />
                <div className="aspect-square rounded-lg bg-parchment" />
              </div>
            </div>
          </div>
        )}
        <p className="pointer-events-none absolute -bottom-6 left-0 right-0 truncate text-center text-[10px] tracking-[-0.08px] text-ink-muted-48/70">
          {title}
        </p>
      </div>
    </div>
  );
}
