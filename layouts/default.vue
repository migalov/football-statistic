<template>
  <div class="page">
    <header>
      <Logo />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
  header {
    text-align: center;
    padding: 2rem 0;
  }
  .page {
      padding: 2rem;
  }
</style>