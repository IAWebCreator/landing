import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CONTACT, PARENT_BRAND_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TITLE = `${SITE_NAME} | Consultoría en bienestar animal`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "consultoría en bienestar animal",
    "bienestar animal empresas",
    "protocolos de manejo de mascotas",
    "unidades caninas empresariales",
    "integración multiespecie",
    "auditoría de bienestar animal",
    "Spatitas",
    "Bogotá",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "es_CO",
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero/hero-golden.jpg",
        width: 2400,
        height: 1600,
        alt: "Perro golden retriever mirando de frente, feliz y en buen estado de bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/hero-golden.jpg"],
  },
  // Replace with the verification code Google Search Console shows for the
  // HTML tag method, then this line alone satisfies the ownership check.
  verification: {
    google: "",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/images/hero/hero-golden.jpg`,
  logo: `${SITE_URL}/images/brand/marca-canina.png`,
  email: CONTACT.email,
  telephone: `+${CONTACT.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  areaServed: "CO",
  sameAs: [CONTACT.instagram, PARENT_BRAND_URL],
  parentOrganization: {
    "@type": "Organization",
    name: "Spatitas",
    url: PARENT_BRAND_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="bg-shell font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
