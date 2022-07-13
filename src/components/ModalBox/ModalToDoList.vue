<template>
  <ModalBase>
    <component v-bind:is="getActiveModalComponent"></component>
  </ModalBase>
</template>
<script>
import { mapGetters } from "vuex";

import ModalBase from "./ModalBase.vue";
import ModalToDoListCadastro from "./ModalToDoList/ModalToDoListCadastro.vue";
import ModalToDoListConfirmacao from "./ModalToDoList/ModalToDoListConfirmacao.vue";

export default {
  components: {
    ModalBase,
    ModalToDoListCadastro,
    ModalToDoListConfirmacao,
  },
  computed: {
    ...mapGetters("modalBox", ["getActiveModalComponent"]),
  },
};
</script>
