<template>
  <div class="appMagazine">
    <div class="appMagazine-content">
      <div class="appMagazine-content-box">
        <!-- flipbook view -->
        <div
          :class="[
            toggleOptionView && toggleCoverflow == false ? 'show' : 'hide',
          ]"
          class="flipbook-viewport"
        >
          <div class="container">
            <div class="flipbook">
              <div
                v-for="item in pages"
                class="flipbook-page"
                :style="{
                  background: `url(${
                    item.img
                  }) no-repeat center `,
                  backgroundSize: 'cover',
                }"
              ></div>
            </div>
          </div>

          <!-- tools display -->
          <div
            class="appMagazine-tools-display"
            :class="{ 'trans-tools-btn': toggleView }"
          >
            <div class="appMagazine-tools-display-item" @click="zoomIn()">
              <Icons name="zoomIn" />
            </div>

            <div
              class="appMagazine-tools-display-item previous-button"
              @click="previousFlip()"
            >
              <Icons name="chevron-left" />
            </div>

            <div
              class="appMagazine-tools-display-item next-button"
              @click="nextFlip()"
            >
              <Icons name="chevron-right" />
            </div>

            <div class="appMagazine-tools-display-item" @click="zoomOut()">
              <Icons name="zoomOut" />
            </div>
          </div>
        </div>
        <!-- pages view -->
        <div
          v-if="toggleOptionView == false"
          v-show="toggleCoverflow == false"
          class="default-book"
        >
          <div v-for="item in pages" class="default-book-page">
            <img
              v-bind:src="item.img"
              :alt="item.img"
              :id="item.id"
            />
          </div>
        </div>
        <div v-if="toggleCoverflow">
          <SliderAppMagazine />
        </div>
      </div>
    </div>

    <!-- tools btn -->
    <div class="appMagazine-tools-btn">
      <div
        class="appMagazine-tools-btn-setting"
        @click="(toggleTools = !toggleTools), (toggleView = false)"
      >
        <Icons name="construct" />
      </div>
      <div
        class="appMagazine-tools-btn-view"
        @click="(toggleView = !toggleView), (toggleTools = false)"
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
        <div class="appMagazine-tools-view-box-content">
          <div
            v-for="item in pages"
            class="appMagazine-tools-view-box-content-item"
          >
            <a @click="turnPage(item.id)" :href="`#${item.id}`">
              <img v-bind:src="item.img" :alt="item.img" />
            </a>
          </div>
        </div>
        <!-- <div
          @click="toggleView = !toggleView"
          class="appMagazine-tools-view-box-close"
        >
          <Icons name="chevron-right" />
        </div> -->
      </div>
    </div>

    <!-- tools general -->
    <div
      :class="[toggleTools ? 'trans-0' : 'trans-y100']"
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
                @click="(toggleMusic = !toggleMusic), playAudio()"
                class="toggle-switch"
              >
                <label :class="{ active: toggleMusic }"></label>
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
                  @change="volumeSlider()"
                  v-model="valueVolume"
                  max="100"
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
                  (toggleCoverflow = false),
                  (toggleAutoScroll = false)
              "
            >
              <div v-if="toggleOptionView" class="btn-option">Scrolling</div>
              <div v-else class="btn-option">Slider</div>
            </div>
          </div>
          <div class="appMagazine-tools-general-box-item">
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
          </div>
          <div class="appMagazine-tools-general-box-item">
            <div class="appMagazine-tools-general-box-item-left">
              Auto Scroll
            </div>
            <div class="appMagazine-tools-general-box-item-right">
              <div
                @click="(toggleAutoScroll = !toggleAutoScroll), activeScroll()"
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

<script setup>
import Icons from "../../components/Icons.vue";
import { ref, reactive, onMounted } from "vue";
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
import { useRouter } from "vue-router";
import { apiClient, urlApi } from "/src/api/axios-config";
import { async } from "q";
const router = useRouter();
let toggleView = ref(false);
let toggleTools = ref(false);
let toggleMusic = ref(false);
let toggleOptionView = ref(true);
let toggleAutoScroll = ref(false);
let toggleCoverflow = ref(false);
const pages = ref([
  {
    id: 1,
    img: coverDepan,
  },
  {
    id: 2,
    img: majalah1,
  },
  {
    id: 3,
    img: majalah2,
  },
  {
    id: 4,
    img: majalah3,
  },
  {
    id: 5,
    img: majalah4,
  },
  {
    id: 6,
    img: majalah5,
  },
  {
    id: 7,
    img: majalah6,
  },
  {
    id: 8,
    img: majalah7,
  },
  {
    id: 9,
    img: majalah8,
  },
  {
    id: 10,
    img: majalah9,
  },
  {
    id: 11,
    img: majalah10,
  },
  {
    id: 12,
    img: majalah11,
  },
  {
    id: 13,
    img: majalah12,
  },
  {
    id: 14,
    img: majalah13,
  },
  {
    id: 15,
    img: coverBelakang,
  },
]);

