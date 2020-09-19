<template>
  <div class="language-switcher">
    <button v-for="lang in languages"
        :key="lang.id"
        type="button"
        :aria-label="lang.label"
        :class="'language-icon language-icon--'+lang.id"
        :title="lang.title"
        @click="switchLanguageTo(lang.id, true)">
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { LANGUAGES } from '@/services/Constants';
import PreferencesManager from '@/services/PreferencesManager';

export default Vue.extend({
  name: 'LanguageSwitcher',
  data() {
    return {
      languages: LANGUAGES,
    };
  },
  methods: {
    switchLanguageTo(langId: string, reloadThePage = false) {
      PreferencesManager.saveValue('lang', langId);
      if (reloadThePage) window.location.reload();
    },
  },
});
</script>

<style lang="less" scoped>
.language-switcher {
  text-align: center;

  @media (max-width: 840px) {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }

  .language-icon {
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 840px) {
      margin-left: 0;
    }
  }
}

.language-icon {
  width:44px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  background: url(../assets/flags_responsive.png) no-repeat;
  background-size:100%;
  box-shadow: 0 2px 2px black;
}

.language-icon--en {
  background-position: 0 92.561983%;
}

.language-icon--de {
  background-position: 0 22.31405%;
}

.language-icon--fr {
  background-position: 0 29.752066%;
}

.language-icon--ru {
  background-position: 0 75.206612%;
}

.language-icon--cn {
  background-position: 0 19.005%;
}
</style>
