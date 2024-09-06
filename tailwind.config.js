/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./pages/**/*.{html,js}", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
