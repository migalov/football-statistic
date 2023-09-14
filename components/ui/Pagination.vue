<template>
  <div class="pagination">
    <button class="pagination__btn" @click="$emit('change', currentPage = currentPage - 1)" :disabled="currentPage <= 1">&lt;</button>
    <button
       class="pagination__btn"
      :class="{'active': currentPage == pageNumber}"
      @click="$emit('change', pageNumber)"
      v-for="pageNumber in totalPages"
      :key="pageNumber">
      {{ pageNumber }} 
    </button>
    <button class="pagination__btn" @click="$emit('change', currentPage = currentPage + 1)" :disabled="currentPage >= totalPages">&gt;</button>
  </div>
</template>

<script setup>
  defineProps({
    totalPages: Number,
    currentPage: Number,
  });
  defineEmits(["change"]);
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .5em;
    padding: 1rem 0;
  }
  .pagination__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
    border: none;
    outline: none;
    font-family: "Ubuntu", "Helvetica", sans-serif;

    &.active {
      color: #ffffff;
      background: #23adad;
      font-weight: 600;
      outline: 1px solid #23adad;
    }

    &:hover {
      background: #23adad6e;
      outline: 1px solid #23adad;
    }
  }
</style>