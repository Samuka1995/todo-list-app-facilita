import Vue from "vue";
import VueRouter from "vue-router";
import Acesso from "../views/Acesso.vue";
import Tarefas from "../views/Tarefas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Página de Acesso",
    component: Acesso,
  },
  {
    path: "/tarefas",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/tarefas/:tipo",
    component: Tarefas,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
