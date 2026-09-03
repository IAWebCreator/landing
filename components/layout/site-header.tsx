"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Paw } from "@/components/ui/paw";
import { cn } from "@/lib/cn";
import { NAV_LINKS, PARENT_BRAND } from "@/lib/site";

const SECTION_IDS = ["inicio", ...NAV_LINKS.map((link) => link.id)];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Scroll spy. The old version recomputed `offsetTop` for five elements on
   * every scroll event, which forces a layout each time; an observer with a
   * band across the upper third of the viewport gets the same answer for free.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const id of SECTION_IDS) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  /* A menu that scrolls the page behind it reads as broken on a phone. */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* The panel is not a page, so Escape has to be able to close it. */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  /* Solid chrome whenever the panel is open, even at scroll position zero —
     otherwise the links sit on a transparent bar above an opaque sheet. */
  const isSolid = isScrolled || isMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Says what the company does and whose it is, in one line, before the
          visitor has read anything else. Collapses on scroll: it is worth one
          read, not a permanent strip of the viewport. */}
      <div
        className={cn(
          "grid bg-brand-green-deep transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          isSolid ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="flex items-center justify-center gap-2 px-4 py-2 text-center font-display text-xs font-medium text-cream sm:text-sm">
            <Paw className="h-3 w-3 shrink-0 text-brand-orange" />
            <span>
              Consultoría en bienestar animal para organizaciones
              <span className="hidden sm:inline"> · Una unidad de {PARENT_BRAND}</span>
            </span>
          </p>
        </div>
      </div>

      <div
        className={cn(
          "transition-colors duration-300 motion-reduce:transition-none",
          isSolid
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-[height] duration-300 ease-out motion-reduce:transition-none",
            isScrolled ? "h-16" : "h-20",
          )}
        >
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Caninos y Consultores, ir al inicio"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-paper shadow-card ring-1 ring-line">
              <Image
                src="/images/brand/marca-canina.png"
                alt=""
                fill
                priority
                sizes="44px"
                className="object-contain p-0.5"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-[1.05rem] font-bold tracking-tight transition-colors sm:text-lg",
                  isSolid ? "text-ink" : "text-cream",
                )}
              >
                Caninos <span className="text-brand-orange">&amp;</span> Consultores
              </span>
              <span
                className={cn(
                  "mt-1 hidden text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors sm:block",
                  isSolid ? "text-ink-subtle" : "text-cream-subtle",
                )}
              >
                Bienestar animal · {PARENT_BRAND}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 font-display text-[0.95rem] font-semibold transition-colors",
                  activeSection === link.id
                    ? isSolid
                      ? "bg-brand-green-soft text-brand-green-dark"
                      : "bg-cream/15 text-cream"
                    : isSolid
                      ? "text-ink-muted hover:bg-shell hover:text-brand-green-dark"
                      : "text-cream-muted hover:bg-cream/10 hover:text-cream",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contacto" size="sm" className="hidden sm:inline-flex">
              Agendar diagnóstico
            </Button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-movil"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                isSolid ? "text-ink hover:bg-shell" : "text-cream hover:bg-cream/10",
              )}
            >
              <Icon name={isMenuOpen ? "close" : "menu"} strokeWidth={1.8} />
            </button>
          </div>
        </Container>
      </div>

      {/* Sheet rather than a dropdown: at five links plus a call to action, a
          dropdown ends up as tall as the sheet anyway, and the sheet gives the
          links a proper touch target. */}
      <div
        id="menu-movil"
        hidden={!isMenuOpen}
        className="border-b border-line bg-paper shadow-lift lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-field px-4 py-3 font-display text-base font-semibold transition-colors",
                activeSection === link.id
                  ? "bg-brand-green-soft text-brand-green-dark"
                  : "text-ink-muted hover:bg-shell",
              )}
            >
              {link.label}
              <Icon name="arrow" className="h-4 w-4 opacity-40" />
            </a>
          ))}
          <Button
            href="#contacto"
            size="lg"
            className="mt-2 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar diagnóstico
          </Button>
        </Container>
      </div>
    </header>
  );
}
