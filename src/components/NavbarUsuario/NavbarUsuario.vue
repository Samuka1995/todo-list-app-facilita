<template>
  <div class="navbar-content">
    <div></div>
    <UtilUsuario
      fotoUsuario="https://randomuser.me/api/portraits/men/1.jpg"
      nomeUsuario="Samuel de Souza"
      cargoUsuario="Desenvolvedor Front-End"
    />
  </div>
</template>

<script>
import UtilUsuario from "../Utilitarios/UtilUsuario.vue";
export default {
  components: {
    UtilUsuario,
  },
};
</script>

<style lang="stylus" scoped>
.navbar-content {
  display: grid;
  grid-template-columns: auto 300px;
  box-sizing: border-box;
  max-height: 85px;
  padding: 15px 30px;
  margin-bottom: 10px;
  background: var(--cor-background);
  box-shadow: var(--sombra-padrao);
}

@media (max-width: 1100px) {
  .navbar-content {
    display: block;
  }
}
</style>
