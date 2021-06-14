const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx.tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('even-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`even-child${separator}${className}`)}:nth-child(even)`
        })
      })
    })
  ],
}
