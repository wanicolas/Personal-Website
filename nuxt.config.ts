// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  colorMode: {
    classSuffix: "",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-08-20",
});
