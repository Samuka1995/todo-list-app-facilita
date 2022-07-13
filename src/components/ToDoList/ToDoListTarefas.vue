<template>
  <div class="tasks-area">
    <div class="tasks-list">
      <div
        v-for="tarefa in listFilteredByRelevance()"
        :key="tarefa.id"
        class="tasks-item"
      >
        <ToDoListTarefaItem
          :tarefa="tarefa"
          :tarefaAberta="idTarefaDescAberta"
          v-on:abrirDescricaoTarefa="setTaskWithOpenDesc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Util, UtilTarefas } from "../../util";
import ToDoListTarefaItem from "./ToDoListComponents/ToDoListTarefaItem.vue";

export default {
  mounted() {},
  components: {
    ToDoListTarefaItem,
  },
  data() {
    return {
      idTarefaDescAberta: null,
    };
  },
  methods: {
    ...mapActions("toDoList", ["clearTasks"]),

    listFilteredByRelevance() {
      let tarefas = [...this.listFilteredBySearch()];
      return tarefas.sort((a, b) => {
        if (a.tipo.valor > b.tipo.valor) return -1;
        if (a.tipo.valor < b.tipo.valor) return 1;
        return 0;
      });
    },

    listFilteredBySearch() {
      const busca = this.getSearchValue;
      if (busca) {
        let tarefas = this.getList();
        return tarefas.filter((tarefa) => {
          return (
            tarefa.titulo.toUpperCase().match(busca.toUpperCase()) ||
            tarefa.descricao.toUpperCase().match(busca.toUpperCase())
          );
        });
      } else return this.getList();
    },

    getList() {
      const tipo = this.getTaskTypeByURL;
      return UtilTarefas.definirListaPorTipo(tipo, this);
    },

    setTaskWithOpenDesc(id) {
      this.idTarefaDescAberta = id;
    },
  },

  computed: {
    ...mapGetters("toDoList", [
      "toDoListTasks",
      "listOfImportantToDos",
      "urgentToDoList",
      "tasklistOther",
      "listOfFinishedTasks",
      "pendingTasklist",
      "listOfDeletedTasks",
    ]),
    ...mapGetters("busca", ["getSearchValue"]),

    getTaskTypeByURL() {
      const parametros = this.$route.params;
      return Util.isObjetoVazio(parametros) > 0 ? parametros.tipo : "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.tasks-list {
  max-height: 45vh;
  overflow-y: auto;
  margin-bottom: 20px;
}

.tasks-list::-webkit-scrollbar {
  width: 20px;
}

.tasks-list::-webkit-scrollbar-track {
  background: transparent;
}

.tasks-list::-webkit-scrollbar-thumb {
  background-color: var(--cor-background);
  border-radius: 20px;
  border: 7px solid var(--cor-background-painel);
}

.tasks-item {
  margin: 10px 0px;
  transition: var(--transicao-padrao);
}

@media (max-width: 500px) {
  .tasks-list {
    max-height: 80vh;
    overflow-y: auto;
    margin-bottom: 0;
  }
}
</style>
