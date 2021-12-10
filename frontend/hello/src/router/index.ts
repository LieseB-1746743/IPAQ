import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/form/',
    name: 'home',
    component: () => import('@/views/Form.vue'),
  },
  {
    path: '/contact/',
    name: 'contact',
  },
  {
    path: '/help/',
    name: 'help',
  },
  {
    path: '/instellingen/',
    name: 'instellingen',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
