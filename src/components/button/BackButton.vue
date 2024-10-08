<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <button @click="goBack" class="backButton"><span>이전</span></button>
</template>

<style scoped>
.backButton {
  padding: 27px 40px;
  background: #ffffff;
  border: solid 1px var(--gray-color-400);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  color: var(--gray-color-600);
  font-size: var(--font-size-xl);
}
.backButton > span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}
.backButton > span::before {
  content: '';
  display: flex;
  width: 40px;
  height: 40px;
  background: url('../../assets/images/icon/iconBack.svg');
  background-repeat: no-repeat;
}
</style>
