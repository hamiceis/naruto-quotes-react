/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 'Roboto, serif',
      backgroundImage: {
        'konoha': "url('./src/images/konoha.jpg')"
      }
    },
  },
  plugins: [],
}
