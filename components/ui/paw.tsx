import { cn } from "@/lib/cn";

/** The paw mark used across the Spatitas packaging and marketing pieces. */
export function Paw({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      fill="currentColor"
      style={style}
      className={cn("h-4 w-4", className)}
    >
      <ellipse cx="30" cy="42" rx="9" ry="12" transform="rotate(-20 30 42)" />
      <ellipse cx="47" cy="31" rx="9" ry="12" transform="rotate(-7 47 31)" />
      <ellipse cx="65" cy="33" rx="9" ry="12" transform="rotate(9 65 33)" />
      <ellipse cx="81" cy="46" rx="9" ry="12" transform="rotate(22 81 46)" />
      <path d="M55 52c14 0 25 9 25 19 0 9-8 14-17 14-3 0-6 1-8 1s-5-1-8-1c-9 0-17-5-17-14 0-10 11-19 25-19z" />
    </svg>
  );
}
