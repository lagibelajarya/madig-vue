<script setup>
import Icons from "../components/Icons.vue";
import TheMagazine from "../components/TheMagazine.vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { urlApi, apiClient } from "/src/api/axios-config";
import axios from "axios";

const router = useRouter();
const route = useRoute();
let patchCover = urlApi;
let loadingContent = ref(false);
let toggleCopy = ref(false);
function goToNavigation(name) {
  router.push({ name: name });
}
let toggleBookmark = ref(false);
let toggleShare = ref(false);
let urlLink = window.location.href;
let routeId = route.params.id;

const rowDetail = reactive({
  items: [],
});
let getDetailMagazine = async () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  loadingContent.value = true;
  const { data } = await apiClient.get(`/magazine/${route.params.id}`);
  rowDetail.items = data.data;
  loadingContent.value = false;
};
onMounted(() => {
  getDetailMagazine();
});

function bgTitleStyle(name) {
  if (loadingContent.value) {
    return {
      background: "#012030",
    };
  } else {
    if (window.innerWidth <= 768) {
      return {
        background: `linear-gradient(to top,#012030 50%,transparent), url(${
          patchCover + name
        })`,
      };
    } else {
      return {
        background: `linear-gradient(to right,#012030 50%,transparent), url(${
          patchCover + name
        })`,
      };
    }
  }
}

