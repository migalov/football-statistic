<script setup lang="ts">
  // const { $sayHello } = useNuxtApp()
  // console.log(useNuxtApp());
  // $sayHello(`Michel Migalov`);
  // definePageMeta({
  //   middleware: 'auth'
  // })
  // const counter = useState('counter', () => Math.round(Math.random() * 1000))
  const counter = useCounter();
</script>

<template>
  <!-- <div>
    <h1>Hi, man!</h1>
    <img src="2.jpg" alt="" srcset="">
    <IconsBell />
    <ContentDoc />
  </div> -->
  <div id="main">
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
  <Counter id="counter" />
</template>