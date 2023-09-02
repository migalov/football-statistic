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
          <div class="team-name">
            <img height="15" :src="s.team_logo" alt="">
            <span>{{ s.standing_team }}</span>
          </div>
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
  const { data: standings, pending, error } = await useAsyncData( 'standings', () => $fetch(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${id}&APIkey=9210ead2b2a6f70e3742c1b053f7d42af8549029070dd524b140ce4e1f247262`), {
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