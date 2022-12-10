<script setup>
import { ref, onMounted, reactive } from "vue";
import Icons from "../components/Icons.vue";
import { useRouter } from "vue-router";
import { apiClient } from "/src/api/axios-config";
let patchCover = "http://127.0.0.1:8000/";

const router = useRouter();
function goToNavigation(name) {
  router.push({ name: name });
}
let loadingCover = ref(false);

const row = reactive({
  items: [],
});
const rowDetail = reactive({
  items: [],
});
const getMagazine = async () => {
  loadingCover.value = true;
  const { data } = await apiClient.get("/magazine");
  row.items = data.data;
  loadingCover.value = false;
};
let goDetail = (id) => {
  router.push({ name: "detailMagazine", params: { id: id } });
};
onMounted(() => {
  getMagazine();
});
</script>
<template>
  <div class="the-cover">
    <div
      v-if="loadingCover"
      class="loader-content"
      style="height: 30rem; width: 20rem"
    ></div>
    <div
      v-for="item in row.items"
      class="magazine-cover"
      @click="goDetail(item.id)"
    >
      <img v-bind:src="patchCover + item.cover" v-bind:alt="item.cover" />
    </div>
  </div>
</template>

<style lang="scss">
.the-cover {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  .magazine-cover {
    position: relative;
    min-height: 30rem;
    min-width: 20rem;
    background-position: top !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    img {
      width: 20rem;
      border-radius: 1rem;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }
}
</style>
