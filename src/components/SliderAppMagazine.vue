<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../assets/magazine/magazine1.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/magazine/magazine2.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/magazine/dinda.jpg" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style lang="scss">
.swiper-slide {
  img {
    height: 43rem;
  }
}
</style>
