<script setup>
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
</script>
<template>
  <div class="detail-magazine">
    <div class="detail-magazine-container">
      <div class="detail-magazine-container-info">
        <!-- <div class="detail-magazine-container-info-bg">
            
        </div> -->
        <div class="detail-magazine-container-info-title">
          <div class="detail-magazine-container-info-title-content">
            <div class="detail-magazine-container-info-title-content-name">
              <div class="detail-magazine-container-info-title-content-name-1">
                News Technology SMKN 1 Purwosari
              </div>
              <div class="detail-magazine-container-info-title-content-name-2">
                <span> Technology</span>
                <span>&#8226;</span>
                <span>16 Pages</span>
                <span>&#8226;</span>
                <span>13+</span>
              </div>
              <div class="detail-magazine-container-info-title-content-name-3">
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
              </div>
              <div class="detail-magazine-container-info-title-content-name-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                tempora ea quidem?
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-action">
              <p class="detail-magazine-container-info-title-content-action-date">
                Saturday, 19 December 2022
              </p>
              <p class="detail-magazine-container-info-title-content-action-btn">
                <button @click="goToNavigation('magazine')">Read Now</button>
                <button>
                  <Icons name="bookmark" />
                </button>
                <button>
                  <Icons name="share" />
                </button>
              </p>
            </div>
          </div>
          <div class="detail-magazine-container-info-title-img">
            <img src="/src/assets/magazine/magazine1.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- recomendation magazine -->
      <div class="detail-magazine-container-box">
        <div class="detail-magazine-container-box-title">populer Magazine</div>

        <div class="detail-magazine-container-box-content">
          <div
            class="detail-magazine-container-box-content-mgz"
            @click="goToNavigation('detailMagazine')"
          >
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="detail-magazine-container-box-content-mgz">
            <div
              class="detail-magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
