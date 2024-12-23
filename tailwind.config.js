/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        p1: "#B292FF",
        p2: "#3B0F40"

      }
    },
    fontFamily: {
      'ClashDisplay': ['Clash Display', 'sans-serif'],
      'RoverExplore': ['Rover Explore', 'sans-serif'],
    },
  },
  plugins: [],
}