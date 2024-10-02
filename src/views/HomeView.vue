<script setup>
defineProps(['menus', 'userName'])
import IconMenuBlood from '@/components/icons/IconMenuBlood.vue'
</script>
<template>
  <main>
    <ul class="mainWrap">
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.link"
          ><i><IconMenuBlood /></i>{{ menu.title }}</RouterLink
        >
      </li>
    </ul>
  </main>
</template>
