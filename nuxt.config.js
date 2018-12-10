const resolve = require('path').resolve
// 引入 ParallelUglifyPlugin 插件
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FINWEX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'FINWEX-金融科技及区块链的领导咨询企业和智库领袖，业务涵盖区块链峰会FINWISE SUMMIT、区块链智库FINWEX INSTITUTE，提供区块链项目评级、综合指数、咨询、培训服务，以及FINWEX LABS孵化器业务等，提供一站式孵化加速服务与生态整合平台。' },
      { hid: 'keywords', name: 'keywords', content: 'FINWEX、FINWISE、金融科技、区块链、区块链峰会、区块链智库、指数、评级、孵化器、风险评估、生态整合、综合指数、避险指数、偏离指数、数字货币、比特币、以太坊' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?c3750676f415fdb2b15f2766f44a8bee'}
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n.js',
    { src: '~/plugins/fastclick.js', ssr: false },
    { src: '~/plugins/persisted-state.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/event-calendar.js', ssr: true },
  ],
  axios: {
    baseURL: 'http://127.0.0.1:3000',
    browserBaseURL: '/'
  },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/main.css',
    'swiper/dist/css/swiper.css',
    { src: './assets/css/main.less', lang: 'less' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff9739' },
  /*
   ** Build configuration
   */
  debug: true,
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      // Setup less file aliases
      const alias = config.resolve.alias = config.resolve.alias || {}
      alias['@style'] = resolve(this.options.rootDir, 'assets/css')

      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })

        // TODO: should be removed?
        config.module.rules.push({
          enforce: 'pre',
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        })
      }
    },
    publicPath: '/finwex/',
    vendor: ['axios']
  },
  env: {
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    middleware: [
      'i18n'
    ],
    extendRoutes(routes) {
      routes.push({
        name: 'index',
        path: '/index',
        component: resolve(__dirname, 'pages/indices.vue')
      })
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/home.vue')
      })
    }
  }
}
