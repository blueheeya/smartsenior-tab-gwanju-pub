<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import { popupStore } from '../stores/popupStore'
defineProps(['menus', 'userName'])

const showResult = () => {
  popupStore.openPopup('parallel')
}
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <section class="testStepWrap">
      <!-- S :  자세 설명 추가 -->
      <div>
        <p>1</p>
        <h4>자세 설명</h4>
        <div>
          <ul class="stepTxt center">
            <li>
              검사가 완료되면 결과를<br />
              확인 할 수 있습니다.
            </li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgSample.png" /></div>
        </div>
      </div>
      <!-- E :  자세 설명 추가 -->
      <div>
        <p>2</p>
        <h4>자세 설명</h4>
        <div>
          <ul class="stepTxt center">
            <li>
              검사가 완료되면 결과를<br />
              확인 할 수 있습니다.
            </li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgSample.png" /></div>
        </div>
      </div>
      <div>
        <p>3</p>
        <h4>자세설명</h4>
        <div>
          <ul class="stepTxt center">
            <li>
              검사가 완료되면 결과를<br />
              확인 할 수 있습니다.
            </li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgSample.png" /></div>
        </div>
      </div>
    </section>
    <!-- 결과 팝업 열리는 버튼입니다! 결과 팝업 뜨는 방식을 몰라 임의로 버튼으로 만들어 두었습니다! 변경해서 사용하시면 됩니다.-->
    <button @click="showResult">결과 보기</button>
  </PageLayout>
</template>
