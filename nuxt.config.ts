// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  }
})
