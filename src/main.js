import './assets/main.css';
import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomeView from '@/pages/HomeView.vue';
import Favorites from '@/pages/FavoritesView.vue';

import App from './App.vue';

const routes = [
  { path: '/', name: 'Homeview', component: HomeView },
  { path: '/favorites', name: 'FavoritesView', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
