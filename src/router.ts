import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import BlockList from "@/pages/BlockList.vue";
import BlockDetail from "@/pages/BlockDetail.vue";
import SetDetail from "@/pages/SetDetail.vue";

const routes: Array<RouteRecordRaw> = [
    {
        name: "BlockList",
        alias: "/",
        path: "/blocks",
        component: BlockList
    },
    {
        name: "BlockDetail",
        path: "/blocks/:blockCode",
        component: BlockDetail,
        props: true
    },
    {
        name: "SetDetail",
        path: "/sets/:setCode",
        component: SetDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
