<template>
  <Navigation />
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import "./assets/sass/mainStyle.vue";
import Navigation from "./components/Navigation.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

</script>
