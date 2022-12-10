<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Icons from "../../components/Icons.vue";
const router = useRouter();
const goToNavigation = () => router.push({ name: "home" });
let toggleSidebar = ref(false);
</script>
<template>
  <div
    v-on:mouseover="toggleSidebar = true"
    v-on:mouseleave="toggleSidebar = false"
    class="sidebar"
  >
    <div class="sidebar-container">
      <div @click="goToNavigation" class="sidebar-container-logo">
        <img src="../../assets/img/logoGreen.svg" alt="" />
      </div>
      <div class="sidebar-container-list">
        <RouterLink
          :to="{ name: 'dashboard' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="dashboard" />
          <p :class="[toggleSidebar ? 'width-50rem' : 'width-0']">Dashboard</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'dashboardMagazine' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="album" />
          <p :class="[toggleSidebar ? 'width-50rem' : 'width-0']">
            Magazine
          </p></RouterLink
        >
        <RouterLink
          :to="{ name: 'dashboardTeams' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="team" />
          <p :class="[toggleSidebar ? 'width-50rem' : 'width-0']">
            Teams
          </p></RouterLink
        >
      </div>
      <Transition>
        <div
          v-if="toggleSidebar"
          class="sidebar-container-logout"
          :class="[toggleSidebar ? 'show' : 'hide']"
        >
          <button @click="goToNavigation">
            Logout <Icons name="logout" />
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>
