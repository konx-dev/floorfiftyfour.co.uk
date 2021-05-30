/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
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
      black: {
        default: '#000000',
        80: 'rgba(0,0,0,0.8)',
        60: 'rgba(0,0,0,0.6)'
      },
      white: {
        default: '#FFFFFF',
        80: 'rgba(255,255,255,0.8)',
      },
      grey: {
        lighter: '#fafafa',
        default: '#ddd',
        darker: '#424242',
      },
      red: {
        default: '#c01134',
      },
      debug: {
        red: 'red',
        blue: 'blue',
        yellow: 'yellow'
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: []
}
