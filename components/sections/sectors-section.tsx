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
              title="Cualquier organización que conviva con animales"
              description="Nuestro origen está en la seguridad canina; hoy asesoramos a sectores muy distintos con el mismo estándar técnico."
            />

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {SECTORS.map((sector, index) => (
                <Reveal key={sector.title} delay={index * 45} as="li">
                  <div className="flex items-center gap-2 rounded-chip border border-line bg-shell py-2 pl-2.5 pr-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-brand-green-dark shadow-card">
                      <Icon name={sector.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-display text-sm font-semibold text-ink">{sector.title}</span>
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
