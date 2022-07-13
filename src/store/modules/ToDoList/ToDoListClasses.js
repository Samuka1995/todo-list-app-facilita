export class searchBy {
  static General = (t) => t.tipo.valor != 500;
  static Important = (t) =>
    t.tipo.valor == 2 && !t.concluida && t.tipo.valor != 500;
  static Urgent = (t) =>
    t.tipo.valor == 3 && !t.concluida && t.tipo.valor != 500;
  static Pending = (t) => t.concluida == false && t.tipo.valor != 500;
  static Finished = (t) => t.concluida == true && t.tipo.valor != 500;
  static Others = (t) =>
    (t.tipo.valor == 1 || undefined) && !t.concluida && t.tipo.valor != 500;
  static Excluded = (t) => t.tipo.valor === 500;
}

export class Tasks {
  static filter = (s, bool) => s.tarefas.filter(bool);
  static contar = (s, bool) => s.tarefas.filter(bool).length;
  static search = (s, id) => s.tarefas.find((tarefa) => tarefa.id == id);

  static formatToSave = ({ getters }, tarefa) => {
    tarefa.id = getters.totalNumberOfTasks + 1;
    tarefa.concluida = false;
    return tarefa;
  };

  static merge = (a, b) => {
    a.titulo = b.titulo;
    a.descricao = b.descricao;
    a.concluida = b.concluida;
    a.tipo = b.tipo;
  };
}

export class TasksCache {
  static saveTasksCache = (state) => {
    const tarefas = JSON.stringify(state.tarefas);
    localStorage.setItem("listaTarefasUsuario", tarefas);
  };

  static clearTasksCache = () => {
    localStorage.setItem("listaTarefasUsuario", "");
  };

  static fetchTasksCache = () => localStorage.getItem("listaTarefasUsuario");
}
