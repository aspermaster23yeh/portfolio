import type { FolderId } from "./folders";

export type ProjectCategory = Exclude<FolderId, "system-config">;

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
    id: "que-plan-app",
    title: "Que Plan App",
    subtitle: "Marketplace de planes y experiencias",
    description:
      "Startup fundada como CEO: producto mobile, operación y crecimiento.",
    longDescription:
      "Que Plan App conecta personas con planes y experiencias. Como fundador técnico lidero producto, arquitectura y go-to-market — desde la app Flutter hasta la narrativa de marca y la tracción en Instagram.",
    category: "ventures",
    tags: ["CEO", "Flutter", "Firebase", "Producto"],
    year: "2023–",
    role: "CEO & Founder",
    accent: "#BD6CDB",
    features: [
      "Visión de producto y roadmap como fundador técnico",
      "App mobile en producción con stack Flutter + Firebase",
      "Posicionamiento de marca y comunidad (@queplanapp)",
      "Operación end-to-end: producto, tech y crecimiento",
    ],
  },
  {
    id: "second-venture",
    title: "Studio Venture",
    subtitle: "Segundo vehículo de producto",
    description:
      "Empresa en construcción: productos digitales y servicios de ingeniería.",
    longDescription:
      "Segundo vehículo como fundador: combinar ingeniería de producto con servicios creativos y de sistemas. Enfoque en MVPs rápidos, arquitectura sólida y métricas de negocio desde el día uno.",
    category: "ventures",
    tags: ["CTO", "Producto", "SaaS"],
    year: "2025",
    role: "Founder / CTO",
    accent: "#BD6CDB",
    features: [
      "Modelo híbrido producto + studio",
      "Arquitectura lista para escala temprana",
      "Métricas de tracción como norte de decisión",
      "Rol dual de visión de negocio e ingeniería",
    ],
  },
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    subtitle: "E-commerce de nueva generación",
    description:
      "Experiencia de compra minimalista con checkout fluido y catálogo dinámico.",
    longDescription:
      "Aurora Commerce redefine la compra online con una interfaz limpia, tipografía generosa y microinteracciones precisas. Catálogo en tiempo real y checkout de baja fricción — arquitectura pensada para producción.",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    year: "2025",
    role: "Lead Frontend",
    accent: "#6ED0F9",
    features: [
      "Catálogo con filtrado animado y layout fluido",
      "Checkout de un solo paso con Stripe",
      "Diseño responsive tipográfico Apple-like",
      "Offline-first para favoritos y carrito",
    ],
  },
  {
    id: "nova-dashboard",
    title: "Nova Analytics",
    subtitle: "Panel de métricas en tiempo real",
    description:
      "Dashboard limpio para equipos de producto con datos en vivo.",
    longDescription:
      "Nova Analytics presenta métricas complejas con jerarquía tipográfica fuerte, espacios generosos y gráficos que no compiten con el contenido. Stack React + Supabase en producción.",
    category: "fullstack",
    tags: ["React", "Recharts", "Supabase"],
    year: "2024",
    role: "Frontend Engineer",
    accent: "#6ED0F9",
    features: [
      "KPIs en tiempo real",
      "Filtros con layout animado",
      "Exportación de reportes PDF",
      "Tema monocromático consistente",
    ],
  },
  {
    id: "pulse-health",
    title: "Pulse Health",
    subtitle: "App de bienestar diario",
    description:
      "Seguimiento de hábitos con visualizaciones claras y UI calmada.",
    longDescription:
      "Pulse Health acompaña la rutina de bienestar con interfaz serena, gráficos legibles y sync en tiempo real. Arquitectura mobile local-aware con Firebase.",
    category: "fullstack",
    tags: ["Flutter", "Dart", "Firebase", "Charts"],
    year: "2025",
    role: "Product Designer & Dev",
    accent: "#6ED0F9",
    features: [
      "Dashboard de hábitos con animaciones suaves",
      "Sincronización en tiempo real con Firebase",
      "Gráficas de progreso con fl_chart",
      "Diseño accesible y tipografía legible",
    ],
  },
  {
    id: "folio-camera",
    title: "Folio Camera",
    subtitle: "Captura creativa con Core ML",
    description:
      "Cámara con presets editoriales y visión por computador on-device.",
    longDescription:
      "Folio Camera prioriza captura y contemplación. Presets sutiles, galería local-first y modelos Core ML para realzar la imagen sin depender de la nube.",
    category: "ai",
    tags: ["SwiftUI", "Core ML", "Local-first"],
    year: "2024",
    role: "iOS Developer",
    accent: "#464646",
    features: [
      "UI nativa con gestos fluidos",
      "Presets inspirados en fotografía editorial",
      "Inferencia on-device con Core ML",
      "Almacenamiento local-first",
    ],
  },
  {
    id: "agent-ops",
    title: "Agent Ops Desk",
    subtitle: "Agentes y automatizaciones con LLMs",
    description:
      "Pipelines de prompts, agentes y automatización sobre flujos de producto.",
    longDescription:
      "Escritorio de operaciones con agentes: orquestación de prompts avanzados, herramientas y pipelines de datos para tareas repetitivas de producto y soporte — IA embebida en flujos reales, no demos aisladas.",
    category: "ai",
    tags: ["LLMs", "Agents", "TypeScript", "Pipelines"],
    year: "2025",
    role: "AI Engineer",
    accent: "#464646",
    features: [
      "Agentes con herramientas y memoria de sesión",
      "Pipelines de datos + evaluación de prompts",
      "Automatizaciones conectadas a producto",
      "Observabilidad de costo y latencia",
    ],
  },
  {
    id: "atelier-brand",
    title: "Atelier Brand System",
    subtitle: "Identidad visual completa",
    description:
      "Sistema de marca monocromático con tipografía, tokens y guías.",
    longDescription:
      "Identidad construida desde el silencio visual: tipografía precisa, escala de grises y reglas de composición. Tokens, componentes y documentación para equipos de producto.",
    category: "ux-ui",
    tags: ["Figma", "Design Tokens", "Brand"],
    year: "2024",
    role: "Brand Designer",
    accent: "#5CD79E",
    features: [
      "Paleta monocromática y tipografía editorial",
      "Librería de componentes en Figma",
      "Tokens exportables a código",
      "Guía de voz y tono para producto",
    ],
  },
  {
    id: "signal-ui-kit",
    title: "Signal UI Kit",
    subtitle: "Kit de componentes para producto",
    description:
      "Librería de UI ligera con foco en accesibilidad y motion.",
    longDescription:
      "Componentes reutilizables con motion integrado, estados consistentes y documentación viva. Velocidad de equipo sin sacrificar detalle de interacción.",
    category: "ux-ui",
    tags: ["React", "Framer Motion", "Storybook"],
    year: "2025",
    role: "Design Systems",
    accent: "#5CD79E",
    features: [
      "40+ componentes documentados",
      "Motion presets listos para producción",
      "Tokens alineados con Tailwind",
      "Accesibilidad WCAG AA por defecto",
    ],
  },
  {
    id: "landing-lab",
    title: "Conversion Landing Lab",
    subtitle: "Landings de alta conversión",
    description:
      "Prototipos interactivos y landings con microinteracciones precisas.",
    longDescription:
      "Laboratorio de landings: jerarquía tipográfica, CTAs claros, motion sutil y wireframes que escalan a design systems. Cada pantalla tiene un solo trabajo.",
    category: "ux-ui",
    tags: ["Figma", "Motion", "CRO"],
    year: "2025",
    role: "Product Designer",
    accent: "#5CD79E",
    features: [
      "Wireframes → prototipos de alta fidelidad",
      "Microinteracciones orientadas a conversión",
      "Sistemas de diseño reutilizables",
      "Pruebas de claridad en el primer viewport",
    ],
  },
  {
    id: "hackathon-trophy",
    title: "48h Build Sprint",
    subtitle: "MVP ganador bajo presión",
    description:
      "Hackathon: producto usable en 24–48 horas con stack lean.",
    longDescription:
      "Participación y victoria en hackathons construyendo MVPs reales bajo presión. Roles claros en el equipo, demo convincente y stack elegido por velocidad sin romper calidad mínima.",
    category: "hackathons",
    tags: ["MVP", "Flutter", "Firebase", "Pitch"],
    year: "2024",
    role: "Tech Lead",
    accent: "#FAD654",
    features: [
      "MVP demoable en menos de 48 horas",
      "Roles definidos: producto, eng, pitch",
      "Stack lean orientado a shipping",
      "Reconocimiento del jurado / trofeo",
    ],
  },
  {
    id: "gdg-hack",
    title: "GDG Community Hack",
    subtitle: "Build con la comunidad",
    description:
      "Hackathon comunitario como GDG Leader — mentoria y shipping.",
    longDescription:
      "Como Google Developer Groups Leader, impulso hackathons locales: mentoria técnica, facilitación de equipos y entrega de prototipos que demuestran aprendizaje aplicado.",
    category: "hackathons",
    tags: ["GDG", "Mentorship", "Community"],
    year: "2023–",
    role: "GDG Leader",
    accent: "#FAD654",
    features: [
      "Organización y mentoría técnica",
      "Equipos multidisciplinarios bajo presión",
      "Demos públicas y aprendizaje colectivo",
      "Puente entre comunidad e industria",
    ],
  },
  {
    id: "drone-campaigns",
    title: "Aerial Brand Campaigns",
    subtitle: "Drones + contenido de alto impacto",
    description:
      "Campañas visuales con tomas aéreas para empresas y restaurantes.",
    longDescription:
      "Producción de campañas que combinan vuelo con drones, edición y storytelling de marca. Contenido visual de alto impacto orientado a demanda y posicionamiento local.",
    category: "marketing",
    tags: ["Drones", "Video", "Brand"],
    year: "2024",
    role: "Creative Producer",
    accent: "#F8B254",
    features: [
      "Tomas aéreas cinematográficas",
      "Piezas para redes y locales comerciales",
      "Narrativa de marca + CTA claros",
      "Entrega lista para pauta y orgánicos",
    ],
  },
  {
    id: "resto-growth",
    title: "Restaurant Growth Kits",
    subtitle: "Marketing tech para gastronomía",
    description:
      "Campañas y kits creativos que unen tech, menú y posicionamiento.",
    longDescription:
      "Paquetes de marketing para restaurantes: creatividades, video y funnel simple. Tecnología al servicio de la demanda — no al revés.",
    category: "marketing",
    tags: ["Campaigns", "Content", "Local SEO"],
    year: "2023",
    role: "Growth Creative",
    accent: "#F8B254",
    features: [
      "Kits visuales por vertical gastronómica",
      "Contenido multi-formato (reel, foto, story)",
      "Mensajes alineados a conversión local",
      "Medición básica de alcance y respuesta",
    ],
  },
  {
    id: "gdg-talks",
    title: "GDG Stage Talks",
    subtitle: "Ingeniería, producto y comunidad",
    description:
      "Charlas en escenario: Flutter, producto y emprendimiento técnico.",
    longDescription:
      "Como GDG Leader desde 2023, presento en eventos temas de ingeniería, emprendimiento y tecnología — con foco en claridad, demos vivas y liderazgo técnico accesible.",
    category: "talks",
    tags: ["Speaking", "Flutter", "Producto"],
    year: "2023–",
    role: "Speaker / GDG Leader",
    accent: "#FA766E",
    features: [
      "Charlas en eventos de comunidad",
      "Temas: ingeniería, producto, startups",
      "Slides y demos orientadas a aprendizaje",
      "Facilitación y liderazgo técnico",
    ],
  },
  {
    id: "founder-keynote",
    title: "Founder Keynotes",
    subtitle: "Emprendimiento desde el código",
    description:
      "Conferencias sobre construir producto siendo founder técnico.",
    longDescription:
      "Keynotes y paneles sobre el rol del founder técnico: decidir stack, priorizar MVP y comunicar visión con la misma precisión que se escribe código.",
    category: "talks",
    tags: ["Founder", "Leadership", "Storytelling"],
    year: "2024–",
    role: "Speaker",
    accent: "#FA766E",
    features: [
      "Narrativa founder + engineer",
      "Casos reales de Que Plan App",
      "Material reutilizable (slides / clips)",
      "Enfoque en comunicación clara",
    ],
  },
];

export function projectsInFolder(folderId: FolderId): Project[] {
  if (folderId === "system-config") return [];
  return projects.filter((p) => p.category === folderId);
}
