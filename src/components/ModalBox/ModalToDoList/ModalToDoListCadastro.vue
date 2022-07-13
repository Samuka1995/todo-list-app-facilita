<template>
  <div>
    <ModalToDoListCabecalho />
    <ModalToDoListFormulario />
  </div>
</template>
<script>
import ModalToDoListCabecalho from "./ModalToDoListCadastro/ModalToDoListCadastroCabecalho.vue";
import ModalToDoListFormulario from "./ModalToDoListCadastro/ModalToDoListCadastroFormulario.vue";

export default {
  components: {
    ModalToDoListFormulario,
    ModalToDoListCabecalho,
  },
};
</script>
