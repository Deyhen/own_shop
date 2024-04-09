/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'bg': '#BDBDBD',
      'main': '#000000',
      'element': '#584FA3',
      //'target': '#b6e3e3',
      'white': '#FFFFFF',
    },
    extend: {
    },
    
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      const newUtilities = {
        ".flex-self-end": {
          justifySelf: "flex-end"
        },
        ".flex-self-start": {
          justifySelf: "flex-start"
        },
        ".flex-self-center": {
          justifySelf: "center"
        }
      }
      addUtilities(newUtilities)
    })
  ],
}

