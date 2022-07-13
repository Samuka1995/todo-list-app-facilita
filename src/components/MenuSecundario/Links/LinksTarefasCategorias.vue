<template>
  <ul class="list-ul">
    <li id="link-tasks-default">
      <a href="/tarefas#todolist" class="list-link">
        <div class="list-text">Todas</div>
      </a>
    </li>

    <li id="urgent-tasks-link">
      <a href="/tarefas/pendentes#todolist" class="list-link">
        <div class="list-text">Pendentes</div>
        <div v-if="numberOfPendingTasks > 0" class="list-quantity primaria">
          {{ numberOfPendingTasks }}
        </div>
      </a>
    </li>

    <li id="urgent-tasks-link">
      <a href="/tarefas/urgentes#todolist" class="list-link">
        <div class="list-text">Urgentes</div>
        <div v-if="numberOfUrgentTasks > 0" class="list-quantity perigo">
          {{ numberOfUrgentTasks }}
        </div>
      </a>
    </li>

    <li id="link-important-tasks">
      <a href="/tarefas/importantes#todolist" class="list-link">
        <div class="list-text">Importantes</div>
        <div v-if="numberOfImportantTasks > 0" class="list-quantity alerta">
          {{ numberOfImportantTasks }}
        </div>
      </a>
    </li>

    <li id="link-tasks-others">
      <a href="/tarefas/outras#todolist" class="list-link">
        <div class="list-text">Outras</div>
      </a>
    </li>
    <li id="link-tasks-finished">
      <a href="/tarefas/finalizadas#todolist" class="list-link">
        <div class="list-text">Finalizadas</div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("toDoList", [
      "numberOfUrgentTasks",
      "numberOfImportantTasks",
      "numberOfPendingTasks",
    ]),
  },
};
</script>

<style lang="stylus" scoped>
.list-ul {
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.list-link {
  display: inline-block;
  box-sizing: border-box;
  color: var(--cor-texto);
  padding: 8px 20px;
  margin: 0;
  text-decoration: none;
  background-image: url('../../../assets/icon/arrow.svg');
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: center left;
  transition: var(--transicao-padrao);
}

.list-link:hover, .ativo .list-link {
  color: var(--cor-principal);
  background-image: url('../../../assets/icon/arrow_check.svg');
}

.list-title {
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 17px;
  line-height: 18px;
  color: #4E5F70;
}

.list-text {
  padding-right: 10px;
  float: left;
}

.list-quantity {
  --tamanho-cirulo: 25px;
  box-sizing: border-box;
  height: var(--tamanho-cirulo);
  width: var(--tamanho-cirulo);
  font-weight: bold;
  font-size: 11px;
  line-height: calc(var(--tamanho-cirulo) + 1px);
  border-radius: 50%;
  text-align: center;
  color: var(--cor-texto-claro);
  float: left;
}

@media (max-width: 1100px) {
  .list-ul {
    display: block;
  }

  .list-ul li {
    display: inline-block;
  }
}

@media (max-width: 500px) {
  .list-ul li {
    display: block;
    width: 100%;
  }
}
</style>
