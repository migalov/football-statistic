<template>
  <UiContainer>
    <h1>Teams List</h1>
    <table>
      <UiTableHeader>
          <UiTableHeaderCell @click="sortList('standing_place')">Pos. ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_team')" width="15%">Team ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_W')">W ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_D')">D ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_L')">L ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_W')">D ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_A')">A ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_GD')">GD ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('standing_PTS')">Pts. ↕</UiTableHeaderCell>
      </UiTableHeader>
      <UiTableBody>
        <UiTableRow v-for="(team, index) in standings" :key="index">
          <UiTableCell :data-label="`Position`">{{ team?.position }}</UiTableCell>
          <UiTableCell :data-label="`Team`">
            <div class="team-name">
              <img height="25" :src="team?.logo" :alt="`Team - ${team?.title}`">
              <span>{{ team?.title }}</span>
            </div>
          </UiTableCell>
          <UiTableCell :data-label="`W`">{{ team?.W }}</UiTableCell>
          <UiTableCell :data-label="`D`">{{ team?.D }}</UiTableCell>
          <UiTableCell :data-label="`L`">{{ team?.L }}</UiTableCell>
          <UiTableCell :data-label="`W`">{{ team?.W }}</UiTableCell>
          <UiTableCell :data-label="`A`">{{ team?.A }}</UiTableCell>
          <UiTableCell :data-label="`GD`">{{ team?.GD }}</UiTableCell>
          <UiTableCell :data-label="`Pts.`">{{ team?.PTS }}</UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </table>
  </UiContainer>
</template>

<script setup>
  const { id } = useRoute().params;
  const { data: standings, pending, error } = await useFetch(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${id}&APIkey=9210ead2b2a6f70e3742c1b053f7d42af8549029070dd524b140ce4e1f247262`, {
    transform: (data) => {
      return data.result["total"].map(team => ({
        position: team.standing_place,
        title: team.standing_team,
        logo: team.team_logo,
        W: team.standing_W,
        D: team.standing_D,
        L: team.standing_L,
        A: team.standing_A,
        GD: team.standing_GD,
        PTS: team.standing_PTS,
      }))}
  });
  const sortedbyASC = ref(true);
  const sortedTeams = ref(standings);
  
  const sortList = (sortBy) => {
    if (sortedbyASC.value) {
      sortedTeams.value.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
      sortedbyASC.value = false;
      console.log(e.target);
    } else {
      sortedTeams.value.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
      sortedbyASC.value = true;
    }
  };
  

</script>

<style>
  .team-name {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: .5rem;
    @media (width > 768px) {
      justify-content: center;
    }
  }
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  table th,
  table td {
    padding: .625em .3em;
    text-align: center;
  }

  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }
    
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    
    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }
    
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .8em;
      text-align: right;
    }
    
    table td::before {
      /*
      * data-label has no advantage, it won't be read inside a table
      content: attr(data-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    table td:last-child {
      border-bottom: 0;
    }
  }
</style>