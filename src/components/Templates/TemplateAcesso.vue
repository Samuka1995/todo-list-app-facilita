<template>
  <div class="container-acess">
    <div class="coluna fundo--cor-principal">
      <div class="acess-header">
        <slot name="cabecalho"> </slot>
      </div>
    </div>
    <div class="coluna container-form">
      <div class="acess-form">
        <slot name="formulario"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.container-form {
  grid-template-columns: 1fr 1fr 1fr;
}

.container-acess {
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-auto-rows: minmax(auto, 100vh);
  grid-column-gap: 10px;
}

.acess-header {
  justify-self: center;
  align-self: center;
}

.acess-form {
  grid-column-start: 2;
  align-self: center;
  width: 100%;
}

@media (max-width: 1300px) {
  .container-form {
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }

  .acess-form {
    grid-column-start: 2;
  }
}

@media (max-width: 992px) {
  .container-form {
    grid-template-columns: 1fr;
  }

  .acess-form {
    grid-column-start: 1;
  }
}

@media (max-width: 768px) {
  .acess-header {
    padding: 30px 0;
  }

  .container-acess {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(auto, auto);
  }
}
</style>
