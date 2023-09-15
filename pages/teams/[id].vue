<template>
    <Head>
      <Title>{{team[0].name}} - Team</Title>
    </Head>
  <UiContainer>
      <UiPreloader v-if="pending" />
      <section v-if="!pending" class="team">
        <div class="team__header">
          <img :src="team[0].logo" />
          <h1>{{ team[0].name }}</h1>
        </div>
        <div>
          <ul class="grid-players">
            <PlayerCard v-for="(player, index) in team[0]?.players" :key="index" :player="player" />
          </ul>
        </div>
      </section>
  </UiContainer>
</template>

<style lang="scss" scoped>
  .grid-players {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    @media (width > 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (width > 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .team__header {
    text-align: center;
  }
</style>

<script setup> 
  const { id } = useRoute().params;
  const config = useRuntimeConfig(),
      API_URL = config.public.apiBase,
      API_TOKEN = config.public.apiSecret;
  const { data: team, pending, error } = await useAsyncData('team', () => $fetch(`${API_URL}?&met=Teams&teamId=${id}&APIkey=${API_TOKEN}`), {
    transform: (data) => {
      return data.result.map(team => ({
        id: team.team_key,
        name: team.team_name,
        logo: team.team_logo,
        players: team.players
      }))}
  });
</script>