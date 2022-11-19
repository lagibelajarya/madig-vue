<script setup></script>
<template>
  <div></div>
</template>

<style lang="scss">
.trans {
  &-0 {
    transform: translate(0) !important;
  }
  &-y {
    &-100 {
      transform: translateY(-100%) !important;
    }
    &100 {
      transform: translateY(100%) !important;
    }
  }
  &-x {
    &-100 {
      transform: translateX(-100%) !important;
    }
    &100 {
      transform: translateX(100%) !important;
    }
  }
  &-nav {
    transform: scale(80);
  }
  &-tools-btn {
    transform: translate(50%, 200%) !important;
  }
}
.width {
  &-0 {
    -webkit-transition: max-width 1s;
    -moz-transition: max-width 1s;
    -ms-transition: max-width 1s;
    -o-transition: max-width 1s;
    transition: max-width 1s;

    overflow: hidden;
    max-width: 0;
  }
  &-50rem {
    max-width: 50rem;
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
