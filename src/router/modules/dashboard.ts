import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'ep-odometer',
      order: 1
    },
    component: () => import('~/views/dashboard/index.vue')
  }
]

export default routes
