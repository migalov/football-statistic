<template>
  <td :class="`ui-table-cell`">
    <slot />
  </td>
</template>

<script setup>
  // defineProps({
  //   param: String
  // })
</script>

<style lang="scss">
  .ui-table-cell {
    text-align: center;
      vertical-align: middle;
      padding: 1rem;
      
      // &:last-child {
      //    font-size: 0.95em;
      //    line-height: 1.4;
      // }
  }
</style>