<template>
  <div class="main-container">
    <div id="solo-game">
      <h1><span v-i18n>Terraforming Mars</span> — <span v-i18n>Create New Game</span></h1>

      <div class="create-game-form create-game--block">
        <div class="container create-game-options">
          <PlayerInput :player="newPlayer" :show-handicap="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Color } from '@/constants/Colors';

import PlayerInput from '@/components/PlayerInput.vue';

export default Vue.extend({
  components: {
    PlayerInput,
  },
  data() {
    return {
      newPlayer: {
        index: 0,
        name: 'You',
        color: Color.RED,
        beginner: false,
      } as TR.NewPlayerModel,
    };
  },
});
</script>

<style lang="less" scoped>
.create-game-form {
  margin-bottom: 25px;
  max-width: 1002px;
  padding-top: 5px;
}
.create-game--block {
  background: #202020;
  padding: 25px;
}
</style>
