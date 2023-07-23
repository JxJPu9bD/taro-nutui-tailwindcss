import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../pages/user/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: IndexView,
    },
    {
      path: '/login',
      component: () => import('../pages/login/index.vue')
    },
    {
      path: '/detail',
      component: () => import('../pages/detail/index.vue')
    },

  ]
})

export default router;
