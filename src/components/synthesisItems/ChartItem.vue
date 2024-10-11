<template>
  <div class="chartBox">
    <div class="chartTitle">
      <h2>{{ chartName }}</h2>
      <span><b>표준범위</b> {{ range }}</span>
    </div>
    <div class="chartItem">
      <div class="progress" :style="{ width }">{{ value }}</div>
    </div>
    <div class="chartLavel">
      <span>낮음</span>
      <span>표준</span>
      <span>높음</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  chartName: String,
  range: String,
  value: Number,
  width: String
})
</script>
