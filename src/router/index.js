import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  }
  */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
