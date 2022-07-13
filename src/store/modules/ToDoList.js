import * as getters from "./ToDoList/ToDoListGetters";
import * as actions from "./ToDoList/ToDoListActions";
import * as mutations from "./ToDoList/ToDoListMutations";

export default {
  namespaced: true,
  state: {
    tarefas: [],
  },
  getters,
  mutations,
  actions,
};
