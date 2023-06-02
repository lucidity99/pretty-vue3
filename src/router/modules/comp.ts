import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/comp',
    name: 'comp',
    meta: {
      title: 'components',
      icon: 'ep-goods',
      order: 3
    },
    redirect: '/comp/table',
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {
          title: 'table'
        },
        component: () => import('~/views/comp/table/basicTable.vue')
      },
      {
        path: 'form',
        name: 'form',
        meta: {
          title: 'form'
        },
        component: () => import('~/views/comp/form/BasicForm.vue')
      }
    ]
  }
]

export default routes
