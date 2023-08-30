<script setup>
    const { data: competitions, pending } = await useAsyncData("competitions", () => $fetch("/api/competitions"));

    const refresh = () => refreshNuxtData("competitions");
</script>

<template>
  <div>
    <Head>
      <Title>Competitions list</Title>
    </Head>
    <code>{{ pending ? "Loading..." : competitions }}</code>
    <button @click="refresh">Refresh</button>
  </div>
</template>