<template>
  <Header />
  <main>
    <slot />
  </main>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>