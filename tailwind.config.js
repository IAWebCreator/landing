/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: '#FF7F50',
        negro: '#000000',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Montserrat', 'Lato', 'sans-serif'],
        serif: ['Merriweather', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
