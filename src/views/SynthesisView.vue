<script setup>
import { computed } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import StatusItem from '@/components/synthesisItems/StatusItem.vue'
import ChartItem from '@/components/synthesisItems/ChartItem.vue'

defineProps(['menus', 'userData'])

const healthData = [
  { title: '혈압', status: '저혈압', dataLow: '80', dataHigh: '120', dataBpm: '70' },
  { title: '체중', status: '낮음' },
  { title: '체지방', status: '높음' },
  { title: '내장지방', status: '표준' }
]
// 혈압 데이터에 대한 컴퓨티드 프로퍼티
const bloodData = computed(() => healthData[0])
// 혈압 데이터 값의 아이콘 변경
const bloodClassMap = {
  고혈압: 'highBlood',
  정상: 'normalBlood',
  저혈압: 'lowBlood'
}
// 차트 데이터
const chartData = [
  {
    chartName: '체중',
    range: '50.90 ~ 68.90kg',
    value: '70.3',
    width: '70%'
  },
  {
    chartName: '체지방량(kg)',
    range: '5.00 ~ 13.00kg',
    value: '4.5',
    width: '30%'
  },
  {
    chartName: '근육량',
    range: '43.33 ~ 52.90kg',
    value: '46.20',
    width: '46%'
  },
  {
    chartName: '체질량지수(BMI)',
    range: '18.50 ~ 25.00kg/m',
    value: '49.00',
    width: '90%'
  },
  {
    chartName: '골격근량(kg)',
    range: '25.50 ~ 31.10kg',
    value: '69.90',
    width: '69%'
  },
  {
    chartName: '내장지방 레벨',
    range: '5 ~ 7 Level',
    value: '6',
    width: '50%'
  }
]
const bloodClass = computed(() => {
  const bloodStatus = healthData[0].status
  return bloodClassMap[bloodStatus] || 'normalStatus'
})
</script>

<template>
  <PageLayout :menus="menus" :userData="userData">
    <section class="synthesisWrap">
      <div class="statusWrap">
        <StatusItem
          v-for="(item, index) in healthData"
          :key="index"
          :title="item.title"
          :status="item.status"
        />
      </div>
      <div class="userDataWrap">
        <ul>
          <li>나이(성별) :</li>
          <li>{{ userData.userAge }}세 ({{ userData.userGender }})</li>
        </ul>
        <ul>
          <li>키 :</li>
          <li>{{ userData.userHeight }}cm</li>
        </ul>
      </div>
    </section>
    <section class="bloodWrap">
      <div class="bloodDataBox">
        <h2>혈압</h2>
        <div>
          <ul>
            <li>
              최고/최저<span>{{ bloodData.dataHigh }}/{{ bloodData.dataLow }} mmHg</span>
            </li>
            <li>
              심박수<span>{{ bloodData.dataBpm }} bpm</span>
            </li>
          </ul>
          <div class="bloodIcon" :class="bloodClass">
            <span>{{ bloodData.status }}</span>
          </div>
        </div>
      </div>
      <div class="bloodClassCart">
        <h2>혈압수치별 분류</h2>
        <div><img src="../assets/images/imgHeartChart.png" /></div>
      </div>
    </section>
    <section class="chartWrap">
      <ChartItem v-for="(item, index) in chartData" :key="index" v-bind="item" />
    </section>
  </PageLayout>
</template>
<style scoped>
section {
  margin-bottom: 30px;
}
</style>
