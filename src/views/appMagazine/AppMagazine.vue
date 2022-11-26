<script setup>
import Icons from "../../components/Icons.vue";
import { ref } from "vue";
import { value } from "dom7";
import Flipbook from "flipbook-vue";

import coverDepan from "../../assets/magazine/coverdepan.svg";
import majalah1 from "../../assets/magazine/isi-1.svg";
import majalah2 from "../../assets/magazine/isi-2.svg";
import majalah3 from "../../assets/magazine/isi-3.svg";
import majalah4 from "../../assets/magazine/isi-4.svg";
import majalah5 from "../../assets/magazine/isi-5.svg";
import majalah6 from "../../assets/magazine/isi-6.svg";
import majalah7 from "../../assets/magazine/isi-7.svg";
import majalah8 from "../../assets/magazine/isi-8.svg";
import majalah9 from "../../assets/magazine/isi-9.svg";
import majalah10 from "../../assets/magazine/isi-10.svg";
import majalah11 from "../../assets/magazine/isi-11.svg";
import majalah12 from "../../assets/magazine/isi-12.svg";
import majalah13 from "../../assets/magazine/isi-13.svg";
import video from "../../assets/magazine/videoMaspion.webp";
import coverBelakang from "../../assets/magazine/coverBelakang.svg";
import SliderAppMagazine from "../../components/SliderAppMagazine.vue";
import $ from "jquery";
// import turn from '../../assets/js/turn.min.js'

// let isi0 = "src/assets/magazine/isi.html";
let toggleView = ref(false);
let toggleMusic = ref(false);
let toggleSwitch = ref(false);
let toggleOptionView = ref(true);
let toggleAutoScroll = ref(false);
let toggleCoverflow = ref(false);
const pages = ref([
  null,
  coverDepan,
  video,
  majalah1,
  majalah2,
  majalah3,
  majalah4,
  majalah5,
  majalah6,
  majalah7,
  majalah8,
  majalah9,
  majalah10,
  majalah11,
  majalah12,
  majalah13,
  coverBelakang,
]);
let audio = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

let volume = document.querySelector("#volume");
let play = document.querySelector("#play");
function scr() {
  window.scrollBy(0, 1);
}
function looping() {
  setTimeout(scr, 100);
}
function pageScroll() {
  if (toggleAutoScroll) {
    looping();
  } else {
  }
  function autoSc() {}
}

function avtiveScroll() {
  pageScroll();
}
function volumeSlider(e) {
  audio.volume = e.currentTarget.value / 100;
}
function playAudio(e) {
  return audio.paused ? audio.play() : audio.pause();
}
function setDefault() {
  toggleCoverflow.value = false;
}
function clickMag(index) {
  document.querySelector(".appMagazine-tools-display-item.right").click();
}
</script>
<template>
  <div class="appMagazine">
    <div class="appMagazine-content">
      <div class="appMagazine-content-box">
        <!-- flipbook view -->
        <flipbook
          v-if="toggleOptionView"
          v-show="toggleCoverflow == false"
          class="flipbook"
          :pages="pages"
          v-slot="flipbook"
        >
          <div
            class="appMagazine-tools-display"
            :class="{ 'trans-tools-btn': toggleView }"
          >
            <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canZoomIn }"
              @click="flipbook.zoomIn"
            >
              <Icons name="zoomIn" />
            </div>
            <!-- <div class="appMagazine-tools-display-item">
              <Icons name="backward" />
            </div> -->
            <div
              class="appMagazine-tools-display-item left"
              :class="{ disabled: !flipbook.canFlipLeft }"
              @click="flipbook.flipLeft"
            >
              <Icons name="chevron-left" />
            </div>
            <!-- <div class="appMagazine-tools-display-item">
              <Icons name="play" />
            </div> -->
            <div
              class="appMagazine-tools-display-item right"
              :class="{ disabled: !flipbook.canFlipRight }"
              @click="flipbook.flipRight"
            >
              <Icons name="chevron-right" />
            </div>
            <!-- <div class="appMagazine-tools-display-item">
              <Icons name="forward" />
            </div> -->
            <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canZoomOut }"
              @click="flipbook.zoomOut"
            >
              <Icons name="zoomOut" />
            </div>
          </div>
        </flipbook>
        <!-- pages view -->
        <div
          v-if="toggleOptionView == false"
          v-show="toggleCoverflow == false"
          class="default-book"
        >
          <div v-for="item in pages" class="default-book-page">
            <img v-bind:src="item" alt="" @click="clickMag()" />
          </div>
        </div>
        <!-- <div v-if="toggleCoverflow">
          <SliderAppMagazine />
        </div> -->
      </div>
    </div>

    <!-- tools btn -->
    <div class="appMagazine-tools-btn">
      <!-- <div class="appMagazine-tools-btn-search"><Icons name="search" /></div> -->
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
          <div
            v-for="item in pages"
            class="appMagazine-tools-view-box-content-item"
          >
            <img v-bind:src="item" alt="" />
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
        <!-- box general tools -->
        <div class="appMagazine-tools-general-box">
          <div class="appMagazine-tools-general-box-title">Audio</div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">Music</div>
            <div class="appMagazine-tools-general-box-item-right">
              <div
                @click="(toggleSwitch = !toggleSwitch), playAudio()"
                class="toggle-switch"
              >
                <label :class="{ active: toggleSwitch }"></label>
              </div>
            </div>
          </div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Music Volume
            </div>
            <div class="appMagazine-tools-general-box-item-right">
              <div class="volume-slider">
                <input
                  type="range"
                  id="volume"
                  value="100"
                  v-on:input="volumeSlider(value)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="appMagazine-tools-general-box">
          <div class="appMagazine-tools-general-box-title">Magazine</div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Magazine Mode
            </div>
            <div
              class="appMagazine-tools-general-box-item-right"
              @click="
                (toggleOptionView = !toggleOptionView),
                  (toggleCoverflow = false)
              "
            >
              <div v-if="toggleOptionView" class="btn-option">Scrolling</div>
              <div v-else class="btn-option">Slider</div>
            </div>
          </div>
          <!-- <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Magazine Coverflow
            </div>
            <div class="appMagazine-tools-general-box-item-right">
              <div
                @click="toggleCoverflow = !toggleCoverflow"
                class="toggle-switch"
              >
                <label :class="{ active: toggleCoverflow }"></label>
              </div>
            </div>
          </div> -->
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Auto Scroll
            </div>
            <div class="appMagazine-tools-general-box-item-right">
              <div
                @click="(toggleAutoScroll = !toggleAutoScroll), pageScroll()"
                class="toggle-switch"
              >
                <label :class="{ active: toggleAutoScroll }"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flipbook {
  width: 80vw;
  height: 80vh;
}
</style>
