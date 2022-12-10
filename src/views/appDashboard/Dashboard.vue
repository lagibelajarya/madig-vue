<script setup>
import { ref, reactive, onMounted } from "vue";

import Icons from "../../components/Icons.vue";
import magazineData from "../../data/magazineData.js";

let toggleSearch = ref(false);
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-container-1">
      <!-- Dmagazine header -->
      <div class="dashboard-container-1-head">
        <div class="dashboard-container-1-head-title">
          <img src="/src/assets/logo.svg" alt="" />
          <p>Dashboard</p>
        </div>

        <div
          class="dashboard-container-1-head-search"
          v-on:mouseover="toggleSearch = true"
          v-on:mouseleave="toggleSearch = false"
          :class="{ active: toggleSearch }"
        >
          <Icons name="search" />
          <input
            v-if="toggleSearch"
            type="text"
            placeholder="Search Magazine..."
          />
          <input v-else type="text" placeholder="Search" />
        </div>
      </div>
      <!-- content Dmagazine -->
      <div class="dashboard-container-1-content">
        <div class="dashboard-container-1-content-head">
          <RouterLink
            active-class="active"
            to=""
            class="dashboard-container-1-content-head-item"
          >
            <Icons name="grid" />
            <p>All</p>
          </RouterLink>
          <RouterLink to="" class="dashboard-container-1-content-head-item">
            <Icons name="book-education" />
            <p>Education</p>
          </RouterLink>
          <RouterLink to="" class="dashboard-container-1-content-head-item">
            <Icons name="book-globe" />
            <p>Kuliner</p>
          </RouterLink>
          <RouterLink to="" class="dashboard-container-1-content-head-item">
            <Icons name="book-style" />
            <p>Style</p>
          </RouterLink>
        </div>
        <div class="dashboard-container-1-content-info">
          <!-- content dmagazine box -->
          <div
            v-for="item in magazineData"
            class="dashboard-container-1-content-info-box"
          >
            <img v-bind:src="item.img" alt="" loading="lazy" />
            <div class="dashboard-container-1-content-info-box-title">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- profile right -->
    <div class="dashboard-container-2">
      <div class="dashboard-container-2-top">
        <div class="dashboard-container-2-top-img">
          <div style="background: url('./src/assets/logo.svg')"></div>
        </div>
        <div class="dashboard-container-2-top-profile">
          <div class="dashboard-container-2-top-profile-item">
            <div class="dashboard-container-2-top-profile-item-title">
              <Icons name="profile" />
              <p>Username</p>
            </div>
            <div class="dashboard-container-2-top-profile-item-info">
              Muhammad rifaldi
            </div>
          </div>
          <div class="dashboard-container-2-top-profile-item">
            <div class="dashboard-container-2-top-profile-item-title">
              <Icons name="profile" />
              <p>Status</p>
            </div>
            <div class="dashboard-container-2-top-profile-item-info">Admin</div>
          </div>
        </div>
      </div>
      <div class="dashboard-container-2-bottom">
        <div class="dashboard-container-2-bottom-title">My Activity</div>
        <div class="dashboard-container-2-bottom-info">Tidak ada aktivitas</div>
      </div>
    </div>
  </div>
</template>
