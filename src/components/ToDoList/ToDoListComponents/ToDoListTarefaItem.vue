<template>
  <div>
    <div class="tasks-scope">
      <div
        :class="{ 'tarefa--concluida': checkTaskStatus(tarefa) }"
        class="tasks-block"
      >
        <button
          class="tasks-status"
          @click="changeTaskState(tarefa.id)"
        ></button>

        <h4 class="tasks-title" @click="openDescription(tarefa.id)">
          {{ tarefa.titulo }}
        </h4>

        <div class="tasks-type">
          <span class="tasks-tasgs" :class="classByValue(tarefa.tipo.valor)">
            {{ tarefa.tipo.tag || "" }}
          </span>
        </div>

        <UtilTreeDots :funcao="openPopMenuActions" />

        <div></div>

        <div v-if="tarefaAberta == tarefa.id" class="tasks-description">
          {{ tarefa.descricao || "Essa tarefa não possui descrição..." }}
        </div>
      </div>

      <ToDoListTarefaItemMenuAcoes
        :id="tarefa.id"
        :tipo="tarefa.tipo"
        class="pop-area"
        v-if="popMenuAtivo"
        v-on:meFecha="closePopMenuActions()"
      />
    </div>
    <UtilBloquadorDeTela v-if="popMenuAtivo" :fechar="closePopMenuActions" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { UtilTarefas } from "../../../util";
import UtilBloquadorDeTela from "../../Utilitarios/UtilBloquadorDeTela.vue";
import UtilTreeDots from "../../Utilitarios/UtilTreeDots.vue";
import ToDoListTarefaItemMenuAcoes from "./ToDoListTarefaItemMenuAcoes.vue";

export default {
  components: {
    ToDoListTarefaItemMenuAcoes,
    UtilBloquadorDeTela,
    UtilTreeDots,
  },
  data() {
    return {
      popMenuAtivo: false,
    };
  },
  props: {
    tarefa: Object,
    tarefaAberta: Number,
  },
  methods: {
    ...mapActions("toDoList", ["changeTaskState", "clearTasks"]),
    classByValue: (valor) => UtilTarefas.setClassByValue(valor),
    checkTaskStatus: (tarefa) => tarefa.concluida,

    openPopMenuActions() {
      this.popMenuAtivo = true;
    },

    closePopMenuActions() {
      this.popMenuAtivo = false;
    },

    openDescription(id) {
      this.$emit("abrirDescricaoTarefa", id);
    },
  },
};
</script>

<style lang="stylus" scoped>
.tasks-block {
  display: grid;
  grid-template-columns: 35px auto 110px 20px;
  background: var(--cor-background);
  box-shadow: var(--sombra-padrao);
  border-radius: 5px;
  padding: 20px 30px;
}

.tasks-title {
  padding: 0 12px;
  margin: 0;
  align-self: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  cursor: pointer;
}

.tasks-title:hover {
  color: var(--cor-principal);
}

.tasks-status {
  height: 35px;
  width: 35px;
  background: #E2EEF5;
  border-radius: 5px;
  border: none;
  transition: var(--transicao-padrao);
  cursor: pointer;
}

.tasks-tasgs {
  padding: 4px 10px;
  color: var(--cor-texto-claro);
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
}

.tasks-type {
  align-self: center;
  text-align: right;
}

.tarefa--concluida {
  transition: var(--transicao-padrao);
  opacity: 0.5;

  .tasks-status {
    background: url('../../../assets/icon/concluido.svg');
    background-color: var(--cor-sucesso);
    background-size: 20px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .tasks-title {
    text-decoration: line-through;
  }
}

.tasks-scope {
  position: relative;
}

.tasks-description {
  padding: 0px 13px;
  font-size: 15px;
  line-height: 16px;
}

.pop-area {
  z-index: 1011;
  position: absolute;
  right: 12px;
  top: 10px;
}

@media (max-width: 800px) {
  .tasks-block {
    display: grid;
    padding: 10px;
    grid-template-columns: 35px auto 30% 10%;
  }

  .tasks-type {
    text-align: right;
  }

  .pop-area {
    right: 0px;
    top: 0px;
  }
}
</style>