window.addEventListener("resize", () => {
  bgTitleStyle();
});
function toClipboard() {
  let text = document.querySelector(
    ".popup-share-container-link-target span:nth-child(1)"
  ).innerHTML;
  navigator.clipboard.writeText(text);
  toggleCopy.value = true;
  setTimeout(() => {
    toggleCopy.value = false;
  }, 1000);
}
// function toShare() {
//   toggleShare.value = true;
//   window.addEventListener("click", (e) => {
//     if (
//       !document.querySelector(".btn-share").contains(e.target) &&
//       !document.querySelector(".popup-share").contains(e.target)
//     ) {
//       toggleShare.value = false;
//     }
//   });
// }
function forceFileDownload(response, title) {
  console.log(title);
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", title);
  document.body.appendChild(link);
  link.click();
}
let downloadWithAxios = (url, title) => {
  axios({
    method: "get",
    url,
    responseType: "arraybuffer",
  })
    .then((response) => {
      forceFileDownload(response, title);
    })
    .catch(() => alert("error occured"));
};
</script>
<template>
  <div class="detail-magazine">
    <div class="detail-magazine-container">
      <div class="detail-magazine-container-info">
        <div class="detail-magazine-container-info-breadcrumb">
          <div class="breadcrumb">
            <div class="breadcrumb-container">
              <RouterLink to="/magazine" class="breadcrumb-container-link"
                ><Icons name="arrow-left" /> Magazine
              </RouterLink>
              <span>/</span>
              <div class="breadcrumb-container-title">
                <div
                  v-if="loadingContent"
                  class="loader-content"
                  style="height: 2rem; width: 10rem"
                ></div>
                <p v-else>
                  {{ rowDetail.items.title }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="detail-magazine-container-info-title"
          :style="bgTitleStyle(rowDetail.items.cover)"
        >
          <div class="detail-magazine-container-info-title-content">
            <div class="detail-magazine-container-info-title-content-name">
              <div class="detail-magazine-container-info-title-content-name-1">
                <div
                  v-if="loadingContent"
                  class="loader-content"
                  style="height: 3rem; width: 100%"
                ></div>
                <p v-else>
                  {{ rowDetail.items.title }}
                </p>
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
                <a
                  href="/src/assets/magazine/coverDepan.svg"
                  v-if="route.params.id == 1"
                  class="btn-download"
                  download
                >
                  <Icons name="download" />
                  <p>Download</p>
                </a>
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-action">
              <div
                class="detail-magazine-container-info-title-content-action-date"
              >
                <div
                  v-if="loadingContent"
                  class="loader-content"
                  style="height: 3rem; width: 15rem"
                ></div>
                <div v-else>12 Desember 2022</div>
              </div>
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
                  class="btn-share"
                >
                  <Icons name="share" />
                </button>
                <!-- popup social media -->
                <div
                  class="popup-share"
                  :class="[toggleShare ? 'show' : 'hide']"
                  v-on:mouseover="toggleShare = true"
                  v-on:mouseleave="toggleShare = false"
                >
                  <div class="popup-share-container">
                    <div class="popup-share-container-icon">
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons name="facebook" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/intent/tweet?text=Apa yang ingin anda tulis untuk aplikasi majalah digital kita? By Nesfol"
                        ><Icons name="twitter"
                      /></a>
                      <a
                        target="_blank"
                        href="https://wa.me/?text=Bagikan Aplikasi majalah digital Nesfol"
                        data-action="share/whatsapp/share"
                        ><Icons name="whatsapp"
                      /></a>
                    </div>
                    <div class="popup-share-container-link">
                      <p class="popup-share-container-link-target">
                        <span v-if="toggleCopy">Link Copied</span>
                        <span v-else>
                          {{ urlLink }}
                        </span>
                      </p>
                      <div
                        class="popup-share-container-link-btn"
                        @click="toClipboard()"
                      >
                        <Icons name="clipboard" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="detail-magazine-container-info-title-content-read">
              <div
                v-if="loadingContent"
                class="loader-content"
                style="height: 4rem; width: "
              ></div>
              <button v-if="route.params.id != 1 && loadingContent == false">
                Cooming Soon
              </button>
              <button
                v-if="route.params.id == 1 && loadingContent == false"
                @click="goToNavigation('AppMagazine')"
                onclick="window.location.reload()"
              >
                Read Now
              </button>
            </div>
          </div>
          <div class="detail-magazine-container-info-title-img">
            <div
              v-if="loadingContent"
              class="loader-content"
              style="height: 43rem; width: 30rem"
            ></div>
            <img
              v-else
              v-bind:src="patchCover + rowDetail.items.cover"
              alt=""
            />
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
            <div
              v-if="loadingContent"
              class="loader-content"
              style="height: 10rem; width: 100%"
            ></div>
            <p v-else>
              {{ rowDetail.items.description }}
            </p>
          </div>
        </div>

        <div class="detail-magazine-container-bottom-box">
          <div class="detail-magazine-container-bottom-box-title">
            Others Magazine
          </div>

          <div class="detail-magazine-container-bottom-box-content">
            <TheMagazine @click="getDetailMagazine()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.detail-magazine {
  &-container {
    display: flex;
    flex-direction: column;
    &-info {
      padding: 5rem;
      padding: 3rem 5rem 5rem 5rem;
      @media screen and (max-width: 500px) {
        padding: 3rem;
      }
      &-breadcrumb {
        & .breadcrumb {
          margin-bottom: 1rem;
          &-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
              color: #6c757d;
              font-size: 1.8rem;
            }

            &-link {
              color: #6c757d;
              font-size: 1.6rem;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 1rem;
              transition: scale 0.5s;
              svg {
                height: 1.6rem;
                fill: #6c757d;
              }
              &:hover {
                & svg {
                  transform: scale(1.2);
                }
              }
            }
            &-title {
              color: white;
              font-size: 1.6rem;
              font-weight: 500;
            }
          }
        }
      }
      &-title {
        padding: 3rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;

        @media screen and (max-width: 950px) {
          flex-direction: column-reverse;
        }

        &-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          width: 50%;
          @media screen and (max-width: 950px) {
            width: 100%;
            gap: 2rem;
          }
          &-name {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            &-1 {
              font-size: 3.2rem;
              font-weight: 600;
              color: white;
              @media screen and (max-width: 500px) {
                font-size: 2.4rem;
              }
            }
            &-2 {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;

              span {
                font-size: 1.6rem;
                &:nth-child(1) {
                  color: #2962ff;
                }
                &:nth-child(2) {
                  color: rgb(95, 99, 104);
                }
              }
            }
          }
          &-category {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-end;
            &-item {
              padding: 0 2.4rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
              &:nth-child(1) {
                justify-content: center;
                position: relative;
                svg {
                  fill: white;
                  height: 2rem;
                }
                p {
                  font-size: 1.4rem;
                  color: rgba(white, 0.7);
                }
                &::after {
                  content: "";
                  position: absolute;
                  height: 60%;
                  width: 1px;
                  background: white;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
              &:nth-child(2) {
                position: relative;
                svg {
                  fill: white;
                  height: 2rem;
                }
                p {
                  font-size: 1.4rem;
                  color: rgba(white, 0.7);
                }
                &::after {
                  content: "";
                  position: absolute;
                  height: 60%;
                  width: 1px;
                  background: white;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
              &:nth-child(3) {
                p {
                  &:nth-child(1) {
                    font-size: 1.4rem;
                    color: white;
                  }
                  &:nth-child(2) {
                    font-size: 1.4rem;
                    color: rgba(white, 0.7);
                  }
                }
              }
              &:nth-child(4) {
                @media screen and (max-width: 547px) {
                  width: 100%;
                  padding: 0;
                }
                .btn-download {
                  flex: 1;
                  border: none;
                  outline: none;
                  padding: 0.5rem 2rem;
                  background: rgba(white, 0.8);
                  border-radius: 1rem;
                  text-decoration: none;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: 2rem;
                  @media screen and (max-width: 547px) {
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    align-self: stretch;
                    border-radius: 0.5rem;
                  }
                  svg {
                    height: 2rem;
                    fill: #012030;
                  }
                  p {
                    font-size: 1.2rem;
                    color: #012030;
                  }
                }
              }
            }
          }
          &-action {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media screen and (max-width: 950px) {
              flex-direction: column;
              align-items: flex-start;
              gap: 2rem;
            }
            &-date {
              color: rgba(grey, 0.8);
              font-size: 1.6rem;
            }
            &-btn {
              display: flex;
              align-items: center;
              gap: 2rem;
              position: relative;
              button {
                cursor: pointer;
                outline: none;
                border: none;
                background-color: transparent;
                &:nth-child(1) {
                  & .btn-add {
                    display: flex;
                    align-items: center;
                    border-radius: 0.5rem;
                    padding: 0.5rem 1rem;
                    gap: 0.5rem;
                    transition: all 0.2s;
                    svg {
                      height: 2rem;
                      fill: white;
                    }
                    p {
                      color: white;
                      font-size: 1.4rem;
                    }
                    &:hover {
                      background-color: rgba(white, 0.1);
                    }
                  }
                  & .btn-remove {
                    padding: 0.5rem 1rem;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    border-radius: 0.5rem;
                    gap: 0.5rem;
                    svg {
                      height: 2rem;
                      fill: #012030;
                    }
                    p {
                      color: #012030;
                      font-size: 1.4rem;
                    }
                  }
                }
                &:nth-child(2) {
                  svg {
                    fill: white;
                    height: 2rem;
                  }
                }
              }
            }

            & .popup-share {
              position: absolute;
              top: -13rem;
              transition: all 0.3s linear;

              &-container {
                display: flex;
                flex-direction: column;
                background: white;
                padding: 2rem;
                border-radius: 1.4rem;
                gap: 1rem;
                position: absolute;
                width: fit-content;
                @media screen and (max-width: 600px) {
                  width: 70vw;
                }
                &-icon {
                  display: flex;
                  gap: 0.5rem;
                  a {
                    cursor: pointer;
                    height: 4rem;
                    width: 4rem;
                    border-radius: 100%;
                    background: #012030;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                      min-height: 2.4rem;
                      height: 2.4rem;
                      min-width: 2.4rem;
                      width: 2.4rem;
                      fill: white;
                    }
                  }
                }
                &-link {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  &-target {
                    padding: 0.5rem 1rem;
                    color: white;
                    font-size: 1.4rem;
                    white-space: nowrap;
                    background-color: #012030;
                    border-radius: 0.5rem;
                    width: 30rem;
                    overflow: auto;
                    display: flex;
                    justify-content: center;
                  }
                  div {
                    cursor: pointer;
                    height: 3rem;
                    width: 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #012030;
                    border-radius: 0.5rem;
                    svg {
                      height: 2rem;
                      width: 2rem;
                      fill: white;
                    }
                  }
                }
              }
            }
          }
          &-read {
            margin-top: 2rem;
            width: 100%;
            button {
              cursor: pointer;
              width: 100%;
              padding: 1rem 2rem;
              background: white;
              border: none;
              outline: none;
              font-size: 1.6rem;
              font-weight: 500;
              border-radius: 0.7rem;
              transform: all 0.3s;
              &:hover {
                background-color: rgba(white, 0.8);
              }
            }
          }
        }
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          @media screen and (max-width: 950px) {
            width: 100%;
            justify-content: flex-start;
          }
          img {
            height: 43rem;
            border-radius: 1rem;
            @media screen and (max-width: 500px) {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    &-bottom {
      display: flex;
      padding: 0 5rem 5rem 5rem;
      gap: 2.5rem;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      @media screen and (max-width: 500px) {
        padding: 3rem;
        padding-top: 0;
      }
      &-desc {
        width: 50%;
        padding: 3rem;
        background: #012030;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        &-title {
          font-size: 2rem;
          color: white;
        }
        &-text {
          font-size: 1.4rem;
          color: white;
          line-height: 1.4;
        }
      }

      &-box {
        padding-left: 2.5rem;
        border-left: solid 1px white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 50%;
        @media screen and (max-width: 768px) {
          border: none;
          width: 100%;
          padding: 0;
        }
        &-slider {
        }
        &-title {
          font-size: 2rem;
          color: white;
          font-weight: 600;
        }
        &-content {
          justify-content: center;
          overflow: auto;
          display: flex;
          gap: 1.6rem;
          flex-wrap: wrap;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
}
</style>
