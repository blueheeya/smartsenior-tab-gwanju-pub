<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/layout/MainHeader.vue'
import UserInfo from './components/layout/UserInfo.vue'
import TopContainer from './components/layout/TopContainer.vue'
import SwiperData from './components/swiper/SwiperData.vue'
import LayerPopup from '@/components/layerPopup/LayerPopup.vue'
import { popupStore } from './stores/popupStore'
import MainFooter from './components/layout/MainFooter.vue'

const menus = ref([
  {
    id: '1',
    title: '혈압측정',
    icon: 'iconMenuBlood',
    type: 'cable',
    typeStatus: false,
    link: '/blood'
    // data: {
    //   dataName: '혈압',
    //   value: '150/80',
    //   dataType: 'mmHg',
    //   dateTime: '2024-10-14 11:17:00'
    // }
  },
  {
    id: '2',
    title: '신장측정',
    icon: 'iconMenuHeight',
    type: 'cable',
    typeStatus: true,
    link: '/height'
    // data: {
    //   dataName: '신장',
    //   value: '180',
    //   dataType: 'cm',
    //   dateTime: '2024-10-14 11:17:00'
    // }
  },
  {
    id: '3',
    title: '체성분측정',
    icon: 'iconMenuBody',
    type: 'cable',
    typeStatus: true,
    link: '/body'
    // data: {
    //   dataName: '체성분',
    //   value: '24.2',
    //   dataType: 'BMI',
    //   dateTime: '2024-10-14 11:17:00'
    // }
  },
  {
    id: '4',
    title: '평행측정',
    icon: 'iconMenuParallel',
    type: '',
    typeStatus: true,
    link: '/parallel'
    // data: {
    //   dataName: '평행',
    //   value: '80',
    //   dataType: '점',
    //   dateTime: '2024-10-14 11:17:00'
    // }
  }
])
const headerTitle = ref('푸른마을 주공3단지 아파트 경로당')
const userData = ref({
  userName: '홍길동',
  userAge: '70',
  userGender: '남',
  userHeight: '170'
})
const resetMeasurement = () => {
  popupStore.closePopup()
  // 여기에 측정 리셋 로직 추가
}
</script>

<template>
  <!-- S: 앱으로 개발 되는 부분 -->
  <TopContainer>
    <MainHeader :headerTitle="headerTitle" />
    <SwiperData />
  </TopContainer>
  <!-- E: 앱으로 개발 되는 부분 -->
  <!-- S :  실제 개발 되는 부분 -->
  <div class="dataWrap">
    <component :is="currentHeaderComponent" :userData="userData" />
    <LayerPopup
      :isOpen="popupStore.isOpen"
      :title="popupStore.title"
      :contents="popupStore.contents"
      :synthesisLink="popupStore.synthesisLink"
      :showCloseButton="true"
      :showReturnButton="true"
      :showSynthesisButton="true"
      @close="popupStore.closePopup()"
      @return="resetMeasurement"
    >
    </LayerPopup>
    <RouterView :menus="menus" :userData="userData" />
  </div>
  <!-- E :  실제 개발 되는 부분 -->
  <!-- S: 앱으로 개발되는 부분-->
  <MainFooter />
  <!-- E: 앱으로 개발되는 부분-->
</template>

<script>
export default {
  name: 'App',
  components: {
    UserInfo,
    MainFooter,
    LayerPopup
  },
  computed: {
    currentHeaderComponent() {
      return this.$route.path === '/' ? 'UserInfo' : ''
    }
  },
  data() {
    return {
      popupOpen: false,
      popupTitle: '측정 결과',
      popupContent: '여기에 측정 결과를 표시합니다.'
    }
  },
  methods: {
    openPopup() {
      this.popupOpen = true
    },
    closePopup() {
      this.popupOpen = false
    },
    resetMeasurement() {
      this.closePopup()
      // 여기에 측정 리셋 로직 추가
      console.log('측정을 다시 시작합니다.')
    },
    showSynthesisView() {
      // 종합 결과 확인 로직
      console.log('종합 결과를 확인합니다.')
    }
  }
}
</script>
