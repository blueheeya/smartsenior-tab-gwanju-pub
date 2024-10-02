import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BloodView from '../views/BloodView.vue'
import HeightView from '../views/HeightView.vue'
import BodyView from '../views/BodyView.vue'
import SynthesisView from '../views/SynthesisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/blood',
      name: 'bload',
      component: BloodView,
      props: (route) => ({ menus: route.params.menus })
    },
    {
      path: '/height',
      name: 'height',
      component: HeightView,
      props: (route) => ({ menus: route.params.menus })
    },
    {
      path: '/body',
      name: 'body',
      component: BodyView,
      props: (route) => ({ menus: route.params.menus })
    },
    {
      path: '/synthesis',
      name: 'synthesis',
      component: SynthesisView,
      props: (route) => ({ menus: route.params.menus })
    }
  ]
})

export default router
