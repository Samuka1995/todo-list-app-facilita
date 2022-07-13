<template>
  <div class="template-panel">
    <div v-if="modalBoxIsActive" class="container-modal">
      <slot name="modal"></slot>
    </div>

    <div class="container-panel">
      <div class="coluna column-menu fundo--cor-principal">
        <slot name="navegacao"></slot>
      </div>

      <div class="navbar-area">
        <slot name="navbar"></slot>
      </div>

      <div class="coluna column-panel">
        <div class="panel-area-util">
          <slot name="navegacao-secundaria"></slot>
          <slot name="area-util"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modalBox", ["modalBoxIsActive"]),
  },
};
</script>

<style lang="stylus" scoped>
.template-panel {
  box-sizing: border-box;
}

.container-panel {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 106px 20fr;
  grid-auto-rows: minmax(auto, 100vh);
  background: var(--cor-background-painel);
}

.column-panel {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-auto-columns: minmax(auto 100%);
  align-self: start;
  padding: 0;
}

.column-menu {
  padding: 0;
  z-index: 1000;
}

.navbar-area {
  position: absolute;
  width: 100%;
}

.panel-area-util {
  display: grid;
  grid-template-columns: 250px auto;
  grid-auto-rows: minmax(auto, 100vh);
}

@media (max-width: 1100px) {
  .container-panel, .panel-area-util, .column-panel {
    display: block;
  }

  .navbar-area {
    position: relative;
  }
}
</style>
