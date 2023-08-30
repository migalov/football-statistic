<script setup lang="ts">
  definePageMeta({
    layout: "custom"
  });
  useHead({
      title: "Custom page",
      meta: [
        {
          name: "description",
          content: "Custom page - This is branch for learning"
        }
      ]
  });
</script>

<template>
  <div class="Custom page">
    Custom page
  </div>
</template>