// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
      // componentIslands: true
  },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    "@sidebase/nuxt-auth",
  ],
  auth:{
    baseURL: 'api/auth',//process.env.API_BASE_URL,
    provider: {      
      type: 'authjs',      
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
      '~/assets/css/vendor/video_js.css',
      '~/assets/css/vendor/plyr.css',
      '~/assets/css/tailwind.css',
      '~/assets/css/style.css',
  ],
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_BASE_URL
    }
  }
})