<script setup>
import { ref } from "vue";
let iconsrc = "src/components/icons/";
const iconBookMark = `${iconsrc}bookmarks.svg`;
const iconShare = `${iconsrc}share-social.svg`;
const iconStar = `${iconsrc}star.svg`;
const iconDownload = `${iconsrc}cloud-download.svg`;
const iconCopy = `${iconsrc}copy.svg`;

let toggleRate = ref(false);
let toggleShare = ref(false);
let toggleMark = ref(false);
const url = window.location.href;
</script>
<template>
  <div class="magazine">
    <div class="nav-logo">
      <img src="../assets/logo.svg" alt="Logo" />
      <p>LogoProject</p>
    </div>
    <div class="magazine-container">
      <div class="magazine-box">
        <div class="magazine-box-right">
          <img src="../assets/magazine/magazine1.jpg" alt="" />
        </div>
        <div class="magazine-box-left">
          <div class="magazine-box-left-top">
            <div class="magazine-box-left-top-rating">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <p>4.8/5</p>
            </div>
            <div class="magazine-box-left-top-title">
              Prestasi di tahun lama
            </div>
            <div class="magazine-box-left-top-date">Friday , 4 Juny 2022</div>
            <div class="magazine-box-left-top-action">
              <div
                :class="{ 'bg-white': toggleMark }"
                @click="toggleMark = !toggleMark"
                class="magazine-box-left-top-action-btn"
              >
                <img v-bind:src="iconBookMark" alt="bookmark" />
              </div>
              <div
                @click="toggleShare = !toggleShare"
                class="magazine-box-left-top-action-btn"
              >
                <img v-bind:src="iconShare" alt="bookmark" />
              </div>
              <div
                @click="toggleRate = !toggleRate"
                class="magazine-box-left-top-action-btn"
              >
                <img v-bind:src="iconStar" alt="bookmark" />
              </div>
            </div>
          </div>
          <div class="magazine-box-left-bottom">
            <div class="magazine-box-left-bottom-line"><hr /></div>
            <div class="magazine-box-left-bottom-desc">
              Lorem ipsum dolor sit, amet
            </div>
            <div class="magazine-box-left-bottom-btn">
              <button>Read Now</button>
              <button><img v-bind:src="iconDownload" alt="" /></button>
            </div>
          </div>
        </div>

        <!-- popup -->
        <div
          :class="[toggleRate ? 'show ' : 'hide']"
          class="magazine-box-popup-rating"
        >
          <div class="popup-container">
            <p>Apakah anda menyukai majalah ini?</p>
            <p>Berikan ratingmu kepada majalah kami</p>
            <div class="popup-container-star">
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
            </div>
            <div
              @click="toggleRate = !toggleRate"
              class="popup-container-close"
            >
              x
            </div>
          </div>
        </div>

        <div
          :class="[toggleShare ? 'show ' : 'hide']"
          class="magazine-box-popup-share"
        >
          <div class="popup-container">
            <h1 class="popup-container-title">Bagikan majalah ini</h1>
            <div class="popup-container-medsos">
              <div class="popup-container-medsos-btn">f</div>
              <div class="popup-container-medsos-btn">i</div>
              <div class="popup-container-medsos-btn">w</div>
            </div>
            <div class="popup-container-link">
              <p>Atau salin link</p>
              <div class="popup-container-link-box">
                <div class="popup-container-link-box-field">{{ url }}</div>
                <div class="popup-container-link-box-btn">
                  <img v-bind:src="iconCopy" alt="" />
                </div>
              </div>
            </div>
            <div
              @click="toggleShare = !toggleShare"
              class="popup-container-close"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
