<template>
  <Navigation  />
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import "./assets/sass/mainStyle.vue";
import Navigation from "./components/Navigation.vue";

</script>
