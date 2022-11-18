<template>
  <div></div>
</template>
<style lang="scss">
$lightGreen: #9aeba3;
$mediumGreen: #13678a;
$darkGreen: #012030;
.sidebar {
  height: 100%;
  position: fixed;
  width: 25rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.3);
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    height: 100%;
    &-logo {
      margin-top: 3rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      cursor: pointer;
      img {
        height: 3rem;
      }
      p {
        font-size: 2rem;
        color: $lightGreen;
        font-weight: 600;
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
        svg {
          height: 2rem;
          fill: $darkGreen;
        }
        p {
          color: $darkGreen;
          font-size: 1.4rem;
          font-weight: 500;
        }
        &.active {
          padding: 0.5rem 2.4rem;
          border-radius: 0.7rem;
          background: $darkGreen;
          & > * {
            fill: white;
            color: white;
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
      button {
        padding: 0.5rem 2.4rem;
        border-radius: 0.7rem;
        border: solid 2px $darkGreen;
        background: transparent;
        color: $darkGreen;
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
}
</style>
