// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true, 
    strict: true     
  },
  nitro: {
    experimental: {
      tasks: true
    }
  },
  hub: {
    db: 'postgresql'
  },
  modules: [
    '@nuxt/ui',
    '@nuxthub/core',
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

})
