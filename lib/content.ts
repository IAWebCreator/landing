import type { IconName } from "@/components/ui/icon";

/**
 * All page copy lives here rather than inline in each section component.
 * The brief that drove this rewrite came from the team lead in pieces over
 * several messages — this file is the one place that reconciles them:
 *
 *  - "adiestramiento" is gone. It read as a dog-training service, which
 *    competes with (and undersells) what the company actually sells:
 *    organizational consulting.
 *  - "integración de familias multiespecie en ecosistemas empresariales"
 *    replaces it, matching the scope Spatitas already sells into engagements
 *    like the Comfama proposal (see Proyecto COMFAMA/propuesta).
 *  - The old site read as security-sector-only ("perros de trabajo") with a
 *    home-care afterthought. Both are gone in favor of one broader claim:
 *    advisory for any organization, public or private, with sector examples
 *    that make that legible at a glance.
 */

export const HERO = {
  eyebrow: "Consultoría en bienestar animal",
  title: "Preparamos organizaciones para convivir bien con los animales.",
  description:
    "Asesoramos a empresas públicas y privadas en la inclusión responsable de mascotas y unidades caninas: auditoría, protocolos, capacitación y estrategia a la medida de cada operación.",
  primaryCta: { label: "Agendar diagnóstico", href: "#contacto" },
  secondaryCta: { label: "Ver servicios", href: "#servicios" },
};

export const TRUST_POINTS = [
  "Metodología propia de bienestar multiespecie",
  "Equipo técnico en comportamiento y manejo animal",
  "Respaldo de Spatitas, marca de cuidado animal",
];

interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: "audit",
    title: "Auditoría de estándares de bienestar animal",
    description:
      "Evaluamos el estado actual de tu operación frente a normativa, buenas prácticas y riesgos, e identificamos brechas y oportunidades concretas.",
  },
  {
    icon: "protocol",
    title: "Protocolos de manejo de mascotas",
    description:
      "Creamos y optimizamos protocolos operativos de ingreso, permanencia, convivencia y manejo de incidentes, ajustados a cada espacio y equipo.",
  },
  {
    icon: "multispecies",
    title: "Integración multiespecie en ecosistemas empresariales",
    description:
      "Diseñamos el camino para que personas, colaboradores y animales convivan de forma segura dentro de espacios, servicios y experiencias corporativas.",
  },
  {
    icon: "advisory",
    title: "Consultoría para empresas públicas y privadas",
    description:
      "Acompañamos a equipos directivos, jurídicos, de riesgos y de operaciones en la toma de decisiones sobre inclusión animal, con criterios claros y trazables.",
  },
  {
    icon: "training",
    title: "Capacitación técnica",
    description:
      "Formamos a equipos administrativos, operativos y de atención al público para ejecutar en campo los lineamientos definidos.",
  },
  {
    icon: "strategy",
    title: "Estrategias a la medida",
    description:
      "Diseñamos hojas de ruta adaptadas a las necesidades reales de cada organización, desde un piloto acotado hasta una política institucional.",
  },
];

interface Sector {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * The point of this section is the opposite of a service list: it exists so
 * a visitor who is not a security company still recognizes themselves in
 * ten seconds. Order runs from the company's original base (security, K9
 * units) to the broader base it is expanding into now.
 */
export const SECTORS: Sector[] = [
  {
    icon: "k9",
    title: "Seguridad y unidades caninas",
    description: "Rendimiento, bienestar y cumplimiento normativo de equipos K9 operativos.",
  },
  {
    icon: "building",
    title: "Centros comerciales y retail",
    description: "Lineamientos de ingreso y permanencia para espacios abiertos al público.",
  },
  {
    icon: "multispecies",
    title: "Hotelería y turismo",
    description: "Experiencias pet-friendly seguras, desde la recepción hasta las zonas comunes.",
  },
  {
    icon: "advisory",
    title: "Cajas de compensación y bienestar",
    description: "Programas de inclusión de familias con mascotas dentro de la oferta institucional.",
  },
  {
    icon: "user",
    title: "Oficinas y espacios corporativos",
    description: "Políticas de convivencia para equipos que comparten el lugar de trabajo con mascotas.",
  },
  {
    icon: "strategy",
    title: "Eventos y experiencias",
    description: "Protocolos de operación segura para activaciones, ferias y encuentros con mascotas.",
  },
];

interface MethodStep {
  index: string;
  title: string;
  description: string;
}

/**
 * Condensed from the ten-principle Spatitas methodology
 * (ver Proyecto COMFAMA/propuesta/metodologia_spatitas.txt) into the five
 * steps a prospective client actually needs to see: what happens, in order,
 * once they sign.
 */
export const METHOD_STEPS: MethodStep[] = [
  {
    index: "01",
    title: "Diagnóstico",
    description:
      "Levantamos el estado actual: procesos, espacios, riesgos y capacidades instaladas frente a la inclusión animal.",
  },
  {
    index: "02",
    title: "Lineamientos",
    description:
      "Definimos criterios claros de ingreso, permanencia y exclusión, proporcionales al riesgo real de cada espacio.",
  },
  {
    index: "03",
    title: "Protocolos",
    description:
      "Diseñamos los protocolos operativos y las rutas de atención ante incidentes, con las áreas responsables.",
  },
  {
    index: "04",
    title: "Capacitación",
    description:
      "Transferimos el conocimiento a los equipos que ejecutan en campo: liderazgo, operación y atención al público.",
  },
  {
    index: "05",
    title: "Medición y mejora",
    description:
      "Acompañamos la puesta en marcha, medimos resultados y ajustamos con evidencia, no con intuición.",
  },
];

export const METHOD_PRINCIPLE = {
  eyebrow: "Nuestra metodología",
  title: "Más acceso no significa, por sí solo, mayor preparación.",
  description:
    "Una organización preparada no es la que simplemente abre sus puertas a las mascotas, sino la que sabe cuándo, cómo y bajo qué condiciones hacerlo con responsabilidad: protegiendo el bienestar animal, a las personas y la operación al mismo tiempo.",
};

export const ABOUT = {
  eyebrow: "Quiénes somos",
  title: "La consultoría nace del cuidado que ya conocíamos.",
  paragraphs: [
    "Caninos & Consultores es la rama de asesoría organizacional de Spatitas, marca dedicada al cuidado de las patas de perros y gatos. Ese mismo conocimiento técnico en bienestar animal es hoy el punto de partida de nuestra consultoría.",
    "Trabajamos con empresas públicas y privadas que necesitan tomar decisiones informadas sobre la presencia de animales en su operación: desde unidades caninas de seguridad hasta organizaciones que quieren abrirse, de forma segura, a las familias con mascotas.",
  ],
  stats: [
    { value: "10+", label: "Principios metodológicos propios" },
    { value: "360°", label: "Diagnóstico legal, operativo y de experiencia" },
    { value: "1", label: "Marca respaldando cada recomendación: Spatitas" },
  ],
};

export const CLOSING_CTA = {
  eyebrow: "Empecemos",
  title: "¿Tu organización está lista para convivir con mascotas?",
  description:
    "Cuéntanos tu caso y te ayudamos a identificar el punto de partida: diagnóstico, protocolos o capacitación.",
};
