<template>
  <UiContainer>
      <h1>Leagues List</h1>
      {{ pending ? "Loading..." : "" }}
      {{ error && `error.message` }}
      
      <ul class="grid">
        <LeagueCard
          v-for="league in leagues"
          :key="league.id"
          :id="league.id"
          :name="league.name"
          :logo="league.logo"
          :country="league.country"
          :country_flag="league.country_flag"
        />
      </ul>
      <code>
      </code>
  </UiContainer>

</template>

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

<script setup>
  const { data: leagues, pending, error } = await useAsyncData( 'leagues', () => $fetch(`https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=9210ead2b2a6f70e3742c1b053f7d42af8549029070dd524b140ce4e1f247262`), {
    transform: (data) => {
      return data.result.map(league => ({
        id: league.league_key,
        name: league.league_name,
        logo: league.league_logo,
        country: league.country_name,
        country_flag: league.country_logo
      }))}
  });
</script>