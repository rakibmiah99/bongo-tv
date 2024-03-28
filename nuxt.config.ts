// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'vue3-carousel-nuxt',
    '@nuxt/image',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
      '~/assets/css/tailwind.css',
      '~/assets/css/style.css',
  ],
  colorMode: {
    preference: 'light'
  }
})
