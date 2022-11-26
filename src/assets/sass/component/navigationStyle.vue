<style lang="scss">
$lightGreen: #9aeba3;
$mediumGreen: #13678a;
$darkGreen: #012030;

.navigation {
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  width: 100%;
  z-index: 1000;
  &-container {
    padding: 2rem 5rem;
    background: $darkGreen;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      padding: 2rem 3rem;
    }
    &-list {
      display: flex;
      align-items: center;
      gap: 1.4rem;

      &-logo {
        margin-right: 5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          height: 2rem;
        }
        p {
          font-size: 2rem;
          font-weight: 600;
          color: white;
        }
      }

      &-link {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
    &-signup {
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: white;
    }
  }
  &-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #012030;
    padding-bottom: 2rem;

    @media screen and (min-width: 600px) {
      display: none;
    }
    &-link {
      text-decoration: none;
      font-size: 1.6rem;
      color: white;
    }
  }
}
</style>
<script setup></script>
<template>
  <div></div>
</template>
