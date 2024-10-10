<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/layout/MainHeader.vue'
import UserInfo from './components/layout/UserInfo.vue'
import TopContainer from './components/layout/TopContainer.vue'
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
    title: '평행측정',
    icon: 'iconMenuParallel',
    link: '/parallel'
  }
])
const headerTitle = ref('푸른마을 주공3단지 아파트 경로당')
const userData = ref({
  userName: '홍길동',
  userAge: '70',
  userGender: '남',
  userHeight: '170'
})
</script>

<template>
  <TopContainer>
    <MainHeader :headerTitle="headerTitle" />
    <SwiperData />
  </TopContainer>
  <component :is="currentHeaderComponent" :userData="userData" />
  <RouterView :menus="menus" :userData="userData" />
  <MainFooter />
</template>

<script>
import MainFooter from './components/layout/MainFooter.vue'

export default {
  name: 'App',
  components: {
    UserInfo,
    MainFooter
  },
  computed: {
    currentHeaderComponent() {
      return this.$route.path === '/' ? 'UserInfo' : ''
    }
  }
}
</script>
