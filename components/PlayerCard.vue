<template>
  <li class="player-card">
    <div class="player-card-left">
      <div class="player-card-border">
        <img class="player-card-photo" onError="this.onerror=null; this.src='/unknown-user.webp'" :src="player.player_image" :alt="`${player.player_name} - photo`" />
      </div>
      <div class="player-name-age">
        <span class="name">{{ player.player_name }}</span>
        <span class="age">Age: {{player.player_age ? player.player_age : `-`}}</span>
      </div>
    </div>
    <div class="player-card-right">
      <ul class="player-card-scores">
        <li v-if="player.player_red_cards > 0" class="red-cart"><IconsRedCart />{{ player.player_red_cards }}</li>
        <li v-if="player.player_yellow_cards > 0" class="yellow-cart"><IconsYellowCart />{{ player.player_yellow_cards }}</li>
        <li v-if="player.player_goals > 0" class="goals-cart"><IconsGoal />{{ player.player_goals }}</li>
      </ul>
      <div class="player-other-params">
        <div v-if="player.player_type" :class="`role role--${player.player_type.toLowerCase()}`">{{ player.player_type.replace(/s$/, "") }}</div>
        <div v-if="player.player_rating" class="rating"><IconsRating />{{ player.player_rating }}</div>
        <div v-if="player.player_number" class="number">{{ player.player_number }}</div>
      </div>
    </div>
  </li>
</template>

<script setup>
  defineProps({
    player: Object
  })

    // const handleImageError = e => {
    //   console.log(e.type);
    //   if(e.type === "error") {
    //     e.target.src = '/unknown-user.webp';
    //   }
    // };
</script>

<style lang="scss" scoped>
.player-card {
    position: relative;
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    gap: 3rem;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 80px;
      width: 100%;
      background-color: #501fda;
      z-index: -1;
    }
  }

  .player-card-border {
    position: relative;
    overflow: hidden;
    border-radius: 999px;
    border: 3px solid #501fda;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;

  }

  .player-card-photo {
    border: 3px solid #ffffff;
    border-radius: 999px;
    width: 100%;
    height: 100%;
  }

  .player-card-scores {
    display: flex;
    gap: .75em;
    font-weight: 500;
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 auto;
    color: #fff;

    & > li {
      display: flex;
      align-content: center;
      gap: .5em;
    }
  }

  .player-card-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .player-card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0 0;
  }

  .player-name-age {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    .name {
      font-size: 18px;
      font-weight: 700;
      text-align: center;
    }
  }

  .player-other-params {
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: .5rem;
    position: relative;
    top: .75rem;

    .role {
      padding: .25em .75em;
      border-radius: 999px;
      font-weight: 600;
      text-align: center;
      flex-basis: 100%;
      &--forwards {
        background-color: #FF5449;
        color: #fff;
      }
      &--midfielders {
        background-color: #92FF96;
        color: #003706;
      }
      &--defenders {
        background-color: #EFC24E;
        color: #624100;
      }
      &--goalkeepers {
        background-color: #FF8B49;
        color: #fff;
      }
      &--unknown {
        background-color: #808080;
        color: #fff;
      }
    }

  .rating {
    display: flex;
    align-items: center;
    gap: .5em;
    margin: 0 auto 0 0;
  }

  .number {
    border-radius: 999px;
    border: 2px solid #7000FF;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 auto;
  }
}
</style>