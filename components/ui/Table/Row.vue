<template>
  <tr role="row" class="ui-table-row">
    <slot />
  </tr>
</template>

<style>
  .ui-table-row:nth-child(2n+2) {
        background-color: #bcceff;
  }
  .ui-table-row:nth-child(2n+1) {
      background-color: #edf7f8;
  }
</style>