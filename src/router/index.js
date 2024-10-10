import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BloodView from '../views/BloodView.vue'
import HeightView from '../views/HeightView.vue'
import BodyView from '../views/BodyView.vue'
import SynthesisView from '../views/SynthesisView.vue'
import ParallelView from '../views/ParallelView.vue'

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
      meta: { title: '혈압측정' },
      component: BloodView,
      props: true
    },
    {
      path: '/height',
      name: 'height',
      meta: { title: '신장측정' },
      component: HeightView,
      props: true
    },
    {
      path: '/body',
      name: 'body',
      meta: { title: '채성분측정' },
      component: BodyView,
      props: true
    },
    {
      path: '/parallel',
      name: 'parallel',
      meta: { title: '평행측정' },
      component: ParallelView,
      props: true
    },
    {
      path: '/record',
      name: 'record',
      meta: { title: '측정이력' },
      component: BodyView,
      props: true
    },
    {
      path: '/synthesis',
      name: 'synthesis',
      meta: { title: '종합결과' },
      component: SynthesisView,
      props: true
    }
  ]
})

export default router
