<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
defineProps(['menus', 'userName'])
</script>
<template>
  <PageLayout :menus="menus" :userName="userName">
    <ul class="mainMenuWrap">
      <li v-for="menu in menus" :key="menu.id" :class="record">
        <RouterLink :to="menu.link"
          ><i class="menuIcon" :class="menu.icon"></i>{{ menu.title
          }}<i class="typeIcon" :class="menu.type"></i>
        </RouterLink>
        <!-- S : 측정 데이터 존재할 때 나타남 data{} 가 존재해야지만 보임 -->
        <ul class="recordWrap" v-show="menu.dataStatus" style="display: flex">
          <li v-if="menu.data">
            <span>{{ menu.data.value }}</span>
            {{ menu.data.dataType }}
          </li>
          <li>{{ menu.title }}</li>
        </ul>
        <!-- E : 측정 데이터 존재할 때 나타남 -->
        <!-- S : 기기 연결이 안되었을 때 나타남  typeStatus가 false 일때만 나타남 -->
        <ul class="recordErrorWrap" v-show="!menu.typeStatus" style="display: flex">
          <li>
            기기가 연결되지<br />
            않았습니다!
          </li>
        </ul>
        <!-- E : 기기 연결이 안되었을 때 나타남-->
      </li>
    </ul>
  </PageLayout>
</template>
