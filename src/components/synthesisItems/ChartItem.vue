<template>
  <div class="chartBox">
    <h2>
      {{ chartName }}<span>표준범위: {{ range }}</span>
    </h2>
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
  value: String,
  width: String
})
</script>
