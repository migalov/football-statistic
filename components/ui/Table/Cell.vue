<template>
  <td :class="`ui-table-cell`">
    <slot />
  </td>
</template>

<style lang="scss">
  .ui-table-cell {
    text-align: center;
      vertical-align: middle;
      padding: 1rem;
  }
</style>