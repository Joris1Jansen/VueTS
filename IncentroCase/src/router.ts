import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./pages/Home.vue";
import Form from "./pages/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },

  //   {
  //     path: '/:catchAll(.*)',
  //     name: 'PageNotFound',
  //     component: () => import('../views/PageNotFound.vue')
  //   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
