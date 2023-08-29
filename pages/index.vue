<script setup lang="ts">
  // const { $sayHello } = useNuxtApp()
  // console.log(useNuxtApp());
  // $sayHello(`Michel Migalov`);
  definePageMeta({
    middleware: 'auth'
  })

</script>

<template>
  <div>
    <h1>Hi, man!</h1>
    <img src="2.jpg" alt="" srcset="">
    <IconsBell />
  </div>
</template>