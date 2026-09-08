"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { DesktopFolder } from "@/data/folders";
import type { Project } from "@/data/projects";
import { projectsInFolder } from "@/data/projects";

type ProjectModalProps = {
  folder: DesktopFolder | null;
  onClose: () => void;
};

export function ProjectModal({ folder, onClose }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setSelectedProject(null);
  }, [folder?.id]);

  useEffect(() => {
    if (!folder) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        else onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [folder, onClose, selectedProject]);

  const items = folder ? projectsInFolder(folder.id) : [];
  const isSystem = folder?.id === "system-config";

  return (
    <AnimatePresence>
      {folder && (
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
            className="absolute inset-0 bg-black/45 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`folder-title-${folder.id}`}
            layoutId={`folder-window-${folder.id}`}
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[12px] border border-black/10 bg-[#ececec] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-[12px]"
          >
            <div className="flex items-center gap-3 border-b border-black/8 bg-[#f6f6f6] px-4 py-3">
              <div className="flex items-center gap-2" aria-hidden>
                <button
                  type="button"
                  onClick={onClose}
                  className="size-3 rounded-full bg-[#ff5f57] shadow-inner transition-opacity hover:opacity-80"
                  aria-label="Cerrar ventana"
                />
                <span className="size-3 rounded-full bg-[#febc2e] shadow-inner" />
                <span className="size-3 rounded-full bg-[#28c840] shadow-inner" />
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
                <div className="relative size-5 shrink-0">
                  <Image
                    src={folder.icon}
                    alt=""
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <p
                  id={`folder-title-${folder.id}`}
                  className="truncate text-[13px] font-semibold tracking-[-0.16px] text-ink"
                >
                  {folder.name}
                </p>
              </div>

              <span className="w-14 shrink-0 text-right text-[11px] text-ink-muted-48">
                {isSystem ? "About" : `${items.length}`}
              </span>
            </div>

            <div className="overflow-y-auto overscroll-contain bg-[#f5f5f7]">
              {isSystem ? (
                <AboutThisMac onClose={onClose} />
              ) : selectedProject ? (
                <ProjectDetail
                  project={selectedProject}
                  folder={folder}
                  onBack={() => setSelectedProject(null)}
                />
              ) : (
                <FolderBrowser
                  folder={folder}
                  items={items}
                  onOpen={setSelectedProject}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FolderBrowser({
  folder,
  items,
  onOpen,
}: {
  folder: DesktopFolder;
  items: Project[];
  onOpen: (project: Project) => void;
}) {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="relative mx-auto aspect-[2008/1708] w-24 shrink-0 sm:mx-0 sm:w-28">
          <Image
            src={folder.icon}
            alt=""
            fill
            sizes="112px"
            className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted-48">
            {folder.color}
          </p>
          <h2 className="mt-1 text-[24px] font-semibold tracking-[-0.374px] text-ink">
            {folder.name}
          </h2>
          <p className="mt-2 text-[15px] leading-[1.45] text-ink-muted-80">
            {folder.description}
          </p>
          <p className="mt-3 text-[14px] leading-[1.45] text-ink-muted-48">
            {folder.focus}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="rounded-[12px] border border-dashed border-hairline bg-canvas px-5 py-10 text-center text-[15px] text-ink-muted-48">
          Esta carpeta aún no tiene archivos públicos.
        </p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * index, duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="flex w-full flex-col rounded-[12px] border border-hairline bg-canvas p-4 text-left transition-colors hover:bg-pearl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[15px] font-semibold tracking-[-0.24px] text-ink">
                    {project.title}
                  </span>
                  <span className="shrink-0 text-[11px] text-ink-muted-48">
                    {project.year}
                  </span>
                </div>
                <span className="mt-1 text-[13px] text-ink-muted-80">
                  {project.subtitle}
                </span>
                <span className="mt-3 line-clamp-2 text-[12px] leading-[1.4] text-ink-muted-48">
                  {project.description}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectDetail({
  project,
  folder,
  onBack,
}: {
  project: Project;
  folder: DesktopFolder;
  onBack: () => void;
}) {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-opacity hover:opacity-80"
      >
        <span aria-hidden>←</span>
        Volver a {folder.label}
      </button>

      <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted-48">
        {folder.name}
      </p>
      <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.125rem)] font-semibold tracking-[-0.374px] text-ink">
        {project.title}
      </h2>
      <p className="mt-1 text-[17px] text-ink-muted-80">{project.subtitle}</p>
      <p className="mt-5 max-w-2xl text-[16px] leading-[1.5] tracking-[-0.32px] text-ink-muted-80">
        {project.longDescription}
      </p>

      <div className="mt-8 grid gap-5 border-y border-hairline py-6 sm:grid-cols-3">
        <Meta label="Rol" value={project.role} />
        <Meta label="Año" value={project.year} />
        <Meta label="Stack" value={project.tags.join(" · ")} />
      </div>

      <h3 className="mt-8 text-[18px] font-semibold tracking-[-0.2px] text-ink">
        Destacados
      </h3>
      <ul className="mt-4 space-y-3">
        {project.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-[15px] leading-[1.45] text-ink-muted-80"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2 pb-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-hairline bg-canvas px-3.5 py-2 text-[13px] tracking-[-0.16px] text-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutThisMac({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-5 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-md text-center">
        <div className="relative mx-auto mb-5 aspect-[2008/1708] w-28">
          <Image
            src="/Folder-1.png"
            alt=""
            fill
            sizes="112px"
            className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
          />
        </div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted-48">
          About This Mac
        </p>
        <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.4px] text-ink">
          Michael Robles
        </h2>
        <p className="mt-1 text-[15px] text-ink-muted-80">
          System_Config · ENTP
        </p>
      </div>

      <dl className="mx-auto mt-8 max-w-lg divide-y divide-hairline rounded-[12px] border border-hairline bg-canvas">
        {[
          {
            label: "Roles",
            value: "CEO · GDG Leader · Full-stack engineer",
          },
          {
            label: "Personalidad",
            value: "ENTP — analítico, metódico, curioso",
          },
          {
            label: "Filosofía",
            value: "Claridad primero. Detalle deliberado. Construcción real.",
          },
          {
            label: "Stack personal",
            value: "Flutter · Firebase · Vue · Figma · Next.js",
          },
          {
            label: "Intereses",
            value: "Producto, drones, comunidad tech, diseño de sistemas",
          },
        ].map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[110px_1fr] gap-3 px-4 py-3.5 text-left sm:grid-cols-[140px_1fr]"
          >
            <dt className="text-[13px] font-medium text-ink-muted-48">
              {row.label}
            </dt>
            <dd className="text-[14px] leading-[1.4] text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-primary px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-[-0.12px] text-ink-muted-48">
        {label}
      </p>
      <p className="mt-1.5 text-[15px] font-semibold tracking-[-0.24px] text-ink">
        {value}
      </p>
    </div>
  );
}
