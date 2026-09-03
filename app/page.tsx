import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SectorsSection } from "@/components/sections/sectors-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { AboutSection } from "@/components/sections/about-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <SectorsSection />
      <MethodologySection />
      <AboutSection />
      <ClosingCta />
      <ContactSection />
    </main>
  );
}
