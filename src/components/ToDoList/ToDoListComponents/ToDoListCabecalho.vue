<template>
  <div class="todolist-header">
    <h2 class="header-title">Minhas Tarefas</h2>
    <p class="header-sub">
      Olá <span>{{ usuario }}</span>

      <template v-if="numTasks > 0">
        , você tem
        <span class="sublinhado">
          {{ numTasks }} tarefa{{ plural(numTasks) }}
        </span>
        <span> </span>
        pendente{{ plural(numTasks) }}.
      </template>

      <template v-else>
        , nada de tarefas...
        <span>
          <ToDoListLinkAdicionarTarefa />
        </span>
      </template>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDoListLinkAdicionarTarefa from "./ToDoListLinkAdicionarTarefa.vue";
export default {
  components: {
    ToDoListLinkAdicionarTarefa,
  },
  props: {
    usuario: String,
  },

  methods: {
    plural: (valor) => (valor > 1 ? "s" : ""),
  },

  computed: {
    ...mapGetters("toDoList", ["numberOfPendingTasks"]),

    numTasks() {
      return this.numberOfPendingTasks;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header-title {
  margin: 0;
  padding: 0;
  font-size: 26px;
  line-height: 27px;
  padding-bottom: 5px;
  color: var(--cor-texto);
}

.header-sub {
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 17px;
  line-height: 18px;
  color: var(--cor-sub-cabecalho);

  a {
    text-decoration: none;
  }

  span, a {
    color: var(--cor-principal);
  }
}
</style>
