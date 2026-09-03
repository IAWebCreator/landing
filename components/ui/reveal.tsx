"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealDirection = "up" | "left" | "right" | "scale";

const HIDDEN_CLASSES: Record<RevealDirection, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-95",
};

/**
 * Reveals its children the first time they scroll into view.
 *
 * This replaced AOS, which shipped a library and a stylesheet to do the same
 * thing from a data attribute. One IntersectionObserver per instance, and it
 * disconnects as soon as it fires, so it stays cheap when a page stacks a dozen
 * of them. Visitors who ask for reduced motion get the final state immediately.
 */
export function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
  children,
}: {
  as?: "div" | "li" | "section" | "span" | "article";
  direction?: RevealDirection;
  /** Stagger in milliseconds, applied once the element enters the viewport. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const isVisible = hasEntered || prefersReducedMotion;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      style={isVisible && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${HIDDEN_CLASSES[direction]}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
