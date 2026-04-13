import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded views (better for performance)
const HomeView = () => import('../views/HomeView.vue')
const WebView = () => import('../views/WebView.vue')
const DataView = () => import('../views/DataView.vue')
const PlotView = () => import('../views/PlotView.vue')
const InspoView = () => import('../views/InspoView.vue')
const DashView = () => import('../views/DashView.vue')
const AllVideosView = () => import ('../views/AllVideosView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/web',
      name: 'web',
      component: WebView,
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
    },
    {
      path: '/plot',
      name: 'plot',
      component: PlotView,
    },
    {
      path: '/inspo',
      name: 'inspo',
      component: InspoView,
    },
    {
      path: '/dash',
      name: 'dash',
      component: DashView,
    },
    {
    path: '/videos',
    name: 'Videos',
    component: AllVideosView
    }
  ],
})

export default router
