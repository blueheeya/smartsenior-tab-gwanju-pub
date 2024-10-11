<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import { popupStore } from '../stores/popupStore'
defineProps(['menus', 'userName'])

const showResult = () => {
  popupStore.openPopup('blood')
}
</script>

<template>
  <PageLayout :menus="menus" :userName="userName">
    <section class="testStepWrap">
      <!-- S :  자세 설명 추가 -->
      <div>
        <p>1</p>
        <h4>
          5분간 휴식 후<br />
          의자에 앉기
        </h4>
        <div>
          <ul class="stepTxt center">
            <li>안정된 혈압을 위해서 최소 5분 이상 휴식을 취합니다.</li>
            <li>
              <b>의자를 최대한 당겨 앉으세요.</b> 의자에 앉은 후, 혈압 측정기의 팔 삽입부와 심장의
              높이가 수평이 되도록 의자 높이를 조절해 주세요.
            </li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgBlood01.png" /></div>
        </div>
      </div>
      <!-- E :  자세 설명 추가 -->
      <div>
        <p>2</p>
        <h4>팔꿈치 홈 맞게 넣기</h4>
        <div>
          <ul class="stepTxt center">
            <li>팔 삽입부에 팔을 넣고, 아래 그림과 같이 팔꿈치를 홈에 맞추세요.</li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgBlood02.png" /></div>
        </div>
      </div>
      <div>
        <p>3</p>
        <h4>측정하기</h4>
        <div>
          <ul class="stepTxt center">
            <li><span>측정기의 시작 버튼을 누르세요.</span></li>
            <li>커프에 압력이 가해지고, 서서히 커프가 팽창하면서 혈압을 검사합니다.</li>
            <li>측정 중에는 말을 하거나 움직이지 마세요.</li>
          </ul>
          <div class="imgBox"><img src="../assets/images/imgBlood03.png" /></div>
        </div>
      </div>
    </section>
    <!-- 결과 팝업 열리는 버튼입니다! 결과 팝업 뜨는 방식을 몰라 임의로 버튼으로 만들어 두었습니다! 변경해서 사용하시면 됩니다.-->
    <button @click="showResult">결과 보기</button>
  </PageLayout>
</template>
