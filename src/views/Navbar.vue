<template>
  <div class="navbar">
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      style="height: 60px;"
    >
      <el-col :span="20">
        <img
          src="@/assets/img/GP-logo-2019-TC-white-[web]-01.png"
          alt="Greenpeace 綠色和平"
          class="navbar-logo"
        />
      </el-col>
      <el-col class="hidden-sm-and-down">
        <el-button
          type="danger"
          class="apply-btn-navbar"
          round
          plain
          @click="directTo('applyForm')"
          >立即申請</el-button
        >
      </el-col>
      <el-col class="hidden-md-and-up">
        <el-button
          class="more-btn-navbar"
          icon="el-icon-menu"
          @click="drawer = !drawer"
        ></el-button>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      custom-class="drawer"
      direction="ltr"
      size="50%"
      append-to-body="true"
    >
      <el-menu
        text-color="#000000"
        active-text-color="#fff"
        :default-active="active"
        class="el-menu"
      >
        <el-menu-item
          v-for="(item, i) in routers"
          :class="item.class"
          :key="i"
          :index="(i + 1).toString()"
          @click="directTo(item.link)"
        >
          <span>
            <i :class="item.icon"></i>
            {{ item.label }}
          </span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    routers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: "1",
      drawer: false
    };
  },
  created() {
    this.bindSection();
  },
  methods: {
    directTo(link) {
      if (link !== this.$route.params.section) {
        this.$router.push({ path: link });
      }
      this.drawer = false;
    },
    bindSection() {
      for (let i in this.routers) {
        if (this.routers[i].link === this.$route.params.section) {
          let index = (parseInt(i) + 1).toString();
          this.active = index;
        }
      }
    }
  },
  watch: {
    "$route.params.section": function() {
      this.bindSection();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  .navbar-logo {
    max-width: 200px;
  }
  .el-menu-item {
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .apply-btn {
    // background-color: #f56c6c;
    background-color: #ff8100;
    color: #fff;
    font-weight: bold;
    i {
      color: #fff !important;
    }
  }
  .apply-btn.is-active {
    i {
      color: white !important;
    }
    color: white !important;
    font-weight: bolder;
    // background-color: #f56c6c;
    background-color: #ff8100; 
  }
  .apply-btn-navbar {
    float: right;
    color: #fff;
    background-color: #ff8100;
    border-color: #ff8100;
  }
  .more-btn-navbar {
    float: right;
  }
}
</style>
