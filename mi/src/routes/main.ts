import { createRouter, createWebHashHistory } from "vue-router";
import Clients from "../pages/Clients.vue";
import Invoices from "../pages/Invoices.vue";

export const routes = [
  {
    path: "/",
    children: [
      {
        path: "clients",
        component: Clients,
      },
      {
        path: "invoices",
        component: Invoices,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
