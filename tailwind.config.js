/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#91db31',
        'base': '#1C2F35',
        'card': '#262626',
        'secondary': '#D5CDB8',
        'tertiary': '#A5906E',
        'hover': '#262626',
        'hoverPrim': "#d7e6fd",
        'text-base': 'white',
        'text-secondary': 'rgb(107 114 128)',
        'text-tertiary': '#ffffff',
        'veryLight':'#F7F7F7'
      }
    },
  },
  plugins: [],
}

