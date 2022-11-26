<template>
  <div class="magazine-cover" @click="goToNavigation('detailMagazine')">
    <img src="/src/assets/magazine/coverDepan.svg" alt="" />
  </div>
  <div class="magazine-cover">
    <img src="/src/assets/magazine/COVERRRR-2-2.svg" alt="" />
  </div>
  <div class="magazine-cover">
    <img src="/src/assets/magazine/COVERRRR-2-1.svg" alt="" />
  </div>
  <div class="magazine-cover">
    <img src="/src/assets/magazine/COVERRRR-2-3.svg" alt="" />
  </div>
  <div class="magazine-cover">
    <img src="/src/assets/magazine/COVERRRR-2-4.svg" alt="" />
  </div>
  <div class="magazine-cover">
    <img src="/src/assets/magazine/COVERRRR-2-5.svg" alt="" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
const toggleHover = ref(false);
</script>

<style lang="scss">
.magazine-cover {
  position: relative;
  min-height: 30rem;
  min-width: 20rem;
  background-position: top !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  img {
    width: 20rem;
    border-radius: 1rem;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  &-info {
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    background: linear-gradient(to bottom, transparent, black);
    transition: all 0.3s;
    &-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      svg {
        height: 2rem;
        color: yellow;
        fill: yellow;
      }
      p {
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    &-desc {
      text-transform: capitalize;
      p {
        color: white;
        &:nth-child(1) {
          font-size: 1.6rem;
          font-weight: 600;
        }
        &:nth-child(2) {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
