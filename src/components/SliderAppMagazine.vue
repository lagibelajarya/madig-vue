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
      // slideShadows: true,
    }"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in pages">
      <img v-bind:src="item" v-bind:alt="item" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiper {
  height: 43.8rem;
  padding-bottom: 10rem;
  &-wrapper {
    height: 43.8rem;
  }
  &-slide {
    width: 31rem;
    height: 43.8rem;
    img {
      // width: 20rem;
      height: 100%;
    }
  }
}
</style>
<script>
// Import Swiper Vue.js components

import coverDepan from "/src/assets/magazine/coverdepan.svg";
import majalah1 from "/src/assets/magazine/isi-1.svg";
import majalah2 from "/src/assets/magazine/isi-2.svg";
import majalah3 from "/src/assets/magazine/isi-3.svg";
import majalah4 from "/src/assets/magazine/isi-4.svg";
import majalah5 from "/src/assets/magazine/isi-5.svg";
import majalah6 from "/src/assets/magazine/isi-6.svg";
import majalah7 from "/src/assets/magazine/isi-7.svg";
import majalah8 from "/src/assets/magazine/isi-8.svg";
import majalah9 from "/src/assets/magazine/isi-9.svg";
import majalah10 from "/src/assets/magazine/isi-10.svg";
import majalah11 from "/src/assets/magazine/isi-11.svg";
import majalah12 from "/src/assets/magazine/isi-12.svg";
import majalah13 from "/src/assets/magazine/isi-13.svg";
import video from "/src/assets/magazine/videoMaspion.webp";
import coverBelakang from "/src/assets/magazine/coverBelakang.svg";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ref } from "vue";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const pages = ref([
  {
    id: 1,
    img: coverDepan,
  },
  {
    id: 2,
    img: majalah1,
  },
  {
    id: 3,
    img: majalah2,
  },
  {
    id: 4,
    img: majalah3,
  },
  {
    id: 5,
    img: majalah4,
  },
  {
    id: 6,
    img: majalah5,
  },
  {
    id: 7,
    img: majalah6,
  },
  {
    id: 8,
    img: majalah7,
  },
  {
    id: 9,
    img: majalah8,
  },
  {
    id: 10,
    img: majalah9,
  },
  {
    id: 11,
    img: majalah10,
  },
  {
    id: 12,
    img: majalah11,
  },
  {
    id: 13,
    img: majalah12,
  },
  {
    id: 14,
    img: majalah13,
  },
  {
    id: 15,
    img: coverBelakang,
  },
]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      pages,
    };
  },
  methods: {
    toSlider : {
      
    }
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
