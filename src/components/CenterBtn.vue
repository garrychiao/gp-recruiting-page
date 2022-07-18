<template>
  <div class="center-btn-container">
    <el-row>
      <el-col :xs="{ span: 24, offset: 0 }" :sm="{ span: 6, offset: 8 }">
        <el-button class="center-btn" @click="directTo('applyForm')">
          立即申請
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CenterBtn',
  methods: {
    directTo(link) {
      if (link !== this.$route.params.section) {
        this.$router.push({ path: link });
      }
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scope>
.center-btn-container {
  padding-top: 20px;
}
.center-btn {
  border-radius: 8px !important;
  font-size: 1rem !important;
  background-color: #ff8100 !important;
  color: white !important;
  width: 100% !important;
}
</style>
