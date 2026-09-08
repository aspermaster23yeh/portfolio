"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DesktopFolder } from "@/data/folders";

type ProjectCardProps = {
  folder: DesktopFolder;
  itemCount: number;
  onSelect: (folder: DesktopFolder) => void;
};

export function ProjectCard({ folder, itemCount, onSelect }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      layout
      layoutId={`folder-${folder.id}`}
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(folder)}
      className="group flex flex-col items-center gap-2 rounded-[18px] p-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-focus"
      aria-label={`Abrir carpeta ${folder.name}`}
    >
      <div className="relative aspect-[2008/1708] w-full max-w-[132px] sm:max-w-[148px]">
        <motion.div
          className="absolute inset-0"
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Image
            src={folder.icon}
            alt=""
            fill
            sizes="148px"
            className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:drop-shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
            priority={folder.id === "ventures" || folder.id === "fullstack"}
          />
        </motion.div>
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-1.5 text-[11px] font-semibold text-white shadow-sm">
            {itemCount}
          </span>
        )}
      </div>

      <div className="max-w-[140px] space-y-0.5">
        <p className="truncate text-[13px] font-medium tracking-[-0.16px] text-ink">
          {folder.label}
        </p>
        <p className="truncate text-[11px] tracking-[-0.12px] text-ink-muted-48">
          {folder.color}
        </p>
      </div>
    </motion.button>
  );
}
