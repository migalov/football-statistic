<template>
  <UiContainer>
      <div class="team">
        <div class="team-left">
          <img class="team__logo" :src="team[0].logo" />
          <UiTitle :tag="'h1'" :class="`team__title`">{{ team[0].name }}</UiTitle>
          <div class="team-filters">
          </div>
        </div>
        <div class="team-right">
          <UiTitle :tag="'h2'">Players</UiTitle>
          <ul class="grid-players">
            <PlayerCard v-for="player in team[0].players" :player="player" />
          </ul>
        </div>
      </div>
      <code>
      </code>
  </UiContainer>
</template>

<style>
  .team {
    display: grid;
    gap: 2rem;
    @media (width > 768px) {
      grid-template-columns: 1fr 2fr;
    }
    @media (width > 992px) {
      grid-template-columns: 2fr 5fr;
    }
  }

  .team__logo {
    display: block;
    margin: 0 auto 1rem;
  }

  .team__title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  .team-filters {
    margin: 1rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
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
</style>

<script setup>
  const { id } = useRoute().params;
  const { data: team } = await useAsyncData( 'team', () => $fetch(`${process.env.API_URL}?&met=Teams&teamId=${id}&APIkey=${process.env.API_TOKEN}?`), {
    transform: (data) => {
      return data.result.map(team => ({
        id: team.team_key,
        name: team.team_name,
        logo: team.team_logo,
        players: team.players
      }))}
  });
</script>