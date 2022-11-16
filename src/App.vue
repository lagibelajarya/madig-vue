<template>
  <Navigation />

  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import "./assets/sass/mainStyle.vue";
</script>
