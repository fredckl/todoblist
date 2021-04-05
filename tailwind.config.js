module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      handwriting: ['Amatic SC', 'cursive']
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
