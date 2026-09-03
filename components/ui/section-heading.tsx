import { cn } from "@/lib/cn";
import { Paw } from "@/components/ui/paw";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
}) {
  const isCream = tone === "cream";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em]",
            align === "center" && "justify-center",
            isCream ? "text-brand-orange" : "text-brand-green-dark",
          )}
        >
          <Paw className="h-3.5 w-3.5" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className={cn("font-display text-headline font-bold", isCream ? "text-cream" : "text-ink")}>
        {title}
      </h2>

      {description ? (
        <p className={cn("mt-4 text-lead", isCream ? "text-cream-muted" : "text-ink-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
