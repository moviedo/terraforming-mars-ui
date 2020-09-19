<template>
  <div class="main-container">
    <div class="start-screen">
      <div v-i18n class="start-screen-links">
        <div class="start-screen-header start-screen-link--title">
          <div class="start-screen-title-top">
            <span>TERRAFORMING</span>
          </div>
          <div class="start-screen-title-bottom">
            <span>MARS</span>
          </div>
        </div>

        <a class="start-screen-link start-screen-link--new-game" href="/new-game" v-i18n>New game</a>
        <a class="start-screen-link start-screen-link--solo" href="/solo" v-i18n>Solo challenge</a>
        <a class="start-screen-link start-screen-link--cards-list" href="https://ssimeonoff.github.io/cards-list" v-i18n>Cards list</a>
        <a class="start-screen-link start-screen-link--board-game" href="https://boardgamegeek.com/boardgame/167791/terraforming-mars" v-i18n>Board game</a>
        <a class="start-screen-link start-screen-link--about" href="https://github.com/bafolts/terraforming-mars" v-i18n>About us</a>
        <a class="start-screen-link start-screen-link--changelog" href="https://github.com/bafolts/terraforming-mars/wiki/Changelog" v-i18n>Whats new?</a>
        <a class="start-screen-link start-screen-link--chat" href="https://discord.gg/fWXE53K" target="_blank" rel="noopener noreferrer" v-i18n>Join us on Discord</a>

        <div class="start-screen-header start-screen-link--languages">
          <LanguageSwitcher/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default Vue.extend({
  name: 'StartScreen',
  components: {
    LanguageSwitcher,
  },
});
</script>

<style>
.topmost-start-screen {
  margin: 0px;
  padding-bottom: 40px;
  background: url(../assets/stars.jpg);
  min-height: 100%;
}
</style>

<style lang="less" scoped>
.main-container {
  @media (max-width: 600px) {
    margin: 0;
  }
}

.start-screen {
  width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.start-screen-game-title {
  color: #daab63;
  padding: 40px 0 10px 0;
  margin: 0 auto;
  text-align: center;
}

.start-screen-lang-switch {
  text-align: center;
  margin-bottom: 20px;
}

.start-screen-links {
  margin: 0 auto;
  width: 370px;
  padding-top: 50px;

  @media (max-width: 600px) {
    width: 100%;
  }
}

.start-screen-link {
  text-decoration: none;
  cursor: pointer;
  box-shadow: inset 0 0 0px 1px #333;
  height: 90px;
  line-height: 28px;
  border-radius: 10px;
  color: #eee;
  text-shadow: 0 0 2px black, 0 2px 1px black;
  padding-left: 17px;
  width: 369px;
  height: 90px;
  display: flex;
  margin-bottom: 5px;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 15px;
  flex-direction: column-reverse;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 12px;
  }

  &:hover, &:visited, &:active, &:focus {
    color: #eee;
    text-decoration: none;
  }

  &:hover {
    filter: brightness(120%);
  }
}

.start-screen-header {
  box-shadow: inset 0 0 20px 20px black;
  font-family: Prototype;
  line-height: 90px;
  font-size: 16px;
  width: 369px;
  height: 90px;
  line-height: 30px;
  color: #daab63;
  display: block;
  margin-bottom: 5px;
  margin-left: 5px;
  text-shadow: 0 0 2px black, 0 2px 2px black;
  letter-spacing: 1px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}

.start-screen-title-top {
  text-align: center;
  padding-top: 15px;

  span {
    transform: scaleX(2);
    display: inline-block;
  }
}

.start-screen-title-bottom {
  text-align: center;

  span {
    transform: scaleX(2);
    display: inline-block;
    font-size: 30px;
  }
}

.start-screen-link--title {
  background-image: url(../assets/planet1.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.start-screen-link--new-game {
  background-image: url(../assets/planet2.png);
}

.start-screen-link--solo {
  background-image: url(../assets/planet3.png);
}

.start-screen-link--cards-list {
  background-image: url(../assets/planet4.png);
}

.start-screen-link--board-game {
  background-image: url(../assets/planet5.png);
}

.start-screen-link--about {
  background-image: url(../assets/planet6.png);
}

.start-screen-link--changelog {
  background-image: url(../assets/planet7.png);
}

.start-screen-link--chat {
  background-image: url(../assets/planet8.png);
}

.start-screen-link--languages {
  background-image: url(../assets/planet9.png);
  padding-top: 30px;
}
</style>
