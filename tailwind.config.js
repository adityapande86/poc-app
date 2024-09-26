/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //Only use the following font Weights
      //font-light [Light 300]
      //font-normal [Regular 400]
      //font-semibold [Semibold 600]
      //font-bold  [Bold 700]
      fontFamily: {
        family_header: ['Open Sans', 'sans-serif'],
        family_body: ['Open Sans', 'sans-serif'],
        family_footer: ['Open Sans', 'sans-serif'],
      }
    },
    colors: {
      //Choice Colors
      transparent: 'transparent',
      'primary': '#E26811', // Choice Orange
      'primary-ada': '#AE510E', //Choice Orange - ADA
      'primary-hover': '#F27013', //Choice Orange - Hover

      'secondary': '#00558C', //Choice Blue
      'secondary-ada': '#004269', //Choice Blue - ADA
      'secondary-hover': '#1A70A6', //Choice Blue - Hover
      'secondary-bright': '#FFC72C', //Choice Yellow
      'secondary-bright-ada': '#EBAC00', //Choice Yellow
      'secondary-bright-hover': '#FFE146', //Choice Yellow - Hover
      'secondary-pale-1': '#005F61', //Teal

      'neutral-almost-black': '#212121',
      'neutral-wolf-gray': '#424242',
      'neutral-gorilla-gray': '#757575',
      'neutral-elephant-gray': '#9E9E9E',
      'neutral-dark-gray': '#C7C7C7',
      'neutral-otterbelly-gray': '#E0E0E0',

      'neutral-wombat-gray': '#F5F5F5',
      'neutral-smoky-gray': '#FAFAFA',
      'neutral-white': '#FFFFFF',

      'functional-positive-green': '#28871C',
      'functional-error': '#D50000',
      'functional-light-blue': '#E5EEF3',
      'functional-light-green': '#F2F7EB',
      'functional-light-red': '#FDF4F4',
    }
  },
  plugins: [],
}

