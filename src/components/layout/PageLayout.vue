<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubTitle from '@/components/layout/SubTitle.vue'
import SubContainer from '@/components/layout/SubContainer.vue'

const props = defineProps({
  menus: {
    type: Array,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})

const route = useRoute()

const currentMenu = computed(() => {
  return props.menus.find((menu) => menu.link === route.path)
})
</script>

<template>
  <SubTitle :menu="currentMenu" :userName="userName" />
  <SubContainer>
    <slot></slot>
  </SubContainer>
</template>
<script>
export default { name: 'PageLayout' }
</script>
