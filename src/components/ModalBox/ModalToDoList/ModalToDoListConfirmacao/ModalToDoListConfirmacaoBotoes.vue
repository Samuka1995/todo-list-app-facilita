<template>
  <div class="modal-confirmation">
    <div class="confirmation-buttons">
      <a
        @click.prevent="botaoPrimarioAcao"
        class="botao sucesso--btn confirmation-button"
        >{{ botaoPrimario }}</a
      >
      <a
        @click.prevent="botaoSecundarioAcao"
        class="botao perigo--btn confirmation-button"
        >{{ botaoSecundario }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    botaoPrimario: String,
    botaoPrimarioAcao: Function,
    botaoSecundario: String,
    botaoSecundarioAcao: Function,
  },
};
</script>

<style lang="stylus" scoped>
.confirmation-buttons {
  text-align: center;
}

.confirmation-button {
  margin: 0px 5px;
}

@media (max-width: 500px) {
  .confirmation-button {
    width: 70%;
    margin: 5px 0;
  }
}
</style>
