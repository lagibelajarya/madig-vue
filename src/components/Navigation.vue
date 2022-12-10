<script setup>
import { ref } from "vue";
import Icons from "./Icons.vue";
import { useRouter } from "vue-router";

let toggleNav = ref(false);
const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
function clickTarget(e) {
  console.log(e.target);
}
window.addEventListener("click", (e) => {
  if (
    !document
      .querySelector(".navigation-mobile-container")
      .contains(e.target) &&
    !document.querySelector(".navigation-container-btn").contains(e.target)
  ) {
    toggleNav.value = false;
  }
});
</script>
<template>
  <div class="navigation">
    <div class="navigation-container">
      <div class="navigation-container-list">
        <div
          class="navigation-container-list-logo"
          @click="goToNavigation('home')"
        >
          <img src="/src/assets/img/logoGreen.svg" alt="" />
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
        to="/signup"
        active-class="active"
        class="navigation-container-signup"
        >Sign up</RouterLink
      >
      <div class="navigation-container-btn" @click="toggleNav = !toggleNav">
        <Icons name="menu" />
      </div>
    </div>

    <!-- navigation mobile -->
    <div class="navigation-mobile">
      <div
        class="navigation-mobile-bg"
        :class="[toggleNav ? 'trans-0 ' : 'trans-x100 ']"
      ></div>
      <div
        class="navigation-mobile-container"
        :class="[toggleNav ? 'trans-0 ' : 'trans-x100']"
      >
        <div class="navigation-mobile-container-logo">
          <img src="/src/assets/img/logoGreen.svg" alt="" />
          <p>Nesfol</p>
        </div>
        <div class="navigation-mobile-container-list">
          <RouterLink
            active-class="active"
            to="/"
            class="navigation-mobile-container-list-link"
          >
            <Icons name="house" />
            <p>Home</p>
          </RouterLink>
          <RouterLink
            active-class="active"
            to="/magazine"
            class="navigation-mobile-container-list-link"
          >
            <Icons name="book" />
            <p>Magazine</p>
          </RouterLink>
          <RouterLink
            active-class="active"
            to="/bookmark"
            class="navigation-mobile-container-list-link"
          >
            <Icons name="book" />
            <p>Bookmark</p>
          </RouterLink>
        </div>
        <RouterLink to="/signup" class="navigation-mobile-container-signup">
          SIGNUP
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$lightGreen: #9aeba3;
$mediumGreen: #13678a;
$darkGreen: #012030;

.navigation {
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  width: 100%;
  z-index: 1000;
  &-container {
    padding: 2rem 5rem;
    background: $darkGreen;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      padding: 2rem 3rem;
    }
    &-list {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      @media screen and (max-width: 601px) {
        flex: 1;
      }

      &-logo {
        margin-right: 5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          height: 2rem;
        }
        p {
          font-size: 2rem;
          font-weight: 600;
          color: white;
        }
      }

      &-link {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        @media screen and (max-width: 601px) {
          display: none;
        }
      }
    }
    &-signup {
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: white;
      @media screen and (max-width: 601px) {
        display: none;
      }
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2rem;
      @media screen and (min-width: 601px) {
        display: none;
      }
      svg {
        height: 3rem;
        fill: white;
        color: white;
      }
    }
  }
  &-mobile {
    @media screen and (min-width: 601px) {
      display: none;
    }
    &-bg {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to left, rgba(#012030, 1), transparent);
      transition: transform 0.6s;
    }
    &-container {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 100;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      width: fit-content;
      background-color: #012030;
      padding: 3rem 5rem;
      gap: 3rem;
      transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);
      &-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        img {
          height: 5rem;
        }
        p {
          font-size: 2.4rem;
          color: white;
          font-weight: 600;
          text-transform: capitalize;
        }
      }
      &-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          &.active {
            background: var(--color-green);
            & > * {
              fill: #012030;
              color: #012030;
            }
          }
          svg {
            height: 1.4rem;
            fill: white;
            color: white;
          }
          p {
            color: white;
            font-size: 1.6rem;
          }
        }
      }
      &-signup {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
</style>
