<template>
  <li class="player">
    <div class="player-left">
      <img class="player__photo" width="100" :src="player.player_image" @error="handleImageError" />
      <div v-if="player.player_number" class="player__number">{{ player.player_number }}</div>
    </div>
      <div class="player-right">
        <ul class="player-information-list">
          <li><h2 class="player__name">{{ player.player_name }}</h2></li>
          <li v-if="player.player_rating">⭐ {{ player.player_rating }}</li>
          <li v-if="player.player_goals > 1">Goals: {{ player.player_goals }}</li>
        </ul>
      </div>
  </li>
</template>

<script setup>
  defineProps({
    player: Object
  });
  const handleImageError = e => {
    console.log(e.target.src);
    e.target.src = '/unknown-user.webp';
  };
</script>

<style>
  .player {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    background-color: var(--color-second);
    box-shadow: var(--default-shadow);
    border-radius: 1rem;
    padding: 1rem;
  }
  .player-left {
    position: relative;
  }
  .player__name {
    font-weight: 700;
  }

  .player-information {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .player-information-list {
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
  .player__photo {
    border-radius: 999px;
  }
  .player__number {
    position: absolute;
    top: 64px;
    left: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid #ff6464;
    border-radius: 25px;
    background-color: #ff9838;
    color: #492300;
    width: 40px;
    height: 40px;

    font-weight: 700;
  }
</style>