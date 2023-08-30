export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook("app:created", () => {
    console.log("Hello from plugin");
  })
})