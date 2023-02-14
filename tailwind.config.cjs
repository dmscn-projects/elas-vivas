/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-light": "#C7D8E4",
        "blue-10": "#1B2731",
        "blue-60": "#3C5A74",
        "yellow-80": "#E4A82D",
        "yellow-100": "#E1C888",
        "white-80": "#E2E6E8",
      }
    },
  },
  plugins: [],
}