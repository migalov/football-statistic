// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      apiSecret: process.env.NUXT_API_SECRET,
    }
  },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Ubuntu: true,
        }
    }],
  ],
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true }
})
