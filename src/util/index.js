export class Util {
  static toJSON = (dados) => JSON.parse(dados);
  static isObjetoVazio = (obj) => Object.values(obj).length;
}

export class UtilTarefas {
  static setClassByValue = (valor) => {
    switch (valor) {
      case 2:
        return "alerta";
      case 3:
        return "perigo";
      case 500:
        return "excluida";
      default:
        return "primaria";
    }
  };

  static setTagByValue = (valor) => {
    switch (valor) {
      case 2:
        return "Importante";
      case 3:
        return "Urgente";
      case 500:
        return "Excluida";
      default:
        return "Normal";
    }
  };

  static definirListaPorTipo = (tipo, objeto) => {
    switch (tipo) {
      case "urgentes":
        return objeto.urgentToDoList;
      case "importantes":
        return objeto.listOfImportantToDos;
      case "outras":
        return objeto.tasklistOther;
      case "finalizadas":
        return objeto.listOfFinishedTasks;
      case "pendentes":
        return objeto.pendingTasklist;
      case "excluidas":
        return objeto.listOfDeletedTasks;
      default:
        return objeto.toDoListTasks;
    }
  };
}
