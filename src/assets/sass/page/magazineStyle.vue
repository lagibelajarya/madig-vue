<script setup></script>
<template>
  <div></div>
</template>
<style lang="scss">
.magazine {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  &-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &-box {
      padding: 0 5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &-slider {
        & .swiper {
          max-height: 43rem;
          &-wrapper {
            max-height: 43rem;
          }
          &-slide {
            max-height: 43rem;
            img{
              max-height: 43rem;
            }
          }
        }
      }
      &-title {
        font-size: 1.6rem;
        color: white;
        font-weight: 600;
      }
      &-content {
        overflow: auto;
        display: flex;
        gap: 1.6rem;
        &::-webkit-scrollbar {
          display: none;
        }

        &-mgz {
          &-img {
            border-radius: 1rem;
            background-position: top !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            width: 20rem;
            height: 30rem;
          }
        }
      }
    }
  }
}
// detail magazine
.detail-magazine {
  &-container {
    &-info {
      padding: 5rem;
      &-title {
        padding: 5rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-between;
        height: 43rem;
        background-image: linear-gradient(to right, #012030 50%, transparent),
          url("/src/assets/magazine/magazine1.jpg");
        background-position: 100% !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        &-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          width: 50%;
          &-name {
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
            &-1 {
              font-size: 2rem;
              font-weight: 600;
              color: white;
            }
            &-2 {
              display: flex;
              gap: 0.5rem;
              span {
                color: rgba(grey, 0.8);
                font-size: 1.6rem;
                &:nth-child(1) {
                }
                &:nth-child(2) {
                }
                &:nth-child(3) {
                }
                &:nth-child(4) {
                }
                &:nth-child(5) {
                }
              }
            }
            &-3 {
              display: flex;
              gap: 0.5rem;
              svg {
                height: 2.4rem;
                fill: yellow;
              }
            }
            &-4 {
              font-size: 1.6rem;
              font-weight: 400;
              color: white;
            }
          }
          &-action {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-date {
              color: rgba(grey, 0.8);
              font-size: 1.6rem;
            }
            &-btn {
              display: flex;
              align-items: center;
              gap: 2rem;
              button {
                outline: none;
                border: none;
                background-color: transparent;
                &:nth-child(1) {
                  padding: 0.5rem 2rem;
                  border-radius: 0.5rem;
                  background-color: white;
                }
                &:nth-child(2) {
                  svg {
                    height: 2rem;
                    fill: white;
                  }
                }
                &:nth-child(3) {
                  svg {
                    fill: white;
                    height: 2rem;
                  }
                }
              }
            }
          }
        }
        &-img {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 100%;
            border-radius: 1rem;
          }
        }
      }
    }
    &-box {
      padding: 0 5rem 5rem 5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &-slider {
      }
      &-title {
        font-size: 1.6rem;
        color: white;
        font-weight: 600;
      }
      &-content {
        overflow: auto;
        display: flex;
        gap: 1.6rem;
        &::-webkit-scrollbar {
          display: none;
        }

        &-mgz {
          &-img {
            border-radius: 1rem;
            background-position: top !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            width: 20rem;
            height: 30rem;
          }
        }
      }
    }
  }
}
</style>
