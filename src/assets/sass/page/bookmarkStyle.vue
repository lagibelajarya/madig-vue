<template>
  <div></div>
</template>
<script setup></script>

<style lang="scss">
.bookmark {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;

  .bg-blur {
    backdrop-filter: blur(10px);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  &-container {
    padding: 0 10rem 10rem 10rem;
    &-title {
      font-weight: 600;
      font-size: 4.3rem;
      color: #fff;
      margin-bottom: 3.2rem;
    }
    .bookmark-slider {
      display: flex;
      gap: 5.6rem;
      overflow-x: auto;
      .bookmark-box {
        &-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          svg {
            height: 3rem;
            color: yellow;
            fill: yellow;
          }
          p {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
        &-img {
          img {
            height: 40rem;
            border-radius: 2rem;
          }
        }
        &-desc {
          margin-top: 1rem;
          text-transform: capitalize;
          p {
            color: white;
            &:nth-child(1) {
              font-size: 2.2rem;
              font-weight: 600;
            }
            &:nth-child(2) {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
}
</style>
