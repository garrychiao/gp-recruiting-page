import Vue from 'vue';
import MainContent from '../views/MainContent.vue';
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/:section",
      name: "MainContent",
      component: MainContent
    }
  ],
});

export default router
