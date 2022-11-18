<script setup>
import { ref } from "vue";

let toggleNav = ref(false);
</script>
<template>
  <div class="nav-btn" @click="toggleNav = !toggleNav">
    <div :class="{ open: toggleNav }" id="button-nav">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div :class="{ 'trans-nav': toggleNav }" class="nav-bg">&nbsp;</div>
  <div :class="[toggleNav ? 'trans-0' : 'trans-x100']" class="navigation">
    <div class="navigation-box">
      <div class="navigation-left">
        <!-- <img src="../assets/img/ilustrationNavigation.svg" alt="" /> -->
      </div>
      <div class="navigation-right">
        <RouterLink
          @click="toggleNav = false"
          to="/"
          active-class="active"
          class="navigation-right-link"
          >Magazine</RouterLink
        >
        <RouterLink
          @click="toggleNav = false"
          to="/bookmark"
          active-class="active"
          class="navigation-right-link"
          >Bookmark</RouterLink
        >
        <RouterLink
          @click="toggleNav = false"
          to="populer"
          active-class="active"
          class="navigation-right-link"
          >Popular</RouterLink
        >
        <RouterLink
          @click="toggleNav = false"
          to="signup"
          active-class="active"
          class="navigation-right-link"
          >Signup</RouterLink
        >
      </div>
    </div>
  </div>
</template>
