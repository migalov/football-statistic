export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  console.log(from);
  // const isLoggedIn = false;
  // const isAdmin = false;

  // isLoggedIn ? navigateTo("/login") : navigateTo(to.fullPath) 

})