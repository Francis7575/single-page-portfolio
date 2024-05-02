/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cream': '#FFF7F0',
        'black': '#030303',
        'medium-brown': '#7A746E',
        'galatic-blue': '#755CDE',
        'summer-yellow': '#F6A560',
        'pale-red': '#F39E9E',
        'light-red': '#EB7565',
        'cyan': '#61C4B7',
        'purplish-red': '#552049'
      }
    },
  },
  plugins: [],
}