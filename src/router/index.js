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
      props: true
    },
    {
      path: '/height',
      name: 'height',
      component: HeightView,
      props: true
    },
    {
      path: '/body',
      name: 'body',
      component: BodyView,
      props: true
    },
    {
      path: '/synthesis',
      name: 'synthesis',
      component: SynthesisView,
      props: true
    }
  ]
})

export default router
