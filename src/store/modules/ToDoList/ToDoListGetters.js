import { searchBy, Tasks } from "./ToDoListClasses";

export const toDoListTasks = (state) =>
  Tasks.filter(state, searchBy.General);

export const listOfImportantToDos = (state) =>
  Tasks.filter(state, searchBy.Important);

export const urgentToDoList = (state) =>
  Tasks.filter(state, searchBy.Urgent);

export const tasklistOther = (state) =>
  Tasks.filter(state, searchBy.Other);

export const listOfFinishedTasks = (state) =>
  Tasks.filter(state, searchBy.Finished);

export const pendingTasklist = (state) =>
  Tasks.filter(state, searchBy.Pending);

export const listOfDeletedTasks = (state) =>
  Tasks.filter(state, searchBy.Excluded);

export const totalNumberOfTasks = (state) => state.tarefas.length;

export const numberOfImportantTasks = (state) =>
  Tasks.contar(state, searchBy.Important);

export const numberOfUrgentTasks = (state) =>
  Tasks.contar(state, searchBy.Urgent);

export const numberOfPendingTasks = (state) =>
  Tasks.contar(state, searchBy.Pending);
