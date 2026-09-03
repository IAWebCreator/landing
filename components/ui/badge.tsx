import { cn } from "@/lib/cn";

type BadgeTone = "orange" | "green" | "cream" | "dark" | "outline";

const TONE_CLASSES: Record<BadgeTone, string> = {
  orange: "bg-brand-orange text-ink",
  green: "bg-brand-green-soft text-brand-green-dark",
  cream: "bg-cream text-brand-green-dark",
  dark: "bg-brand-green-dark text-cream",
  outline: "border border-cream/25 bg-cream/10 text-cream backdrop-blur-sm",
};

export function Badge({
  tone = "green",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-display text-xs font-semibold",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Yellow marker stroke behind a word.
 *
 * `solid` is the variant for dark grounds: the default stroke only paints the
 * bottom 0.4em of the line, so cream text over it lands at about 1.2:1 while
 * the rest of the word stays cream-on-near-black. Solid fills the word and
 * flips it to ink instead, which reads at 12.6:1.
 */
export function Marker({
  children,
  tone = "stroke",
}: {
  children: React.ReactNode;
  tone?: "stroke" | "solid";
}) {
  return <span className={tone === "solid" ? "marker-solid" : "marker"}>{children}</span>;
}
