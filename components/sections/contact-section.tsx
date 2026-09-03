import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, WhatsappIcon } from "@/components/ui/icon";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

/**
 * A form only pays off once someone is set up to triage what lands in an
 * inbox on a schedule. This team answers from a phone, so the fastest path
 * for both sides is the one people already have open: WhatsApp first, email
 * as the paper trail. No fields to fill in, nothing to lose if the tab closes.
 */
export function ContactSection() {
  return (
    <section id="contacto" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hablemos"
          align="center"
          title="Cuéntanos el reto de tu organización"
          description="Respondemos en menos de 48 horas hábiles."
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-panel border border-line bg-brand-green-dark shadow-float">
          <div className="paw-field flex flex-col items-center gap-6 p-8 text-center text-cream sm:p-12">
            <span className="relative block h-16 w-16 overflow-hidden rounded-full bg-paper shadow-card">
              <Image
                src="/images/brand/marca-canina.png"
                alt=""
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </span>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-brand-orange px-8 font-display text-base font-semibold text-ink shadow-[0_4px_0_0_#c06414] transition-all duration-150 hover:brightness-105 active:translate-y-[3px] active:shadow-none"
              >
                <WhatsappIcon className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-cream/35 px-8 font-display text-base font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                <Icon name="mail" className="h-5 w-5" />
                Escribir un correo
              </a>
            </div>

            <dl className="mt-2 flex flex-col items-center gap-2 text-sm text-cream-muted sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-orange" />
                <dd>{CONTACT.email}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="send" className="h-4 w-4 shrink-0 text-brand-orange" />
                <dd>{CONTACT.phoneLabel}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-orange" />
                <dd>{CONTACT.city}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
