/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ba-blue': '#2196F3',
        'ba-pink': '#FF69B4',
        'ba-yellow': '#FFD700',
      }
    },
  },
  plugins: [],
}
