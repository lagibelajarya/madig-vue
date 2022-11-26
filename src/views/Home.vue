<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";

import { ref } from "vue";
import { value } from "dom7";
import SliderHome from "../components/SliderHome.vue";

const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
</script>
<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-info">
        <div class="home-container-info-logo" >
          <img src="../assets/img/logoGreen.svg" alt="" />
          <p>Nesfol</p>
        </div>
        <div class="home-container-info-title">
          <span>N</span>ew <span>E</span>nthu<span>S</span>iasm <span>FO</span>r
          <br />
          <span>L</span>earning
        </div>
        <div
          class="home-container-info-btn"
          @click="goToNavigation('magazine')"
        >
          Start Reading <Icons name="chevron-right" />
        </div>
        <div class="home-container-info-tema">
          <p>Bangkit Dari covid-19</p>
        </div>
      </div>
      <div class="home-container-content">
        <div class="home-container-content-box">
          <!-- slider container -->
          <SliderHome />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