// const getPages = async () => {
//   const { data } = await apiClient.get(`/detail-magazine/1`);
//   pages.items = data.data;
// };
// onMounted(async () => {
//   await getPages();
//   loadApp();
// });
// let pages = reactive({
//   items: [],
// });
if (router.hasRoute("AppMagazine")) {
  function closeElement(el1, el2, toggle) {
    document.addEventListener("click", (e) => {
      if (
        !document.querySelector(`.${el1}`).contains(e.target) &&
        !document.querySelector(`.${el2}`).contains(e.target)
      ) {
        toggle.value = false;
      }
    });
  }
  closeElement(
    "appMagazine-tools-btn-setting ",
    "appMagazine-tools-general",
    toggleTools
  );
  closeElement(
    "appMagazine-tools-btn-view ",
    "appMagazine-tools-view",
    toggleView
  );
}

let audio = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

function loadApp() {
  let flipbook = $(".flipbook");
  flipbook.turn({
    // width: 2480 ,
    width: $(window).width() / 1.3,
    height: $(window).width() / 1.9,
    gradients: true,
    autoCenter: true,
  });

  // // Using arrow keys to turn the page
  $(document).keydown(function (e) {
    var previous = 37,
      next = 39,
      esc = 27;

    switch (e.keyCode) {
      case previous:
        $(".flipbook").turn("previous");
        e.preventDefault();
        break;
      case next:
        $(".flipbook").turn("next");
        e.preventDefault();

        break;
      // case esc:
      //   $(".flipbook-viewport").zoom("zoomOut");
      //   e.preventDefault();

      //   break;
    }
  });
}
yepnope({
  test: Modernizr.csstransforms,
  yep: ["/src/components/flipbook/lib/turn.js"],
  nope: ["/src/components/flipbook/lib/turn.html4.min.js"],
  both: [
    // "../../lib/zoom.min.js",
    "/src/components/flipbook/js/magazine.js",
    // "css/magazine.css",
  ],
  complete: loadApp,
});
// Load the HTML4 version if there's not CSS transform
function zoomTo(event) {
  setTimeout(function () {
    if ($(".flipbook-viewport").data().regionClicked) {
      $(".flipbook-viewport").data().regionClicked = false;
    } else {
      if ($(".flipbook-viewport").zoom("value") == 1) {
        $(".flipbook-viewport").zoom("zoomIn", event);
      } else {
        $(".flipbook-viewport").zoom("zoomOut");
      }
    }
  }, 1);
}
function resizeViewport() {
  let width = $(window).width(),
    height = $(window).height(),
    options = $(".flipbook").turn("options");
  let finalWidth = width / 1.3,
    finalHeight = width / 1.9;
  $(".flipbook .container , .flipbook  ").css({
    width: finalWidth,
    height: finalHeight,
  });
  $(".flipbook-viewport .page-wrapper , .flipbook-page ").css({
    width: finalWidth / 2,
    height: finalHeight,
  });
}
if ($.isTouch) {
  $(".magazine-viewport").bind("zoom.doubleTap", zoomTo);
} else {
  $(".magazine-viewport").bind("zoom.tap", zoomTo);
}

$(window)
  .resize(function () {
    resizeViewport();
  })
  .bind("orientationchange", function () {
    resizeViewport();
  });
function previousFlip() {
  $(".flipbook").turn("previous");
}
function nextFlip() {
  $(".flipbook").turn("next");
}
function zoomIn() {
  $(".flipbook").turn("zoom", 1.5);
}
function zoomOut() {
  $(".flipbook").turn("zoom", 1);
}
function turnPage(index) {
  if (toggleOptionView.value && toggleCoverflow.value == false) {
    $(".flipbook").turn("page", index);
  }
}

function activeScroll(timedelay = 1) {
  var scrollId;
  var height = 0;
  var minScrollHeight = 1;
  if (toggleAutoScroll.value) {
    scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
        window.scrollBy(0, minScrollHeight);
      } else {
        clearInterval(scrollId);
      }
      height += minScrollHeight;
    }, timedelay);
    // window.addEventListener("scroll", () => {
    //   toggleAutoScroll.value = false;
    // });
    console.log(`toggleautoscroll is true`);
  } else {
    console.log(`toggleautoscroll is false`);
    scrollId = false;
  }
}
let valueVolume = ref(100);
function volumeSlider(e) {
  audio.volume = valueVolume.value / 100;
}
function playAudio(e) {
  if (toggleMusic && audio.paused) {
    return audio.play();
  } else {
    return audio.pause();
  }
}
</script>
