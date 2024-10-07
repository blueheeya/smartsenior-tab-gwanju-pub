<template>
  <header class="header">
    <h1>푸른마을 주공3단지 아파트 경로당</h1>
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
