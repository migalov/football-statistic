<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;
    max-width: 1000px;
}
</style>