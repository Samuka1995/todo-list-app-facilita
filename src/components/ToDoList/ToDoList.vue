<template>
  <div class="todolist">
    <div class="button-add">
      <ToDoListBotaoModal />
    </div>
    <div class="todolist-block">
      <a name="todolist"></a>
      <ToDoListCabecalho usuario="Samuel de Souza" />
      <ToDoListBusca />
      <ToDoListTarefas />
    </div>
  </div>
</template>

<script>
import ToDoListBotaoModal from "./ToDoListComponents/ToDoListBotaoModal.vue";
import ToDoListCabecalho from "./ToDoListComponents/ToDoListCabecalho.vue";
import ToDoListBusca from "./ToDoListBusca.vue";
import ToDoListTarefas from "./ToDoListTarefas.vue";
export default {
  components: {
    ToDoListCabecalho,
    ToDoListBusca,
    ToDoListTarefas,
    ToDoListBotaoModal,
  },
};
</script>

<style lang="stylus" scoped>
.todolist {
  display: grid;
  grid-template-columns: auto 650px auto;
  grid-auto-rows: minmax(auto, 100vh);
  position: relative;
}

.todolist-block {
  margin-top: 25vh;
  grid-column-start: 2;
}

.button-add {
  position: absolute;
  right: 28px;
  bottom: 28px;
}

@media (max-width: 1100px) {
  .todolist {
    display: block;
    height: 100vh;
  }

  .todolist-block {
    margin-top: 30px;
    padding: 10vh 30px 30px 30px;
  }

  .button-add {
    top: 9.5vh;
    left: 220px;
    position: absolute;
  }
}
</style>
