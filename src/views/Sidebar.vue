<template>
  <div class="sidebar">
    <el-menu active-text-color="#fff" :default-active="active" class="el-menu">
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
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    routers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: '1',
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
    },
    bindSection() {
      for (let i in this.routers) {
        if (this.routers[i].link === this.$route.params.section) {
          let index = (parseInt(i) + 1).toString();
          this.active = index;
        }
      }
      // console.log(this.active)
    },
  },
  watch: {
    '$route.params.section': function() {
      this.bindSection();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  margin-right: 16px;
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
}
</style>
