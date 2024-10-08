<template>
  <ul>
    <h2>{{ title }}</h2>
    <li><img :src="icon" alt="status-icon" /></li>
    <li :class="statusClass">{{ status }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: String,
  status: String
})

const iconMap = {
  높음: '../../assets/images/icon/iconValueHigh.png',
  고혈압: '../../assets/images/icon/iconValueHigh.png',
  표준: '../../assets/images/icon/iconValueNormal.png',
  정상: '../../assets/images/icon/iconValueNormal.png',
  낮음: '../../assets/images/icon/iconValueLow.png',
  저혈압: '../../assets/images/icon/iconValueLow.png'
}

const statusClassMap = {
  높음: 'high-status',
  고혈압: 'high-status',
  표준: 'normal-status',
  정상: 'normal-status',
  낮음: 'low-status',
  저혈압: 'low-status'
}

const icon = iconMap[props.status] || '../../assets/images/icon/iconValueNormal.png'
const statusClass = statusClassMap[props.status] || 'default-status'
</script>

<style scoped>
.high-status {
  color: red;
}

.normal-status {
  color: green;
}

.low-status {
  color: blue;
}
</style>
