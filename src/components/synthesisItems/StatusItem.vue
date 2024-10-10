<template>
  <ul class="statusBox">
    <h2>{{ title }}</h2>
    <li class="statusIcon" :class="statusClass">{{ status }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: String,
  status: String
})

const statusClassMap = {
  높음: 'highStatus',
  고혈압: 'highStatus',
  표준: 'normalStatus',
  정상: 'normalStatus',
  낮음: 'lowStatus',
  저혈압: 'lowStatus'
}

const statusClass = statusClassMap[props.status] || 'normalStatus'
</script>
