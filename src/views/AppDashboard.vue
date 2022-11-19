<script setup>
import Sidebar from "./appDashboard/Sidebar.vue";
import { ref } from "vue";
import { onMounted } from "vue";
let toggleSearch = ref(false);
</script>
<template>
  <Sidebar />
  <div class="appDashboard"><RouterView></RouterView></div>
</template>
