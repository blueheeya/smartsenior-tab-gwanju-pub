<template>
  <section v-if="isOpen">
    <div>
      <button v-if="showCloseButton" @click="close" class="closeBtn">Close</button>
      <slot>
        <PopupContent :title="title" :contents="contents" />
      </slot>
      <div class="btnGroup">
        <button v-if="showCloseButton" @click="close" class="btn btnClose">닫기</button>
        <button v-if="showReturnButton" @click="returnMeasurement" class="btn btnReturn">
          다시 측정하기
        </button>
        <RouterLink
          v-if="showSynthesisButton"
          :to="synthesisLink"
          class="btn btnTotal"
          @click="close"
        >
          종합결과 확인
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<script>
import { RouterLink } from 'vue-router'
import PopupContent from './PopupContent.vue'

export default {
  name: 'LayerPopup',
  components: {
    RouterLink,
    PopupContent
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    contents: {
      type: Array,
      default: () => []
    },
    synthesisLink: {
      type: String,
      default: '/synthesis'
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showReturnButton: {
      type: Boolean,
      default: true
    },
    showSynthesisButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    returnMeasurement() {
      this.$emit('return')
    }
  }
}
</script>

<style scoped>
section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
section > div {
  position: absolute;
  width: 85%;
  height: auto;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius-xl);
  background: var(--white-color);
}
section > div .closeBtn {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 30px;
  right: 30px;
  font-size: 0px;
  cursor: pointer;
  background: url('../../assets/images/btnClose.png');
  background-repeat: no-repeat;
}
.btnGroup {
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
}
.btn {
  width: 100%;
  margin-top: 20px;
  padding: 25px 20px;
  border-radius: var(--border-radius-md);
  background: var(--primary-color);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-align: center;
  color: var(--white-color);
  cursor: pointer;
}
.btnClose {
  background: #aaaaaa;
}
.btnReturn {
  background: #f39800;
}
.btnTotal {
  background: #5672ed;
}
</style>
