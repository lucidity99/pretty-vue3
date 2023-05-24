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
      },

      {
        path: 'icon',
        name: 'icon',
        meta: {
          title: 'icons',
          permiss: '10',
          icon: 'ep-sunrise'
        },
        component: () => import(/* webpackChunkName: "icon" */ '~/views/feat/icons/index.vue')
      }
    ]
  }
]

export default routes
