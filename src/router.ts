import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import SetList from "@/components/SetList.vue";
import CardList from "@/components/CardList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Set List",
    alias: "/",
    path: "/sets",
    component: SetList
  },
  {
    name: "Card List",
    path: "/sets/:setCode",
    component: CardList,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
