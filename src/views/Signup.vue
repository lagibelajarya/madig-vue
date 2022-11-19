<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoDashboard = () => router.push({ name: "appDashboard" });
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
            <p>Your Username</p>
            <input type="text" />
          </div>
          <div class="signup-box-form-input">
            <p>Your Email</p>
            <input type="email" />
          </div>
          <div class="signup-box-form-input">
            <p>Your password</p>
            <input type="password" class="signup-box-form-input" />
          </div>
          <button>Signup</button>
        </form>
      </div>
    </div>
  </div>
</template>
