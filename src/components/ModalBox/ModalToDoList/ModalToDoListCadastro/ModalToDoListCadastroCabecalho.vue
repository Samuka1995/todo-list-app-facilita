<template>
  <div class="modal-header">
    <h3 class="modal-title">{{ getTitleModalBox }}</h3>
    <div class="modal-close">
      <i class="fas fa-times" @click="disableModalBox()"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("modalBox", ["disableModalBox"]),
  },
  computed: {
    ...mapGetters("modalBox", ["getTitleModalBox"]),
  },
};
</script>

<style lang="stylus" scoped>
.modal-header {
  display: grid;
  grid-template-columns: auto 20px;
}

.modal-title {
  margin: 0 0 25px 0;
  font-size: 25px;
}

.modal-close {
  margin-top: -20px;
  margin-right: -22px;
  text-align: right;

  i {
    font-size: 15px;
    color: var(--cor-label-input);
    cursor: pointer;
  }
}
</style>
