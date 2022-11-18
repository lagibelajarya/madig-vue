<script setup></script>
<template>
  <div></div>
</template>

<style lang="scss">
.trans {
  &-0 {
    transform: translate(0);
  }
  &-y {
    &-100 {
      transform: translateY(-100%);
    }
    &100 {
      transform: translateY(100%);
    }
  }
  &-x {
    &-100 {
      transform: translateX(-100%);
    }
    &100 {
      transform: translateX(100%);
    }
  }
  &-nav {
    transform: scale(80);
  }
}
.show {
  opacity: 1;
  visibility: visible;
}
.hide {
  opacity: 0;
  visibility: hidden;
}
</style>
