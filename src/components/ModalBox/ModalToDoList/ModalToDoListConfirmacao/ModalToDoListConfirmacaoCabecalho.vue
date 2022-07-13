<template>
  <div class="confirmation-header">
    <i class="fas fa-trash-alt confirmation-icon"></i>

    <h3 class="confirmation-title" v-html="getTitleModalBox">
      Tem certeza que deseja <span class="cor-perigo">excluir</span> essa
      tarefa?
    </h3>

    <p class="confirmation-sub">{{ getSubTitleModalBox }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modalBox", ["getTitleModalBox", "getSubTitleModalBox"]),
  },
};
</script>

<style lang="stylus" scoped>
.confirmation-header {
  text-align: center;
}

.confirmation-title {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  padding: 0;
  margin: 0;
}

.confirmation-sub {
  margin: 7px 0 30px 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  color: #475E78;
}

.confirmation-icon {
  justify-self: center;
  box-sizing: border-box;
  height: 136px;
  width: 136px;
  background-color: #EDF6FC;
  padding: 35px;
  font-size: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
