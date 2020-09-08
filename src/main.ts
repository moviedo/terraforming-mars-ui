import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './directive';

// preload translations
fetch('/translations.json')
  .then((response) => response.json())
  .then((jsonData) => {
    // eslint-disable-next-line
    window.TM_translations = jsonData;

    Vue.config.productionTip = false;

    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  });
