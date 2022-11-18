<script setup>
import Icons from "../../components/Icons.vue";
import { ref } from "vue";
let toggleView = ref(false);
</script>
<template>
  <div class="appMagazine">
    <div class="nav-logo">
      <img src="../../assets/logo.svg" alt="Logo" />
      <p>LogoProject</p>
    </div>
    <div class="appMagazine-content">
      <div class="appMagazine-content-box">
        <img src="../../assets/magazine/magazine1.jpg" alt="" />
      </div>
    </div>

    <!-- tools display -->
    <div class="appMagazine-tools-display">
      <div class="appMagazine-tools-display-item"><Icons name="zoomIn" /></div>
      <div class="appMagazine-tools-display-item">
        <Icons name="backward" />
      </div>
      <div class="appMagazine-tools-display-item">
        <Icons name="chevron-left" />
      </div>
      <div class="appMagazine-tools-display-item">
        <Icons name="play" />
      </div>
      <div class="appMagazine-tools-display-item">
        <Icons name="chevron-right" />
      </div>
      <div class="appMagazine-tools-display-item"><Icons name="forward" /></div>
      <div class="appMagazine-tools-display-item"><Icons name="zoomOut" /></div>
    </div>

    <!-- tools btn -->
    <div class="appMagazine-tools-btn">
      <div class="appMagazine-tools-btn-search"><Icons name="search" /></div>
      <div class="appMagazine-tools-btn-setting">
        <Icons name="construct" />
      </div>
      <div class="appMagazine-tools-btn-view" @click="toggleView = !toggleView">
        <Icons name="list" />
      </div>
    </div>

    <!-- tolss view -->
    <div
      :class="[toggleView ? 'trans-0' : 'trans-x-100']"
      class="appMagazine-tools-view"
    >
      <div class="appMagazine-tools-view-box">
        <div class="appMagazine-tools-view-box-head">
          <Icons name="search" />
          <input type="text" placeholder="Search" />
        </div>
        <div class="appMagazine-tools-view-box-content">
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
        </div>
      </div>
      <div class="appMagazine-tools-view-close">x</div>
    </div>
  </div>
</template>
