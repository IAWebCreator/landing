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
    "Auditoría, protocolos y capacitación para incluir mascotas y unidades caninas de forma segura en tu operación.",
  primaryCta: { label: "Agendar diagnóstico", href: "#contacto" },
  secondaryCta: { label: "Ver servicios", href: "#servicios" },
};

export const TRUST_POINTS = [
  "Metodología propia multiespecie",
  "Equipo técnico en manejo animal",
  "Respaldo de Spatitas",
];

interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: "audit",
    title: "Auditoría de bienestar animal",
    description: "Medimos tu operación frente a normativa, riesgos y buenas prácticas.",
  },
  {
    icon: "protocol",
    title: "Protocolos de manejo",
    description: "Ingreso, permanencia y atención de incidentes, paso a paso.",
  },
  {
    icon: "multispecies",
    title: "Integración multiespecie",
    description: "Personas y animales conviviendo con seguridad en tu operación.",
  },
  {
    icon: "advisory",
    title: "Consultoría empresarial",
    description: "Acompañamos las decisiones de tus equipos directivos y de riesgo.",
  },
  {
    icon: "training",
    title: "Capacitación técnica",
    description: "Formamos a los equipos que ejecutan los lineamientos en campo.",
  },
  {
    icon: "strategy",
    title: "Estrategias a la medida",
    description: "Hojas de ruta propias: del piloto a la política institucional.",
  },
];

interface Sector {
  icon: IconName;
  title: string;
}

/**
 * The point of this section is the opposite of a service list: it exists so
 * a visitor who is not a security company still recognizes themselves in
 * ten seconds — a row of labels to scan, not another paragraph to read.
 * Order runs from the company's original base (security, K9 units) to the
 * broader base it is expanding into now.
 */
export const SECTORS: Sector[] = [
  { icon: "k9", title: "Seguridad y unidades caninas" },
  { icon: "building", title: "Centros comerciales y retail" },
  { icon: "multispecies", title: "Hotelería y turismo" },
  { icon: "advisory", title: "Cajas de compensación" },
  { icon: "user", title: "Oficinas y espacios corporativos" },
  { icon: "strategy", title: "Eventos y experiencias" },
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
    description: "Estado actual: procesos, espacios y riesgos.",
  },
  {
    index: "02",
    title: "Lineamientos",
    description: "Criterios de ingreso, permanencia y exclusión.",
  },
  {
    index: "03",
    title: "Protocolos",
    description: "Rutas de operación y atención de incidentes.",
  },
  {
    index: "04",
    title: "Capacitación",
    description: "Transferimos el conocimiento a los equipos en campo.",
  },
  {
    index: "05",
    title: "Medición y mejora",
    description: "Medimos resultados y ajustamos con evidencia.",
  },
];

export const METHOD_PRINCIPLE = {
  eyebrow: "Nuestra metodología",
  title: "Más acceso no significa, por sí solo, mayor preparación.",
  description:
    "Una organización preparada sabe cuándo, cómo y bajo qué condiciones incluir animales con responsabilidad.",
};

export const ABOUT = {
  eyebrow: "Quiénes somos",
  title: "La consultoría nace del cuidado que ya conocíamos.",
  paragraphs: [
    "Caninos & Consultores es la rama de asesoría organizacional de Spatitas, marca dedicada al cuidado de perros y gatos. Ese conocimiento técnico es hoy el punto de partida de nuestra consultoría para empresas públicas y privadas.",
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
  description: "Cuéntanos tu caso y te ayudamos a identificar el punto de partida.",
};
