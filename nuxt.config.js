
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Floor Fifty-Four | Paranormal & Urban fantasy stories' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Books and stories of Paranormal Detectives and Urban Fantasy. Similar to X-files, SCP, Rivers of London, Agent Radford investigates crimes and mysteries.' },
      { hid: 'keywords', name: 'keywords', content: 'books, stories, paranormal, detectives, urban, fantasy, x-files, scp, rivers of london, crime, mystery'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Bebas+Neue&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  fontawesome: {
    icons: {
      solid: ['faCheckSquare','faChevronDown','faChevronUp','faChevronRight', 'faUser','faSearch','faBars','faTrashAlt','faChevronLeft','faCheck',
      'faLongArrowAltRight'],
      regular: ['faCheckSquare'],
      brands: ['faFacebookF','faTwitter','faLinkedinIn']
    }
  },
  styleResources: {
    scss: [
      'assets/scss/_vars.scss',
      'assets/scss/_mixin.scss',
      'assets/scss/_globals.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    ['@nuxtjs/google-analytics', {
      id: 'XX-XXXXXXX-X' // UA-140024933-2
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "https://staging.molecule.konx.dev/api"
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
