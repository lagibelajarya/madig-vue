<script setup>
import Icons from "../../components/Icons.vue";
import { ref, onMounted, reactive } from "vue";
import { apiClient, urlApi } from "/src/api/axios-config";
import { async } from "q";

let toggleSearch = ref(false);
let togglePopupAdd = ref(false);
let togglePopupEdit = ref(false);
let togglePopupPgs = ref(false);
var togglePopupPgsDetailImg = ref(false);
let togglePopupPgsUpdate = ref(false);
let toggleLoadForm = ref(false);
let toggleLoadFormEdit = ref(false);
let toggleDetailMagazine = ref(false);
let toggleListFound = ref(false);
let loadingContent = ref(false);
let loadingTrash = ref(false);
let loadingListPage = ref(false);
let patchCover = urlApi;

// function closeElement(el1, el2, toggle) {
//   document.addEventListener("click", (e) => {
//     if (
//       !document.querySelectorAll(`.${el1}`).contains(e.target) &&
//       !document.querySelectorAll(`.${el2}`).contains(e.target)
//     ) {
//       toggle.value = false;
//     }
//   });
// }
// closeElement(
//   "pgs-table-body-container-item.img-btn",
//   "pgs-table-body-container-item.img-detail",
//   togglePopupPgsDetailImg
// );

const row = reactive({
  items: [],
});
const pages = reactive({
  items: [],
});
const formData = reactive({
  title: "",
  description: "",
  cover: "",
  pdf_file: "",
});
const resetForm = () => {
  formData.title = null;
  formData.description = null;

  document.querySelector("input").value = null;
  formData.cover = null;
  formData.pdf_file = null;
};
const onCoverChange = (e) => {
  formData.cover = e.target.files[0];
};
const onPdfChange = (e) => {
  formData.pdf_file = e.target.files[0];
};
const onPdfChangeEdit = (e) => {
  detailMagazine.pdf_file = e.target.files[0];
};
const onCoverChangeEdit = (e) => {
  detailMagazine.cover = e.target.files[0];
};

const getMagazine = async () => {
  loadingContent.value = true;
  const { data } = await apiClient.get("/magazine");
  console.log(data);
  row.items = data.data;
  toggleLoadForm.value = false;
  loadingContent.value = false;
};
const getPages = async (id) => {
  loadingListPage.value = true;
  toggleListFound.value = false;
  const { data } = await apiClient.get(`/detail-magazine/${id}`);
  pages.items = data.data;
  loadingListPage.value = false;
  if (pages.items == 0) {
    toggleListFound.value = true;
  }
};
const saveMagazine = async () => {
  let response = ref([]);

  const fields = new FormData();
  fields.append("title", formData.title);
  fields.append("description", formData.description);
  fields.append("cover", formData.cover);
  fields.append("pdf_file", formData.pdf_file);
  toggleLoadForm.value = true;
  const { data } = await apiClient.post("/magazine", fields);
  alert("submited");
  resetForm();
  togglePopupAdd.value = !togglePopupAdd;
  getMagazine();
};
const updateMagazine = async (id) => {
  toggleLoadFormEdit.value = true;

  const fieldsEdit = new FormData();

  fieldsEdit.append("title", detailMagazine.title);
  fieldsEdit.append("description", detailMagazine.desc);
  fieldsEdit.append("cover", detailMagazine.cover);
  fieldsEdit.append("pdf_file", detailMagazine.pdf_file);
  const { data } = await apiClient.post(
    `/magazine/${detailMagazine.id}?_method=PUT`,
    fieldsEdit
  );
  toggleLoadFormEdit.value = false;
  togglePopupEdit.value = false;
  getMagazine();
};

const deleteMagazine = async () => {
  loadingTrash.value = true;

  const { data } = await apiClient.delete(`/magazine/${detailMagazine.id}`);
  alert("data berhasil di hapus");

  defaultDetailMagazine();
  loadingTrash.value = false;
  getMagazine();
};
onMounted(() => {
  getMagazine();
});

const defaultDetailMagazine = () => {
  detailMagazine.id = "";
  detailMagazine.title = "Click Magazine To Detail";
  detailMagazine.cover = "/src/assets/img/emptyImage.svg";
  detailMagazine.desc = "Detail magazine description";
  detailMagazine.pdf_file = "";
};
let detailMagazine = reactive({
  id: "",
  title: "Click Magazine To Detail",
  cover: "/src/assets/img/emptyImage.svg",
  desc: "Detail magazine description",
  pdf_file: "",
});

