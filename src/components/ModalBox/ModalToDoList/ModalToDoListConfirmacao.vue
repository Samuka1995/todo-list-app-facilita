<template>
  <div>
    <ModalToDoListConfirmacaoCabecalho />
    <ModalToDoListConfirmacaoBotoes
      botaoPrimario="Cancelar"
      :botaoPrimarioAcao="disableModalBox"
      botaoSecundario="Confirmar"
      :botaoSecundarioAcao="deleteTaskById"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ModalToDoListConfirmacaoBotoes from "./ModalToDoListConfirmacao/ModalToDoListConfirmacaoBotoes.vue";
import ModalToDoListConfirmacaoCabecalho from "./ModalToDoListConfirmacao/ModalToDoListConfirmacaoCabecalho.vue";

export default {
  components: {
    ModalToDoListConfirmacaoBotoes,
    ModalToDoListConfirmacaoCabecalho,
  },
  methods: {
    ...mapMutations("modalBox", ["disableModalBox"]),
    ...mapActions("toDoList", ["deleteTasks", "retrieveTask"]),

    deleteTaskById() {
      this.deleteTasks(this.getIdModalBox);
      this.disableModalBox();
    },
  },
  computed: {
    ...mapGetters("modalBox", ["getIdModalBox"]),
  },
};
</script>
