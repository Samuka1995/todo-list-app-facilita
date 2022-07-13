import { Tasks, TasksCache } from "./ToDoListClasses";
import { Util } from "../../../util";

export const changeTaskStateMutation = (state, id) => {
  const tarefa = Tasks.search(state, id);
  tarefa.concluida = !tarefa.concluida;
  TasksCache.saveTasksCache(state);
};

export const updateTasksMutation = (state, dados) => {
  state.tarefas = Util.toJSON(dados);
  TasksCache.saveTasksCache(state);
};

export const addTaskMutation = (state, tarefa) => {
  state.tarefas.push(tarefa);
  TasksCache.saveTasksCache(state);
};

export const deleteTasksMutation = (state, id) => {
  const tarefa = Tasks.search(state, id);
  tarefa.tipo = { tag: "Excluida", valor: 500 };
  TasksCache.saveTasksCache(state);
};

export const retrieveTaskMutation = (state, id) => {
  const tarefa = Tasks.search(state, id);
  tarefa.tipo = { tag: "Normal", valor: 1 };
  TasksCache.saveTasksCache(state);
};

export const popularTasksMutation = (state, dados) => {
  state.tarefas = dados;
  TasksCache.saveTasksCache(state);
};

export const updateTaskMutation = (state, tarefaEditada) => {
  let tarefa = Tasks.search(state, tarefaEditada.id);
  Tasks.merge(tarefa, tarefaEditada);
  TasksCache.saveTasksCache(state);
};
