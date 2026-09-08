export type FolderId =
  | "ventures"
  | "fullstack"
  | "ai"
  | "ux-ui"
  | "hackathons"
  | "marketing"
  | "talks"
  | "system-config";

export type DesktopFolder = {
  id: FolderId;
  name: string;
  label: string;
  description: string;
  focus: string;
  icon: string;
  color: string;
};

export const folders: DesktopFolder[] = [
  {
    id: "ventures",
    name: "Ventures & Startups",
    label: "Ventures",
    description:
      "Las empresas que fundaste. Visión de negocio, producto y métricas de tracción.",
    focus:
      "Rol como fundador técnico (CEO/CTO), impacto comercial y dirección de producto.",
    icon: "/Folder-8.png",
    color: "Morado",
  },
  {
    id: "fullstack",
    name: "Full-Stack & Systems",
    label: "Full-Stack",
    description:
      "Proyectos web y aplicaciones complejas — incluyendo demos privadas y arquitecturas sanitizadas.",
    focus:
      "Código en producción, stack tecnológico, bases de datos y arquitectura de sistemas.",
    icon: "/Folder.png",
    color: "Azul",
  },
  {
    id: "ai",
    name: "AI & Intelligent Systems",
    label: "AI Systems",
    description:
      "Integraciones con LLMs, agentes, automatizaciones con IA y pipelines de datos.",
    focus:
      "Cómo incorporas machine learning e inteligencia artificial en productos reales.",
    icon: "/Folder-2.png",
    color: "Grafito",
  },
  {
    id: "ux-ui",
    name: "UX/UI Lab & Design",
    label: "UX/UI Lab",
    description:
      "Landings de alta conversión, prototipos, microinteracciones y design systems.",
    focus:
      "Atención al detalle visual, animaciones y fluidez de interacción.",
    icon: "/Folder-3.png",
    color: "Verde esmeralda",
  },
  {
    id: "hackathons",
    name: "Hackathons & Trophies",
    label: "Hackathons",
    description:
      "Hackathons donde participaste y ganaste — MVPs bajo presión en 24–48 horas.",
    focus:
      "Roles en el equipo, tecnologías implementadas y reconocimientos.",
    icon: "/Folder-6.png",
    color: "Amarillo",
  },
  {
    id: "marketing",
    name: "Marketing & Media Agency",
    label: "Marketing",
    description:
      "Contenido orgánico, campañas para marcas y restaurantes, drones y video de alto impacto.",
    focus:
      "Alcance real en redes, storytelling de marca y generación de demanda con media.",
    icon: "/Folder-5.png",
    color: "Naranja",
  },
  {
    id: "talks",
    name: "Talks & Conferences",
    label: "Talks",
    description:
      "Conferencias, diapositivas y temas de ingeniería, emprendimiento y tecnología.",
    focus:
      "Habilidades blandas, liderazgo técnico y comunicación clara.",
    icon: "/Folder-7.png",
    color: "Rojo",
  },
  {
    id: "system-config",
    name: "System_Config",
    label: "System_Config",
    description:
      "Perfil personal, personalidad ENTP, enfoque analítico y pasatiempos.",
    focus:
      "Specs humanas: roles, filosofía de trabajo y stack personal — estilo About This Mac.",
    icon: "/Folder-1.png",
    color: "Gris claro",
  },
];

export function getFolder(id: FolderId): DesktopFolder {
  const folder = folders.find((f) => f.id === id);
  if (!folder) throw new Error(`Unknown folder: ${id}`);
  return folder;
}
