import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import login from '@/views/login'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },

  {
    path: '/animation',
    name: 'animation',
    component: () => import('@/views/animation.vue')
  },
  {
    path: '/vritualTree',
    name: 'vritualTree',
    component: () => import('@/views/vritualTree.vue')
  },
  {
    path: '/lodash',
    name: 'lodash',
    component: () => import('@/views/lodash.tsx')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
