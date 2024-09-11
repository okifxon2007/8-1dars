// tailwind.config.js
module.exports = {
  darkMode: 'class', // Bu xususiyat `class` asosida dark mode ni qo'llaydi
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
}
