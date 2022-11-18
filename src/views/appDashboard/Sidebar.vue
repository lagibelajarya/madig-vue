<script setup>
import { useRouter } from "vue-router";
import Icons from "../../components/Icons.vue";
const router = useRouter();
const goToNavigation = () => router.push({ name: "home" });
</script>
<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <div @click="goToNavigation" class="sidebar-container-logo">
        <img src="../../assets/logo.svg" alt="" />
        <p>Project Logo</p>
      </div>
      <div class="sidebar-container-list">
        <RouterLink
          :to="{ name: 'dashboard' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="dashboard" />
          <p>Dashboard</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'dashboardMagazine' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="album" />
          <p>Magazine</p></RouterLink
        >
        <RouterLink
          :to="{ name: 'dashboardTeams' }"
          class="sidebar-container-list-item"
          active-class="active"
          ><Icons name="team" />
          <p>Teams</p></RouterLink
        >
      </div>
      <div class="sidebar-container-logout">
        <button @click="goToNavigation">Logout</button>
      </div>
    </div>
  </div>
</template>
