<template>
  <Head>
    <Title>Teams List</Title>
  </Head>
  <UiContainer>
    <h1>Teams List</h1>
    <UiPreloader v-if="pending" />
    <UiError v-if="!standings">
      <p>No data available</p>
    </UiError>
    <UiError v-if="error && !pending">Error loading</UiError>
    <table v-if="!pending">
      <UiTableHeader>
          <UiTableHeaderCell @click="sortList('position')">Pos. ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('title')" width="15%">Team ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('W')">W ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('D')">D ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('L')">L ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('W')">D ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('A')">A ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('GD')">GD ↕</UiTableHeaderCell>
          <UiTableHeaderCell @click="sortList('PTS')">Pts. ↕</UiTableHeaderCell>
      </UiTableHeader>
      <UiTableBody>
        <UiTableRow v-for="team in standings" :key="team.key">
          <UiTableCell :data-label="`Position`">{{ team?.position }}</UiTableCell>
          <UiTableCell :data-label="`Team`">
            <div class="team-name">
              <NuxtLink :to="`/teams/${team.key}`" class="team-name">
                <img height="25" :src="team?.logo" :alt="`Team - ${team?.title}`">
                <span>{{ team?.title }}</span>
              </NuxtLink>
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
  const config = useRuntimeConfig(),
      API_URL = config.public.apiBase,
      API_TOKEN = config.apiSecret;
  const { data: standings, pending, error } = await useFetch(`${API_URL}?&met=Standings&leagueId=${id}&APIkey=${API_TOKEN}`, {
    transform: (data) => {
      return data.result["total"].map(team => ({
        key: team.team_key,
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
    } else {
      sortedTeams.value.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
      sortedbyASC.value = true;
    }
  };
  

</script>
<style scoped>
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