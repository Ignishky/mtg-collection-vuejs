import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import BlockList from "@/components/BlockList.vue";
import SetList from "@/components/SetList.vue";
import CardList from "@/components/CardList.vue";

const routes: Array<RouteRecordRaw> = [
    {
        name: "Block List",
        alias: "/",
        path: "/blocks",
        component: BlockList
    },
    {
        name: "Set List",
        path: "/blocks/:blockCode",
        component: SetList,
        props: true
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
