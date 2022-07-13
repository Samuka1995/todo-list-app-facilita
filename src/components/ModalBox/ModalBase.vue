<template>
  <div class="modal">
    <div class="modal-area">
      <div class="modal-block">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.modal {
  display: grid;
  grid-auto-rows: minmax(auto, 100vh);
  position: fixed;
  top: 0;
  z-index: 1001;
  height: 100%;
  width: 100%;
  background-color: rgba(70, 93, 118, 0.6);
}

.modal-area {
  display: grid;
  grid-template-columns: auto 550px auto;
  align-self: center;
}

.modal-block {
  grid-column-start: 2;
  background: var(--cor-background);
  border-radius: 8px;
  padding: 40px 40px;
}

@media (max-width: 800px) {
  .modal-area {
    display: block;
    padding: 10px 20px;
  }
}
</style>
