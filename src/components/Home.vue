<template>
  <div class="home">
    <el-row>
      <el-col>
        <div>
          <h1>誠聘綠色和平籌款幹事</h1>
          <h2>以實際行動推動積極改變</h2>
        </div>
        <carousel
          ref="carousel"
          :per-page="1"
          :adjustableHeight="true"
          :mouse-drag="true"
          :autoplay="true"
          :autoplayTimeout="8000"
          :loop="true"
          :navigationEnables="true"
          :paginationEnabled="false"
        >
          <slide v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.imgUrl" width="100%" />
          </slide>
        </carousel>
      </el-col>
    </el-row>
    <div></div>
    <el-row>
      <el-col>
        <el-divider class="hidden-xs-only"></el-divider>
        <p>
          街頭籌款團隊往往站在環境保護的最前線，面對大眾，以堅持與熱誠傳播環保訊息，尋找支持的力量。你願意成為我們其中一員嗎？
        </p>
        <p>加入綠色和平，以實際行動推動積極改變。</p>
        <p>
          脆弱的地球需要你我去守護，作為綠色和平的一員，你將有機會直接參與重要的環保項目。不論年齡或性別，綠色和平只著重員工的能力和成長，更承諾提供晉升機會和完善薪酬制度，讓員工發揮所長，為環境帶來更多改變，開拓新里程。
        </p>
      </el-col>
    </el-row>
    <center-btn></center-btn>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import CenterBtn from './CenterBtn';

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    CenterBtn,
  },
  data() {
    return {
      carouselItems: [
        {
          imgUrl: require("@/assets/img/slide1.jpeg")
        },
        {
          imgUrl: require("@/assets/img/slide2.jpg")
        },
        {
          imgUrl: require("@/assets/img/slide3.jpg")
        },
        {
          imgUrl: require("@/assets/img/slide4.jpg")
        },
        {
          imgUrl: require("@/assets/img/slide5.jpg")
        },
        {
          imgUrl: require("@/assets/img/slide6.jpg")
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs["carousel"].onResize();
      this.$refs["carousel"].goToPage(0);
    }, 200);
  }
};
</script>

<style>
.VueCarousel-slide {
  visibility: visible;
  flex-basis: 100%;
  width: 100%;
}
</style>
