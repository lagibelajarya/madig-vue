<script setup>
import { ref } from "vue";
import Icons from "./Icons.vue";
import { useRouter } from "vue-router";

let toggleNav = ref(false);
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
</script>
<template>
  <div class="navigation">
    <div class="navigation-container">
      <div class="navigation-container-list">
        <div
          class="navigation-container-list-logo"
          @click="goToNavigation('home')"
        >
          <img src="../assets/img/logoGreen.svg" alt="" />
          <p>Nesfol</p>
        </div>
        <RouterLink
          to="/"
          active-class="active"
          class="navigation-container-list-link"
          >Home</RouterLink
        >
        <RouterLink
          to="/magazine"
          active-class="active"
          class="navigation-container-list-link"
          >Magazine</RouterLink
        >
        <RouterLink
          to="/bookmark"
          active-class="active"
          class="navigation-container-list-link"
          >Bookmark</RouterLink
        >
      </div>
      <RouterLink
        to="signup"
        active-class="active"
        class="navigation-container-signup"
        >Sign up</RouterLink
      >
    </div>
    <div class="navigation-mobile">
      <RouterLink to="/" class="navigation-mobile-link">Home</RouterLink>
      <RouterLink to="/magazine" class="navigation-mobile-link"
        >Magazine</RouterLink
      >
      <RouterLink to="/bookmark" class="navigation-mobile-link"
        >Bookmark</RouterLink
      >
    </div>
  </div>
</template>
