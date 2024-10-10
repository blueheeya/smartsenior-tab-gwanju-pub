<script setup>
defineProps(['menus', 'userName'])
import PageLayout from '@/components/layout/PageLayout.vue'
</script>
<template>
  <PageLayout :menus="menus" :userName="userName">
    <ul class="mainMenuWrap">
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.link"
          ><i class="menuIcon" :class="menu.icon"></i>{{ menu.title
          }}<i class="typeIcon" :class="menu.type"></i
        ></RouterLink>
      </li>
    </ul>
  </PageLayout>
</template>
