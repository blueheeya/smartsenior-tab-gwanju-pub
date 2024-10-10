<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
defineProps(['menus', 'userName'])
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <div>평행측정 페이지 내용</div>
    <!-- 여기에 평행측정 페이지의 특정 내용을 추가 -->
  </PageLayout>
</template>
