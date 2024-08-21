import type { RouteRecordRaw } from 'vue-router'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/PortalLayout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/404.vue') }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
