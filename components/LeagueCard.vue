<template>
  <li class="league-card">
    <a class="league-card__link" :href="`/leagues/${id}`"><h2 class="league-card__title">{{ name }}</h2></a>
    <div class="league-country">
      <img width="30" class="league-country__flag" :src="country_flag">
      <h3 class="league-country__title">{{ country }}</h3>
    </div>
    <img class="league-card__logo" :src="logo" :alt="`Logotype - ${name}`">
  </li>
</template>

<script setup>
  const props = defineProps({
    id: Number,
    name: String,
    logo: String,
    country: String,
    country_flag: String
  })
</script>

<style lang="scss" scoped>
  .league-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    
    background-color: #e4daff;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    transition: ease .5s;

    &:hover {
      opacity: .7;
    }
  }
  .league-country {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .league-card__title {
    font-size: 1.3rem;
    font-weight: 700;
    text-overflow: ellip
  }

  .league-card__link {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
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