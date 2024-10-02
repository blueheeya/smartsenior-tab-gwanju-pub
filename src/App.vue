<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/layout/MainHeader.vue'
import SubHeader from './components/layout/SubHeader.vue'
import SwiperData from './components/swiper/SwiperData.vue'
</script>
<template>
  <MainHeader />
  <SwiperData />
  <SubHeader userName="홍길동" />
  <RouterView />
  <component :is="currentFooterComponent"></component>
</template>
<script>
import SubFooter from './components/layout/SubFooter.vue'
export default {
  name: 'App',
  components: { SubFooter },
  computed: {
    currentFooterComponent() {
      return this.$route.path === '/' ? '' : 'SubFooter'
    }
  }
}
</script>
