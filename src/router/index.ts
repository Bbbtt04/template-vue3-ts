import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
