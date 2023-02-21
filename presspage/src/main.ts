import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const CrmApp = defineAsyncComponent(() => import("crm/App"));
const MiApp = defineAsyncComponent(() => import("mi/App"));

const routes = [
  { path: "/", component: MiApp },
  { path: "/crm", component: CrmApp },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
