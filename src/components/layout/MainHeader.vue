<template>
  <header class="header">
    <h1>북구노인종합복지관</h1>
    <div>{{ headerTitle }}</div>
    <button>설정</button>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  headerTitle: { type: String, required: true }
}
</script>
