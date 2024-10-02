<template>
  <div class="userInfoWrap">
    <div>{{ userName }}님, 오늘도 좋은 하루 되세요.</div>
    <button>측정이력</button>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    userName: { type: String, required: true }
  }
}
</script>
