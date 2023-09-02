<template>
  <UiContainer>
      <div>
        <div>
          <img :src="team[0].logo" />
          <h1>{{ team[0].name }}</h1>
        </div>
        <div>
          <h2>Players</h2>
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
    @media (width > 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<script setup>
  const { id } = useRoute().params;
  const { data: team } = await useAsyncData( 'team', () => $fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${id}&APIkey=9210ead2b2a6f70e3742c1b053f7d42af8549029070dd524b140ce4e1f247262`), {
    transform: (data) => {
      return data.result.map(team => ({
        id: team.team_key,
        name: team.team_name,
        logo: team.team_logo,
        players: team.players
      }))}
  });
</script>