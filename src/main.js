import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import TheTable from "./components/layout/TheTable.vue";
import ReportForm from "./views/report/ReportForm.vue";
// import jQuery from 'jQuery'

const app = createApp(App);
const routes = [
  { path: "/", component: TheTable },
  { path: "/report", component: ReportForm },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

app.use(router);
app.mount("#app");