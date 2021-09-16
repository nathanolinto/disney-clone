module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'group-hover'],
      scale: ['hover','group-hover'],
      opacity: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
