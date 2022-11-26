<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="home-slide-one">
        <div class="home-slide-one-title">Hello From Nesfol</div>
        <div class="home-slide-one-box">
          <div class="home-slide-one-box-1">
            <div>
              <span>&#10003;</span>
              <span>Flip Book</span>
            </div>
            <div>
              <span>&#10003;</span>
              <span>Scroll Reading</span>
            </div>
            <div>
              <span>&#10003;</span>
              <span>Downloadable</span>
            </div>
            <div>
              <span>&#10003;</span>
              <span>Bookmark</span>
            </div>
          </div>
          <div class="home-slide-one-box-2">
            <div>
              <span>&#10003;</span>
              <span>Responsive</span>
            </div>
            <div>
              <span>&#10003;</span>
              <span>Backsound</span>
            </div>
            <div>
              <span>&#10003;</span>
              <span>Auto Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="home-slide-two">
        <div class="home-slide-two-title">Example Magazine</div>
        <div class="home-slide-two-box">
          <img src="/src/assets/magazine/COVERRRR-2-3.svg" alt="" />
          <img src="/src/assets/magazine/COVERRRR-2-1.svg" alt="" />
          <img src="/src/assets/magazine/coverDepan.svg" alt="" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="home-slide-three">
        <div class="home-slide-three-title">Start Reading Magazine</div>
        <RouterLink to="/magazine">Get Started</RouterLink>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper";
import Icons from "./Icons.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  setup() {
    return {
      modules: [EffectCards, Navigation],
    };
  },
  data() {
    return {
      Icons,
    };
  },
};
</script>
<style lang="scss">
.swiper-slide {
  .home-slide {
    &-one {
      width: 100%;
      height: 50rem;
      background: #012030;
      border-radius: 1rem;
      padding: 5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      border: solid 5px var(--color-green);
      @media screen and (max-width: 1100px) {
        height: 35rem;
      }
      &-title {
        font-size: 3.2rem;
        color: var(--color-green);
        text-align: center;
      }
      &-box {
        display: flex;
        gap: 5rem;
        &-1,
        &-2 {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          div {
            display: flex;
            gap: 1rem;
            span {
              font-size: 2rem;
              @media screen and (max-width: 570px) {
                font-size: 1.6rem;
              }
              &:nth-child(1) {
                height: 2rem;
                color: var(--color-green);
                font-weight: 600;
              }

              &:nth-child(2) {
                color: white;
              }
            }
          }
        }
      }
    }
    &-two {
      width: 100%;
      height: 50rem;
      background: #012030;
      border-radius: 1rem;
      padding: 5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      border: solid 5px var(--color-green);
      @media screen and (max-width: 1100px) {
        height: 35rem;
      }
      &-title {
        font-size: 3.2rem;
        color: var(--color-green);
        text-align: center;
      }
      &-box {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          position: absolute;
          top: 0;
          width: 20rem;
          height: 100%;
          &:nth-child(1) {
            transform: rotate(-15deg) translateX(-5rem);
          }
          &:nth-child(2) {
            transform: rotate(0deg);
          }
          &:nth-child(3) {
            transform: rotate(7.5deg) translateX(5rem);
          }
        }
      }
    }
    &-three {
      width: 100%;
      height: 50rem;
      background: #012030;
      border-radius: 1rem;
      padding: 5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      border: solid 5px var(--color-green);
      @media screen and (max-width: 1100px) {
        height: 35rem;
      }
      &-title {
        font-size: 3.2rem;
        color: var(--color-green);
        text-align: center;
      }
      a {
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 5rem;
        background: var(--color-green);
        border: none;
        outline: none;
        font-size: 1.6rem;
        font-weight: 500;
        color: white;
      }
    }
  }

  img {
    height: 43rem;
  }
}
</style>
