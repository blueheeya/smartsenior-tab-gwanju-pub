<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import StatusItem from '@/components/items/StatusItem.vue'

defineProps(['menus', 'userName'])

const healthData = [
  { title: '혈압', status: '고혈압' },
  { title: '체중', status: '낮음' },
  { title: '체지방', status: '높음' },
  { title: '내장지방', status: '표준' }
]
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <section class="synthesisWrap">
      <div>
        <StatusItem
          v-for="(item, index) in healthData"
          :key="index"
          :title="item.title"
          :status="item.status"
        />
      </div>
      <ul>
        <li>나이(성별) :</li>
        <li>키 :</li>
      </ul>
    </section>
  </PageLayout>
</template>
