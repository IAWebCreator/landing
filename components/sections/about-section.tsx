import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ABOUT } from "@/lib/content";
import { PARENT_BRAND } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-shell py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-float sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/images/nosotros/energia.jpg"
                alt="Dos perros corriendo con energía sobre un camino de tierra"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-5 left-5 rounded-chip bg-paper/95 px-4 py-3 text-sm font-semibold text-ink shadow-lift backdrop-blur-sm">
                Una consultoría respaldada por {PARENT_BRAND}
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

            <div className="mt-5 space-y-4">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lead text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3">
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-brand-green-dark">{stat.value}</dd>
                  <dd className="mt-1 text-sm leading-snug text-ink-subtle">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
