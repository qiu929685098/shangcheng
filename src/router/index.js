import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import("@/views"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home"),
        keepAlive: true
      },
      {
        path: "/classify",
        component: () => import("@/views/Classify")
      },
      {
        path: "/cart",
        component: () => import("@/views/Cart")
      }
    ]
  },
  {
    path: "/mine",
    component: () => import("@/views/Mine")
  },
  {
    path: "/detail/:id",
    component: () => import("@/views/Detail"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
