<script setup>
import { ref } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
defineProps(['menus', 'userName'])
const num = ref(0)
</script>
<template>
  <PageLayout :menus="menus" :userName="userName">
    <div v-if="menus.some((menu) => menu.data && menu.dataStatus !== false)">
      <table v-for="(menu, i) in menus" :key="menu.id" class="tableType1">
        <colgroup>
          <col width="10%" />
          <col width="20%" />
          <col width="25%" />
          <col width="auto" />
        </colgroup>
        <tr v-if="menu.data && menu.dataStatus !== false">
          <td>{{ num + i }}</td>
          <td>
            <span>{{ menu.data.dataName }}</span>
          </td>
          <td>
            <span>{{ menu.data.value }}</span>
            {{ menu.data.dataType }}
          </td>
          <td>{{ menu.data.dateTime }}</td>
        </tr>
      </table>
    </div>
    <div v-else class="nodata"><p>측정 데이터가 없습니다.</p></div>
  </PageLayout>
</template>
