<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import { popupStore } from '../stores/popupStore'
defineProps(['menus', 'userName'])

const showResult = () => {
  popupStore.openPopup('body')
}
</script>
<template>
  <PageLayout :menus="menus" :userName="userName">
    <section class="testStepWrap">
      <!-- S :  자세 설명 추가 -->
      <div>
        <p>1</p>
        <h4>발판위에 <br />올라서기</h4>
        <div>
          <div class="imgBox"><img src="../assets/images/imgBody01.png" /></div>
          <ul class="stepTxt center">
            <li>대기 화면에서 맨발로 발판에 올라섭니다.</li>
          </ul>
        </div>
      </div>
      <!-- E :  자세 설명 추가 -->
      <div>
        <p>2</p>
        <h4>체중 측정</h4>
        <div>
          <div class="imgBox"><img src="../assets/images/imgBody02.png" /></div>
          <ul class="stepTxt center">
            <li>체중이 측정됩니다. <br />체중 측정동안 손잡이를 잡지마세요.</li>
          </ul>
        </div>
      </div>
      <div>
        <p>3</p>
        <h4>검사자세<br />취하기</h4>
        <div>
          <div class="imgBox"><img src="../assets/images/imgBody03.png" /></div>
          <ul class="stepTxt center">
            <li>① 겨드랑이가 닿지 않아야 합니다.</li>
            <li>② 팔을 쭉 펴야 합니다.</li>
            <li>③ 허벅지가 붙는 분은 무릎길이의 반바지를 입고 검사합니다.</li>
            <li>
              ④ 손가락 4개 모두가 손전극 표면에 닿도록 감싸 쥐고, 엄지는 타원 부분에 접촉 시켜야
              합니다.
            </li>
            <li>⑤ 발뒤꿈치를 발전극 끝에 맞춥니다.</li>
            <li>⑥ 맨발로 올라 섭니다.</li>
          </ul>
        </div>
      </div>
      <div>
        <p>4</p>
        <h4>
          인바디 검사<br />
          시작 및 완료
        </h4>
        <div>
          <div class="imgBox"><img src="../assets/images/imgBody04.png" /></div>
          <ul class="stepTxt center">
            <li>검사가 완료되면 결과를 확인 할 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 결과 팝업 열리는 버튼입니다! 결과 팝업 뜨는 방식을 몰라 임의로 버튼으로 만들어 두었습니다! 변경해서 사용하시면 됩니다.-->
    <button @click="showResult">결과 보기</button>
  </PageLayout>
</template>
