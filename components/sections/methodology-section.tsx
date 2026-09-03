import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marker } from "@/components/ui/badge";
import { METHOD_PRINCIPLE, METHOD_STEPS } from "@/lib/content";

/**
 * The dark green ground (instead of shell or paper) marks this out as the
 * section that carries the company's actual point of view, not just a list
 * of deliverables — the same role the principle plays in the source
 * methodology document (P4, "no existe una regla Spatitas universal").
 */
export function MethodologySection() {
  return (
    <section id="metodologia" className="paw-field-deep bg-brand-green-deep py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={METHOD_PRINCIPLE.eyebrow}
          title={
            <>
              Más acceso no significa, por sí solo, <Marker tone="solid">mayor preparación</Marker>.
            </>
          }
          description={METHOD_PRINCIPLE.description}
          tone="cream"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-16">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {METHOD_STEPS.map((step, index) => (
              <Reveal key={step.index} delay={index * 70} as="li">
                <div className="h-full rounded-card border border-line-on-deep bg-cream/[0.06] p-5 backdrop-blur-sm">
                  <span className="font-display text-2xl font-bold text-brand-yellow">
                    {step.index}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-cream">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-float sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/images/metodologia/manejo-protocolo.jpg"
                alt="Persona revisando con cuidado la pata de un perro, como parte de un protocolo de manejo"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
