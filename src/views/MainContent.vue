<template>
  <div>
    <transition name="fade" mode="out-in">
      <component v-bind:is="section"></component>
    </transition>
  </div>
</template>

<script>
import Home from "../components/Home";
import Mission from "../components/Mission";
import Recruit from "../components/Recruit";
import Personnel from "../components/Personnel";
import Fundraiser from "../components/Fundraiser";
import RecruitInfo from "../components/RecruitInfo";
import ApplyForm from "../components/ApplyForm";

export default {
  name: "MainContent",
  components: {
    Home,
    Mission,
    Recruit,
    Personnel,
    Fundraiser,
    RecruitInfo,
    ApplyForm
  },
  data() {
    return {
      section: Home,
      routerSection: [
        {
          route: "home",
          component: Home
        },
        {
          route: "mission",
          component: Mission
        },
        {
          route: "recruit",
          component: Recruit
        },
        {
          route: "personnel",
          component: Personnel
        },
        {
          route: "fundraiser",
          component: Fundraiser
        },
        {
          route: "recruitInfo",
          component: RecruitInfo
        },
        {
          route: "applyForm",
          component: ApplyForm
        }
      ]
    };
  },
  created() {
    this.bindSection();
  },
  methods: {
    bindSection() {
      let section = this.routerSection.find(doc => {
        return doc.route === this.$route.params.section;
      });
      // console.log(section);
      if (section) {
        this.section = section.component;
        dataLayer.push({ event: "pageview" });
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
