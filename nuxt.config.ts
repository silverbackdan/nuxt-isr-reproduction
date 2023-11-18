// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/isr': { isr: 30 },
    '/prerendered': { prerender: true }
  }
})
