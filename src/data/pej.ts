export type PejMilestone = {
  id: string;
  year: string;
  title: string;
  result: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type PejPillar = {
  id: string;
  label: string;
  title: string;
  text: string;
  images: { src: string; alt: string; caption: string }[];
};

export const pejMeta = {
  award: "Premio Estatal de la Juventud 2026",
  distinction:
    "Desarrollo e Innovación de Mejoras Tecnológicas",
  category: "Categoría B · 18 a 29 años",
  name: "Sergio Michael Robles Zambrano",
  age: 24,
  city: "Tepic, Nayarit",
  school: "Ingeniería en Sistemas Computacionales · Instituto Tecnológico de Tepic",
  summary:
    "Ingeniero en formación, fundador tecnológico y líder de comunidad. Construyo productos que resuelven problemas reales en Nayarit —desde gestión de residuos urbanos hasta plataformas de eventos— y formo a la siguiente generación de desarrolladores desde Google Developers Group Tepic.",
};

export const pejStats = [
  { value: "1º", label: "HACKATEC / InnovaTec local" },
  { value: "2º", label: "Etapas regionales TecNM" },
  { value: "220+", label: "Asistentes Google I/O Extended" },
  { value: "$300k", label: "Financiamiento aprobado Estado Limpio" },
  { value: "25+", label: "Estudiantes Boot Tiger Camp" },
  { value: "2023–", label: "GDG Leader Tepic" },
];

export const pejMilestones: PejMilestone[] = [
  {
    id: "conalep-2019",
    year: "2019",
    title: "Hackathon CONALEP · Palenque, Chiapas",
    result: "Representante de Nayarit · etapa nacional",
    description:
      "Sistema multilingüe para facilitar la compra de boletos del Tren Maya. Primera proyección nacional desde CONALEP 169.",
    image: "/pej/selected/page05-img03.jpg",
    imageAlt: "Participación en Hackathon CONALEP 2019 en Palenque, Chiapas",
  },
  {
    id: "hackatec-local",
    year: "2022",
    title: "HACKATEC · etapa local",
    result: "Primer lugar · Estado Limpio",
    description:
      "Reconocimiento del Tecnológico Nacional de México / Instituto Tecnológico de Tepic por el primer lugar en CIDETI con Estado Limpio.",
    image: "/pej/selected/page08-img01.jpg",
    imageAlt: "Reconocimiento primer lugar HACKATEC 2022 etapa local",
  },
  {
    id: "hackatec-regional",
    year: "2022",
    title: "HACKATEC · etapa regional",
    result: "Segundo lugar · Culiacán",
    description:
      "Agenda inteligente para Salud Digna: algoritmo de miles de combinaciones para citas en centros de diálisis con machine learning.",
    image: "/pej/selected/page10-img01.jpg",
    imageAlt: "Reconocimiento segundo lugar HACKATEC 2022 etapa regional",
  },
  {
    id: "hackatec-nacional",
    year: "2022",
    title: "HACKATEC · etapa nacional",
    result: "Representante ITT · Durango",
    description:
      "Aplicación para Linde con estudio de mercados, comparación competitiva y factibilidad de tiendas usando IA, machine learning y web scraping.",
    image: "/pej/selected/page14-img01.jpg",
    imageAlt: "Equipo representante del ITT en etapa nacional HACKATEC 2022",
  },
  {
    id: "innovatec-local",
    year: "2023",
    title: "InnovaTec · Cambio Climático",
    result: "1º local · 2º regional · pitch nacional",
    description:
      "Estado Limpio: primer lugar en Tepic, segundo en Pátzcuaro (Michoacán) y segundo en pitch nacional en Puebla.",
    image: "/pej/selected/page38-img01.jpg",
    imageAlt: "Equipo Estado Limpio ganador InnovaTec local",
  },
  {
    id: "financiamiento",
    year: "2024",
    title: "Financiamiento estatal · Estado Limpio",
    result: "$300,000 MXN aprobados",
    description:
      "Aprobación oficial de financiamiento por el Gobierno de Nayarit para el crecimiento de la startup de gestión de residuos urbanos.",
    image: "/pej/selected/page42-img01.jpg",
    imageAlt: "Certificado de financiamiento de $300,000 para Estado Limpio",
  },
];

export const pejPillars: PejPillar[] = [
  {
    id: "comunidad",
    label: "Liderazgo tecnológico",
    title: "Google Developers Group Tepic",
    text: "Nombrado líder de la comunidad de desarrolladores de Google en Tepic (marzo 2023). Organicé el primer Google I/O Extended Nayarit con más de 220 asistentes y impulsé Boot Tiger Camp, un bootcamp de tecnología con más de 25 estudiantes de distintas edades —con graduación durante Google I/O Extended.",
    images: [
      {
        src: "/pej/selected/page34-img01.jpg",
        alt: "En el escenario de Google I/O Extended Nayarit",
        caption: "Google I/O Extended · escenario",
      },
      {
        src: "/pej/selected/page35-img01.jpg",
        alt: "Audiencia del Google I/O Extended Nayarit 2023",
        caption: "220+ asistentes · primer I/O Extended Nayarit",
      },
      {
        src: "/pej/selected/page33-img01.jpg",
        alt: "Fundación de Boot Tiger Camp 2023",
        caption: "Boot Tiger Camp · formación tecnológica",
      },
      {
        src: "/pej/selected/page36-img01.jpg",
        alt: "Comunidad en Google I/O Extended",
        caption: "Comunidad GDG Tepic",
      },
    ],
  },
  {
    id: "estado-limpio",
    label: "Innovación con impacto",
    title: "Estado Limpio",
    text: "App para la gestión de residuos urbanos. Presentada a municipios (Huajicori, Santiago Ixcuintla / SAMAO), a Aseo Público e Infraestructura del Estado de Nayarit y al INJUVE. Camino abierto al Consejo Consultivo de la Juventud y a colaboraciones institucionales —con financiamiento estatal aprobado de $300,000 MXN.",
    images: [
      {
        src: "/pej/selected/page25-img01.jpg",
        alt: "Presentación de Estado Limpio ante comunidad y autoridades",
        caption: "Presentación municipal · Estado Limpio",
      },
      {
        src: "/pej/selected/page28-img01.jpg",
        alt: "Presentación de Estado Limpio ante INJUVE",
        caption: "Presentación ante INJUVE",
      },
      {
        src: "/pej/selected/page29-img01.jpg",
        alt: "Presentación ante Aseo Público del Estado de Nayarit",
        caption: "Aseo Público e Infraestructura · Nayarit",
      },
      {
        src: "/pej/selected/page43-img01.jpg",
        alt: "Interfaz de la app Estado Limpio",
        caption: "Producto · gestión de residuos urbanos",
      },
    ],
  },
  {
    id: "representacion",
    label: "Ciencia, juventud y voz pública",
    title: "Consejo Consultivo e incidencia",
    text: "Integrante del primer Consejo Consultivo de la Juventud representando ciencia y tecnología. Ponente en el foro INJU-CYT («Explorando el Horizonte Tecnológico»), en la firma del convenio COCYTEN–INJUVE y en medios locales (Señal Tigre, Juvenízate, Radio Tepic). Dos menciones internacionales por ROBOYO junto a UiPath y Google Developers.",
    images: [
      {
        src: "/pej/selected/page41-img01.jpg",
        alt: "En el Consejo Consultivo de la Juventud",
        caption: "Consejo Consultivo · ciencia y tecnología",
      },
      {
        src: "/pej/selected/page30-img01.jpg",
        alt: "Ponente en el Foro INJU-CYT",
        caption: "Foro INJU-CYT · ponente",
      },
      {
        src: "/pej/selected/page42-img01.jpg",
        alt: "Reconocimiento con financiamiento para Estado Limpio",
        caption: "Reconocimiento e impulso estatal",
      },
      {
        src: "/pej/selected/page39-img01.jpg",
        alt: "InnovaTec regional en Pátzcuaro",
        caption: "InnovaTec regional · Pátzcuaro",
      },
    ],
  },
];

export const pejExtras = [
  {
    title: "Que Plan App",
    text: "Fundador y CEO. Plataforma digital para eventos, boletaje y descubrimiento de negocios y experiencias locales en Nayarit.",
  },
  {
    title: "El Rey Gorras Club",
    text: "Jefe de Sistemas (2024–2026): ventas, inventario, envíos y ecosistema comercial —incluyendo app de fidelización.",
  },
  {
    title: "Formación Google",
    text: "Curso Desarrollo de Apps Móviles (Google + Universidad Complutense de Madrid). Certificados: Marketing Digital (40 h), Ciberseguridad y Digitaliza tu negocio.",
  },
  {
    title: "Robótica México Conectado",
    text: "Trayectoria en robótica avanzada (CONALEP 169): niveles principiante, intermedio y avanzado —base de la disciplina de ingeniería aplicada.",
  },
];
