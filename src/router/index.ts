import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
