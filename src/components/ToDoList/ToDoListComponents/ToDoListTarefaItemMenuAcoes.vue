<template>
  <div class="menu-action-pop">
    <div class="pop-block">
      <ul v-if="tipo.valor != 500">
        <li @click="openTaskEditor(id)">Editar</li>
        <li @click="deleteTaskById(id)">Excluir</li>
      </ul>
      <ul v-else>
        <li @click="retrieveTaskById(id)">Recuperar</li>
      </ul>
    </div>
    <UtilTreeDots class="pop-button" :funcao="closeMenuPop" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import UtilTreeDots from "../../Utilitarios/UtilTreeDots.vue";
export default {
  components: {
    UtilTreeDots,
  },
  props: {
    id: Number,
    tipo: Object,
  },
  methods: {
    ...mapMutations("modalBox", [
      "activateModalBox",
      "setTitleModalBox",
      "defineModalComponent",
      "setSubTitleModal",
    ]),

    closeMenuPop() {
      this.$emit("meFecha");
    },

    openTaskEditor(id) {
      this.closeMenuPop();
      this.setTitleModalBox("Editar Tarefa");
      this.defineModalComponent("ModalToDoListCadastro");
      this.activateModalBox(id);
    },

    deleteTaskById(id) {
      this.closeMenuPop();
      this.setTitleModalBox(
        "Tem certeza que deseja <span class='cor-perigo'>excluir</span> essa tarefa?"
      );
      this.setSubTitleModal("Essa ação não poderá ser desfeita.");
      this.defineModalComponent("ModalToDoListConfirmacao");
      this.activateModalBox(id);
    },

    retrieveTaskById(id) {
      this.setTitleModalBox(
        "Tem certeza que deseja <span class='cor-perigo'>recuperar</span> essa tarefa?"
      );
      this.setSubTitleModal("Essa tarefa voltará para a lista.");
      this.defineModalComponent("ModalToDoListConfirmacao");
      this.activateModalBox(id);
    },
  },
};
</script>

<style lang="stylus" scoped>
.menu-action-pop {
  display: grid;
  grid-template-columns: auto 10px;
  background: var(--cor-background);
  width: 109px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color: #748CA5;
  padding: 5px 16px;
  box-shadow: 0px 0px 8px 2px rgba(49, 81, 113, 0.1);

  ul {
    display: inline-block;
    padding: 0;
    margin: 0;

    li {
      margin: 15px 0;
      padding-left: 16px;
      list-style: none;
      background-image: url('../../../assets/icon/elipse.svg');
      background-size: 9px;
      background-repeat: no-repeat;
      background-position: center left;
      transition: var(--transicao-padrao);
      cursor: pointer;
    }

    li:hover {
      background-image: url('../../../assets/icon/elipse_check.svg');
    }
  }
}

.pop-button {
  position: absolute;
  top: 19px;
  right: 10px;
  color: var(--cor-principal);
}
</style>
