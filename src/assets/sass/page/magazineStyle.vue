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
    padding: 0 10rem 10rem 10rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .magazine-box {
      position: relative;
      display: flex;
      gap: 5rem;
      align-items: center;
      justify-content: center;
      &-right {
        img {
          height: 40rem;
          border-radius: 1rem;
        }
      }
      &-left {
        display: flex;
        flex-direction: column;
        gap: 6.8rem;
        &-top {
          &-rating {
            gap: 0.5rem;
            display: flex;
            align-items: center;
            span {
              font-size: 3rem;
              color: yellow;
            }
            p {
              font-size: 2.4rem;
              font-weight: 600;
              color: white;
            }
          }
          &-title {
            font-size: 4.2rem;
            color: white;
            font-weight: 600;
            margin-bottom: 2rem;
          }
          &-date {
            font-size: 2rem;
            color: white;
            margin-bottom: 3rem;
          }
          &-action {
            display: flex;
            gap: 1rem;
            align-items: center;
            &-btn {
              padding: 1.2rem 2.4rem;
              background: transparent;
              border: solid 3px white;
              border-radius: 1rem;
              font-size: 2.4rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              cursor: pointer;
              transition: all 0.3s;
              img {
                height: 2rem;
              }
            }
          }
        }
        &-bottom {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          &-line {
            hr {
              border: none;
              border-bottom: solid 2px white;
              width: 100%;
            }
          }
          &-desc {
            font-size: 2rem;
            color: white;
          }
          &-btn {
            display: flex;
            gap: 1rem;
            button {
              padding: 1rem 3rem;
              background: white;
              border-radius: 1rem;
              color: black;
              font-size: 2.6rem;
              border: none;
              &:nth-child(1) {
              }
              &:nth-child(2) {
                img {
                  height: 3rem;
                }
              }
            }
          }
        }
      }

      &-popup {
        &-rating {
          position: absolute;
          transition: all 0.3s;
          .popup-container {
            padding: 5rem 10rem;
            background-color: white;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            p {
              &:nth-child(1) {
                font-size: 2.8rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }
              &:nth-child(2) {
                font-size: 1.8rem;
                margin-bottom: 3rem;
              }
            }
            &-close {
              position: absolute;
              top: -1rem;
              right: -1rem;
              height: 4rem;
              width: 4rem;
              background: white;
              border-radius: 100%;
              font-size: 2.4rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            &-star {
              span {
                font-size: 4rem;
                color: rgb(255, 224, 67);
              }
            }
          }
        }
        &-share {
          position: absolute;
          transition: all 0.3s;
          .popup-container {
            padding: 5rem 10rem;
            background-color: white;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            &-title {
              font-size: 2.8rem;
              font-weight: 600;
              margin-bottom: 2rem;
            }
            &-medsos {
              display: flex;
              gap: 2rem;
              margin-bottom: 2rem;
              &-btn {
                height: 5rem;
                width: 5rem;
                background-color: transparent;
                border-radius: 100%;
                border: solid 2px black;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                font-weight: 600;
              }
            }
            &-link {
              p {
                font-size: 2rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }
              &-box {
                display: flex;
                gap: 2rem;
                &-field {
                  padding: 1rem;
                  border-radius: 1rem;
                  border: solid 2px black;
                  width: 40rem;
                  font-size: 1.8rem;
                }
                &-btn {
                  padding: 1rem;
                  border-radius: 1rem;
                  background-color: orangered;
                  img {
                    height: 2rem;
                  }
                }
              }
            }
            &-close {
              position: absolute;
              top: -1rem;
              right: -1rem;
              height: 4rem;
              width: 4rem;
              background: white;
              border-radius: 100%;
              font-size: 2.4rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
