// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Learning Nuxt 3",
      meta: [
        {
          name: "description",
          content: "This is branch for learning"
        }
      ]
    }
  },
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ["~/assets/main.scss"],
  modules: [
    "@nuxt/content",
    "@pinia/nuxt"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  ssr: false
})
