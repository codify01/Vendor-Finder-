/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true},
    extend: {
      colors: {
        'pry': '#0C4E8B',
        'sec' : '#04172AE5'
      }
    },
  },
  plugins: [],
}