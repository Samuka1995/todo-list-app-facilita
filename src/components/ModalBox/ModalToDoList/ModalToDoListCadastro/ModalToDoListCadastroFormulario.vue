<template>
  <form class="modal-form" @submit.prevent="addTaskList">
    <input type="hidden" id="tipo" v-model="tarefa.id" />

    <div class="input-block">
      <label class="input-label" for="descricao-tarefa">Título:</label>
      <input required class="input-input" type="text" v-model="tarefa.titulo" />
    </div>

    <div class="input-block">
      <label class="input-label" for="descricao-tarefa">Descrição:</label>
      <textarea
        required
        v-model="tarefa.descricao"
        class="input-base input-textarea"
        name="descricao-tarefa"
        id="descricao-tarefa"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <div class="modal-actions">
      <div class="modal__radio">
        <input
          v-model="tarefa.tipo.valor"
          class="radio__input"
          id="valor-valor"
          type="radio"
          :value="2"
        />
        <label class="radio-label" for="valorChoice1">Importante</label>

        <input
          v-model="tarefa.tipo.valor"
          class="radio__input"
          id="valor-valor"
          type="radio"
          :value="3"
        />
        <label class="radio-label" for="valorChoice1">Urgente</label>
      </div>

      <div class="modal-buttons">
        <UtilBotao
          class="modal-button"
          cor="sucesso--btn"
          :botao="botao"
          tipo="submit"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import UtilBotao from "../../../Utilitarios/UtilBotao.vue";
import { UtilTarefas } from "../../../../util";

export default {
  components: {
    UtilBotao,
  },
  async mounted() {
    const id = this.getIdModalBox;
    if (id) {
      const tarefaOriginal = await this.getTaskById(id);
      const clone = JSON.parse(JSON.stringify(tarefaOriginal));
      this.tarefa = clone;
      this.botao = "Editar Tarefa";
    }
  },
  data() {
    return {
      botao: "Adicionar",
      tarefa: {
        id: null,
        titulo: "",
        descricao: "",
        tipo: {
          valor: 1,
        },
      },
    };
  },
  computed: {
    ...mapGetters("modalBox", ["getIdModalBox"]),
  },
  methods: {
    ...mapActions("toDoList", ["addTask", "updateTask", "getTaskById"]),
    ...mapMutations("modalBox", ["disableModalBox"]),

    addTaskList() {
      let tarefa = { ...this.tarefa };
      let valor = tarefa.tipo.valor;

      tarefa.tipo = {
        valor,
        tag: UtilTarefas.setTagByValue(valor),
      };

      if (tarefa.id) this.updateTask(tarefa);
      else this.addTask(tarefa);

      this.disableModalBox();
    },
  },
};
</script>

<style lang="stylus" scoped>
.modal-actions {
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 15px;
}

.modal-buttons {
  text-align: right;
}

.modal-button {
  margin: 0 0 0 5px;
}

@media (max-width: 800px) {
  .modal-actions {
    display: grid;
    grid-template-columns: auto;
    padding-top: 15px;
  }

  .modal-buttons {
    text-align: left;
  }

  .modal-button {
    margin-top: 30px;
  }

  .input-textarea {
    height: 110px;
  }
}
</style>
