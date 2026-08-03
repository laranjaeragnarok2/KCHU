/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kchu-bg': '#0B1616',
        'kchu-surface': '#122121',
        'kchu-card': '#162727',
        'kchu-gold': '#E0A96D',
        'kchu-gold-dark': '#C68E54',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
