<script setup></script>
<template>
  <div></div>
</template>
<style lang="scss">
.magazine {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4rem);
  height: 100%;
  &-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem 0;
    &-box {
      padding: 0 5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media screen and (max-width: 500px) {
        padding: 0 3rem;
      }
      &-slider {
      }
      &-title {
        font-size: 2.4rem;
        color: white;
        font-weight: 600;
      }
      &-content {
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
// detail magazine
.detail-magazine {
  &-container {
    display: flex;
    flex-direction: column;
    &-info {
      padding: 5rem;

      @media screen and (max-width: 500px) {
        padding: 3rem;
      }
      &-title {
        padding: 3rem;
        border-radius: 1rem;
        display: flex;

        justify-content: space-between;
        gap: 3rem;
        background-image: linear-gradient(to right, #012030 50%, transparent),
          url("/src/assets/magazine/coverDepan.svg");
        background-position: top !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;

        @media screen and (max-width: 950px) {
          flex-direction: column-reverse;
        }
        @media screen and (max-width: 768px) {
          background-image: linear-gradient(to top, #012030 50%, transparent),
            url("/src/assets/magazine/coverDepan.svg");
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
              left: 50%;
              transition: all 0.3s linear;
              &-container {
                display: flex;
                flex-direction: column;
                background: white;
                padding: 2rem;
                border-radius: 1.4rem;
                gap: 1rem;
                position: absolute;
                &-icon {
                  display: flex;
                  gap: 0.5rem;
                  div {
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
                  p {
                    padding: 0.5rem 1rem;
                    color: white;
                    font-size: 1.4rem;
                    white-space: nowrap;
                    background-color: #012030;
                    border-radius: 0.5rem;
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
        padding: 3rem;
        background: #012030;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
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
