<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BackButton from '../button/BackButton.vue'

defineProps({
  userData: {
    type: Object,
    required: true
  }
})

//route의 meta.title에서 각각의 페이지 타이틀을 받아옵니다.
const route = useRoute()
const pageTitle = computed(() => {
  return route.meta.title || ''
})
</script>

<template>
  <div class="subTitleWrap">
    <BackButton />
    <h2 v-if="pageTitle">{{ pageTitle }}</h2>
    <div class="nameTxt">
      <b>{{ userData.userName }}</b
      >님
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle'
}
</script>
<style scoped>
/*sub title*/
.subTitleWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 192px;
  padding: 40px;
  border: solid 1px var(--gray-color-400);
  border-left: 0;
  border-right: 0;
  background: #ffffff !important;
}
.subTitleWrap h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: var(--font-size-xxl);
}
.subTitleWrap .nameTxt {
  font-size: var(--font-size-xl);
}
</style>
