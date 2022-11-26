<template>
  <div></div>
</template>
<style lang="scss">
$lightGreen: #9aeba3;
$mediumGreen: #13678a;
$darkGreen: #012030;
.sidebar {
  height: -webkit-fill-available;
  position: fixed;
  // width: 25rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.3);
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    height: 100%;
    padding: 2rem 0;
    &-logo {
      margin-top: 3rem;
      cursor: pointer;
      position: relative;
      img {
        height: 3rem;
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      &-item {
        text-transform: capitalize;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 2rem;
        position: relative;
        svg {
          height: 2rem;
          fill: $darkGreen;
        }
        p {
          color: $darkGreen;
          font-size: 1.4rem;
          font-weight: 500;
          transition: all 0.5s;
          overflow: hidden;
          &:hover {
            transform: translateX(0.5rem);
          }
        }
        &.active {
          &::before {
            content: "";
            position: absolute;
            left: 0;
            height: 100%;
            width: 0.3rem;
            background-color: $darkGreen;
          }
        }
      }
    }
    &-logout {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding: 3rem 0;
      transition: all 0.5s;
      button {
        border: none;
        outline: none;
        background: transparent;
        color: $darkGreen;
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        svg {
          height: 1.6rem;
        }
      }
    }
  }
}
</style>
