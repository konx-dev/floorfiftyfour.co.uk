module.exports = {
  mode: 'jit',
  content: [
      '~/pages/**/*.vue',
      '~/components/**/*.vue',
  ],
  theme: {
    fontFamily: {
      'primary': ['Raleway Regular','sans-serif'],
      'typewriter': ['Special Elite', 'sans-serif'],
      'display': ['Raleway Bold','sans-serif'],
    },
    colors: {
      brand: {
        grey: '#D4D4D4',
        black: '#545454'
      },
      white: '#ffffff',
      'white-80': 'rgba(255,255,255,0.8)',
      black: '#000000',
      'black-80': 'rgba(0,0,0,0.8)',
      'black-60': 'rgba(0,0,0,0.6)',
      red: '#c01134',
      grey: '#ddd',
      'grey-lighter': '#fafafa',
      'grey-darker': '#424242',
      debug: {
        red: 'red',
        blue: 'blue',
        yellow: 'yellow'
      }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}