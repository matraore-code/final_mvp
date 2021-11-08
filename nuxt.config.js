// import webpack from 'webpack'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Business Carte, échanger vos informations facilement',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     { rel: 'icon', type: 'image/png', href : '/favicon/favicon.png'}
    ],
    script: [
      // {src: '/js/jquery-3.6.0.min.js'},
      // {src: '/js/bootstrap.min.js'},
      // {src: '/js/modernizr.custom.js'},
      // {src: '/js/jquery.easing.js'},
      // {src: '/js/jquery.appear.js'},
      // {src: '/js/jquery.scrollto.js'},
      // {src: '/js/menu.js'},
      // {src: '/js/owl.carousel.min.js'},
      // {src: '/js/jquery.magnific-popup.min.js'},
      // {src: '/js/quick-form.js'},
      // {src: '/js/request-form.js'},
      // {src: '/js/jquery.validate.min.js'},
      // {src: '/js/jquery.ajaxchimp.min.js'},
      // {src: '/js/wow.js'},
      // {src: '/js/custom.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/flaticon.css', 
    '~/assets/css/menu.css',
    '~/assets/css/dropdown-effects/fade-down.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/owl.theme.default.min.css',
    '~/assets/css/animate.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // })
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   })
    // ]
  }
}
