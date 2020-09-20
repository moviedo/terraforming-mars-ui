import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import StartScreen from '@/views/StartScreen.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: StartScreen,
  },
  {
    path: '/solo',
    name: 'solo',
    component: () => import(/* webpackChunkName: "sologameform" */ '../views/SoloGameForm.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
