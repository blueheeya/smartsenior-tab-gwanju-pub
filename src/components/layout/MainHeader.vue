<script setup>
defineProps(['headerTitle'])
</script>
<template>
  <header>
    <h1>{{ headerTitle }}</h1>
    <button><i></i>설정</button>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  headerTitle: { type: String, required: true }
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7%;
  height: 135px;
  padding: 40px;
  background: var(--white-color);
}
header > h1 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 3rem;
  color: #333;
}
header > h1::before {
  content: '';
  display: flex;
  width: 82px;
  height: 78px;
  background: url('../../assets/images/logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 80px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0;
}
button i {
  display: block;
  width: 64px;
  height: 64px;
  background: var(--gray-color-200) url('../../assets/images/icon/iconSetting.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
