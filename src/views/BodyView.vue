<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
defineProps(['menus', 'userName'])
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <div>체성분 측정 페이지 내용</div>
    <!-- 여기에 혈압측정 페이지의 특정 내용을 추가 -->
  </PageLayout>
</template>
