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
          &-box {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
            background-color: white;
            width: min-content;
            img {
              width: 20rem;
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

      width: 40rem;
      height: 100%;
      background: white;
      height: auto;
      &-top {
        box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
        position: relative;
        &-img {
          height: 35rem;
          background-position: top !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
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
            &-rating {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              span {
                &:nth-child(1) {
                  svg {
                    fill: orange;
                    height: 2rem;
                  }
                }
                &:nth-child(2) {
                  font-size: 1.6rem;
                  font-weight: bold;
                }
              }
            }
          }
          &-action {
            display: flex;
            gap: 1rem;
            &-read {
              padding: 1rem 2rem;
              font-size: 1.6rem;
              font-weight: 600;
              box-shadow: 4px 4px 11px rgba(black, 0.1);
              white-space: nowrap;
              border-radius: 1rem;
            }
            &-edit {
              box-shadow: 4px 4px 11px rgba(black, 0.1);
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
              background-color: rgba(red, 0.8);
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
</style>
