<template>
  <TemplateAcesso>
    <template v-slot:cabecalho>
      <AcessoCabecalho />
    </template>

    <template v-slot:formulario>
      <AcessoFormulario />
    </template>
  </TemplateAcesso>
</template>

<script>
import AcessoCabecalho from "../components/Acesso/AcessoCabecalho.vue";
import AcessoFormulario from "../components/Acesso/AcessoFormulario.vue";
import TemplateAcesso from "../components/Templates/TemplateAcesso.vue";

export default {
  titulo: "Acesso - Facilita Tasks",
  components: {
    TemplateAcesso,
    AcessoCabecalho,
    AcessoFormulario,
  },
};
</script>
