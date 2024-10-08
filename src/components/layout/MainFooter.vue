<template>
  <footer>
    <button>종료</button>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>
<style scoped>
footer {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 96px;
  padding: 11px 40px;
  background: var(--gray-color-100);
}
footer button {
  width: 206px;
  height: 100%;
  background: var(--gray-color-500);
  border-radius: 12px;
  color: var(--white-color);
  font-size: var(--font-size-xl);
  font-weight: 700;
}
</style>
