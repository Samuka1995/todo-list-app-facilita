<template>
  <div class="blocker-area">
    <div @click="fechar()" class="blocker-screen"></div>
  </div>
</template>

<script>
export default {
  props: {
    fechar: Function,
  },
};
</script>

<style lang="stylus" scoped>
.bloqueador__area {
  position: relative;
  display: block;
}

.blocker-screen {
  z-index: 1010;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  background: black;
  opacity: 0.05;
}
</style>
