/**
 * Design tokens for Caninos & Consultores.
 *
 * The palette, radii, elevation and type scale are the Spatitas brand theme —
 * this site is the consulting arm of that company, and reading as part of the
 * same family is the point. Two things are deliberately different from the
 * shop: `brand-orange` (taken from the ampersand in the C&C logo) replaces
 * yellow as the action colour, and the dark green carries far more of the page.
 * A consultancy sold to compliance, legal and operations teams has to look like
 * it belongs in a boardroom; the yellow stays, but only as a marker stroke.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#142117",
          muted: "#4f6153",
          subtle: "#6b7a6e",
        },
        cream: {
          DEFAULT: "#fff8e0",
          muted: "#c3d3bf",
          subtle: "#9db298",
        },
        paper: "#ffffff",
        /* Warm ground. A `paper` card on top of it reads as raised with no
           border at all, which is the whole trick behind layered surfaces. */
        shell: "#fdfaf2",
        brand: {
          green: "#60a040",
          "green-dark": "#28582f",
          "green-deep": "#1b3d21",
          "green-soft": "#eaf3e0",
          yellow: "#ffe020",
          "yellow-soft": "#fff6b0",
          orange: "#f0872c",
          "orange-deep": "#c06414",
          "orange-soft": "#fdeadb",
        },
        clay: "#b2593f",
        line: {
          DEFAULT: "#e8e4d5",
          strong: "#d6d1bd",
          "on-deep": "#3d6f45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      /* Fluid scale: each step interpolates between its phone and desktop size,
         so headings track the viewport instead of jumping at breakpoints. */
      fontSize: {
        hero: ["clamp(2.15rem, 1.3rem + 3.9vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        display: ["clamp(2rem, 1.35rem + 2.9vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        headline: ["clamp(1.7rem, 1.2rem + 2.1vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        title: ["clamp(1.15rem, 1.06rem + 0.45vw, 1.4rem)", { lineHeight: "1.25" }],
        lead: ["clamp(1rem, 0.95rem + 0.28vw, 1.15rem)", { lineHeight: "1.65" }],
      },
      borderRadius: {
        field: "0.875rem",
        chip: "1rem",
        card: "1.5rem",
        panel: "2rem",
        hero: "2.5rem",
      },
      /* Two layers each: a tight contact shadow that anchors the element to the
         surface, and a wide, very soft ambient one. Tinted with ink so the
         shadows stay in the warm family instead of going grey. */
      boxShadow: {
        card: "0 1px 2px rgb(20 33 23 / 0.04), 0 8px 24px -12px rgb(20 33 23 / 0.12)",
        lift: "0 2px 4px rgb(20 33 23 / 0.05), 0 16px 40px -16px rgb(20 33 23 / 0.18)",
        float: "0 4px 8px rgb(20 33 23 / 0.06), 0 32px 64px -24px rgb(20 33 23 / 0.24)",
      },
      spacing: {
        13: "3.25rem",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
