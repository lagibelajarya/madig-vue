<script setup>
import { ref } from "vue";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
import magazineComp from "../components/TheMagazine.vue";
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
          <magazineComp />
        </div>
      </div>
    </div>
  </div>
</template>
