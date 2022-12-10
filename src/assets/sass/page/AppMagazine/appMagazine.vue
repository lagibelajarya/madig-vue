<template>
  <div></div>
</template>
<style lang="scss">
.appMagazine {
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 6.4rem);
  height: 100%;
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 10rem 0;
    &-box {
      width: -webkit-fill-available;
      .flipbook-viewport {
        justify-content: center;
        display: flex;
        & .container {
          & .flipbook {
            & .wrapper-page {
            }
            &-page {
              // width: 100% !important;
              // height: 100% !important;
            }
          }
        }
      }
      & .default-book {
        width: -webkit-fill-available;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 60vw;

          @media screen and (max-width: 600px) {
            width: 80vw;
          }
        }
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
      z-index: 100;

      &-item {
        cursor: pointer;
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
      background-color: white;
      transition: all 0.5s cubic-bezier(0.83, 0, 0.17, 1);

      @media screen and (max-width: 500px) {
        width: 50%;
      }
      &-box {
        display: flex;
        flex-direction: column;
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
          border: solid 1px rgba(grey, 0.7);
          border-radius: 0.5rem;
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
          display: flex;
          flex-direction: column;
          gap: 1rem;
          &::-webkit-scrollbar {
            width: 0.5rem;
            &-track {
              background-color: rgba(#012030, 0.8);
              border-radius: 1rem;
            }
            &-thumb {
              background-color: #012030;
              border-radius: 1rem;
            }
          }
          &-item {
            img {
              // height: 15rem;
              width: 100%;
              border-radius: 1rem;
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
      transition: all 0.5s cubic-bezier(0.83, 0, 0.17, 1);
      @media screen and (max-width: 500px) {
        width: -webkit-fill-available;
        right: 0;
      }
      &-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      &-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;

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
            & .btn-option {
              border: solid 2px rgba(grey, 0.2);
              border-radius: 0.5rem;
              padding: 0.5rem 1rem;
              font-size: 1.6rem;
              cursor: pointer;
            }
            & input[type="range"] {
              height: 25px;
              -webkit-appearance: none;
              margin: 10px 0;
              width: 100%;
            }
            input[type="range"]:focus {
              outline: none;
            }
            input[type="range"]::-webkit-slider-runnable-track {
              width: 100%;
              height: 25px;
              cursor: pointer;
              animate: 0.2s;

              background: #61abff;
              border-radius: 50px;
              border: 1px solid #000000;
            }
            input[type="range"]::-webkit-slider-thumb {
              height: 20px;
              width: 20px;
              border-radius: 20px;
              background: #ffffff;
              cursor: pointer;
              -webkit-appearance: none;
              margin-top: 3px;
            }
            input[type="range"]:focus::-webkit-slider-runnable-track {
              background: #61abff;
            }
            input[type="range"]::-moz-range-track {
              width: 100%;
              height: 25px;
              cursor: pointer;
              animate: 0.2s;

              background: #61abff;
              border-radius: 50px;
            }
            input[type="range"]::-moz-range-thumb {
              height: 20px;
              width: 20px;
              border-radius: 20px;
              background: #ffffff;
              cursor: pointer;
            }
            input[type="range"]::-ms-track {
              width: 100%;
              height: 25px;
              cursor: pointer;
              animate: 0.2s;
              background: transparent;
              border-color: transparent;
              color: transparent;
            }
            input[type="range"]::-ms-fill-lower {
              background: #61abff;

              border-radius: 100px;
            }
            input[type="range"]::-ms-fill-upper {
              background: #61abff;

              border-radius: 100px;
            }
            input[type="range"]::-ms-thumb {
              margin-top: 1px;

              height: 20px;
              width: 20px;
              border-radius: 22px;
              background: #ffffff;
              cursor: pointer;
            }
            input[type="range"]:focus::-ms-fill-lower {
              background: #61abff;
            }
            input[type="range"]:focus::-ms-fill-upper {
              background: #61abff;
            }

            & .btn-auto-scroll {
              border: solid 2px rgba(grey, 0.2);
              border-radius: 0.5rem;
              padding: 0.5rem 1rem;
              font-size: 1.6rem;
              cursor: pointer;
              text-transform: uppercase;
              &-of {
              }
            }
            .toggle-switch {
              position: relative;
              box-sizing: border-box;
              & label {
                position: relative;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                cursor: pointer;

                &::before {
                  content: "";
                  width: 70px;
                  height: 25px;
                  background: #ccc;
                  position: relative;
                  display: inline-block;
                  border-radius: 46px;
                  box-sizing: border-box;
                  transition: 0.2s ease-in;
                }
                &::after {
                  content: "";
                  position: absolute;
                  width: 2rem;
                  height: 2rem;
                  border-radius: 50%;
                  left: 2px;
                  top: 2px;
                  z-index: 2;
                  background: #fff;
                  box-sizing: border-box;
                  transition: 0.2s ease-in;
                }

                &.active {
                  &::before {
                    background: #4bd865;
                  }
                  &::after {
                    top: 2px;
                    left: 4.8rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
