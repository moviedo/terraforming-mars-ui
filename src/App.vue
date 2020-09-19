<template>
  <div id="app" :class="classObject">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    classObject() {
      return {
        'topmost-start-screen': this.$route.name === 'Home',
      };
    },
  },
});
</script>

<style lang="scss">
@import '~spectre.css/src/spectre.scss';
@import '~spectre.css/src/spectre-exp.scss';
@import '~spectre.css/src/spectre-icons.scss';
</style>

<style lang="less">
@import (inline) "~dialog-polyfill/dialog-polyfill.css";
html, body {
  height: 100%;
  margin: 0px;
}

.capitalized {
  text-transform: capitalize;
}

.main-container {
  margin: 0 60px;
}

.hidden {
  display: none !important;
}

a:link {
  color: #ddd;
}

a:visited {
  color: #ccc;
}

a:hover {
  color: #fff;
}

a:active {
  color: #ddd;
}

@font-face {
  font-family: Prototype;
  src: url(./assets/Prototype.ttf);
}

body {
  background: #303030;
  color: #dddddd;
  font-family: Ubuntu, Sans;
  font-size: 23px;
}

h1 {
  color: #ddd;
  font-family: Ubuntu, Sans;
  filter: drop-shadow(4px 4px 4px black);
  text-shadow: -1px -1px 1px #aaaa,1px 1px 1px #333a;
  padding: 1px 15px;
  border-radius: 8px;
}

h2 {
  color: #ddd;
  font-family: Ubuntu, Sans;
  filter: drop-shadow(4px 4px 4px black);
  text-shadow: -1px -1px 6px #aaa4;
}

input[type=radio]:checked + label {
  border: 2px solid rgb(137,137,137);
  box-shadow: inset 0 0 0 3px rgb(68,68,68);
  filter: brightness(120%)  drop-shadow(0 0 5px white);
  transform: translate(0,2px);
}
.filterDiv {
  font-size: 17px !important;
}

.is-action {
  color: #5755d9;
  cursor: pointer;
}
</style>
