<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  name: 'SwiperData',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 608px;
  background: var(--gray-color-600);
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination {
  background-color: #333 !important;
  padding: 10px;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff !important;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
