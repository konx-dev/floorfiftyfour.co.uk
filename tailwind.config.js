/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'primary': ['Raleway','sans-serif']
    },
    colors: {
      
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
