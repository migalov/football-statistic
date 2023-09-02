<template>
  <h1 v-if="tag == `h1`" class="ui-title ui-title-h1" :class="class"><slot /></h1>
  <h2 v-if="tag == `h2`" class="ui-title ui-title-h2" :class="class"><slot /></h2>
</template>

<script setup>
  const props = defineProps({
    tag: "h1" | "h2",
    class: String
  })
</script>

<style lang="scss" scoped>
  .ui-title {
    font-weight: 700;
    margin: 0 0 1em;
  }
  .ui-title-h1 {
    font-size: 2rem;
    
  }

  .ui-title-h2 {
    font-size: 1.8rem;
  }
</style>