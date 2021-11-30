import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import SetList from "@/components/SetList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Set List",
    alias: "/",
    path: "/sets",
    component: SetList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
