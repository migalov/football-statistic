<template>
  <UiContainer>
    <UiTable>
      <UiTableHeader>
        <UiTableHeaderCell>Pos.</UiTableHeaderCell>
        <UiTableHeaderCell>Team</UiTableHeaderCell>
        <UiTableHeaderCell>W</UiTableHeaderCell>
        <UiTableHeaderCell>D</UiTableHeaderCell>
        <UiTableHeaderCell>L</UiTableHeaderCell>
        <UiTableHeaderCell>F</UiTableHeaderCell>
        <UiTableHeaderCell>A</UiTableHeaderCell>
        <UiTableHeaderCell>GD</UiTableHeaderCell>
        <UiTableHeaderCell>Pts</UiTableHeaderCell>
      </UiTableHeader>
      <UiTableRow v-for="s in standings">
        <UiTableCell>{{ s.standing_place }}</UiTableCell>
        <UiTableCell>
          <NuxtLink :to="`/teams/${s.team_key}`" class="team-name">
            <img height="15" :src="s.team_logo" alt="">
            <span>{{ s.standing_team }}</span>
          </NuxtLink>
        </UiTableCell>
        <UiTableCell>{{ s.standing_W }}</UiTableCell>
        <UiTableCell>{{ s.standing_D }}</UiTableCell>
        <UiTableCell>{{ s.standing_L }}</UiTableCell>
        <UiTableCell>{{ s.standing_W }}</UiTableCell>
        <UiTableCell>{{ s.standing_A }}</UiTableCell>
        <UiTableCell>{{ s.standing_GD }}</UiTableCell>
        <UiTableCell>{{ s.standing_PTS }}</UiTableCell>
      </UiTableRow>
    </UiTable>
  </UiContainer>
</template>

<script setup>
  const { id } = useRoute().params;
  const { data: standings, pending, error } = await useAsyncData( 'standings', () => $fetch(`${process.env.API_URL}?&met=Standings&leagueId=${id}&APIkey=${process.env.API_TOKEN}`), {
    transform: (data) => {
      return data.result["total"].map(league => league)}
      // return data.result.map(league => league)}
  });
</script>

<style>
  .team-name {
    display: flex;
    gap: .5rem;
  }
</style>