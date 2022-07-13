import { TasksCache, Tasks } from "./ToDoListClasses";
import { tarefas } from "./ToDoListDados";

export const changeTaskState = (context, estado) =>
  context.commit("changeTaskStateMutation", estado);

export const updateTasks = (context, tarefas) =>
  context.commit("updateTasksMutation", tarefas);

export const clearTasks = (context) => {
  context.commit("updateTasksMutation", "[]");
  TasksCache.clearTasksCache();
};

export const addTask = (context, tarefa) => {
  tarefa = Tasks.formatToSave(context, tarefa);
  context.commit("addTaskMutation", tarefa);
};

export const popularTasks = (context) => {
  context.commit("popularTasksMutation", tarefas);
};

export const getTaskById = async ({ state }, id) =>
  Tasks.search(state, id);

export const updateTask = ({ commit }, tarefa) =>
  commit("updateTaskMutation", tarefa);

export const deleteTasks = ({ commit }, id) =>
  commit("deleteTasksMutation", id);

export const retrieveTask = ({ commit }, id) =>
  commit("retrieveTaskMutation", id);
