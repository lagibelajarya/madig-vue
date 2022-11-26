<script setup>
import { useRouter } from "vue-router";
import Icons from "../components/Icons.vue";
const router = useRouter();
const gotoDashboard = () => router.push({ name: "dashboard" });
</script>
<template>
  <div class="signup">
    <!--navigation logo  -->
    <!-- <div class="nav-logo">
      <img src="../assets/logo.svg" alt="Logo" />
      <p>LogoProject</p>
    </div> -->
    <!-- signup container -->
    <div class="signup-container">
      <div class="signup-box">
        <p class="signup-box-title">Signup To Dashboard</p>
        <form class="signup-box-form" @submit.prevent="gotoDashboard">
          <div class="signup-box-form-input">

            <Icons name="profile" />
            <input type="text" placeholder="Your Username" />
          </div>
          <div class="signup-box-form-input">
            <!-- <p>Your password</p> -->
            <Icons name="password" />
            <input type="password" placeholder="Your Password"  />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>
