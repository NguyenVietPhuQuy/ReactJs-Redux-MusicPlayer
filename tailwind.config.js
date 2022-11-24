/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'screen-main-player':'calc(100vh - 176px)'
      }
    },
  },
  plugins: [],
}
