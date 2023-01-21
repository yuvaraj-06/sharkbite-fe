/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotatein: {
          '0%': { transform: 'rotate(-12deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        rotatein: 'rotatein 0.5s cubic-bezier(0,.85,.86,1.0)'
      }
    },
  },
  plugins: [],
}
