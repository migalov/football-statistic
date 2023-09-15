<template>
    <Selectdropdownsearch
      :options="countries"
      v-model="selectedCountry"
      :placeholder="`Select country`"
    />
    <UiPagination
      v-if="!pending"
       @change="refetch"
       :totalPages="getTotalPages"
       :currentPage="currentPage"
    />
    
  <UiPreloader v-if="pending" />
  <UiError v-if="filteredLeagues.length == 0 && !pending">No data found for your filter</UiError>
  <UiError v-if="error && !pending">Error loading</UiError>
  <ul v-if="!pending" class="grid">
    <LeagueCard
      v-for="league in filteredLeagues"
      :key="league.id"
      :id="league.id"
      :name="league.name"
      :logo="league.logo"
      :country="league.country"
      :country_flag="league.country_flag"
    />
  </ul>
</template>

<script setup>
  const currentPage = ref(1); // Текущая страница
  const step = ref(20); // Кол-во элементов в страниц
  const selectedCountry = ref(null); // Выбираем страну

  const config = useRuntimeConfig(),
      API_URL = config.public.apiBase,
      API_TOKEN = config.apiSecret;

  // Получаем список футбольных лиг
  const { data: leagues, pending, error } = await useFetch(`${API_URL}?met=Leagues&APIkey=${API_TOKEN}`, {
    transform: (data) => {
      let i = 0;
      return data.result.map(league => ({
        number: i++,
        id: league.league_key,
        name: league.league_name,
        logo: league.league_logo,
        country: league.country_name,
        country_flag: league.country_logo
      })).filter(league => {
        if (!selectedCountry.value) {
          return league
        }
        else {
          return league.country === selectedCountry.value
        }
      })
    },
    watch: [selectedCountry]
  });

  const totalPages = ref(Math.ceil(leagues.value.length / step.value));

  const refetch = pageNumber => {
    currentPage.value = pageNumber;
  }

  const filteredLeagues = computed(() =>
      leagues.value
        .filter(league => (league.number >= 1 + ((currentPage.value - 1) * step.value)) && (league.number <= (currentPage.value * step.value))));

  const getTotalPages = computed(() => {

    currentPage.value = 1;

    if (!selectedCountry.value) {
      return totalPages.value;
    }

    else {
      return Math.ceil(filteredLeagues.value.length / step.value)
    }

  })

  // Получаем список стран-участников
  const { data: countries } = await useFetch(`${API_URL}?met=Leagues&APIkey=${API_TOKEN}`, {
    transform: (data) => {
      return data.result.map(item => ({
        icon: item.country_logo,
        title: item.country_name 
      })).filter((country, index, self) => self.findIndex((c) => c.title === country.title) === index)
    }
  });



</script>


<style lang="scss">
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    @media (width > 568px) {
      grid-template-columns: repeat(2, calc(50% - 0.5rem));
    }
    @media (width > 768px) {
      grid-template-columns: repeat(3, calc(33.3333% - 0.7rem));
    }
    @media (width > 992px) {
      grid-template-columns: repeat(4, calc(25% - 0.8rem));;
    }
    @media (width > 1200px) {
      grid-template-columns: repeat(5, calc(20% - 0.8rem));
    }
  }
</style>