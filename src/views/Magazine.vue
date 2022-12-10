<script setup>
import { ref } from "vue";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
import TheMagazine from "../components/TheMagazine.vue";
import SliderMagazine from "../components/SliderMagazine.vue";

let toggleRate = ref(false);
let toggleShare = ref(false);

let toggleMark = ref(false);
const url = window.location.href;
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
</script>
<template>
  <div class="magazine">
    <div class="magazine-container">
      <div class="magazine-container-box">
        <div class="magazine-container-box-slider">
          <SliderMagazine />
        </div>
      </div>
      <div class="magazine-container-box">
        <div class="magazine-container-box-title">Your Magazine</div>

        <div class="magazine-container-box-content">
          <TheMagazine />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.magazine {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4rem);
  height: 100%;
  &-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem 0;
    &-box {
      padding: 0 5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media screen and (max-width: 500px) {
        padding: 0 3rem;
      }
      &-slider {
      }
      &-title {
        font-size: 2.4rem;
        color: white;
        font-weight: 600;
      }
      &-content {
        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>
