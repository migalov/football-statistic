<template>
  <th class="ui-table-header-cell" role="columnheader">
    <slot />
  </th>
</template>

<style scoped lang="scss">
  .ui-table-header-cell {
    background-color: rgb(63, 146, 255);
    font-weight: 300;
    padding: 1rem;
    font-weight: 700;
    &:hover {
      background-color: rgb(23, 97, 194);
    }
  }
</style>