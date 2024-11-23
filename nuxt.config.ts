// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "RU_Instagramm"
    }
  },

  routeRules: {
    '/': { swr: true }
  },

  modules: ['@nuxtjs/tailwindcss']
})