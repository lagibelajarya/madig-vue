<script setup>
import animationStyle from "./animationStyle.vue";
import AppDashboardStyle from "./page/AppDashboard/AppDashboardStyle.vue";
import appMagazine from "./page/AppMagazine/appMagazine.vue";
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  text-decoration: none;

  // ::-webkit-scrollbar {
  //   width: 1rem;
  //   &-track {
  //     background-color: rgba(#2962ff, 0.8);
  //     border-radius: 1rem;
  //   }
  //   &-thumb {
  //     background-color: #2962ff;
  //     border-radius: 1rem;
  //   }
  
  
  // }
}
:root {
  --color-green: #00bd7e;
  --lightGreen: #9aeba3;
  --mediumGreen: #13678a;
  --darkGreen: #012030;
  --color-blue: #2962ff;
}
html {
  font-size: 10px !important;
  scroll-behavior: smooth;
}
.content {
  background-image: linear-gradient(
      to right,
      rgba(#012030, 0.9),
      rgba(#012030, 0.9)
    ),
    url("../img/bg-home.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
