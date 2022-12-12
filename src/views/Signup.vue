<script setup>
import { useRouter } from "vue-router";
import Icons from "../components/Icons.vue";
const router = useRouter();
const gotoDashboard = () => router.push({ name: "dashboardMagazine" });
console.log(router.hasRoute('signupa'));
</script>
<template>
  <div class="loader-content"></div>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-box">
        <p class="signup-box-title">Sign up To Dashboard</p>
        <form class="signup-box-form" @submit.prevent="gotoDashboard">
          <div class="signup-box-form-input">
            <Icons name="profile" />
            <input type="text" placeholder="Your Username" />
          </div>
          <div class="signup-box-form-input">
            <!-- <p>Your password</p> -->
            <Icons name="password" />
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.signup {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4rem);
  height: 100%;

  &-container {
    padding: 5rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
  }

  &-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem 10rem;
    border-radius: 1rem;
    background-color: #012030;

    @media screen and (max-width: 600px) {
      padding: 3rem 5rem;
    }
    &-title {
      color: white;
      font-size: 2.4rem;
      font-weight: 600;
    }
    &-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &-input {
        border-bottom: solid 2px var(--color-blue);
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        svg {
          height: 2rem;
          fill: white;
        }
        input {
          width: 100%;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1.6rem;
          color: white;
          border-radius: 0.5rem;
          &::placeholder {
            color: rgba(white, 0.5);
          }
        }
      }
      button {
        margin-top: 3rem;
        background-color: var(--color-blue);
        border: none;
        outline: none;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
        color: white;
        font-size: 2rem;
      }
    }
  }
}
</style>
