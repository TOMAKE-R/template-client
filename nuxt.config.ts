// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TOMAKE Template Client',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      htmlAttrs: {
        lang: 'cs',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    shim: false,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://localhost:8080/graphql',
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },
  googleFonts: {
    families: {
      'Source Code Pro': {
        wght: [400],
      },
    },
  },
});
