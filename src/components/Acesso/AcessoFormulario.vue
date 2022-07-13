<template>
  <form action="/tarefas">
    <h3 class="form-title">Entre com seus dados de acesso.</h3>

    <div class="input-block">
      <label class="input-label" for="'input-user' + nome"
        >Nome de usuário ou e-mail:</label
      >
      <input
        v-model="usuario"
        id="'input-user' + nome"
        class="input-base input-input"
        type="text"
      />
    </div>

    <div class="input-block">
      <label class="input-label" for="'input-password' + nome">Senha:</label>
      <input
        v-model="senha"
        id="'input-password' + nome"
        class="input-base input-input"
        type="password"
      />
    </div>

    <div class="button-block">
      <UtilBotao botao="Enviar" :responsivo="true" cor="sucesso--btn" />
    </div>
  </form>
</template>

<script>
import UtilBotao from "../Utilitarios/UtilBotao.vue";

export default {
  components: {
    UtilBotao,
  },
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
.form-title {
  font-width: 700;
  font-size: 18px;
  color: var(--cor-texto);
}
</style>
