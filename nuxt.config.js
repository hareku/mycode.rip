const contentful = require('contentful')
const contentfulClient = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MyCode.rip',
    titleTemplate: '%s | MyCode.rip',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'TeBuCNCTOyUHjtIq4eNw5aiyr0a86CB4Ikpqr4m4nrk' },
      { hid: 'description', name: 'description', content: 'Webエンジニアのブログ' },
      { hid: 'og:title', property: 'og:title', content: 'MyCode.rip' },
      { hid: 'og:description', property: 'og:description', content: 'Webエンジニアのブログ' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://mycode.rip/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** plugins
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/markdown-it'
  ],
  /*
  ** CSS
  */
  css: [
    { src: '~/assets/app.scss', lang: 'scss' },
  ],
  /*
  ** modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-58539185-8'
    }],
    '@nuxtjs/sitemap'
  ],
  /*
  ** env
  */
  env: {
    contentfulSpaceId: process.env.CTF_SPACE_ID,
    contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Vendor
    */
    vendor: [
      'dateformat'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    fallback: '404.html',
    routes () {
      return contentfulClient.getEntries().then(({ items }) => {
        return items.map(post => `/${post.fields.slug}`)
      })
    }
  },
  /*
  ** @nuxtjs/sitemap configuration
  */
  sitemap: {
    hostname: 'https://mycode.rip',
    cacheTime: 1000 * 60 * 15, // 15 minutes
    generate: true,
    routes () {
      return contentfulClient.getEntries({
          content_type: 'post',
          select: 'fields.slug'
        })
        .then(({ items }) => {
          return items.map(post => `/${post.fields.slug}`)
        })
    }
  }
}
