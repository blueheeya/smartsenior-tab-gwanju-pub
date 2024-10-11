<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import { popupStore } from '../stores/popupStore'
defineProps(['menus', 'userName'])

const showResult = () => {
  popupStore.openPopup('height')
}
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <section class="testStepWrap">
      <div>
        <p>1</p>
        <h4>
          발판에 올라<br />
          검사자세 취하기
        </h4>
        <div class="halfImgWrap">
          <ul class="stepTxt">
            <li>① 실제 체중에 가까워 지도록 무거운 코트나 손목시계 등은 착용하지 마십시오.</li>
            <li>② 스탠드를 등지고 양쪽 발을 발바닥 모양에 맞추어 발판에 올라서십시오.</li>
            <li>③ 무릎을 편 상태에서 배, 가슴을 당기고 시선은 정면을 바라보십시오.</li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgHeight01.png" /></div>
        </div>
      </div>
      <div>
        <p>2</p>
        <h4>검사 시작 및 완료</h4>
        <div>
          <ul class="stepTxt center">
            <li>
              검사가 완료되면 결과를<br />
              확인 할 수 있습니다.
            </li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgHeight02.png" /></div>
        </div>
      </div>
    </section>
    <!-- 결과 팝업 열리는 버튼입니다! 결과 팝업 뜨는 방식을 몰라 임의로 버튼으로 만들어 두었습니다! 변경해서 사용하시면 됩니다.-->
    <button @click="showResult">결과 보기</button>
  </PageLayout>
</template>
