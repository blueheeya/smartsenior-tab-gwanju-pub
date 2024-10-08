<template>
  <div class="userInfoWrap">
    <ul>
      <li>
        <b>{{ userName }}</b
        >님,
      </li>
      <li>오늘도 좋은 하루 되세요.</li>
    </ul>
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
