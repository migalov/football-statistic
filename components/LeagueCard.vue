<template>
  <li class="league-card">
    <a :href="`/leagues/${id}`"><h2 class="league-card__title">{{ name }}</h2></a>
    <div class="league-country">
      <img v-if="country_flag" width="30" class="league-country__flag" :src="country_flag">
      <h3 class="league-country__title">{{ country }}</h3>
    </div>
    <a :href="`/leagues/${id}`"><img v-if="logo" class="league-card__logo" :src="logo" :alt="`Logotype ${name}`"></a>
  </li>
</template>

<script setup>
  defineProps({
    id: Number,
    name: String,
    logo: String,
    country: String,
    country_flag: String
  })
</script>

<style>
  .league-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    
    background-color: #ffefa9;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
  .league-country {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  /* .league-country__flag {
    width: 15px;
  } */

  .league-card__title {
    font-size: 1.3rem;
    font-weight: 700;
    text-overflow: ellipsis;
  }

  .league-country {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
    }
  }

  .league-card__logo {
    display: block;
    margin: 0 auto;
    max-width: 50%;
  }
</style>