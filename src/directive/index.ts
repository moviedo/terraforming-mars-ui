import Vue from 'vue';

import { translateTextNode } from './i18n';

Vue.directive('i18n', {
  inserted: translateTextNode,
  componentUpdated: translateTextNode,
});
