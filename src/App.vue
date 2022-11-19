<template>
  <Navigation />
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import "./assets/sass/mainStyle.vue";
import Navigation from "./components/Navigation.vue";
import { onUpdated } from "vue";
onUpdated(() => {
  let nav = document.querySelector(".navigation");
  let navBtn = document.querySelector(".nav-btn");
  let navBg = document.querySelector(".nav-bg");
  nav.style.display = "flex";
  navBtn.style.display = "flex";
  navBg.style.display = "flex";
});
</script>
