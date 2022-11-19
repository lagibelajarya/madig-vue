<script setup>
import sidebarStyle from "./sidebarStyle.vue";
import magazineStyle from "./magazineStyle.vue";
</script>
<template>
  <div></div>
</template>
<style lang="scss">
.appDashboard {
  margin-left: 7rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  & .dashboard {
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
        border-bottom: solid .5px rgba(#000000, 0.3);
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

      background: white;
      height: auto;
      width: 35rem;
      &-top {
        padding: 3rem;
        box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;
        &-profile {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          &-item {
            &-title {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 1rem;
              svg {
                height: 1.6rem;
              }
              p {
                font-size: 1.4rem;
                font-weight: 600;
              }
            }
            &-info {
              font-size: 1.6rem;
              padding: 0.5rem 1rem;
              background-color: rgba(grey, 0.1);
              border-radius: 0.5rem;
            }
          }
        }
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
          div {
            border: solid 5px rgba($color: #000000, $alpha: 0.3);
            height: 20rem;
            width: 20rem;
            border-radius: 100%;
            background-position: center !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
          }
        }
      }
      &-bottom {
        flex: 1;
        padding: 3rem;
        box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
        display: flex;
        flex-direction: column;
        gap: 2rem;
        &-title {
          font-size: 2rem;
          font-weight: 500;
        }
        &-info {
          padding: 1rem 2rem;
          font-size: 1.4rem;
          border-radius: 1rem;
          background-color: var(--color-green);
        }
      }
    }
  }
}
</style>
