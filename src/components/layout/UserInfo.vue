<template>
  <div class="userInfoWrap">
    <ul>
      <li>
        <b>{{ userData.userName }}</b
        >님,
      </li>
      <li>오늘도 좋은 하루 되세요.</li>
    </ul>
    <div>
      <button><RouterLink to="/record">측정이력</RouterLink></button>
      <button><RouterLink to="/synthesis">종합결과</RouterLink></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    userData: { type: String, required: true }
  }
}
</script>
