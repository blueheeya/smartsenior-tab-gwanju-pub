<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubTitle from '@/components/layout/SubTitle.vue'

const props = defineProps({
  menus: {
    type: Array,
    required: true
  },
  userData: {
    type: String,
    required: true
  }
})

const route = useRoute()

const currentMenu = computed(() => {
  return props.menus.find((menu) => menu.link === route.path)
})
const pageClass = computed(() => {
  // 현재 라우트 이름이나 경로에 따라 클래스를 반환
  switch (route.name) {
    case 'record':
      return 'subLayout'
    default:
      return 'defaultLayout'
  }
})
const showSubTitle = computed(() => {
  return route.path !== '/'
})
</script>

<template>
  <SubTitle v-if="showSubTitle" :menu="currentMenu" :userData="userData" />
  <section>
    <div :class="['page-layout', pageClass]"><slot></slot></div>
  </section>
</template>
<script>
export default { name: 'PageLayout' }
</script>
<style scoped>
section {
  height: 672px;
  max-height: 672px;
  padding: 40px;
  overflow-y: auto;
  background: var(--fn-background);
}
section::-webkit-scrollbar {
  width: 10px;
}
section::-webkit-scrollbar-track {
  background-color: var(--fn-background);
}
section::-webkit-scrollbar-thumb {
  border-radius: var(--border-radius-md);
  background-color: #c1c1c1;
}
section::-webkit-scrollbar-button {
  display: none;
}
.subLayout {
  width: 100%;
  min-height: 100%;
  height: auto;
  padding: 56px 32px;
  background: var(--white-color);
  border-radius: 20px;
  border: solid 1px var(--border-color);
}
.defaultLayout {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: none;
}
</style>
