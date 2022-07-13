<template>
  <a href="#" @click="openModalBoxAddTasks()">Adicionar uma tarefa!</a>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("modalBox", [
      "activateModalBox",
      "setTitleModalBox",
      "defineModalComponent",
    ]),

    openModalBoxAddTasks() {
      this.setTitleModalBox("Cadastrar Tarefas");
      this.defineModalComponent("ModalToDoListCadastro");
      this.activateModalBox();
    },
  },
};
</script>

<style></style>
