<template>
  <div class="create-game-solo-player form-group">
    <div>
      <input type="text"
        name="name"
        class="form-input form-inline create-game-player-name"
        placeholder="Your name"
        v-model="player.name" />
    </div>
    <div>
      <legend class="form-label form-inline create-game-color-label" v-i18n>Color:</legend>
      <span class="create-game-colors-cont">
        <label class="form-radio form-inline create-game-color"
            v-for="color in colors"
            :key="color">
          <input type="radio"
            :value="color.toLowerCase()"
            :name="'playerColor' + player.index"
            v-model="player.color" />
          <i class="form-icon" aria-hidden="true"></i>
          <div aria-hidden="true" :class="'board-cube board-cube--'+color"></div>
        </label>
      </span>
    </div>
    <div>
      <label class="form-switch form-inline">
        <input type="checkbox" v-model="player.beginner">
        <i class="form-icon" aria-hidden="true"></i> <span v-i18n>Beginner?</span>
      </label>

      <label v-if="showHandicap" class="form-label">
        <input type="number"
          class="form-input form-inline player-handicap"
          value="0"
          min="0"
          max="10"
          v-model="player.handicap" />
        <span v-i18n>TR Boost</span>&nbsp;<a href="https://github.com/bafolts/terraforming-mars/wiki/Variants#tr-boost" class="tooltip" target="_blank" rel="noopener noreferrer">&#9432;</a>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getColors } from '@/constants/Colors';

export default Vue.extend({
  props: {
    player: {
      type: Object,
      required: true,
    },
    showHandicap: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      colors: getColors() as Array<string>,
    };
  },
});
</script>

<style lang="less" scoped>
.board-cube {
  position: absolute;
  margin: 4px 20px 0 0;
}

.create-game-player-name {
  color: #020202;
  max-width: 430px
}

.create-game-colors-cont {
  margin-top: 9px;
  display: inline-block;
  margin-left: 70px;
}

.create-game-color-label {
  margin-top: 6px;
  position: absolute;
}

.create-game-color {
  padding: 0px 50px 0px 26px;
}
.create-game-solo-player {
  margin-bottom: 20px;
}
.create-game-color-label {
  margin-top: 6px;
  position: absolute;
}
.player-handicap {
  width: 80px;
  margin-right: 10px;
}
</style>
