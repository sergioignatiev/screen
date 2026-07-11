// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    './assets/css/main.css'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-schema-org'
  ],

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Screen'
    }
  }
})