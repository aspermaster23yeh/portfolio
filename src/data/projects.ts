import type { FolderId } from "./folders";

export type ProjectCategory = Exclude<FolderId, "system-config">;

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  href?: string;
  caption?: string;
};

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
  links?: ProjectLink[];
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: "que-plan-app",
    title: "Que Plan App",
    subtitle: "Ecosistema multi-repo de planes y experiencias",
    description:
      "Flutter + Vue 3 sobre Firebase — CEO del producto, la infra y el go-to-market.",
    longDescription:
      "El ecosistema Que Plan está repartido en varios repos: Flutter + Vue 3 sobre Firebase, Cloud Functions en Node, pagos Stripe/Mercado Pago, IA Gemini, hosting en HostGator y tools satélite (generator + Remotion). Como CEO y fundador técnico lidero producto, arquitectura y crecimiento — desde la app móvil hasta la web, la infra y la narrativa de marca (@queplanapp).",
    category: "ventures",
    tags: [
      "CEO",
      "Flutter",
      "Vue 3",
      "Firebase",
      "Stripe",
      "Gemini",
    ],
    year: "2023–",
    role: "CEO & Founder",
    accent: "#BD6CDB",
    features: [
      "Núcleo: app Flutter (Dart 3, MVVM, go_router) + web Vue 3 (Router, Pinia) + Firebase (Auth, Firestore, Storage, Functions, Messaging, Trigger Email)",
      "App móvil (que_plan_app_og): Provider/Riverpod/BLoC, sqflite, Google Maps, QR, deep links, widgets home y push notifications",
      "Web (que_plan_web): Stripe + Mercado Pago, Pixi/Three/Maps, GSAP/Motion, PDFs (jsPDF, pdf-lib), Chart.js y SEO con Puppeteer",
      "Infra (queplan-infraestructura): Functions Node 20/22 — Stripe, Mercado Pago, Gemini, sharp, pdf-lib; Firestore + Storage; email SMTP Titan/HostGator",
      "Satélites: generator-que-plan (Vue + Express + Gemini + Places) y motion (Remotion + React 19 + MapLibre) para seed y teasers",
      "Pagos e IA: Stripe Connect Express (ticketing), Mercado Pago y Google Gemini en functions + generator",
    ],
  },
  {
    id: "estado-limpio",
    title: "Estado Limpio",
    subtitle: "Emprendimiento de servicios y producto",
    description:
      "Venture liderado como CEO: operación, marca y producto digital.",
    longDescription:
      "Estado Limpio es un emprendimiento que dirijo como CEO: visión de negocio, operación del servicio y producto digital para ordenar la experiencia del cliente. Del posicionamiento de marca a los flujos de reserva, seguimiento y administración — producto e ingeniería al servicio del negocio.",
    category: "ventures",
    tags: ["CEO", "Producto", "Operación", "Marca"],
    year: "2024–",
    role: "CEO & Founder",
    accent: "#BD6CDB",
    features: [
      "Dirección como CEO: visión, operación y crecimiento",
      "Producto digital orientado a clientes y operación interna",
      "Marca y experiencia de servicio consistentes",
      "Procesos y herramientas para escalar el negocio",
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
    id: "pezcallito",
    title: "Pezcallito",
    subtitle: "Primera cuenta — contenido orgánico",
    description:
      "Marketing orgánico en Instagram y TikTok con picos de hasta 1.6M de vistas.",
    longDescription:
      "Pezcallito fue la primera empresa con la que trabajé en marketing y generación de contenido orgánico. Estrategia de piezas para Instagram y TikTok orientada a alcance real: formatos nativos, ritmo de publicación y narrativa de marca que llegó a picos de hasta 1.6 millones de vistas.",
    category: "marketing",
    tags: ["Contenido orgánico", "Instagram", "TikTok", "Reels"],
    year: "2023",
    role: "Content & Growth",
    accent: "#F8B254",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/pezcallito.tpc/",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@pezcallito.tpc1",
      },
    ],
    features: [
      "Primera cuenta de marketing con la que trabajé de punta a punta",
      "Contenido orgánico multi-plataforma (Instagram + TikTok)",
      "Picos de hasta 1.6 millones de vistas en piezas orgánicas",
      "Formato nativo: reels, clips y storytelling de marca",
    ],
  },
  {
    id: "latinos-por-europa",
    title: "Latinos por Europa",
    subtitle: "Agencia europea — orgánico + leads",
    description:
      "Contenido orgánico y captación de leads para ventas en una agencia europea.",
    longDescription:
      "Trabajé con Latinos por Europa, una agencia en Europa, en generación de contenido orgánico y embudos orientados a leads de ventas. Piezas nativas para TikTok con foco en alcance, conversión y demanda comercial — no solo vistas, sino contactos cualificados para el negocio.",
    category: "marketing",
    tags: ["Contenido orgánico", "TikTok", "Leads", "Ventas"],
    year: "2023–2024",
    role: "Content & Growth",
    accent: "#F8B254",
    links: [
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@latinosporeuropa8",
      },
    ],
    features: [
      "Agencia europea: contenido orgánico multi-formato",
      "Estrategia de captación de leads orientada a ventas",
      "Piezas nativas en TikTok con CTA comerciales claros",
      "Puente entre alcance orgánico y funnel de conversión",
    ],
  },
  {
    id: "vip-solutions",
    title: "VIP Solutions",
    subtitle: "Renta de camionetas de lujo — Puerto Vallarta",
    description:
      "Contenido orgánico para renta de camionetas de lujo en Puerto Vallarta.",
    longDescription:
      "Con VIP Solutions trabajé la generación de contenido orgánico para una marca de renta de camionetas de lujo en Puerto Vallarta. Piezas para TikTok orientadas a deseo, posicionamiento premium y demanda local — mostrar el producto en contexto real para captar interés y leads de renta.",
    category: "marketing",
    tags: ["Contenido orgánico", "TikTok", "Luxury", "Turismo"],
    year: "2024",
    role: "Content & Growth",
    accent: "#F8B254",
    links: [
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@rentadecamionetasvta",
      },
    ],
    media: [
      {
        src: "/vip-solutions-tiktok.jpg",
        alt: "Pieza de TikTok — renta de camionetas de lujo VIP Solutions",
        href: "https://www.tiktok.com/@rentadecamionetasvta/video/7536271982577372472",
        caption: "Ver en TikTok",
      },
    ],
    features: [
      "Marca de renta de camionetas de lujo en Puerto Vallarta",
      "Contenido orgánico en TikTok con look & feel premium",
      "Narrativa visual del producto en contexto turístico real",
      "Orientado a interés, posicionamiento y leads de renta",
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
