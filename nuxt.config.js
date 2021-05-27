
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
      // { hid: 'keywords', name: 'keywords', content: 'books, stories, paranormal, detectives, urban, fantasy, x-files, scp, rivers of london, crime, mystery'},

      // Open Graph
      { property: 'og:title', content: 'Floor Fifty-Four | Paranormal & Urban fantasy stories', vmidL: 'og:title'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap' },
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
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // 'nuxt-purgecss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-140024933-2' // UA-140024933-2
    }],
    ['nuxt-fontawesome', {
      component: 'font-awesome-icon', //customize component name
      imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faLink','faBars','faTimes','faAsterisk','faLongArrowAltRight','faLongArrowAltLeft','faTh']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faRedditAlien','faTwitter','faInstagram']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faEnvelope', 'faCopyright','faFolderOpen']
          },
      ]
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
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  apollo: {  
    clientConfigs: {
      default: '@/apollo/configs/craft.js',
      // default: {
      //   httpEndpoint: process.env.BACKEND_URL || "https://dev.floorfiftyfour.konx.dev/api"
      // }
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
