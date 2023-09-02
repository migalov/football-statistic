<template>
  <li class="player">
    <div class="player-left">
      <picture>
        <source srcset="/media/cc0-images/surfer-240-200.jpg" media="(orientation: portrait)" />
        <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="" />
        <img src="/avatar.jpg" alt="" />
      </picture>
      <img v-if="player.player_image" class="player__photo" width="100" :src="player.player_image" />
      <img v-if="player.player_image" class="player__photo" width="100" :src="player.player_image" />
      <div v-if="player.player_number" class="player__number">{{ player.player_number }}</div>
    </div>
      <div class="player-right">
          
        <ul class="player-information-list">
          <li><h2 class="player__name">{{ player.player_name }}</h2></li>
          <li>⭐ {{ player.player_rating }}</li>
        </ul>
      </div>
      <!-- <figcaption class="player-information">
        <div class="player__number">
          {{ player.player_number }}
        </div>
        <h3 class="text-sky-500 dark:text-sky-400">
          {{ player.player_name }}, Age {{ player.player_age }}
        </h3>
        <ul class="player-information-list">
          <li>Rating: {{ player.player_rating }}</li>
          <li>Match played:</li>
          <li>Goals: </li>
        </ul>
      </figcaption> -->
  </li>
</template>

<script setup>
  defineProps({
    player: Object
  })
</script>

<style>
  .player {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    background-color: #ffd7a3;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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