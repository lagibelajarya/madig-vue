<script setup>
import dashboarStyle from "./component/navigationStyle.vue";
import animationStyle from "./animationStyle.vue";
import bookmarkStyle from "./page/bookmarkStyle.vue";
import magazineStyle from "./page/magazineStyle.vue";
import variableStyle from "./component/variableStyle.vue";
import signupStyle from "./page/SignupStyle.vue";
import homeStyle from "./page/homeStyle.vue";
import AppDashboardStyle from "./page/AppDashboard/AppDashboardStyle.vue";
import appMagazine from "./page/AppMagazine/appMagazine.vue";
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

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
  --color-green: hsla(160, 100%, 37%, 1);
  --lightGreen: #9aeba3;
  --mediumGreen: #13678a;
  --darkGreen: #012030;
  --color-blue: #2962ff;
}
html {
  font-size: 10px !important;
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
