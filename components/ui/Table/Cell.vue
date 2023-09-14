<template>
  <td role="cell" :class="`ui-table-cell`" :aria-label="title">
    <slot />
  </td>
</template>

<script setup>
  defineProps({
    title: String
  })
</script>

<style lang="scss">
  .ui-table-cell {
    text-align: right;
    vertical-align: middle;
    padding: 1rem;
    @media (width > 768px) {
      text-align: center;
    }
  }
</style>