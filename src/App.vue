<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
import "./assets/css/root.styl";
import "./assets/css/fonts.styl";
import "./assets/css/style.styl";
import "./assets/css/util.styl";

import "@fortawesome/fontawesome-free/css/all.css";

import { TasksCache } from "./store/modules/ToDoList/ToDoListClasses";
import { mapActions } from "vuex";

export default {
  mounted() {
    const tarefas = TasksCache.fetchTasksCache();
    if (tarefas) {
      if (tarefas.length > 0) this.updateTasks(tarefas);
      else this.popularTasks();
    } else this.popularTasks();
  },
  methods: {
    ...mapActions("toDoList", ["updateTasks", "popularTasks"]),
  },
};
</script>
