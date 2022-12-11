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
    max-width: 0 !important;
  }
  &-50rem {
    max-width: 50rem;
  }
  &-30rem {
    max-width: 30rem !important;
  }
}
.show {
  opacity: 1;
  visibility: visible;
}
.hide {
  opacity: 0;
  visibility: hidden;
  height: 0;
  width: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid var(--color-green);
  width: 1.5rem;
  height: 1.5rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-content {
  border-radius: 0.5rem;
  background: linear-gradient(to right, #02334c, #012b40, #012030);
  background-size: 400% 400%;
  animation: 1s loader-content ease infinite;
}
@keyframes loader-content {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
