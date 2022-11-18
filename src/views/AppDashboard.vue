<script setup>
import Sidebar from "./appDashboard/Sidebar.vue";
import { ref } from "vue";
let toggleNavigation = ref(false);
</script>
<template>
  <Sidebar />
  <div class="appDashboard"><RouterView></RouterView></div>
</template>
