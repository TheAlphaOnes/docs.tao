// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: [
    "~/assets/global.css",
    "highlight.js/styles/github-dark.css"
  ],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },

  },

  modules: ["@nuxtjs/device"],
})
