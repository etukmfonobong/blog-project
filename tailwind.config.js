module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif"
      },
      textColor: {
        primary: '#4D4D4D',
        secondary: '#737373'
      },
      backgroundColor: {
        primary: '#4D4D4D',
        secondary: '#737373',
        blogGray: '#52606D'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
