<template>
  <section><slot></slot></section>
</template>

<script>
export default {
  name: 'TopContainer'
}
</script>

<style scoped>
section {
  width: 100%;
  height: 50%;
  height: 960px;
  background: var(--gray-color-300);
}
</style>
