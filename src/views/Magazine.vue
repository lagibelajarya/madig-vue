<script setup>
import { ref } from "vue";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
import Swiper from 'swiper'

let toggleRate = ref(false);
let toggleShare = ref(false);
let toggleMark = ref(false);
const url = window.location.href;
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
</script>
<template>
  <div class="magazine">
    <div class="magazine-container">
      <div class="magazine-container-box">
        <div class="magazine-container-box-slider">
          <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <img src="/src/assets/magazine/magazine1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="/src/assets/magazine/magazine1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="/src/assets/magazine/magazine1.jpg" alt="">
              </div>
              ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
      <div class="magazine-container-box">
        <div class="magazine-container-box-title">Your Magazine</div>

        <div class="magazine-container-box-content">
          <div
            class="magazine-container-box-content-mgz"
            @click="goToNavigation('detailMagazine')"
          >
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
        </div>
      </div>
      <div class="magazine-container-box">
        <div class="magazine-container-box-title">Your Magazine</div>

        <div class="magazine-container-box-content">
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
          <div class="magazine-container-box-content-mgz">
            <div
              class="magazine-container-box-content-mgz-img"
              style="background: url('src/assets/magazine/magazine1.jpg')"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="magazine-container">
      <div class="magazine-box">
        <div class="magazine-box-right">
          <img src="../assets/magazine/magazine1.jpg" alt="" />
        </div>
        <div class="magazine-box-left">
          <div class="magazine-box-left-top">
            <div class="magazine-box-left-top-rating">
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
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
                <Icons name="bookmark" />
              </div>
              <div
                @click="toggleShare = !toggleShare"
                class="magazine-box-left-top-action-btn"
              >
                <Icons name="share" />
              </div>
              <div
                @click="toggleRate = !toggleRate"
                class="magazine-box-left-top-action-btn"
              >
                <Icons name="star" />
              </div>
            </div>
          </div>
          <div class="magazine-box-left-bottom">
            <div class="magazine-box-left-bottom-line"><hr /></div>
            <div class="magazine-box-left-bottom-desc">
              Lorem ipsum dolor sit, amet
            </div>
            <div class="magazine-box-left-bottom-btn">
              <button @click="goToNavigation('magazine')">Read Now</button>
              <button>
                <Icons name="download" />
              </button>
            </div>
          </div>
        </div>

        <div
          :class="[toggleRate ? 'show trans-0' : 'hide trans-y-100']"
          class="magazine-box-popup-rating"
        >
          <div class="popup-container">
            <p>Apakah anda menyukai majalah ini?</p>
            <p>Berikan ratingmu kepada majalah kami</p>
            <div class="popup-container-star">
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
              <span><Icons name="star" /></span>
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
          :class="[toggleShare ? 'show trans-0' : 'hide trans-y-100']"
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
    </div> -->
  </div>
</template>
