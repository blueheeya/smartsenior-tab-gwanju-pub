<template>
  <section class="maincontainer">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'MainContainer',
  data() {
    return {
      message: 'main component message'
    }
  }
  //... other methods and properties
}
</script>

<style scoped>
section.maincontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 672px;
  max-height: 672px;
  margin: 0 auto;
  background: var(--fn-background);
}
</style>
