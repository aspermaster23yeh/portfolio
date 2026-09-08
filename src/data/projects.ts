export type ProjectCategory = "web" | "mobile" | "design";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  role: string;
  accent: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    subtitle: "E-commerce de nueva generación",
    description:
      "Una experiencia de compra minimalista con checkout fluido y catálogo dinámico.",
    longDescription:
      "Aurora Commerce redefine la compra online con una interfaz limpia, tipografía generosa y microinteracciones precisas. El sistema de catálogo se adapta en tiempo real, mientras el checkout reduce la fricción al mínimo — inspirado en la claridad de las páginas de producto de Apple.",
    category: "web",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    year: "2025",
    role: "Lead Frontend",
    accent: "#D2D2D7",
    features: [
      "Catálogo con filtrado animado y layout fluido",
      "Checkout de un solo paso con Stripe",
      "Diseño responsive con tipografía tipográfica Apple-like",
      "Modo offline-first para favoritos y carrito",
    ],
  },
  {
    id: "pulse-health",
    title: "Pulse Health",
    subtitle: "App de bienestar diario",
    description:
      "Seguimiento de hábitos con visualizaciones claras y una UI calmada.",
    longDescription:
      "Pulse Health acompaña al usuario en su rutina de bienestar con una interfaz serena, gráficos legibles y notificaciones no intrusivas. Cada pantalla respira; cada gesto responde con suavidad.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Firebase", "Charts"],
    year: "2025",
    role: "Product Designer & Dev",
    accent: "#E8E8ED",
    features: [
      "Dashboard de hábitos con animaciones suaves",
      "Sincronización en tiempo real con Firebase",
      "Gráficas de progreso con fl_chart",
      "Diseño accesible y tipografía de lectura cómoda",
    ],
  },
  {
    id: "atelier-brand",
    title: "Atelier Brand System",
    subtitle: "Identidad visual completa",
    description:
      "Sistema de marca monocromático con tipografía, tokens y guías de uso.",
    longDescription:
      "Un sistema de identidad construido desde el silencio visual: tipografía precisa, escala de grises y reglas de composición. Incluye tokens de diseño, componentes y documentación para equipos de producto.",
    category: "design",
    tags: ["Figma", "Design Tokens", "Brand"],
    year: "2024",
    role: "Brand Designer",
    accent: "#F5F5F7",
    features: [
      "Paleta monocromática y tipografía editorial",
      "Librería de componentes en Figma",
      "Tokens exportables a código",
      "Guía de voz y tono para producto",
    ],
  },
  {
    id: "nova-dashboard",
    title: "Nova Analytics",
    subtitle: "Panel de métricas en tiempo real",
    description:
      "Dashboard limpio para equipos de producto con datos en vivo.",
    longDescription:
      "Nova Analytics presenta métricas complejas con la misma claridad que un producto Apple: jerarquía tipográfica fuerte, espacios generosos y gráficos que no compiten con el contenido.",
    category: "web",
    tags: ["React", "Recharts", "Supabase"],
    year: "2024",
    role: "Frontend Engineer",
    accent: "#D2D2D7",
    features: [
      "Actualización en tiempo real de KPIs",
      "Filtros con layout animado",
      "Exportación de reportes PDF",
      "Tema claro monocromático consistente",
    ],
  },
  {
    id: "folio-camera",
    title: "Folio Camera",
    subtitle: "App de captura creativa",
    description:
      "Cámara con presets editoriales y galería local-first.",
    longDescription:
      "Folio Camera prioriza la captura y la contemplación. Controles minimalistas, presets sutiles y una galería que vive primero en el dispositivo — sin ruido visual.",
    category: "mobile",
    tags: ["SwiftUI", "Core ML", "Local-first"],
    year: "2024",
    role: "iOS Developer",
    accent: "#E8E8ED",
    features: [
      "UI nativa con gestos fluidos",
      "Presets inspirados en fotografía editorial",
      "Almacenamiento local-first",
      "Exportación en alta resolución",
    ],
  },
  {
    id: "signal-ui-kit",
    title: "Signal UI Kit",
    subtitle: "Kit de componentes para producto",
    description:
      "Librería de UI ligera con foco en accesibilidad y motion.",
    longDescription:
      "Signal UI Kit ofrece componentes reutilizables con motion integrado, estados de hover consistentes y documentación viva. Pensado para equipos que quieren velocidad sin sacrificar detalle.",
    category: "design",
    tags: ["React", "Framer Motion", "Storybook"],
    year: "2025",
    role: "Design Systems",
    accent: "#F5F5F7",
    features: [
      "40+ componentes documentados",
      "Motion presets listos para producción",
      "Tokens alineados con Tailwind",
      "Accesibilidad WCAG AA por defecto",
    ],
  },
];

export const filterTabs = [
  { id: "all" as const, label: "Todos" },
  { id: "web" as const, label: "Web" },
  { id: "mobile" as const, label: "Móvil" },
  { id: "design" as const, label: "Diseño" },
];

export type FilterId = (typeof filterTabs)[number]["id"];
