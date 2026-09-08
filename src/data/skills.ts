export type Skill = {
  name: string;
  logo: string;
  specialty?: boolean;
};

export const skills: Skill[] = [
  { name: "Flutter", logo: "/skills/flutter.svg", specialty: true },
  { name: "Dart", logo: "/skills/dart.svg", specialty: true },
  { name: "Firebase", logo: "/skills/firebase.svg", specialty: true },
  { name: "Vue.js", logo: "/skills/vue.svg", specialty: true },
  { name: "Figma", logo: "/skills/figma.svg", specialty: true },
  { name: "Next.js", logo: "/skills/nextjs.svg" },
  { name: "React", logo: "/skills/react.svg" },
  { name: "Supabase", logo: "/skills/supabase.svg" },
  { name: "Google Cloud", logo: "/skills/googlecloud.svg" },
  { name: "Astro", logo: "/skills/astro.svg" },
  { name: "C++", logo: "/skills/cplusplus.svg" },
  { name: "Python", logo: "/skills/python.svg" },
  { name: "Java", logo: "/skills/java.svg" },
];

export type ExpertiseItem = {
  title: string;
  description: string;
};

export type ExpertiseCategory = {
  title: string;
  items: ExpertiseItem[];
};

export const expertise: ExpertiseCategory[] = [
  {
    title: "Frontend, UI/UX y Animación",
    items: [
      {
        title: "Next.js & React",
        description:
          "Base principal para desarrollo web moderno y aplicaciones completas con Server Components y App Router.",
      },
      {
        title: "Tailwind CSS",
        description:
          "Estándar para maquetación rápida, interfaces limpias y sistemas de diseño responsivos.",
      },
      {
        title: "Framer Motion",
        description:
          "Herramienta de cabecera para microinteracciones, transiciones de página y animaciones al estilo Apple/Keynote.",
      },
      {
        title: "Ecosistemas UI",
        description:
          "shadcn/ui, Aceternity UI y Lucide Icons — componentes minimalistas orientados a interfaces limpias y funcionales.",
      },
    ],
  },
  {
    title: "Backend, APIs y Base de Datos",
    items: [
      {
        title: "Node.js & TypeScript",
        description:
          "Lógica de servidor, servicios desacoplados y contratos tipados de punta a punta.",
      },
      {
        title: "Bases de datos",
        description:
          "Relacionales (PostgreSQL / MySQL) y NoSQL: esquemas, modelos multi-rol (usuarios, tickets, eventos, analíticas) y queries estructurados.",
      },
      {
        title: "Firebase / Supabase",
        description:
          "Autenticación ágil, almacenamiento de archivos, notificaciones push y bases de datos en tiempo real para mobile y MVPs.",
      },
    ],
  },
  {
    title: "Ecosistema Móvil y Producto",
    items: [
      {
        title: "React Native / Flutter / Expo",
        description:
          "Apps en producción para iOS y Android, con QR/tickets, mapas, geolocalización y notificaciones push.",
      },
      {
        title: "Arquitectura de plataformas y MVPs",
        description:
          "Flujos de onboarding, paneles de administración, pasarelas de pago/ticketing y roles de usuario.",
      },
    ],
  },
  {
    title: "IA y Automatización",
    items: [
      {
        title: "LLMs / Prompt Engineering",
        description:
          "Prompts estructurados, pipelines pedagógicos y de evaluación, y asistentes/matching inteligente para potenciar web y mobile.",
      },
    ],
  },
];
