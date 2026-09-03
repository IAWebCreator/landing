import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Icon, InstagramIcon, WhatsappIcon } from "@/components/ui/icon";
import {
  CONTACT,
  NAV_LINKS,
  PARENT_BRAND,
  PARENT_BRAND_URL,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_URL,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="paw-field-deep bg-brand-green-deep pt-12 text-cream">
      <Container>
        {/* Whoever lands here from a search result has no reason to already
            know this company is part of Spatitas — this is the one place on
            the page that says so with a working link, not just a name. */}
        <a
          href={PARENT_BRAND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-between gap-4 rounded-panel border border-line-on-deep bg-cream/[0.06] px-6 py-5 text-center sm:flex-row sm:text-left"
        >
          <span className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-cream-subtle">
              Una consultoría de
            </span>
            <Image
              src="/images/brand/spatitas-horizontal.png"
              alt={PARENT_BRAND}
              width={120}
              height={40}
              className="h-7 w-auto"
            />
          </span>
          <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-orange transition-transform group-hover:translate-x-1">
            Visitar spatitas.com.co
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </a>

        <div className="mt-10 grid grid-cols-1 gap-10 border-b border-line-on-deep pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-paper shadow-card">
                <Image
                  src="/images/brand/marca-canina.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </span>
              <div>
                <p className="font-display text-lg font-bold">{SITE_NAME}</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cream-subtle">
                  {SITE_TAGLINE}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-muted">
              Consultoría en bienestar animal para organizaciones públicas y privadas. La rama de
              asesoría organizacional de{" "}
              <a
                href={PARENT_BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cream underline decoration-brand-orange/60 underline-offset-2 hover:decoration-brand-orange"
              >
                {PARENT_BRAND}
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-cream-subtle">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-cream-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-cream-subtle">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-cream-muted transition-colors hover:text-cream"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-orange" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream-muted transition-colors hover:text-cream"
                >
                  <WhatsappIcon className="h-4 w-4 shrink-0 text-brand-orange" />
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-cream-muted">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-orange" />
                {CONTACT.city}
              </li>
            </ul>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Caninos y Consultores en Instagram"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <a
            href={PARENT_BRAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cream"
          >
            Parte del ecosistema {PARENT_BRAND}
          </a>
        </div>
      </Container>
    </footer>
  );
}
