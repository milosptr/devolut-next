/** @type {import('tailwindcss').Config} */
const colorsTW = require('tailwindcss/colors')

module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#3955a8',
      'secondary': '#1509d8',
      'black': '#000',
      transparent: 'transparent',
      current: 'currentColor',
      black: colorsTW.black,
      white: colorsTW.white,
      gray: colorsTW.gray,
    },
    extend: {},
  },
  plugins: [],
}
