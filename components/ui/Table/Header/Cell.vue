<template>
  <th class="ui-table-header-cell">
    <slot />
  </th>
</template>

<style>
  .ui-table-header-cell { 
    background-color: var(--color-primary);
    padding: 1rem;
    font-weight: 700;
  }
</style>