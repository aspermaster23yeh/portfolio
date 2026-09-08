"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            aria-label="Cerrar"
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${project.id}`}
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[18px] bg-canvas sm:rounded-[18px]"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-parchment/80 px-5 py-3 backdrop-blur-[20px] backdrop-saturate-150 sm:px-8">
              <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
                {project.category === "web"
                  ? "Web"
                  : project.category === "mobile"
                    ? "Móvil"
                    : "Diseño"}
              </p>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-opacity hover:opacity-80"
                aria-label="Cerrar proyecto"
                style={{ backgroundColor: "rgba(210, 210, 215, 0.64)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1l10 10M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              <div className="relative aspect-[16/9] w-full bg-parchment">
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="product-shadow w-full max-w-md rounded-[18px] border border-hairline bg-canvas p-8">
                    <p className="text-[14px] text-ink-muted-48">
                      {project.year}
                    </p>
                    <p className="mt-2 text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-ink">
                      {project.title}
                    </p>
                    <p className="mt-2 text-[17px] text-ink-muted-80">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 px-5 py-10 sm:px-10 sm:py-12">
                <div>
                  <h2
                    id={`project-title-${project.id}`}
                    className="text-[clamp(1.75rem,4vw,2.125rem)] font-semibold tracking-[-0.374px] text-ink"
                  >
                    {project.subtitle}
                  </h2>
                  <p className="mt-5 max-w-2xl text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80">
                    {project.longDescription}
                  </p>
                </div>

                <div className="grid gap-6 border-y border-hairline py-8 sm:grid-cols-3">
                  <Meta label="Rol" value={project.role} />
                  <Meta label="Año" value={project.year} />
                  <Meta label="Stack" value={project.tags.join(" · ")} />
                </div>

                <div>
                  <h3 className="text-[21px] font-semibold tracking-[0.231px] text-ink">
                    Destacados
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-[17px] leading-[1.47] tracking-[-0.374px] text-ink-muted-80"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline bg-canvas px-4 py-3 text-[14px] tracking-[-0.224px] text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-[-0.12px] text-ink-muted-48">
        {label}
      </p>
      <p className="mt-1.5 text-[17px] font-semibold tracking-[-0.374px] text-ink">
        {value}
      </p>
    </div>
  );
}
