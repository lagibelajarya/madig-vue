<script setup>
import Icons from "../components/Icons.vue";
import magazineComp from "../components/TheMagazine.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
let toggleBookmark = ref(false);
let toggleShare = ref(false);
let urlLink = window.location.href;
</script>
<template>
  <div class="detail-magazine">
    <div class="detail-magazine-container">
      <div class="detail-magazine-container-info">
        <div class="detail-magazine-container-info-title">
          <div class="detail-magazine-container-info-title-content">
            <div class="detail-magazine-container-info-title-content-name">
              <div class="detail-magazine-container-info-title-content-name-1">
                Release The Cocoon
              </div>
              <div class="detail-magazine-container-info-title-content-name-2">
                <span> GEN-FIRE</span>
                <span>smkn1purwosari.sch.id</span>
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-category">
              <div
                class="detail-magazine-container-info-title-content-category-item"
              >
                <Icons name="eye" />
                <p>123</p>
              </div>
              <div
                class="detail-magazine-container-info-title-content-category-item"
              >
                <Icons name="book-globe" />
                <p>eBook</p>
              </div>
              <div
                class="detail-magazine-container-info-title-content-category-item"
              >
                <p>16</p>
                <p>Page</p>
              </div>
              <div
                class="detail-magazine-container-info-title-content-category-item"
              >
                <a href="../assets/img/img1.jpg" class="btn-download" download>
                  <Icons name="download" />
                  <p>Download</p>
                </a>
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-action">
              <p
                class="detail-magazine-container-info-title-content-action-date"
              >
                19 November 2022
              </p>
              <div
                class="detail-magazine-container-info-title-content-action-btn"
              >
                <button @click="toggleBookmark = !toggleBookmark">
                  <div class="btn-add" v-if="toggleBookmark">
                    <Icons name="bookmark-outline" />
                    <p>Add To Bookmark</p>
                  </div>
                  <div class="btn-remove" v-else>
                    <Icons name="bookmark" />
                    <p>Remove To Bookmark</p>
                  </div>
                </button>
                <button
                  v-on:mouseover="toggleShare = true"
                  v-on:mouseleave="toggleShare = false"
                >
                  <Icons name="share" />
                </button>
                <!-- popup social media -->
                <div
                  class="popup-share"
                  v-on:mouseover="toggleShare = true"
                  v-on:mouseleave="toggleShare = false"
                  :class="[toggleShare ? 'show' : 'hide']"
                >
                  <div class="popup-share-container">
                    <div class="popup-share-container-icon">
                      <div><Icons name="facebook" /></div>
                      <div><Icons name="twitter" /></div>
                      <div><Icons name="instagram" /></div>
                    </div>
                    <div class="popup-share-container-link">
                      <p>{{ urlLink }}</p>
                      <div><Icons name="clipboard" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-read">
              <button @click="goToNavigation('AppMagazine')">Read Now</button>
            </div>
          </div>
          <div class="detail-magazine-container-info-title-img">
            <img src="/src/assets/magazine/coverDepan.svg" alt="" />
          </div>
          <!-- share social media popup -->
        </div>
      </div>

      <!-- recomendation magazine -->
      <div class="detail-magazine-container-bottom">
        <!-- desc magazine -->
        <div class="detail-magazine-container-bottom-desc">
          <div class="detail-magazine-container-bottom-desc-title">
            Magazine Description
          </div>
          <div class="detail-magazine-container-bottom-desc-text">
            Setelah melalui masa pandemi, sudahkan kita mempunyai kebiasaan
            baru? Seharusnya kebanyakan dari kita semua sudah mempunyai
            kebiasaan baru masing masing dan dapat berkembang menjadi lebih
            baik, terutama bagi para siswa dimana saat masa pandemi mendapati
            pembelajaran daring dan menjalani Pertemuan Tatap Muka Terbatas atau
            disebut juga PTMT. <br />
            <br />
            Di majalah yang kita terbitkan kali ini, terdapat beberapa
            perkembangan proses belajar mengajar secara daring dengan
            menggunakan beberapa aplikasi yang tersedia di gadget atau handphone
            yang sering kita gunakan. Beberapa aplikasi yang digunakan ada
            Google Classroom, Teams, Google Meet dan banyak lain sebagainya.
            Yang dimana dapat membuat kita bisa melaksanakan kegiatan belajar
            mengajar dengan cara yang berbeda namun juga efektif. Dan di majalah
            kita kali ini ada beberapa artikel yang menjelaskan tentang Maspion
            IT, Sekolah kami, beberapa Iklan, dan juga Tim kami yang sudah
            membuat aplikasi website madig ini.
          </div>
        </div>

        <div class="detail-magazine-container-bottom-box">
          <div class="detail-magazine-container-bottom-box-title">
            Others Magazine
          </div>

          <div class="detail-magazine-container-bottom-box-content">
            <magazineComp @click="goToNavigation('detailMagazine')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
