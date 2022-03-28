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
  // {
  //   path: '/demo',
  //   name: 'demo',
  //   component: () => import('@/views/demo.vue')
  // },
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
    component: () => import('@/views/lodash.vue')
  },
  // {
  //   path: '/video2',
  //   name: 'video',
  //   component: () => import('@/views/updateFile.vue')
  // }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
