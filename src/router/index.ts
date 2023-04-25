import { createRouter, createWebHistory } from 'vue-router'
import CappHomeView from '../views/HomeView.vue'
import { Capp_Meta, Capp_Routes } from './capps'
// import default } from '../apps/blog/capp.config';
// import { default } from '../apps/ols/_meta';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CappHomeView
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

export const capps = [];
Capp_Meta.forEach((meta) => {
  console.log('meta', meta)
  // @ts-ignore
  capps.push(meta)
})
sessionStorage.setItem('capps', JSON.stringify(capps))

Capp_Routes.forEach((route) => {
  routes.push(route)
})

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
