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
        p2: "#3B0F40",
        p3: "#B700A5",

      },
      width: {
        '6': '24px' ,
        '128': '512px',
        '144': '576px', 
        '160': '640px',
        '192': '768px',
        '256': '1024px',
        '384': '1536px',
        '512': '2048px',
      },
      screens: {
        xs: '480px', 
      },
    },
    fontFamily: {
      'RoverExplore': ['Rover Explore', 'sans-serif'],
    },
    boxShadow: {
      navbar: '0px 4px 10px rgba(0, 0, 0, 0.5)'
    }
  },
  plugins: [],
}
