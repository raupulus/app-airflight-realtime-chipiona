import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Map from '../views/Map.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Map,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
