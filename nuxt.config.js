
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Floor Fifty-Four | Paranormal & Urban fantasy stories',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Books and stories of Paranormal Detectives and Urban Fantasy. Similar to X-files, SCP, Rivers of London, Agent Radford investigates crimes and mysteries.' },

      // OpenGraph tags
      { hid: 'og:type', property: 'og:type', content: 'website', vmid: 'og:type' },
      { hid: 'og:title', property: 'og:title', content: 'Floor Fifty-Four | Paranormal & Urban fantasy stories', vmid: 'og:title' },
      { hid: 'og:description', property: 'og:description', content: 'Books and stories of Paranormal Detectives and Urban Fantasy. Similar to X-files, SCP, Rivers of London, Agent Radford investigates crimes and mysteries.', vmid: 'og:description' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.floorfiftyfour.co.uk/', vmid: 'og:url' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Floor Fifty-Four', vmid: 'og:site_name'},

      // Twitter card
      { hid: 'twitter:title', property: 'twitter:title', content: 'Floor Fifty-Four | Paranormal & Urban fantasy stories', vmid: 'twitter:title' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Books and stories of Paranormal Detectives and Urban Fantasy. Similar to X-files, SCP, Rivers of London, Agent Radford investigates crimes and mysteries.', vmid: 'twitter:description' },
      { hid: 'twitter:site', property: 'twitter:site', content: 'Floor Fifty-Four', vmid: 'twitter:site'},
      { hid: 'twitter:creator', property: 'twitter:creator', content: 'https://twitter.com/RJHUNTWRITES', vmid: 'twitter:creator'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Favicon.ico' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Special+Elite&display=swap' },
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
    }],
    '@/modules/generator'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.floorfiftyfour.co.uk/',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
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
