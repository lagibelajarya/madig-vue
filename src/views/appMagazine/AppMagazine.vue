<script setup>
import Icons from "../../components/Icons.vue";
import { ref } from "vue";
let toggleView = ref(false);
let toggleMusic = ref(false);
</script>
<template>
  <div class="appMagazine">

    <div class="appMagazine-content">
      <div class="appMagazine-content-box">
        <img src="../../assets/magazine/magazine1.jpg" alt="" />
      </div>
    </div>

    <!-- tools display -->
    <div
      class="appMagazine-tools-display"
      :class="{ 'trans-tools-btn': toggleView }"
    >
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
      <div
        class="appMagazine-tools-btn-setting"
        @click="(toggleMusic = !toggleMusic), (toggleView = false)"
      >
        <Icons name="construct" />
      </div>
      <div
        class="appMagazine-tools-btn-view"
        @click="(toggleView = !toggleView), (toggleMusic = false)"
      >
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
        <div
          @click="toggleView = !toggleView"
          class="appMagazine-tools-view-box-close"
        >
          <Icons name="chevron-right" />
        </div>
      </div>
    </div>

    <!-- tools general -->
    <div
      :class="[toggleMusic ? 'trans-0' : 'trans-y100']"
      class="appMagazine-tools-general"
    >
      <div class="appMagazine-tools-general-container">
        <div class="appMagazine-tools-general-box">
          <div class="appMagazine-tools-general-box-title">Audio</div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">Music</div>
            <div class="appMagazine-tools-general-box-item-right">
              <Icons name="zoomIn" />
            </div>
          </div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Music Volume
            </div>
            <div class="appMagazine-tools-general-box-item-right">
              <Icons name="zoomIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
