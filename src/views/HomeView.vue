<script setup>
defineProps(['menus', 'userName'])
</script>
<template>
  <main>
    <ul class="mainMenuWrap">
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.link"
          ><i class="menuIcon" :class="menu.icon"></i>{{ menu.title
          }}<i class="typeIcon" :class="menu.type"></i
        ></RouterLink>
      </li>
    </ul>
  </main>
</template>
