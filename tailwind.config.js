// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderWidth: ['hover', 'focus'],
      borderColor:['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}