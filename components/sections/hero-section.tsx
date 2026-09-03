import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Paw } from "@/components/ui/paw";
import { HERO, TRUST_POINTS } from "@/lib/content";

/** Each block enters a beat after the one above it. */
const step = (index: number) => ({ animationDelay: `${index * 110}ms` });

/**
 * Full-bleed photograph, not a two-column fold. A picture of a dog this
 * present makes the emotional case for "bienestar animal" that a stock icon
 * next to a paragraph never would; everything else here reads as a caption
 * on it, the way it does on the parent Spatitas site.
 */
export function HeroSection() {
  return (
    <>
      <section id="inicio" className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/hero/hero-golden.jpg"
          alt="Perro golden retriever mirando de frente, feliz y en buen estado de bienestar"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink from-0% via-ink/80 via-42% to-ink/10 to-85%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/25" />

        <Container className="relative flex min-h-[86svh] flex-col justify-end pb-14 pt-28 sm:min-h-[80svh] sm:pb-16 lg:min-h-[82svh] lg:pb-20">
          <div className="max-w-2xl">
            <div className="rise-in" style={step(0)}>
              <Badge tone="orange">
                <Paw className="h-3 w-3" />
                {HERO.eyebrow}
              </Badge>
            </div>

            <h1
              className="rise-in mt-6 font-display text-hero font-bold text-cream"
              style={step(1)}
            >
              {HERO.title}
            </h1>

            <p className="rise-in mt-6 max-w-xl text-lead text-cream-muted" style={step(2)}>
              {HERO.description}
            </p>

            <div className="rise-in mt-9 flex flex-wrap items-center gap-4" style={step(3)}>
              <Button href={HERO.primaryCta.href} size="lg">
                {HERO.primaryCta.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href={HERO.secondaryCta.href} variant="onDark" size="lg">
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-b border-line bg-shell">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-center text-sm font-semibold text-ink-muted"
              >
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2.4} />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
