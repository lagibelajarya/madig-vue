<script setup>
import dashboarStyle from "./component/navigationStyle.vue";
import animationStyle from "./animationStyle.vue";
import bookmarkStyle from "./page/bookmarkStyle.vue";
import magazineStyle from "./page/magazineStyle.vue";
import variableStyle from "./component/variableStyle.vue";
import signupStyle from "./page/SignupStyle.vue";
import AppDashboardStyle from "./page/AppDashboard/AppDashboardStyle.vue";
import appMagazine from "./page/AppMagazine/appMagazine.vue";
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
html {
  font-size: 10px !important;
}
.content {
  background-image: linear-gradient(
      to right,
      rgba(black, 0.5),
      rgba(black, 0.5)
    ),
    url("../img/img1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
