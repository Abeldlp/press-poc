import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const CrmApp = defineAsyncComponent(() => import("crm/App"));
const MiApp = defineAsyncComponent(() => import("mi/App"));

const Clients = defineAsyncComponent(() => import("mi/Clients"));
const Invoices = defineAsyncComponent(() => import("mi/Invoices"));

const routes = [
  {
    path: "/mi",
    component: MiApp,
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
  { path: "/crm", component: CrmApp },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
