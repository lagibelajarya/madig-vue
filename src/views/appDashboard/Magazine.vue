<script setup>
import Icons from "../../components/Icons.vue";
import { ref } from "vue";
let toggleSearch = ref(false);
</script>
<template>
  <div class="DMagazine">
    <div class="DMagazine-container-1">
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
      <div class="DMagazine-container-1-content">
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
        <div class="DMagazine-container-1-content-info">
          <!-- content dmagazine box -->
          <div class="DMagazine-container-1-content-info-box">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <div class="DMagazine-container-1-content-info-box-title">
              <p>Example Title</p>
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
          </div>
          <div class="DMagazine-container-1-content-info-box">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <div class="DMagazine-container-1-content-info-box-title">
              <p>Example Title</p>
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
          </div>
          <div class="DMagazine-container-1-content-info-box">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <div class="DMagazine-container-1-content-info-box-title">
              <p>Example Title</p>
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
          </div>
          <div class="DMagazine-container-1-content-info-box">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <div class="DMagazine-container-1-content-info-box-title">
              <p>Example Title</p>
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- profile right -->
    <div class="DMagazine-container-2">
      <div class="DMagazine-container-2-top">
        <div
          class="DMagazine-container-2-top-img"
          style="background: url('../src/assets/magazine/magazine1.jpg')"
        ></div>
      </div>
      <div class="DMagazine-container-2-bottom">
        <div class="DMagazine-container-2-bottom-info">
          <div class="DMagazine-container-2-bottom-info-title">
            <p>News Technology SMKN1 Purwosari</p>
            <p>Saturday, 7 December 2022</p>
            <div class="DMagazine-container-2-bottom-info-title-rating">
              <span>
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
                <Icons name="star" />
              </span>
              <span>5/5</span>
            </div>
          </div>
          <div class="DMagazine-container-2-bottom-info-action">
            <div class="DMagazine-container-2-bottom-info-action-read">
              Read Now
            </div>
            <div class="DMagazine-container-2-bottom-info-action-edit">
              <Icons name="pencil" />
            </div>
            <div class="DMagazine-container-2-bottom-info-action-delete">
              <Icons name="trash" />
            </div>
          </div>
          <div class="DMagazine-container-2-bottom-info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eum, illo voluptates in at exercitationem consequatur.
            Ut sunt odio corporis.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
