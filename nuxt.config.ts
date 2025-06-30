// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ["~/assets/global.css"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },

  },

  modules: ["@nuxtjs/device"],
})