function setDetailMagazine(id, title, cover, desc, pdf_file) {
  detailMagazine.id = id;
  detailMagazine.title = title;
  detailMagazine.cover = patchCover + cover;
  detailMagazine.desc = desc;
  detailMagazine.pdf_file = pdf_file;
  toggleDetailMagazine.value = true;
}
let pgsDetailPage = reactive({
  id: "",
  img: "",
  file: "",
  page: "",
});
function setPgsDetaiPage(id, img, file, page) {
  pgsDetailPage.id = id;
  pgsDetailPage.img = img;
  pgsDetailPage.file = file;
  pgsDetailPage.page = page;
}
</script>
<template>
  <!-- popup add magazine -->
  <div class="popup-add-magazine" :class="[togglePopupAdd ? 'show' : 'hide']">
    <div class="popup-add-magazine-container">
      <div class="popup-add-magazine-container-head">
        <p>Add Magazine</p>
        <div @click="togglePopupAdd = !togglePopupAdd">
          <Icons name="close" />
        </div>
      </div>
      <div class="popup-add-magazine-container-box">
        <form
          class="popup-add-magazine-container-box-form"
          @submit.prevent="saveMagazine()"
        >
          <div class="input-box">
            <p>Magazine Title</p>
            <input type="text" required v-model="formData.title" />
          </div>
          <div class="input-box">
            <p>Magazine Cover</p>
            <input type="file" required v-on:change="onCoverChange" />
          </div>
          <div class="input-box">
            <p>Magazine Pdf File</p>
            <input type="file" required v-on:change="onPdfChange" />
          </div>
          <div class="input-box">
            <p>Magazine Description</p>
            <textarea
              name=""
              required
              v-model="formData.description"
            ></textarea>
          </div>
          <button v-if="toggleLoadForm == false" type="submit">Finish</button>
          <button v-else>
            Loading
            <div class="loader"></div>
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- popup edit magazine -->
  <div class="popup-edit-magazine" :class="[togglePopupEdit ? 'show' : 'hide']">
    <div class="popup-edit-magazine-container">
      <div class="popup-edit-magazine-container-head">
        <p>Edit Magazine</p>
        <div @click="togglePopupEdit = !togglePopupEdit">
          <Icons name="close" />
        </div>
      </div>
      <div class="popup-edit-magazine-container-box">
        <div class="popup-edit-magazine-container-box-cover">
          <div class="popup-edit-magazine-container-box-cover-img">
            <img v-bind:src="detailMagazine.cover" alt="" />
          </div>
        </div>

        <form
          class="popup-edit-magazine-container-box-form"
          @submit.prevent="updateMagazine()"
        >
          <div class="input-box">
            <p>Magazine Title</p>
            <input type="text" required v-model="detailMagazine.title" />
          </div>
          <div class="input-box">
            <p>Magazine Cover</p>
            <input type="file" required v-on:change="onCoverChangeEdit" />
          </div>
          <div class="input-box">
            <p>Magazine Pdf File</p>
            <input type="file" required v-on:change="onPdfChangeEdit" />
          </div>
          <div class="input-box">
            <p>Magazine Description</p>
            <textarea name="" required v-model="detailMagazine.desc"></textarea>
          </div>
          <button v-if="toggleLoadFormEdit == false" type="submit">
            Finish
          </button>
          <button v-else>
            Loading
            <div class="loader"></div>
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- popup pages magazine -->
  <div class="popup-pgs-magazine" :class="[togglePopupPgs ? 'show' : 'hide']">
    <div class="popup-pgs-magazine-container">
      <div class="popup-pgs-magazine-container-head">
        <p>{{ detailMagazine.title }} pages</p>
        <div @click="togglePopupPgs = !togglePopupPgs">
          <Icons name="close" />
        </div>
      </div>
      <div class="popup-pgs-magazine-container-box">
        <div class="pgs-table">
          <div class="pgs-table-head">
            <div class="pgs-table-head-item">No</div>
            <div class="pgs-table-head-item">Image</div>
            <div class="pgs-table-head-item">File</div>
            <div class="pgs-table-head-item">Action</div>
          </div>
          <div class="pgs-table-body">
            <div v-if="loadingListPage" class="loader"></div>
            <div
              v-else
              class="pgs-table-body-container"
              v-for="item in pages.items"
              :key="item.id"
            >
              <div class="pgs-table-body-container-item no">
                {{ item.page }}
              </div>
              <div class="pgs-table-body-container-item img">
                <div
                  class="pgs-table-body-container-item img-btn"
                  @click="
                    (togglePopupPgsDetailImg = !togglePopupPgsDetailImg),
                      setPgsDetaiPage(
                        item.id,
                        item.img_file,
                        item.img_file,
                        item.page
                      )
                  "
                >
                  image here
                </div>

                <!-- popup pgs-table-body-container-item img-detail -->
                <div
                  v-if="togglePopupPgsDetailImg"
                  class="pgs-table-body-container-item img-detail"
                >
                  <div
                    :style="{
                      background: `url(${pgsDetailPage.img})
                    no-repeat center`,
                    }"
                  ></div>

                  <button @click="togglePopupPgsDetailImg = false">
                    CLOSE
                  </button>
                </div>
              </div>
              <div class="pgs-table-body-container-item file">
                <p>
                  {{ item.img_file }}
                </p>
              </div>
              <div class="pgs-table-body-container-item action">
                <div
                  @click="togglePopupPgsUpdate = true"
                  class="pgs-table-body-container-item action-edit"
                >
                  <Icons name="pencil" />
                </div>
                <div class="pgs-table-body-container-item action-delete">
                  <Icons name="trash" />
                </div>
              </div>
            </div>

            <!-- if page not found -->
            <div v-if="toggleListFound" class="pgs-table-not-found">
              <p>The page does not exist or has not been filled in</p>
            </div>

            <div
              v-if="togglePopupPgsUpdate"
              class="pgs-table-popup-update-file"
            >
              <div class="pgs-table-popup-update-file-head">
                <p>Choose File {{ pgsDetailPage.id }}</p>
                <p @click="togglePopupPgsUpdate = false">
                  <Icons name="close" />
                </p>
              </div>
              <div class="pgs-table-popup-update-file-box">
                <input type="file" />
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="DMagazine">
    <div class="DMagazine-container-1">
      <!-- Dmagazine header -->
      <div class="dashboard-container-1-head">
        <div class="dashboard-container-1-head-title">
          <img src="/src/assets/img/logoGreen.svg" alt="" />
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

          <button
            class="btn-add-magazine"
            @click="togglePopupAdd = !togglePopupAdd"
          >
            <Icons name="plus" />
          </button>

          <!-- loading content -->
          <div v-if="loadingContent" class="loader"></div>
          <div
            v-for="item in row.items"
            class="DMagazine-container-1-content-info-box"
            @click="
              setDetailMagazine(
                item.id,
                item.title,
                item.cover,
                item.description,
                item.pdf_file
              )
            "
          >
            <div class="DMagazine-container-1-content-info-box-img">
              <img v-bind:src="patchCover + item.cover" alt="" />
            </div>
            <div class="DMagazine-container-1-content-info-box-title">
              <p>{{ item.title }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- profile right -->
    <div class="DMagazine-container-2">
      <div class="DMagazine-container-2-top">
        <div class="DMagazine-container-2-top-img">
          <img v-bind:src="detailMagazine.cover" alt="" />
        </div>
      </div>
      <div class="DMagazine-container-2-bottom">
        <div class="DMagazine-container-2-bottom-info">
          <div class="DMagazine-container-2-bottom-info-title">
            <p>
              {{ detailMagazine.title }}
            </p>
          </div>
          <div
            v-if="toggleDetailMagazine"
            class="DMagazine-container-2-bottom-info-action"
          >
            <div
              class="DMagazine-container-2-bottom-info-action-pgs"
              @click="
                (togglePopupPgs = !togglePopupPgs), getPages(detailMagazine.id)
              "
            >
              PAGES
              <Icons name="page" />
            </div>
            <div
              class="DMagazine-container-2-bottom-info-action-edit"
              @click="togglePopupEdit = !togglePopupEdit"
            >
              <Icons name="pencil" />
            </div>
            <div
              v-if="loadingTrash"
              class="DMagazine-container-2-bottom-info-action-delete"
            >
              <div class="loader"></div>
            </div>
            <div
              v-else
              class="DMagazine-container-2-bottom-info-action-delete"
              @click="deleteMagazine(detailMagazine.id)"
            >
              <Icons name="trash" />
            </div>
          </div>
          <div
            v-if="toggleDetailMagazine"
            class="DMagazine-container-2-bottom-info-desc"
          >
            {{ detailMagazine.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
