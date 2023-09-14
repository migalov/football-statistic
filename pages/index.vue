<template>
  
  <div>
    <Selectdropdownsearch
      :options="countries"
      v-model="selectedItem"
    />
    <h1>Selected mountains: {{ selectedItem }}</h1>
  </div>
</template>

<script setup>
  import vSelect from "vue-select";
  const { data: countries } = await useFetch('https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=9210ead2b2a6f70e3742c1b053f7d42af8549029070dd524b140ce4e1f247262', {
    transform: (data) => {
      return data.result.map(item => ({
        icon: item.country_logo,
        title: item.country_name 
      })).filter((country, index, self) => self.findIndex((c) => c.title === country.title) === index)
    }
  });
  const selectedItem = ref(null);
</script>
