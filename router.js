import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./src/pages/Main'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemonDetails',
    component: () => import('./src/components/PokemonDetails'),
    props: true,
  },
  {
    path: '/term-of-use',
    component: () => import('./src/pages/Terms'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
