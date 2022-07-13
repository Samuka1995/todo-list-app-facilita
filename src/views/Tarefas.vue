<template>
  <template-painel>
    <template v-slot:navegacao>
      <menu-de-navegacao />
    </template>

    <template v-slot:navegacao-secundaria>
      <menu-secundario-tarefas />
    </template>

    <template v-slot:navbar>
      <navbar-usuario />
    </template>

    <template v-slot:area-util>
      <to-do-list />
    </template>

    <template v-slot:modal>
      <modal-to-do-list />
    </template>
  </template-painel>
</template>
<script>
import MenuDeNavegacao from "../components/MenuDeNavegacao/MenuDeNavegacao.vue";
import MenuSecundarioTarefas from "../components/MenuSecundario/MenuSecundarioTarefas.vue";
import ModalToDoList from "../components/ModalBox/ModalToDoList.vue";
import NavbarUsuario from "../components/NavbarUsuario/NavbarUsuario.vue";
import TemplatePainel from "../components/Templates/TemplatePainel.vue";
import ToDoList from "../components/ToDoList/ToDoList.vue";

export default {
  titulo: "Tarefas - Facilita Tasks",
  components: {
    MenuDeNavegacao,
    NavbarUsuario,
    ToDoList,
    TemplatePainel,
    MenuSecundarioTarefas,
    ModalToDoList,
  },
};
</script>
