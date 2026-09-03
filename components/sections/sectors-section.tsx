import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SECTORS } from "@/lib/content";

/**
 * Exists to answer one silent objection: "somos una caja de compensación /
 * un hotel / una oficina, ¿esto es para nosotros?" — not just for empresas de
 * seguridad. The photograph of several dogs, each on its own line, is a
 * deliberate echo of that idea: many different operations, one shared
 * standard of handling.
 */
export function SectorsSection() {
  return (
    <section id="sectores" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-16">
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-float sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/images/sectores/grupo-trabajo.jpg"
                alt="Varios perros de trabajo en un campo abierto, cada uno con su propio manejador"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Para quién trabajamos"
              title="Asesoramos a cualquier organización que conviva con animales"
              description="Nuestro origen está en la seguridad canina, y hoy acompañamos a empresas públicas y privadas de sectores muy distintos con el mismo estándar técnico."
            />

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SECTORS.map((sector, index) => (
                <Reveal key={sector.title} delay={index * 50} as="li">
                  <div className="flex items-start gap-3 rounded-card border border-line bg-shell p-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-chip bg-paper text-brand-green-dark shadow-card">
                      <Icon name={sector.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink">{sector.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-ink-muted">{sector.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
