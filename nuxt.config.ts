// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
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
