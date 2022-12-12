<script setup>
import TheMagazine from "../components/TheMagazine.vue";
</script>
<template>
  <div class="bookmark">
    <div class="bookmark-container">
      <p class="bookmark-container-title">Your Bookmark</p>
      <div class="bookmark-slider">
        <TheMagazine />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bookmark {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4rem);
  height: 100%;

  &-container {
    padding: 5rem;
    @media screen and (max-width: 500px) {
      padding: 3rem;
    }
    &-title {
      font-weight: 600;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 2rem;
    }
    .bookmark-slider {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      & img {
        width: 20rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>
