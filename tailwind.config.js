/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'currentColor': 'currentColor',
      'primary': '#2c74e2',
      'green': '#618449',
      'yellow': '#EDD92A',
      'red':'#FF5252',
      'primary-txt': '#233145',
      'secondary-txt': '#8E98A7',
      'gray': '#DFE5F1',
      'white': '#FFFFFF'

    },
    fontFamily: {
      pop: [ 'Poppins', 'sans-serif' ]
    }
  },
  plugins: [],
}