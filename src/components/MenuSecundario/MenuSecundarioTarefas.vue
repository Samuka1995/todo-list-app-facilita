<template>
  <MenuSecundarioBase>
    <template v-slot:titulo> Categorias </template>
    <template v-slot:lista>
      <LinksTarefasCategorias />
    </template>
  </MenuSecundarioBase>
</template>

<script>
import MenuSecundarioBase from "./MenuSecundarioBase.vue";
import LinksTarefasCategorias from "./Links/LinksTarefasCategorias.vue";
export default {
  components: {
    MenuSecundarioBase,
    LinksTarefasCategorias,
  },
};
</script>
