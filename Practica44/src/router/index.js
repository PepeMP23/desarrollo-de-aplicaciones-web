import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Somos from '../views/Somos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Inicio
  },
  {
    path: '/somos',
    name: 'somos',
    component: Somos
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
})

export default router
