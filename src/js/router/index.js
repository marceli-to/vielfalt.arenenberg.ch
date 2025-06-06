import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/js/views/Home.vue';
import Login from '@/js/views/Login.vue';
import Video from '@/js/views/Video.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
