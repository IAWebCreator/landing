/**
 * Every fact about the business that appears in more than one place. The
 * contact details in particular used to live in three components with three
 * different email addresses; one export means the footer, the form and the
 * structured data can never disagree again.
 */
export const SITE_NAME = "Caninos & Consultores";
export const SITE_TAGLINE = "Especialistas en bienestar animal";
export const PARENT_BRAND = "Spatitas";
export const PARENT_BRAND_URL = "https://www.spatitas.com.co/";

export const SITE_DESCRIPTION =
  "Consultoría en bienestar animal para organizaciones: auditoría de estándares, protocolos de manejo de mascotas, integración de familias multiespecie, capacitación técnica y estrategias a la medida para empresas públicas y privadas.";

export const CONTACT = {
  email: "spatitassas@gmail.com",
  /** E.164 for the wa.me link; `phoneLabel` is what a person reads. */
  whatsapp: "573152740577",
  phoneLabel: "+57 315 274 0577",
  city: "Bogotá, Colombia",
  instagram: "https://www.instagram.com/caninosyconsultores",
  instagramLabel: "@caninosyconsultores",
} as const;

export const NAV_LINKS = [
  { id: "servicios", label: "Servicios" },
  { id: "sectores", label: "Sectores" },
  { id: "metodologia", label: "Metodología" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
] as const;

/** Pre-filled WhatsApp opener, so the first message is not "Hola". */
export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hola, quisiera conocer la consultoría de Caninos & Consultores para mi organización.",
)}`;
