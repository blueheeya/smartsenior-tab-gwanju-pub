<template>
  <section class="subcontainer">
    <div><slot></slot></div>
  </section>
</template>

<script>
export default {
  name: 'SubContainer',
  data() {
    return {
      message: 'Sub component message'
    }
  }
  //... other methods and properties
}
</script>

<style scoped>
section {
  height: 672px;
  max-height: 672px;
  padding: 40px;
  overflow-y: auto;
  background: var(--fn-background);
}
section::-webkit-scrollbar {
  width: 10px;
}
section::-webkit-scrollbar-track {
  background-color: var(--fn-background);
}
section::-webkit-scrollbar-thumb {
  border-radius: var(--border-radius-md);
  background-color: #c1c1c1;
}
section::-webkit-scrollbar-button {
  display: none;
}
section > div {
  width: 100%;
  min-height: 100%;
  height: auto;
  padding: 56px 24px;
  background: var(--white-color);
  border-radius: 20px;
  border: solid 1px var(--border-color);
}
</style>
