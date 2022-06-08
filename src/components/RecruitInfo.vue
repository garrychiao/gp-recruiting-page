<template>
  <div class="recruit-info">
    <h1>聯絡方式</h1>
    <p>
      有意應徵者，歡迎將履歷電郵至
      <a href="mailto:andy.li@greenpeace.org" taget="_blank"
        >andy.li@greenpeace.org</a
      >
      或 與招聘主任 (Whatsapp 5913 0059)了解詳情。
      <br />(應徵者提供之全部資料絕對保密及只作招聘之用)
    </p>
    <p>
      你同時可至官網，了解更多綠色和平的資訊
      <a href="https://www.greenpeace.org/hongkong/" taget="_blank"
        >https://www.greenpeace.org/hongkong/</a
      >
    </p>
    <el-divider class="hidden-xs-only"></el-divider>
    <img src="../assets/img/slide2.jpg" width="100%" alt />
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: 'RecruitInfo',
  components: {
    CenterBtn,
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    },
  },
};
</script>
