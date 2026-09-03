import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-shell py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios de consultoría en bienestar animal"
          description="Del diagnóstico a la ejecución en campo."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <article className="group h-full rounded-card border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-chip bg-brand-green-soft text-brand-green-dark transition-colors duration-300 group-hover:bg-brand-green-dark group-hover:text-cream">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-title font-bold text-ink">{service.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
