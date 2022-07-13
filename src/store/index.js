import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import toDoList from "./modules/ToDoList";
import modalBox from "./modules/ModalBox";
import busca from "./modules/Busca";

export default new Vuex.Store({
  modules: { toDoList, modalBox, busca },
});
