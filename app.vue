<script setup>
  const { data: products } = await useFetch(`https://fakestoreapi.com/`)
</script>

<template>
  <NuxtLayout>
    <header></header>
    <NuxtPage />
  </NuxtLayout>
</template>
