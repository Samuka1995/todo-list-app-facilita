<template>
  <div>
    <button
      id="adicionar-tarefa"
      @click="openModalBoxAddTasks()"
      class="button-add"
    >
      <span><i class="fas fa-plus"></i></span>
    </button>
  </div>
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

<style lang="stylus" scoped>
.button-add {
  box-sizing: border-box;
  z-index: 10;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  box-sizing: border-box;
  background: #0ED984;
  text-align: center;
  padding: 17px;
  font-size: 20px;
  color: var(--cor-texto-claro);
  cursor: pointer;
  border: none;
}

.button-add:disabled {
  opacity: 0.5;
}

@media (max-width: 1100px) {
  .button-add {
    height: 30px;
    width: 30px;
    font-size: 20px;
    padding: 6px;
  }
}
</style>
