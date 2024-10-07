<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/layout/MainHeader.vue'
import UserInfo from './components/layout/UserInfo.vue'
import SwiperData from './components/swiper/SwiperData.vue'

const menus = ref([
  {
    id: '1',
    title: '혈압측정',
    icon: 'iconMenuBlood',
    type: 'cable',
    link: '/blood'
  },
  {
    id: '2',
    title: '신장측정',
    icon: 'iconMenuHeight',
    type: 'cable',
    link: '/height'
  },
  {
    id: '3',
    title: '체성분측정',
    icon: 'iconMenuBody',
    type: 'cable',
    link: '/body'
  },
  {
    id: '4',
    title: '종합결과',
    icon: 'iconMenuSynthesis',
    link: '/synthesis'
  }
])
const userName = ref('홍길동')
// const route = useRoute()
</script>
<template>
  <MainHeader />
  <SwiperData />
  <component :is="currentHeaderComponent" :userName="userName" />
  <RouterView :menus="menus" :userName="userName" />
  <component :is="currentFooterComponent"></component>
</template>
<script>
import MainFooter from './components/layout/MainFooter.vue'
import SubFooter from './components/layout/SubFooter.vue'

export default {
  name: 'App',
  components: {
    UserInfo,
    MainFooter,
    SubFooter
  },
  computed: {
    currentFooterComponent() {
      return this.$route.path === '/' ? 'MainFooter' : 'SubFooter'
    },
    currentHeaderComponent() {
      return this.$route.path === '/' ? 'UserInfo' : ''
    }
  }
}
</script>
