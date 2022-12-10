<template>
  <div></div>
</template>
<style lang="scss">
.appDashboard {
  & .DMagazine {
    display: flex;
    flex: 1;
    background-color: rgba($color: white, $alpha: 0.5);
    &-container-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      &-head {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 3rem;
        background-color: white;
        gap: 3rem;
        border-bottom: solid 0.5px rgba(#000000, 0.3);
        &-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          img {
            height: 2rem;
          }
          p {
            font-size: 2rem;
            font-weight: 600;
          }
        }
        &-search {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.1s;
          svg {
            height: 2rem;
            fill: rgba(black, 0.3);
          }
          input {
            border: none;
            outline: none;
          }
          &.active {
            display: flex;
            align-items: center;
            gap: 1rem;
            border-radius: 1rem;
            background-color: white;
            padding: 1rem 2rem;
            box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
            width: 50%;
            svg {
              height: 2rem;
            }
            input {
              width: 100%;
              border: none;
              outline: none;
            }
          }
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        &-head {
          display: flex;
          flex: 1;
          justify-content: space-around;
          background-color: white;
          border-bottom: solid 2px rgba($color: #000000, $alpha: 0.3);

          &-item {
            background-color: white;
            padding: 1.5rem;
            text-decoration: none;
            display: flex;
            gap: 1rem;
            align-items: center;
            svg {
              height: 2rem;
              fill: rgba($color: #000000, $alpha: 0.4);
            }
            p {
              font-size: 1.4rem;
              color: rgba($color: #000000, $alpha: 0.4);
              font-weight: 600;
            }
            &.active {
              border-bottom: solid 2px var(--color-green);
              & > * {
                color: var(--color-green);
                fill: var(--color-green);
              }
            }
          }
        }
        &-info {
          padding: 3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          position: relative;
          justify-content: center;
          & .btn-add-magazine {
            position: fixed;
            bottom: 2rem;
            right: 32rem;
            height: 5rem;
            width: 5rem;
            border-radius: 100%;
            background-color: white;
            box-shadow: 0 4px 8px rgba(black, 0.2);
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg {
              height: 2rem;
            }
          }

          & .loader {
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid var(--color-green);
            width: 6rem;
            height: 6rem;
          }
          &-box {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
            background-color: white;
            width: min-content;
            cursor: pointer;
            &-img {
              width: 20rem;
              height: 30rem;
              position: relative;
              overflow: hidden;
              img {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
                height: 100%;
              }
            }
            &-title {
              p {
                &:nth-child(1) {
                  font-size: 1.6rem;
                  font-weight: 600;
                }
                &:nth-child(2) {
                  word-break: break-all;
                  font-size: 1.2rem;
                }
              }
            }
          }
        }
      }
    }

    &-container-2 {
      display: flex;
      flex-direction: column;

      max-width: 30rem;
      width: 30rem;
      height: 100%;
      background: white;
      height: auto;
      &-top {
        box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
        position: relative;

        &-img {
          height: 35rem;
          overflow: hidden;
          position: relative;
          img {
            position: absolute;
            height: 100%;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
      &-bottom {
        flex: 1;
        padding: 3rem;
        box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
        &-info {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          &-title {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            p {
              &:nth-child(1) {
                font-size: 2rem;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 1.3rem;
              }
            }
          }
          &-action {
            display: flex;
            gap: 1rem;
            &-pgs {
              padding: 1rem 2rem;
              font-size: 1.6rem;
              font-weight: 500;
              box-shadow: 4px 4px 11px rgba(black, 0.1);
              white-space: nowrap;
              border-radius: 1rem;
              color: white;
              background-color: var(--color-blue);
              display: flex;
              align-items: center;
              gap: 0.5rem;
              cursor: pointer;
              svg {
                height: 2rem;
                color: white;
              }
            }
            &-edit {
              cursor: pointer;
              box-shadow: 4px 4px 11px 5px rgba(black, 0.1);
              border-radius: 1rem;
              padding: 1rem 2rem;
              svg {
                height: 2rem;
              }
            }
            &-delete {
              box-shadow: 4px 4px 11px rgba(black, 0.1);
              border-radius: 1rem;
              padding: 1rem 2rem;

              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: rgba(red, 0.8);
              .loader {
                border: 3px solid #f3f3f3;
                border-radius: 50%;
                border-top: 3px solid var(--color-green);
                width: 2rem;
                height: 2rem;
              }
              svg {
                height: 2rem;
                fill: #fff;
              }
            }
          }
          &-desc {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

.popup-add-magazine {
  position: fixed;
  z-index: 300;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-color: rgba(black, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -7rem;
  transition: all;
  overflow: auto;
  padding: 5rem 0;
  &-container {
    border-radius: 1rem;
    padding: 2rem;
    min-width: 70rem;
    height: fit-content;
    max-height: 50rem;
    min-height: 25rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // height: 100%;
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 2rem;
        font-weight: 600;
      }
      svg {
        cursor: pointer;
        height: 2rem;
      }
    }

    &-box {
      display: flex;
      gap: 3rem;
      border-radius: 1rem;
      border: solid 1px rgba(grey, 0.5);
      padding: 1rem;
      width: 100%;
      height: 100%;

      &-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & .input-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          p {
            font-size: 1.4rem;
          }
          input,
          textarea {
            padding: 0.5rem 1rem;
            border: solid 1px rgba(grey, 0.5);
            border-radius: 0.5rem;
            outline: none;
          }
          textarea {
            resize: none;
          }
        }
        & button {
          border: none;
          outline: none;
          padding: 1rem 2rem;
          background: var(--color-green);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
.popup-edit-magazine {
  position: fixed;
  z-index: 300;
  width: 100%;
  height: -webkit-fill-available;
  background-color: rgba(black, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -7rem;
  transition: all;
  padding: 5rem 0;
  &-container {
    border-radius: 1rem;
    padding: 2rem;
    min-width: 70rem;
    height: fit-content;
    max-height: 50rem;
    min-height: 25rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 2rem;
        font-weight: 600;
      }
      svg {
        cursor: pointer;
        height: 2rem;
      }
    }

    &-box {
      display: flex;
      gap: 3rem;
      border-radius: 1rem;
      border: solid 1px rgba(grey, 0.5);
      padding: 1rem;
      width: 100%;
      height: 100%;

      &-cover {
        width: 50%;
        &-img {
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
          img {
            height: 100%;

            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
      &-form {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & .input-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          p {
            font-size: 1.4rem;
          }
          input,
          textarea {
            padding: 0.5rem 1rem;
            border: solid 1px rgba(grey, 0.5);
            border-radius: 0.5rem;
            outline: none;
          }
          textarea {
            resize: none;
          }
        }
        & button {
          border: none;
          outline: none;
          padding: 1rem 2rem;
          background: var(--color-green);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
.popup-pgs-magazine {
  position: fixed;
  z-index: 300;
  width: 100%;
  height: -webkit-fill-available;
  background-color: rgba(black, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -7rem;
  transition: all;
  overflow: auto;
  padding: 5rem 0;
  &-container {
    border-radius: 1rem;
    padding: 2rem;
    width: 80vw;
    height: 100%;
    max-height: 50rem;
    min-height: 25rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // height: 100%;
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 2rem;
        font-weight: 600;
      }
      svg {
        cursor: pointer;
        height: 2rem;
      }
    }

    &-box {
      display: flex;
      gap: 3rem;
      border-radius: 1rem;
      border: solid 1px rgba(grey, 0.5);
      width: 100%;
      height: -webkit-fill-available;
      overflow: auto;

      & .pgs-table {
        font-size: 1.6rem;
        flex: 1;
        border-radius: 1rem;
        overflow: hidden;
        min-width: 80rem;
        display: flex;
        flex-direction: column;
        &-head {
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(4, calc(100% / 4));
          background-color: rgba(#2962ff, 0.3);
          &-item {
            display: flex;
            justify-content: center;
          }
        }
        &-body {
          overflow: auto;
          height: -webkit-fill-available;
          display: flex;
          flex-direction: column;
          align-items: center;
          & .loader {
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid var(--color-green);
            width: 6rem;
            height: 6rem;
            min-height: 6rem;
            min-width: 6rem;
            margin: 2rem 0;
          }
          &-container {
            width: -webkit-fill-available;
            align-items: stretch;
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(4, calc(100% / 4));
            border-bottom: solid 1px rgba(grey, 0.5);
            &-item {
              display: flex;
              justify-content: center;
              align-items: center;
              &.no {
              }
              &.img {
                &-btn {
                  outline: none;
                  border: none;
                  background: white;
                  box-shadow: 4px 4px 11px rgba(black, 0.1);
                  border-radius: 1rem;
                  padding: 1rem 1.6rem;
                  cursor: pointer;
                }

                &-detail {
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  height: 55rem;
                  width: 40rem;
                  padding: 2rem;
                  background-color: white;
                  border-radius: 1rem;
                  box-shadow: 0 0 18px rgba(black, 0.5);
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                  div {
                    background-size: cover !important;
                    height: 100%;
                    width: 100%;
                  }
                  button {
                    border: none;
                    outline: none;
                    padding: 0.5rem 2rem;
                    border-radius: 0.5rem;
                    background: white;
                    border: solid 1px rgba(black, 0.6);
                    width: 100%;
                  }
                }
              }
              &.file {
                word-break: break-all;
              }
              &.action {
                display: flex;
                gap: 0.5rem;

                & > * {
                  cursor: pointer;
                  box-shadow: 4px 4px 11px rgba(black, 0.1);
                  border-radius: 1rem;
                  padding: 1rem 1.6rem;

                  svg {
                    height: 2rem;
                  }
                }
                &-edit {
                  svg {
                    height: 2rem;
                  }
                }
                &-delete {
                  background: rgba(red, 0.8);
                  svg {
                    height: 2rem;
                    fill: white;
                  }
                }
              }
            }
          }
          & .pgs-table-not-found {
            height: -webkit-fill-available;
            display: flex;
            align-items: center;
            justify-content: center;
            p {
              font-size: 2rem;
              font-weight: 500;
              padding: 1rem 2rem;
              margin: 2rem;
              border-radius: 1rem;
              background: rgba(red, 0.4);
              color: white;
            }
          }

          & .pgs-table-popup-update-file {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 2rem;
            border-radius: 1rem;
            height: fit-content;
            width: fit-content;
            background-color: white;
            box-shadow: 4px 4px 2rem rgba(black, 0.3);
            display: flex;
            flex-direction: column;
            gap: 2rem;
            &-head {
              display: flex;
              align-items: center;
              justify-content: space-between;
              p {
                &:nth-child(1) {
                  font-size: 2rem;
                  font-weight: 500;
                }
                &:nth-child(2) {
                  svg {
                    height: 2rem;
                  }
                }
              }
            }
            &-box {
              input {
              }
              button {
                outline: none;
                border: none;
                cursor: pointer;
                box-shadow: 4px 4px 11px rgba(black, 0.1);
                border-radius: 1rem;
                padding: 1rem 1.6rem;
                background: var(--color-green);
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>
