<script setup>
defineProps(['menus', 'userName'])
import MainContainer from '@/components/layout/MainContainer.vue'
</script>
<template>
  <MainContainer>
    <ul class="mainMenuWrap">
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.link"
          ><i class="menuIcon" :class="menu.icon"></i>{{ menu.title
          }}<i class="typeIcon" :class="menu.type"></i
        ></RouterLink>
      </li>
    </ul>
  </MainContainer>
</template>
