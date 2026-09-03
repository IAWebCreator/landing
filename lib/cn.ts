import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge has no way to discover the font sizes declared in the Tailwind
 * config, so out of the box it files `text-headline`, `text-lead` and friends
 * under text-*colour* — the same conflict group as `text-ink`. Every
 * `cn("text-headline", "text-ink")` would therefore resolve as a conflict and
 * throw the size away.
 *
 * Registering the scale's names under `font-size` is the whole fix. Anything
 * added to `fontSize` in tailwind.config.js has to be listed here too.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["hero", "display", "headline", "title", "lead"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
