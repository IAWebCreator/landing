import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Paw } from "@/components/ui/paw";
import { CLOSING_CTA } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="paw-field bg-brand-yellow-soft py-16 sm:py-20">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-green-dark">
            <Paw className="h-3.5 w-3.5" />
            {CLOSING_CTA.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-headline font-bold text-ink">{CLOSING_CTA.title}</h2>
          <p className="mt-4 text-lead text-ink-muted">{CLOSING_CTA.description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contacto" variant="dark" size="lg">
              Agendar diagnóstico
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={WHATSAPP_URL} variant="outline" size="lg">
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
