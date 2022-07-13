<template>
  <i @click="funcao()" class="fas fa-ellipsis-v button-tree-dots"></i>
</template>

<script>
export default {
  props: {
    funcao: Function,
  },
};
</script>

<style lang="stylus" scoped>
.button-tree-dots {
  padding: 0px 0 0 20px;
  align-self: center;
  font-size: 18px;
  color: var(--cor-borda-input);
  cursor: pointer;
  text-align: right;
}
</style>
