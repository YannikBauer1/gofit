// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-11-17",
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'vg-guest-booking',
    },
  },
  nitro: {
    devProxy: {
      host: 'localhost',
    },
    preset: 'netlify'
  },

})