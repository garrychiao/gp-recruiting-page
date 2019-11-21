<template>
  <main id="app" class="main">
    <el-container>
      <el-header class="header">
        <header class="header">
          <div class="container">
            <Navbar :routers="routers"></Navbar>
          </div>
        </header>
      </el-header>
      <!-- header -->
      <el-main>
        <el-container>
          <el-row style="width: 100%;">
            <el-col :md="6" class="hidden-sm-and-down">
              <Sidebar :routers="routers"></Sidebar>
            </el-col>
            <el-col :md="18">
              <MainContent></MainContent>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
      <!-- main -->
      <el-footer height="auto">
        <footer class="footer">
          <div class="container">
            <AppFooter />
          </div>
        </footer>
      </el-footer>
      <!-- footer -->
      <el-button
        v-if="fixBtnVisible"
        type="danger"
        icon="el-icon-edit"
        class="hidden-md-and-up fix-btn"
        circle
        @click="directTo('applyForm')"
      ></el-button>
    </el-container>
  </main>
</template>

<script>
import MainContent from "./views/MainContent.vue";
import Navbar from "./views/Navbar.vue";
import Sidebar from "./views/Sidebar.vue";
import AppFooter from "./views/AppFooter.vue";

export default {
  name: "app",
  data() {
    return {
      fixBtnVisible: true,
      routers: [
        {
          class: "",
          icon: "el-icon-s-home",
          link: "home",
          label: "首頁"
        },
        {
          class: "",
          icon: "el-icon-aim",
          link: "mission",
          label: "組織使命"
        },
        {
          class: "",
          icon: "el-icon-user-solid",
          link: "recruit",
          label: "人才招聘資訊"
        },
        {
          class: "",
          icon: "el-icon-postcard",
          link: "personnel",
          label: "升遷制度"
        },
        {
          class: "",
          icon: "el-icon-s-check",
          link: "fundraiser",
          label: "認識籌款幹事"
        },
        {
          class: "",
          icon: "el-icon-info",
          link: "recruitInfo",
          label: "聯絡方式"
        },
        {
          class: "apply-btn",
          icon: "el-icon-document-checked",
          link: "applyForm",
          label: "立即申請"
        }
      ]
    };
  },
  components: {
    MainContent,
    Sidebar,
    Navbar,
    AppFooter
  },
  created() {
    if (this.$route.params.section == "applyForm") {
      this.fixBtnVisible = false;
    } else {
      this.fixBtnVisible = true;
    }
  },
  methods: {
    directTo(link) {
      if (link !== this.$route.params.section) {
        this.$router.push({ path: link });
      }
      window.scrollTo(0, 0);
    }
  },
  watch: {
    "$route.params.section": function() {
      if (this.$route.params.section == "applyForm") {
        this.fixBtnVisible = false;
      } else {
        this.fixBtnVisible = true;
      }
    }
  }
};
</script>

<style lang="scss">
.main {
  > .el-container {
    min-height: 100vh;
  }
  .el-header {
    background-color: #6c0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    color: white;
    .header {
      .container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .el-main {
    flex: 1;
    .el-container {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .el-footer {
    margin-top: 60px;
    background-color: #292f47;
  }
  .footer {
    font-size: 14px;
    padding: 2rem 0;
    .container {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .fix-btn {
    z-index: 1200;
    position: fixed;
    bottom: 16px;
    right: 16px;
    font-size: 2rem !important;
  }
}
</style>
