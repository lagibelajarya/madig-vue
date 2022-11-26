<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div
        class="swiper-slide-img"
        style="
          background-image: linear-gradient(to right, #012030 50%, transparent),
            url('/src/assets/magazine/coverDepan.svg');
        "
      >
        <div class="swiper-slide-img-container">
          <img src="../assets/magazine/coverDepan.svg" alt="" />
          <div class="swiper-slide-img-container-text">
            <p>Trending #1</p>
            <div class="swiper-slide-img-container-text-name">
              <Icons name="book" />
              Release The Cocoon
            </div>
          </div>
        </div>
      </div>
      ></swiper-slide
    >
    <swiper-slide
      ><div
        class="swiper-slide-img"
        style="
          background-image: linear-gradient(to right, #012030 50%, transparent),
            url('/src/assets/magazine/COVERRRR-2-1.svg');
        "
      >
        <div class="swiper-slide-img-container">
          <img src="../assets/magazine/COVERRRR-2-1.svg" alt="" />
          <p class="cooming-soon">
            Cooming <br />
            Soon
          </p>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div
        class="swiper-slide-img"
        style="
          background-image: linear-gradient(to right, #012030 50%, transparent),
            url('/src/assets/magazine/COVERRRR-2-3.svg');
        "
      >
        <div class="swiper-slide-img-container">
          <img src="../assets/magazine/COVERRRR-2-3.svg" alt="" />
          <p class="cooming-soon">
            Cooming <br />
            Soon
          </p>
        </div>
      </div></swiper-slide
    >
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Icons from "./Icons.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Icons,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style lang="scss">
.swiper {
  min-height: 43rem;
  &-wrapper {
    min-height: 43rem;
  }
  &-slide {
    min-height: 43rem;
    &-img {
      height: 43rem;
      width: 100%;
      background-position: 100% !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;

      @media screen and (max-width: 650px) {
        height: fit-content;
      }
      &-container {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: -webkit-fill-available;

        @media screen and (max-width: 1100px) {
          width: 100%;
          justify-content: flex-start;
        }
        @media screen and (max-width: 650px) {
          flex-direction: column;
          padding-bottom: 3rem;
        }
        img {
          padding: 3rem;
          border-radius: 4rem;
          height: 100%;
          @media screen and (max-width: 650px) {
            height: fit-content;
            height: 35rem;
          }
          @media screen and (max-width: 500px) {
            width: 100%;
          }
        }
        &-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          p {
            font-size: 4.2rem;
            font-weight: 500;
            color: white;
          }
          &-name {
            color: white;
            font-size: 2.4rem;
            svg {
              height: 2rem;
              fill: white;
            }
          }
        }
        .cooming-soon {
          font-size: 4.2rem;
          font-weight: 600;
          color: white;

          @media screen and (max-width: 650px) {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
