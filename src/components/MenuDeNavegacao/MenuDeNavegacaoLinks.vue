<template>
  <ul class="action-list">
    <li class="ativo">
      <i class="far fa-chart-bar icones"></i> <br />
      Deashboard
    </li>
    <li>
      <i class="far fa-check-circle icones"></i> <br />
      Tarefas
    </li>
    <li>
      <i class="fas fa-cogs icones"></i> <br />
      Configurações
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.action-list {
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  padding: 0;

  li {
    border: 1px solid #46A3FF;
    list-style: none;
    padding: 20px 10px;
    margin: 0;
    cursor: pointer;
  }

  :hover {
    background: var(--cor-principal-hover);
  }

  .icones {
    font-size: 30px;
    margin-bottom: 10px;
    width: 35px;
    margin-bottom: 8px;
  }
}

.ativo {
  background: var(--cor-principal-hover);
  color: var(--cor-texto-claro);
}

@media (max-width: 1100px) {
  .action-list {
    display: grid;
    grid-template-columns: 30% 40% 30%;
  }
}

@media (max-width: 500px) {
  .action-list {
    display: block;

    li {
      padding: 20px;
    }

    .icones {
      font-size: 20px;
    }
  }
}
</style>
