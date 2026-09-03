import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "dark" | "outline" | "ghost" | "onDark";
type ButtonSize = "sm" | "md" | "lg";

/** Chunky "sticker" buttons: a solid bottom edge that compresses on press. */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-ink shadow-[0_4px_0_0_#c06414] hover:brightness-105 focus-visible:outline-ink",
  dark: "bg-brand-green-dark text-cream shadow-[0_4px_0_0_#16331b] hover:brightness-110 focus-visible:outline-brand-green-dark",
  outline:
    "border border-line-strong bg-paper text-ink shadow-card hover:border-ink/30 hover:bg-shell focus-visible:outline-ink",
  /* For dark grounds, where `outline`'s white fill would punch a hole. */
  onDark:
    "border border-cream/35 bg-transparent text-cream hover:bg-cream/10 focus-visible:outline-cream",
  ghost: "bg-transparent text-ink hover:bg-ink/5 focus-visible:outline-ink",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-[0.95rem] gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-full font-display font-semibold transition-all duration-150 active:translate-y-[3px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
