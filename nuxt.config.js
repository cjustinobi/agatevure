import blogs from './contents/blogs.json'
let routes = [].concat(blogs.map(blog => `/blog/${blog.slug}`))

export default {
  mode: 'universal',

  generate: {
    // routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
    routes: routes
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#FF4081' },

  css: [
  ],

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  devModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-NZCR65R  ',
      pageTracking: true,
      scriptURL: '//agatevure.com',
      noscriptURL: '//agatevure.com'
      }
    ],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      routes: routes
    }]
  ],

  axios: {
  },

  build: {
    extractCSS: true,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}
