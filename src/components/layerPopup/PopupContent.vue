<template>
  <div class="popupContentWrap">
    <h2>{{ title }}이 완료되었습니다!</h2>
    <div v-if="Array.isArray(contents)">
      <ul v-for="(content, index) in contents" :key="index">
        <li>
          {{ content.cntName }}
        </li>
        <li>
          <span>{{ content.cntData }}</span
          >{{ content.cntDataType }}
        </li>
      </ul>
    </div>
    <p v-else>{{ contents }}</p>
  </div>
</template>

<script>
export default {
  name: 'PopupContent',
  props: {
    title: {
      type: String,
      required: true
    },
    contents: {
      type: [Array, String],
      required: true
    }
  }
}
</script>

<style scoped>
.popupContentWrap {
  width: 100%;
}
.popupContentWrap h2 {
  width: 100%;
  margin-bottom: 32px;
  color: var(--messege-color);
  font-size: var(--font-size-md);
  text-align: center;
}
.popupContentWrap > div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.popupContentWrap ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  width: calc(100% / 2 - 6px);
  margin-bottom: 12px;
  background: #f1f5f8;
  padding: 40px;
}

.popupContentWrap ul li {
  width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
}
.popupContentWrap ul li span {
  font-size: var(--font-size-xxxl);
  font-weight: 700;
}
</style>
