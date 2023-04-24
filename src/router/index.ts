import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { inject, ref } from 'vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

export const capps = [];

const modules = import.meta.glob("../apps/**/router/index.ts");
for (const path in modules) {
  const capp_name: RegExpExecArray | null = /..\/apps\/(.*)\/router\/index.*/.exec(path);
  if (capp_name && capp_name?.length >= 2 && capp_name[1].length) {
    const capp = {
      name: capp_name[1],
      path: `/apps/${capp_name[1]}/router`
    }
    capps.push(capp)
    const capp_path = `../apps/${capp.name}/router`;
    const { default: capp_route } = await import(/* @vite-ignore */capp_path);
    routes.push(capp_route);
  }
}
sessionStorage.setItem('capps', JSON.stringify(capps))

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
