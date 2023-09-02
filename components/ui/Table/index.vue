<template>
  <table class="ui-table">
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<style>
  .ui-table {
    border: 1px solid #398B93;
    border-radius: 5px;
    box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    width: 100%;
  }
</style>