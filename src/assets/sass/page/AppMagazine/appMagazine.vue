<template>
  <div></div>
</template>
<style lang="scss">
.appMagazine {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  height: 100%;
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-bottom: 10rem;
    &-box {
      img {
        height: 50rem;
      }
    }
  }

  &-tools {
    &-display {
      position: fixed;
      bottom: 2rem;
      right: 50%;
      transform: translateX(50%);
      display: flex;
      gap: 3rem;
      display: flex;
      padding: 2rem;
      border-radius: 1rem;
      background: white;
      transition: all 1s linear;

      &-item {
        svg {
          height: 2rem;
          fill: black;
        }
      }
    }
    &-btn {
      z-index: 200;
      display: flex;
      gap: 3rem;
      padding: 2rem;
      border-radius: 1rem;
      background: white;

      position: fixed;
      top: calc(6.4rem + 3rem);
      right: 3rem;

      & > * {
        cursor: pointer;
      }
      svg {
        height: 2rem;
        fill: black;
      }
      &-search {
      }
      &-setting {
      }
      &-view {
      }
    }

    &-view {
      z-index: 200;
      position: fixed;
      height: 100%;
      width: 30rem;
      background: white;
      border-radius: 0 1rem 1rem 0;
      padding: 2rem;
      transition: all 0.7s linear;

      &-box {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        height: -webkit-fill-available;
        position: relative;
        &-close {
          height: 3rem;
          width: 3rem;
          position: absolute;
          right: -3rem;
          top: 50%;
          transform: translateY(-50%);
          background-color: white;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            height: 2rem;
          }
        }
        &-head {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          border: solid 1px black;
          border-radius: 1rem;
          svg {
            height: 2rem;
          }
          input {
            border: none;
            outline: none;
            width: 100%;
          }
        }
        &-content {
          overflow: auto;
          &-item {
            img {
              // height: 15rem;
              width: 100%;
            }
            p {
            }
          }
        }
      }
    }

    &-general {
      z-index: 200;
      position: fixed;
      height: 50%;
      width: 30rem;
      bottom: 0;
      right: 10rem;
      background: white;
      border-radius: 1rem 1rem 0 0;
      padding: 2rem;
      transition: all 0.7s linear;
      &-container {
      }
      &-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-bottom: solid 1px black;
        &-title {
          font-size: 2rem;
          font-weight: 600;
        }
        &-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-left {
            font-size: 1.4rem;
          }
          &-right {
            svg {
              height: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
